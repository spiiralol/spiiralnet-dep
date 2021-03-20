require('dotenv').config()
const { defualtPrefix } = require('../../config.json')

const db = require('quick.db')

module.exports = (Discord, client, message) => {
    let prefix = db.get(`prefix${message.guild.id}`);
    if (prefix === null) prefix = defualtPrefix;

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
        const errorEmbed = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setDescription(`An error occurred. Devs have been notified.`)
            .addField('Error Code', err)
        
        message.channel.send(errorEmbed)
        console.error(err)
    }
}
