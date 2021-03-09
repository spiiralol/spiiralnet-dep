const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
    client.user.setPresence({
        status: "dnd",  //You can show online, idle....
        game: {
            name: `over ${client.guilds.cache.size} servers`,  //The message shown
            type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
    console.log(client.guilds.cache.map(guild => guild.name).join(", \n"));
})

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);