const db = require('quick.db');

module.exports = {
    name: 'setlogchannel',
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const cross = `<:redcross:821055423670517810>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `ADMINISTATOR` permission.')

            return message.channel.send(testEmbed)
        }

        const welcomRoleCheckId = db.get(`logchannel_${message.guild.id}`)
        
        if (!args[0]) {
            // const testEmbed = new Discord.MessageEmbed()
            //     .setColor('#e31b14')
            //     .setDescription(`The current welcome role is <@&${welcomRoleCheckId}>.`)

            // return message.channel.send(testEmbed)
            return
        }

        const role = message.content.replace(/\D/g,'') 

        if (args[0] === 'remove' || args[0] === 'clear') {
            db.delete(`logchannel_${message.guild.id}`)

            const setEmbed = new Discord.MessageEmbed()
            .setTitle('Log Channel Removed')
            .setDescription(`Removed the log channel.`)

            return message.channel.send(setEmbed)
        }

        if (welcomRoleCheckId) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ There is already a log channel.`)

            return message.channel.send(testEmbed)
        }

        const tick = `<:greentick:821055425268285450>`

        db.set(`logchannel_${message.guild.id}`, role)
        const chx = role
        // const chx = '822483935929303050'

        const setEmbed = new Discord.MessageEmbed()
            .setTitle('Logging Channel Set')
            .setDescription(`${tick} Set **<#${role}>** as the log channel.`)

        message.channel.send(setEmbed)

        const chanEmbed = new Discord.MessageEmbed()
            .setTitle('Logging Channel Set')
            .setDescription(`${tick} Set this channel as the logging channel.`)

        client.channels.cache.get(chx).send(chanEmbed);
    }
}