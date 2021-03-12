module.exports = {
    name: 'unmute',
    aliases: [''],
    description: 'unmutes a member',
    execute(client, message, args, Discord) {
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have the needed permissions. Needed perms: `MANAGE_ROLES`')
        
        if(message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();

            if(target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

                let memberTarget = message.guild.members.cache.get(target.id);

                message.delete()

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);

                const muteEmbed = new Discord.MessageEmbed()
                        .setColor('#32a852')    
                        .setAuthor(`Moderator: ${message.author.tag}`)
                        .setTitle('Unmute Report')
                        .setDescription(`You have been unmuted in **${message.guild.name}**.`)

                memberTarget.send(muteEmbed);
            } else {
                message.channel.send('Unable to mute user. Reason: No such user');
            }
        } else {
            message.channel.send('Insufficient Permissions')
        }
        
        
    }
}