module.exports = {
    name: 'kick',
    description: 'Kicks a member.',
    async execute(client, message, args, Discord) {
        // if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        //     const permEmbed = new Discord.MessageEmbed()
        //             .setColor('#e31b14')
        //             .setDescription('🚫  I do not have the `KICK MEMBERS` permission.')

        //     message.channel.send(permEmbed)
        // }
        
        if (message.member.permissions.has("KICK_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                const memberTarget = message.guild.members.cache.get(target.id);
                const reason = args.slice(1).join(" ")

                const kickEmbed = new Discord.MessageEmbed()
                    .setColor('#f5bc2c')
                    .setTitle('Kick Report')
                    .setAuthor(`Moderator: ${message.author.tag}`)
                    .setDescription(`You have been kicked from **${message.guild.name}** with reason of ${reason}.`)
  
                memberTarget.send(kickEmbed).catch((err) => message.channel.send(`An error occurred: ${err}`))
                const warnChannelEmbed = new Discord.MessageEmbed()
                    .setColor('#f5bc2c')
                    .setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                    .setTitle('Kick Report')
                    .setDescription(`${memberTarget.user.username} was kicked for ${reason}`)
                    .setTimestamp()
                    .setFooter(`SpiiralNet | Moderator: ${message.author.tag}`)

                message.channel.send(warnChannelEmbed)
                await delay(100);
                memberTarget.kick(reason).catch((err) => message.channel.send(`An error occurred: ${err}`))
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  You do not have the `KICK MEMBERS` permission.')

            message.channel.send(testEmbed)
        }
    }
}