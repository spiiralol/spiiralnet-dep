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
                    { name: '~help commands', value: 'Shows a list of available commands' },
                    { name: '~help errors', value: 'Shows a list of common errors' },
                    { name: '~help notes', value: 'Shows a list of extra stuff' },
                    { name: '~help credits', value: 'Shows a list of credits' },
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
                    { name: '`~ping`', value: 'Checks if the bot is still alive.' },
                    { name: '`~mute` `@username` `time`', value: 'Mutes a user for  a given time'},
                    { name: '`~unmute` `@username`', value: 'Unmutes a user.'},
                    { name: '`~kick` `@username` `reason`', value: 'Kicks a user.'},
                    { name: '`~ban` `@username` `time` `reason`', value: 'Bans a user.'},
                    { name: '`~clear` `amount`', value: 'Clears an amount of messages (remember to add 1 on to the value)'},
                    { name: '`~nickname` `@username` `new-nickname`', value: 'Give a user a new nickname'},
                    { name: '`~userinfo` or `~userinfo` `@username`', value: 'Displays info about a user.' },
                    { name: '`~warn` `@username`', value: 'Warns a user via DM' },
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
                    { name: 'Insufficient Permissions', value: 'This means you have not been given the correct permissions to use this command.'},
                    { name: 'Unable to `command-name` user', value: 'This means that either the user could not be found or an error occurred.'},
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
                    { name: 'Ban Command', value: 'If you add a reason for this command, make sure to add a time. or, just go with a ban with no reason.' },
                    { name: 'Nickname Command', value: `DO NOT tag yourself as it does some weird shiz on my end. \r\n\tDO NOT make the new nickname longer than 14 characters as that is the limit on the Discord API.`},
                    { name: 'Clear Command', value: "DO NOT try and delete messages older than 14 days, Doing so causes an error. I am looking into it, but I don't think this is fixable." },
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
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Bot Developer: ', value: 'SpiiralMania#7488' },
                    { name: 'GitHub Repo: ', value: 'https://github.com/spiiralol/spiiralnetlivediscord' },
                    { name: 'Supporters: ', value: 'You Guys!' }
                )
                .setTimestamp()
                .setFooter('SpiiralNet');

            message.channel.send(helpCreditsMenu)

        }
    }
}