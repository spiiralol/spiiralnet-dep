module.exports = {
    name: 'clear',
    description: 'Clear messages',
    async execute(client, message, args, Discord) {
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        // if (!client.user.hasPermission("MANAGE_MESSAGES")) {
        //     const permEmbed = new Discord.MessageEmbed()
        //             .setColor('#e31b14')
        //             .setDescription('🚫  I do not have the `MANAGE MESSAGES` permission.')

        //     message.channel.send(permEmbed)
        // }
        
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (!args[0]) return message.reply('Specify an amount of messages to clear');
            if (isNaN(args[0])) return message.reply('Please specify a real number.');

            if (args[0] > 100) return message.reply('You cannot delete more than 100 messages.');
            if (args[0] < 1) return message.reply('You must delete at lease 1 message.');

            message.delete()

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages, true).catch(err => message.channel.send('Can not delete messages older than 14 days.').then(console.warn(err)))
            })
            message.channel.send(`Deleted ${args[0]} messages`)
            await delay(5000);
            message.channel.bulkDelete(1)
        } else {
            const cross = `<:redcross:821055423670517810>`
            const tick = `<:greentick:821055425268285450>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `MANAGE MESSAGES` permission.')

            return message.channel.send(testEmbed)
        }
    }
}