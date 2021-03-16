module.exports = {
    name: 'ban',
    description: 'Bans a member.',
    async execute(client, message, args, Discord) {
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have the needed permissions. Needed perms: `BAN_MEMBERS`')
        
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
                    .setDescription(`🚫  You do not have the right permissions to execute this command.`)

            message.channel.send(testEmbed)
        }
    }
}