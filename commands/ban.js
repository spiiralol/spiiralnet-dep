module.exports = {
    name: 'ban',
    description: 'Bans a member.',
    async execute(client, message, args, Discord) {
        if (!client.user.hasPermission("BAN_MEMBERS")) {
            const permEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  I do not have the `BAN MEMBERS` permission.')

            message.channel.send(permEmbed)
        }
        
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                const memberTarget = message.guild.members.cache.get(target.id);
                
                const reason = args.slice(1).join(" ")

                const kickEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setTitle('Ban Report')
                    .setAuthor(`Moderator: ${message.author.tag}`)
                    .setDescription(`You have been banned from **${message.guild.name}** with reason of ${reason}.`)
  
                memberTarget.send(kickEmbed).catch((err) => message.channel.send(`An error occurred: ${err}`))
                const warnChannelEmbed = new Discord.MessageEmbed()
                    .setColor('#f5bc2c')
                    .setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                    .setTitle('Ban Report')
                    .setDescription(`${memberTarget.user.username} was banned for ${reason}`)
                    .setTimestamp()
                    .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)

                message.channel.send(warnChannelEmbed)
                await delay(100);
                memberTarget.ban({
                    reason: reason
                }).catch((err) => message.channel.send(`An error occurred: ${err}`))
                message.channel.send('Member has been banned.')
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  You do not have the `BAN MEMBERS` permission.')

            message.channel.send(testEmbed)
        }
    }
}