module.exports = {
    name: 'help',
    description: 'Shows a help menu',
    execute(client, message, args, Discord) {
        if (!args[0]) {
            const helpMainMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Help Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
                .setDescription('Select a option from the list below')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: '~help commands', value: 'Shows a list of available commands', inline: true },
                    { name: '~help errors', value: 'Shows a list of common errors', inline: true },
                    { name: '~help notes', value: 'Shows a list of extra stuff', inline: true },
                    { name: '~help credits', value: 'Shows a list of credits', inline: true },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Still Stuck?', value: 'Join the Support Server: https://discord.gg/QecA97NJcy' }
                )
                .setTimestamp()
                .setFooter('SpiiralNet');

            message.channel.send(helpMainMenu)

        } else if (args[0] === 'commands') {
            const helpCommandsMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Commands Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: '`~ping`', value: 'Checks if the bot is still alive.', inline: true },
                    { name: '`~invite`', value: 'Sends the user an invite menu.', inline: true },
                    { name: '`~mute` `@username` `time`', value: 'Mutes a user for  a given time.', inline: true },
                    { name: '`~unmute` `@username`', value: 'Unmutes a user.', inline: true },
                    { name: '`~kick` `@username` `reason`', value: 'Kicks a user.', inline: true },
                    { name: '`~ban` `@username` `time` `reason`', value: 'Bans a user.', inline: true },
                    { name: '`~clear` `amount`', value: 'Clears an amount of messages (remember to add 1 on to the value).', inline: true },
                    { name: '`~nickname` `@username` `new-nickname`', value: 'Give a user a new nickname.', inline: true },
                    { name: '`~userinfo` or `~userinfo` `@username`', value: 'Displays info about a user. (WiP)', inline: true },
                    { name: '`~warn` `@username`', value: 'Warns a user via DM.', inline: true },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Still Stuck?', value: 'Join the Support Server: https://discord.gg/QecA97NJcy' }
                )
                .setTimestamp()
                .setFooter('SpiiralNet');

            message.channel.send(helpCommandsMenu)

        } else if (args[0] === 'errors') {
            const helpErrorMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Errors Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Insufficient Permissions', value: 'This means you have not been given the correct permissions to use this command.', inline: true},
                    { name: 'Unable to `command-name` user', value: 'This means that either the user could not be found or an error occurred.', inline: true},
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Still Stuck?', value: 'Join the Support Server: https://discord.gg/QecA97NJcy' }
                )
                .setTimestamp()
                .setFooter('SpiiralNet');

            message.channel.send(helpErrorMenu)

        } else if (args[0] === 'notes') {
            const helpNotesMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Commands Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Ban Command', value: 'If you add a reason for this command, make sure to add a time. or, just go with a ban with no reason.', inline: true },
                    { name: 'Nickname Command', value: `DO NOT tag yourself as it does some weird shiz on my end. \r\n\tDO NOT make the new nickname longer than 14 characters as that is the limit on the Discord API.`, inline: true },
                    { name: 'Clear Command', value: "DO NOT try and delete messages older than 14 days, Doing so causes an error. I am looking into it, but I don't think this is fixable.", inline: true },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Still Stuck?', value: 'Join the Support Server: https://discord.gg/QecA97NJcy' }
                )
                .setTimestamp()
                .setFooter('SpiiralNet');

            message.channel.send(helpNotesMenu)

        } else if (args[0] === 'credits') {
            const helpCreditsMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Credits')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
                .addFields(
                    { name: 'Bot Developer: ', value: 'SpiiralMania#7488', inline: true },
                    { name: 'GitHub Repo: ', value: 'https://github.com/spiiralol/spiiralnetlivediscord', inline: true },
                    { name: 'Supporters: ', value: 'You Guys!', inline: true }
                )
                .setTimestamp()
                .setFooter('SpiiralNet');

            message.channel.send(helpCreditsMenu)

        }
    }
}