module.exports = {
    name: 'invite',
    description: 'Gives the user an invite link',
    execute(clinet, message, args, Discord) {
        const inviteEmbed = new Discord.MessageEmbed()  
            .setAuthor('SpiiralNet', 'https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
            .addFields(
                { name: 'Invite', value: '[Invite Link](https://srtr.tk/spiiralnet)', inline: true },
                { name: 'Support', value: '[Server Link](https://discord.gg/QecA97NJcy)', inline: true },
                { name: 'Vote on Top.gg',  value: '[Top.gg](https://top.gg/bot/811966892189286401)', inline: true}
            )
            .setFooter('SpiiralNet')

        message.channel.send(inviteEmbed)
    }
}