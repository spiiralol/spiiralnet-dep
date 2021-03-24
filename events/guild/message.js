require('dotenv').config()
const config = require('../../config.json')
const prefix = config.prefix
//const prefix  = defualtPrefix

const db = require('quick.db')
//const prefix = require('../../commands/prefix')

module.exports = (Discord, client, message) => {
    
    // const guildid = message.guild.id;
    // console.log(guildid)
    
    // try {
    //     let prefix = db.get(`prefix_${message.guild.id}`)
    //     if (!prefix) prefix = defPrefix;
    //     if (prefix === null) prefix = defPrefix;
    // } catch (err) {
    //     prefix = defPrefix
    //     message.channel.send('An error occured when using prefixes. Please run ``your prefix`setprefix ~`')
    // }

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
