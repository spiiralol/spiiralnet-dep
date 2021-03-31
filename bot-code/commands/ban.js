const db = require('quick.db')

module.exports = {
    name: 'ban',
    description: 'Bans a member.',
    async execute(client, message, args, Discord) {
        // if (!client.user.hasPermission("BAN_MEMBERS")) {
        //     const permEmbed = new Discord.MessageEmbed()
        //             .setColor('#e31b14')
        //             .setDescription('🚫  I do not have the `BAN MEMBERS` permission.')

        //     message.channel.send(permEmbed)
        // }
        
        if (message.member.hasPermission("BAN_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                const memberTarget = message.guild.members.cache.get(target.id);
                
                const reason = args.slice(1).join(" ")

                const kickEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setTitle('Ban Report')
                    .setAuthor(`Moderator: ${message.author.tag}`)
                    .setDescription(`You have been banned from **${message.guild.name}** with reason of ${reason}.`)
  
                memberTarget.send(kickEmbed).catch((err) => message.channel.send(`An error occurred: ${err}`))
                const warnChannelEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                    .setTitle('Ban Report')
                    .setDescription(`${memberTarget.user.username} was banned for ${reason}`)
                    .setTimestamp()
                    .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)

                message.channel.send(warnChannelEmbed)

                const logChannel = db.get(`logchannel_${message.guild.id}`)
                if (logChannel) {
                    const logEmbed = new Discord.MessageEmbed()
                        .setColor('#e31b14')
                        //.setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                        .setTitle('Ban Report')
                        .setDescription(`${memberTarget.user.username} was banned in **<#${message.channel.id}>** for ${reason}`)
                        .setTimestamp()
                        .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)
                        
                        client.channels.cache.get(logChannel).send(logEmbed);
                }
                await delay(100);
                memberTarget.ban({
                    reason: reason
                }).catch((err) => message.channel.send(`An error occurred: ${err}`))
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            const cross = `<:redcross:821055423670517810>`
            const tick = `<:greentick:821055425268285450>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `BAN MEMBERS` permission.')

            return message.channel.send(testEmbed)
        }
    }
}