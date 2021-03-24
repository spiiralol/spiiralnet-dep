const db = require('quick.db')

module.exports = {
    name: 'setmuterole',
    description: 'Sets the mute role',
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const cross = `<:redcross:821055423670517810>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `ADMINISTATOR` permission.')

            return message.channel.send(testEmbed)
        }

        const welcomRoleCheckId = db.get(`mutedrole_${message.guild.id}`)
        
        if (!args[0]) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`The current welcome role is <@&${welcomRoleCheckId}>.`)

            return message.channel.send(testEmbed)
        }

        const role = message.mentions.roles.first()

        if (args[0] === 'remove' || args[0] === 'clear') {
            db.delete(`mutedrole_${message.guild.id}`)

            const setEmbed = new Discord.MessageEmbed()
            .setTitle('Mute Role Removed')
            .setDescription(`Removed the muted role.`)

            return message.channel.send(setEmbed)
        }

        if (welcomRoleCheckId) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ There is already a muted role.`)

            return message.channel.send(testEmbed)
        }

        const person = message.member       
        const tick = `<:greentick:821055425268285450>`

        db.set(`mutedrole_${message.guild.id}`, role.id)

        const setEmbed = new Discord.MessageEmbed()
            .setTitle('Mute Role Set')
            .setDescription(`${tick} Set **${role.name}** as the mute role.`)

        message.channel.send(setEmbed)
    }
}