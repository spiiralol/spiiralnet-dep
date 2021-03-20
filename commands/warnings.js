const db = require('quick.db')

module.exports = {
    name: 'warnings',
    description: "Get warning data",
    execute(client, message, args, Discord) {
        const user = message.mentions.members.first() || message.author


        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)


        if (warnings === null) warnings = 0;


        const warn1Embed = new Discord.MessageEmbed()
            .setColor('#e31b14')
            .setDescription(`**${user}** has **${warnings}** warning(s)`)

        message.channel.send(warn1Embed)
    }
}