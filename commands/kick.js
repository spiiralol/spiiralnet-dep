module.exports = {
    name: 'kick',
    description: 'Kicks a member.',
    execute(client, message, args) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick(args.join(" "))
                message.channel.send('Member has been kicked.')
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}