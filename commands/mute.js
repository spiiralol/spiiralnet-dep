const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mutes a member',
    execute(client, message, args, Discord) {
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the needed permissions. Needed perms: `MANAGE_ROLES`')
        
        if (message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();

            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

                let memberTarget = message.guild.members.cache.get(target.id);

                message.delete()

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`);

                    const muteEmbed = new Discord.MessageEmbed()
                        .setColor('#f5bc2c')    
                        .setAuthor(`Moderator: ${message.author.tag}`)
                        .setTitle('Mute Report')
                        .setDescription(`You have been muted in **${message.guild.name}**.`)

                    memberTarget.send(muteEmbed);

                    return;
                }

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);

                const muteDefEmbed = new Discord.MessageEmbed()
                        .setColor('#f5bc2c')    
                        .setAuthor(`Moderator: ${message.author.tag}`)
                        .setTitle('Mute Report')
                        .setDescription(`You have been muted in **${message.guild.name}** for ${ms(ms(args[1]))}.`)

                memberTarget.send(muteDefEmbed);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);

                    const unmuteEmbed = new Discord.MessageEmbed()
                        .setColor('#32a852')    
                        .setAuthor(`Moderator: SpiiralNet`)
                        .setTitle('Unmute Report')
                        .setDescription(`You have been unmuted in **${message.guild.name}**.`)

                    memberTarget.send(unmuteEmbed);
                }, ms(args[1]));
            } else {
                message.channel.send('Unable to mute user. Reason: No such user');
            }


        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}