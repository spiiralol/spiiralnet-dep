module.exports = {
    name: 'clear',
    description: 'Clear messages',
    async execute(client, message, args) {
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the needed permissions. Needed perms: `MANAGE_MESSAGES`')
        
        if (message.member.permissions.has("MANAGE_MESSAGES")) {
            if (!args[0]) return message.reply('Specify an amount of messages to clear');
            if (isNaN(args[0])) return message.reply('Please specify a real number.');

            if (args[0] > 100) return message.reply('You cannot delete more than 100 messages.');
            if (args[0] < 1) return message.reply('You must delete at lease 1 message.');

            message.delete()

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            })
        } else {
            message.channel.send('Insufficient Permissions')
        }
    }
}