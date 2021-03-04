module.exports = {
    name: 'ban',
    description: 'Bans a member.',
    execute(client, message, args) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first();
            if(target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban({days: args[1], reason: args[2]});
                message.channel.send('Member has been banned.')
            } else {
                message.channel.send('Unable to find member.')
            }
        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}