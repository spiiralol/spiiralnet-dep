const { ReactionCollector } = require('discord.js-collector')

module.exports = {
    name: 'help',
    async execute(client, message, args, Discord) {
        const botMessage = await message.reply('Need help? Here list with all my commands!');
        ReactionCollector.paginator({
            botMessage,
            user: message.author,
            pages: [
                new Discord.MessageEmbed()
                    .setTitle('Moderation')
                    .addField('Ban', 'Bans a member from the server \n\tUsage: `ban @member reason`')
                    .addField('Clear', 'Clear messages from text channel \n\tUsage: `clear amount`')
                    .addField('Kick', 'Kicks a member from the server \n\tUsage: `kick @member reason`')
                    .addField('Mute', 'Mutes a user for a given time (or indefinite) \n\tUsage: `mute @member <time>`')
                    .addField('Nickname', 'Gives a new nickname a user \n\tUsage: `nickname @member new-nickname`')
                    .addField('Reset Warns', 'Resets a users warnings \n\tUsage: `resetwarns @member`')
                    .addField('Unmute', 'Unmutes a given user \n\tUsage: `unmute @member`')
                    .addField('Warn', 'Give a given user a warning \n\tUsage: `warn @member reason`'),
                new Discord.MessageEmbed()
                    .setTitle('Util')
                    .addField('Set Log Channel', 'Sets the bots log channel \n\tUsage: `setlogchannel #channel`')
                    .addField('Set Welcome Role', 'Sets the server welcome role \n\tUsage: `setwelcomerole @role`')
                    .addField('Set Mute Role', 'Sets ther server mute role \n\tUsage: `setmuterole @role`')
                    .addField('Removing Data', 'Use `~commandname~ remove` to remove the current channel/role'),
                new Discord.MessageEmbed()
                    .setTitle('General')
                    .addField('Help', 'Shows this menu \n\tUsage: `help`')
                    .addField('Invite', 'Shows a link to invite (and upvote) the bot \n\tUsage: `invite`')
                    .addField('User Info', 'Shows info about the user (WIP) \n\tUsage: `userinfo <@member>`')
                    .addField('Warnings', 'Shows a users warnings \n\tUsage: `warnings <@member>`'),
            ],
            collectorOptions: {
                time: 60000
            }
        });
    }
}