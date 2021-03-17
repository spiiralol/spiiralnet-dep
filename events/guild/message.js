module.exports = (Discord, client, message) => {
    const prefix = '~';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const testEmbed = new Discord.MessageEmbed()
        .setColor('#e31b14')
        .setDescription(`❕ Please run commands in a server.`)
    
    if (message.channel.type === 'dm') return message.author.send(testEmbed)
    
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
