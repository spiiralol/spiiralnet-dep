module.exports = {
    name: 'ping',
    description: 'This is a ping command',
    execute(client, message, args, Discord) {
        const pingEmbed = new Discord.MessageEmbed()
            .setTitle('Discord Latency')
            .addFields(
                { name: 'Bot Latency', value: `${Date.now() - message.createdTimestamp}ms`, inline: true },
                { name: 'API Latency', value: `${Math.round(client.ws.ping)}ms`, inline: true }
            )
            .setTimestamp()
            .setFooter('SpiiralNet')

        message.channel.send(pingEmbed)
    }
}