module.exports = {
    name: 'unmute',
    aliases: [''],
    description: 'unmutes a member',
    execute(client, message, args, Discord) {
        // if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        //     const permEmbed = new Discord.MessageEmbed()
        //             .setColor('#e31b14')
        //             .setDescription('🚫  I do not have the `MANAGE ROLES` permission.')

        //     message.channel.send(permEmbed)
        // }
        
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
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  You do not have the `MUTE MEMBERS` permission.')

            message.channel.send(testEmbed)
        }
        
        
    }
}