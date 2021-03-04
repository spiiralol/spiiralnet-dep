module.exports = {
    name: 'unmute',
    description: 'unmutes a member',
    execute(client, message, args) {
        if(message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();

            if(target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
            } else {
                message.channel.send('Unable to mute user. Reason: No such user');
            }
        } else {
            message.channel.send('Insufficient Permissions')
        }
        
        
    }
}