module.exports = {
    name: 'ban',
    description: 'Bans a member.',
    async execute(client, message, args, Discord) {
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
  
                memberTarget.send(kickEmbed)
                await delay(100);
                memberTarget.ban({
                    reason: reason
                })
                message.channel.send('Member has been banned.')
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}