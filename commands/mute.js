const ms = require('ms');
const db = require('quick.db')

module.exports = {
    name: 'mute',
    description: 'mutes a member',
    execute(client, message, args, Discord) {
        // if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        //     const permEmbed = new Discord.MessageEmbed()
        //             .setColor('#e31b14')
        //             .setDescription('🚫  I do not have the `MANAGE ROLES` permission.')

        //     message.channel.send(permEmbed)
        // }
        
        if (message.member.hasPermission("MUTE_MEMBERS")) {
            const mutedRoleCheckId = db.get(`mutedrole_${message.guild.id}`)
            const welcomeRoleCheckId = db.get(`welcomerole_${message.guild.id}`)

            if (!mutedRoleCheckId) {
                const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(`❕ There is no muted role set up.`)
    
                return message.channel.send(testEmbed)
            }

            if (!welcomeRoleCheckId) {
                const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(`❕ There is no main/welcome role set up.`)
    
                return message.channel.send(testEmbed)
            }
            
            const target = message.mentions.users.first();

            if (target) {
                let mainRole = db.get(`welcomerole_${message.guild.id}`)
                let muteRole = db.get(`mutedrole_${message.guild.id}`)

                let memberTarget = message.guild.members.cache.get(target.id);

                message.delete()

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole);
                    memberTarget.roles.add(muteRole);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`);

                    const muteEmbed = new Discord.MessageEmbed()
                        .setColor('#f5bc2c')    
                        .setAuthor(`Moderator: ${message.author.tag}`)
                        .setTitle('Mute Report')
                        .setDescription(`You have been muted in **${message.guild.name}**.`)

                    memberTarget.send(muteEmbed);

                    return;
                }

                memberTarget.roles.remove(mainRole);
                memberTarget.roles.add(muteRole);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);

                const muteDefEmbed = new Discord.MessageEmbed()
                        .setColor('#f5bc2c')    
                        .setAuthor(`Moderator: ${message.author.tag}`)
                        .setTitle('Mute Report')
                        .setDescription(`You have been muted in **${message.guild.name}** for ${ms(ms(args[1]))}.`)

                memberTarget.send(muteDefEmbed);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole);
                    memberTarget.roles.add(mainRole);

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
            const cross = `<:redcross:821055423670517810>`
            const tick = `<:greentick:821055425268285450>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `MUTE MEMBERS` permission.')

            return message.channel.send(testEmbed)
        }
    }
}