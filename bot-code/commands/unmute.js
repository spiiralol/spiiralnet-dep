const db = require('quick.db')

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
        
        if(message.member.hasPermission("MUTE_MEMBERS")) {
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

            if(target) {
                let mainRole = db.get(`welcomerole_${message.guild.id}`)
                let muteRole = db.get(`mutedrole_${message.guild.id}`)

                let memberTarget = message.guild.members.cache.get(target.id);

                message.delete()

                memberTarget.roles.remove(muteRole);
                memberTarget.roles.add(mainRole);
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