const db = require('quick.db');

module.exports = {
    name: 'setup',
    description: 'Help',
    execute(client, message, args, Discord) {
        const step1 = new Discord.MessageEmbed()
            .setTitle('Setup Utility')
            .setDescription('Hi! Welcome to the SpiiralNet setup page. \n\t\nTo set the bot up, we need to add a few things to my database.\n\tOnce you have done that, you are done!')
            .addField('Welcome/Main Role', 'Run `~setwelcomerole @role`. Make sure to **mention** the role.')
            .addField('Muted Role', 'Run `~setmuterole @role`. Make sure to **mention** the role.')
            .addField('Log Channel', 'Run `~setlogchannel #channel`. Make sure to **mention** the channel.')

        message.channel.send(step1)
    }
}