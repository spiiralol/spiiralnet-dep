const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mutes a member',
    execute(client, message, args) {
        if (message.member.permissions.has("MUTE_MEMBERS")) {
            const target = message.mentions.users.first();

            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

                let memberTarget = message.guild.members.cache.get(target.id);

                message.delete()

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`);
                    return;
                }

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('Unable to mute user. Reason: No such user');
            }


        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}