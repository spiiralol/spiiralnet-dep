const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

const db  = require('quick.db')

client.on('ready', async () => {
  const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));  
  while (0 == 0) {
      await delay(10000);
      client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' })
        .catch(console.error);
      await delay(10000);
      client.user.setActivity(`~help`, { type: 'WATCHING' })
        .catch(console.error); 
    }
    //console.log(client.guilds.cache.map(guild => guild.name).join(", \n"));
})

client.on('guildMemberAdd', guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
  
  if (!welcomeRole) {
    return;
  }

  guildMember.roles.add(welcomeRole).catch((err) => console.log('SHIT FUCK HOW DID THIS HAPPEN' + err))
})

client.on('guildCreate', guild => {
  let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);

    console.log(guild.name)

  const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle('Thanks for adding me!')
    .setThumbnail('https://cdn.discordapp.com/avatars/811966892189286401/b809846d6a68bed33e56eb602fbb5878.png')
    //.setDescription("Hey there! Thanks for adding me! \t\n\tNow for me to run properly, I have added 2 new roles, Member and MUTED. These roles allow certain commands to work (join-role, mute, unmute). Please do not edit these roles unless you know what you are doing. \n\t\n\t\nIf you already have a member and muted role, please rename them as follows `Member` for the member role and `MUTED` for the muted role. If you don't, the bot will error and make me very sad. \n\t\nFor my commands just type `~help commands`, and for the help menu `~help`.")
    .setDescription('Hey! My help command is `~help` \n\t\nMy Support Server is [Here!](https://discord.gg/QecA97NJcy)\n\t\nMy website is [Here!](https://spiiralnet.webnode.com) \n\t\nMy setup page is [Here!](https://spiiralnet.webnode.com/how-to-setup)')

  channel.send(welcomeEmbed)
})


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);