const moment = require('moment')

module.exports = {
    name: 'userinfo',
    description: 'Displays info about a user.',
    execute(client, message, args, Discord) {
        if (!args[0]) {
            const memberTarget = message.author
            const memberemb = message.guild.members.fetch(memberTarget)

            const userInfoEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .addField('User ID', message.author.id, true)
                .addField('Nickname', `${message.author.nickname ? `${message.author.nickname}` : 'None'}`, true)
                .addField('Joined On', `${moment(message.author.joinedAt).format('DD-MM-YYYY')}`, true)
                .addField('Created On', `${moment(message.author.createdAt).format('DD-MM-YYYY')}`, true)
                .setTimestamp()
                .setFooter('SpiiralNet')

            return message.channel.send(userInfoEmbed)
        }
    }
}