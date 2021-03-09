module.exports = {
    name: 'kick',
    description: 'Kicks a member.',
    async execute(client, message, args, Discord) {
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
  
                memberTarget.send(kickEmbed)
                await delay(100);
                memberTarget.kick(reason)
                message.channel.send('Member has been kicked.')
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}