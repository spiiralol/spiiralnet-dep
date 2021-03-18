module.exports = {
    name: 'warn',
    description: 'Warns a user',
    execute(client, message, args, Discord) {
        if (message.member.permissions.has("MANAGE_MESSAGES")) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id)
                const reason = args.slice(1).join(" ")

                message.delete()

                // Message that is DM'd to the user
                const warnDMEmbed = new Discord.MessageEmbed()
                    .setColor('#f5bc2c')
                    .setAuthor(`Moderator: ${message.author.tag}`)
                    .setTitle('Warn Report')
                    .setDescription(`You have been warned in **${message.guild.name}** with reason of ${reason}`)

                memberTarget.send(warnDMEmbed)

                // The message that is send in the channel the user was warned in
                const warnChannelEmbed = new Discord.MessageEmbed()
                    .setColor('#f5bc2c')
                    .setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                    .setTitle('Warn Report')
                    .setDescription(`${memberTarget.user.username} was warned for ${reason}`)
                    .setTimestamp()
                    .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)

                message.channel.send(warnChannelEmbed)
            } 
        } else {
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  You do not have the `MANAGE MEMBERS` permission.')

            message.channel.send(testEmbed)
        }
    }
}