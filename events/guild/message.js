module.exports = (Discord, client, message) => {
    const prefix = '~';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.channel.type === 'dm') return message.author.send('Please run commands in a server.')
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    try {
        if(command) command.execute(client, message, args, Discord);
    } catch (err) {
        message.reply(`An error occurred: ${err}`)
        console.error(err)
    }
}
