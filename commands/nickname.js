const emojis = require('../config/emojis.json')

module.exports = {
    name: 'nickname',
    description: 'Changes a users nnickname',
    execute(client, message, args) {
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send('I do not have the needed permissions. Needed perms: `MANAGE_NICKNAMES`')
        
        if (message.member.permissions.has("MANAGE_NICKNAMES")) {
            const target = message.mentions.users.first();
            if (target) {
                if(!args[1]) return message.reply('Please specify a new nickname')

                const memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.setNickname(args.slice(1).join(" ")).catch(message.react(emojis.green_tick));
                message.channel.send('Nickname Changed.')
            }
        } else {
            message.channel.send('Insufficient Permsissions')
        }
        
    }
}