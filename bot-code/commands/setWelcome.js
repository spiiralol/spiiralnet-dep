const db = require('quick.db')

module.exports = {
    name: 'setwefdgbtghnwrnnghlcome',
    description: 'Sets the servers welcome',
    execute(client, message, args, Discord) {
        if (message.member.hasPermission("MANAGE_GUILD")) {
            const channel = message.mentions.channels.first() 

            if (!channel) {
                const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(`❕ Please mention a channel.`)

                message.channel.send(testEmbed)
            }

            db.set(`welchannel_${message.guild.id}`, channel.id)

            message.channel.send(`Set ${channel} as the welcome channel.`)

            let chx = db.get(`welchannel_${message.guild.id}`);
            client.channels.cache.get(chx).send("This channel has been set as the welcome channel.")
        } else {
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  You do not have the `MANAGE SERVER` permission.')

            message.channel.send(testEmbed)
        }
    }
}