const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
    client.user.setActivity(`over ${client.guilds.cache.size} servers`, { type: 'WATCHING' })
      .catch(console.error);
    //console.log(client.guilds.cache.map(guild => guild.name).join(", \n"));
})

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);