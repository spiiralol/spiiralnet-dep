const db = require('quick.db')

module.exports = {
    name: 'unban',
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const cross = `<:redcross:821055423670517810>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `BAN MEMBERS` permission.')

            return message.channel.send(testEmbed)
        }

        if (!args[0]) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`Please specify a User ID.`)

            return message.channel.send(testEmbed)
        }

        if (!args[1]) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`Please specify a reason.`)

            return message.channel.send(testEmbed)
        }
        
        
        const member = args[0]   
        let reason = args.slice(1).join(" ");
    
        message.guild.members.unban(member, reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })
    
        const banembed = new Discord.MessageEmbed()
            .setColor('32a852')
            .setTitle('Unban Report')
            .setDescription(`${member} was unbanned for **${reason}** by **${message.author}**`)
            .setTimestamp()
            .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)
    
        message.channel.send(banembed);

        const logChannel = db.get(`logchannel_${message.guild.id}`)
        if (logChannel) {
            const logEmbed = new Discord.MessageEmbed()
                .setColor('32a852')
                .setTitle('Unban Report')
                .setDescription(`${member} was unbanned for **${reason}** in **<#${message.channel.id}>**`)
                .setTimestamp()
                .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)
    
                client.channels.cache.get(logChannel).send(logEmbed);
        }
    }
}