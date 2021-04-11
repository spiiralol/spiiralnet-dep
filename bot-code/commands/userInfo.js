const moment = require('moment')
const db = require('quick.db')

module.exports = {
    name: 'userinfo',
    description: 'Displays info about a user.',
    async execute(client, message, args, Discord) {
        const { guild, channel } = message;

        const user = message.mentions.users.first() || message.member.user;
        const member = guild.members.cache.get(user.id)

        const embed = new Discord.MessageEmbed()
            .setAuthor(`User Info | ${user.username}#${user.discriminator}`, user.displayAvatarURL())
            .addFields(
                { name: 'Bot?', value: user.bot, inline: true },
                { name: 'Nickname', value: member.nickname || 'None', inline: true },
                { name: 'Joined Server', value: new Date(member.joinedTimestamp).toLocaleDateString(), inline: true },
                { name: 'Joined Discord', value: new Date(user.createdTimestamp).toLocaleDateString(), inline: true },
                { name: 'Role Count', value: member.roles.cache.size - 1, inline: true }
            )

        channel.send(embed)
    }
}