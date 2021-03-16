const moment = require('moment')

module.exports = {
    name: 'userinfo',
    description: 'Displays info about a user.',
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        
        if (!args[0]) {
            const memberTarget = message.author

            const userInfoEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .addField('User ID', message.author.id, true)
                .addField('Nickname', `${message.author.nickname ? `${message.author.nickname}` : 'None'}`, true)
                //.addField('Joined On', `${moment(message.author.joinedAt).format('DD-MM-YYYY')}`, true)
                .addField('Created On', `${moment(memberTarget.createdAt).format('DD-MM-YYYY')}`, true)
                .setTimestamp()
                .setFooter('SpiiralNet')

            return message.channel.send(userInfoEmbed)
        } else if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);

            const userTargetEmbed = new Discord.MessageEmbed()
                .setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                .addField('User ID', memberTarget.user.id, true)
                .addField('Nickname', `${memberTarget.nickname ? `${memberTarget.nickname}` : 'None'}`, true)
                .addField('Joined On', `${moment(memberTarget.joinedAt).format('DD-MM-YYYY')}`, true)
                //.addField('Created On', `${moment(message.createdAt).format('DD-MM-YYYY')}`, true)
                .setTimestamp()
                .setFooter('SpiiralNet')

            message.channel.send(userTargetEmbed)
        }
    }
}