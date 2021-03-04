module.exports = {
    name: 'help',
    description: 'Shows a help menu',
    execute(client, message, args, Discord) {
        if (!args[0]) {
            const helpMainMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Help Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/e1d00e6d4f2eaf45dd19a21f266ffb20.png')
                .setDescription('Select a option from the list below')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: '~help commands', value: 'Shows a list of available commands' },
                    { name: '~help errors', value: 'Shows a list of common errors' },
                    { name: '~help notes', value: 'Shows a list of extra stuff' },
                    { name: '~help credits', value: 'Shows a list of credits' },
                )
                .setTimestamp()
                .setFooter('SpiiralNet V1.4.6');

            message.channel.send(helpMainMenu)

        } else if (args[0] === 'commands') {
            const helpCommandsMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Commands Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/e1d00e6d4f2eaf45dd19a21f266ffb20.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: '`~ping`', value: 'Checks if the bot is still alive.' },
                    { name: '`~mute` `@username` `time`', value: 'Mutes a user for  a given time'},
                    { name: '`~unmute` `@username`', value: 'Unmutes a user.'},
                    { name: '`~kick` `@username` `reason`', value: 'Kicks a user.'},
                    { name: '`~ban` `@username` `time` `reason` or `ban` `@username`', value: 'Bans a user for a given time'},
                    { name: '`~clear` `amount`', value: 'Clears an amount of messages'},
                    { name: '`~nickname` `@username` `new-nickname`', value: 'Give a user a new nickname'}
                )
                .setTimestamp()
                .setFooter('SpiiralNet V1.5.3');

            message.channel.send(helpCommandsMenu)

        } else if (args[0] === 'errors') {
            const helpErrorMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Errors Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/e1d00e6d4f2eaf45dd19a21f266ffb20.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Insufficient Permissions', value: 'This means you have not been given the correct permissions to use this command.'},
                    { name: 'Unable to `command-name` user', value: 'This means that either the user could not be found or an error occurred.'}
                )
                .setTimestamp()
                .setFooter('SpiiralNet V1.5.3');

            message.channel.send(helpErrorMenu)

        } else if (args[0] === 'notes') {
            const helpNotesMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Commands Menu')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/e1d00e6d4f2eaf45dd19a21f266ffb20.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Ban Command', value: 'If you add a reason for this command, make sure to add a time. or, just go with a ban with no reason.' },
                    { name: 'Nickname Command', value: `DO NOT tag yourself as it does some weird shiz on my end. \r\n\tDO NOT make the new nickname longer than 14 characters as that is the limit on the Discord API.`},
                    { name: 'Clear Command', value: "DO NOT try and delete messages older than 14 days, Doing so causes an error. I am looking into it, but I don't think this is fixable." }
                )
                .setTimestamp()
                .setFooter('SpiiralNet V1.5.3');

            message.channel.send(helpNotesMenu)

        } else if (args[0] === 'credits') {
            const helpCreditsMenu = new Discord.MessageEmbed()
                .setColor('#808080')
                .setTitle('Credits')
                .setAuthor('SpiiralNet')
                .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/e1d00e6d4f2eaf45dd19a21f266ffb20.png')
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Bot Developer: ', value: 'SpiiralMania#7488' },
                    { name: 'Help & Tutorials: ', value: 'CodeLyon & StackOverflow'},
                    { name: 'Supporters: ', value: 'You Guys and Girls!' }
                )
                .setTimestamp()
                .setFooter('SpiiralNet V1.5.3');

            message.channel.send(helpCreditsMenu)

        }
    }
}