// const Link = require('dsc.js');
// const dsc = new Link.Client('1cd0110c-1059-4e8f-99eb-69c8cf96b7aa')

// const { ReactionCollector } = require('discord.js-collector')

// const db = require('quick.db');

// module.exports = {
//     name: 'test',
//     async execute(client, message, args, Discord) {

//       const { Database } = require("@devsnowflake/quick.db");
//       const db = new Database("./data/storage.db", { path: "./data", table: "TESTING" }); // you can also specify custom path/name

//       // add some data
//       // db.set("foo", "bar");
//       // db.set("hello", "world");

//       // // log all data. You can also use db.all()
//       // for (const data of db) {
//       //     console.log(data);

//       const pages = {
//         '📥': {
//             embed: {
//                 title: 'Welcome Join Config',
//                 description: `React below embed to configure channel or message of welcome settings.\n\n📜 Channel settings\n📢 Message settings`,
//             },
//             reactions: ['📜', '📢'],
//             pages: {
//                 '📜': {
//                     backEmoji: '🔙',
//                     embed: {
//                         description: 'Please mention or use channel id to set as welcome channel.'
//                     },
//                     onMessage: async (controller, message) => {
//                         const channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.content);
//                         if (!channel)
//                             return message.reply('🚫 | You\'ve forgot mention a channel or use their id.').then((m) => m.delete({ timeout: 3000 }));
    
//                         // Do what you want here, like set it on database...
//                         await message.reply(`✅ | Success! You've settled welcome channel as ${channel}.`).then(m => m.delete({ timeout: 3000 }));
//                         return db.set(`welcomechannel_${message.guild.id}`, channel.id)
//                     }
//                 },
//                 '📢': {
//                     backEmoji: '🔙',
//                     embed: {
//                         description: 'Make the message used when a member join in the server.',
//                     },
//                     onMessage: async (controller, message) => {
//                         // Do what you want here, like set it on database..
//                         return await message.reply('✅ | Success!').then(m => m.delete({ timeout: 3000 }));
//                     }
//                 }
//             }
//         },
//       };

//       const embed = new Discord.MessageEmbed()
//           .setTitle('Server Settings')
//           .setDescription('React below to configure modules in this server.\n\n📥 Welcome module')
//       const botMessage = await message.reply(embed);
//       ReactionCollector.menu({ botMessage, user: message.author, pages });

//     }
// }
