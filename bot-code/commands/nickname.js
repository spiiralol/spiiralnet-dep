const db = require('quick.db')
const emojis = require('../config/emojis.json')

module.exports = {
    name: 'nickname',
    description: 'Changes a users nnickname',
    execute(client, message, args, Discord) {
        // if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
        //     const permEmbed = new Discord.MessageEmbed()
        //             .setColor('#e31b14')
        //             .setDescription('🚫  I do not have the `MANAGE NICKNAMES` permission.')

        //     message.channel.send(permEmbed)
        //  }
        
        if (message.member.hasPermission("MANAGE_NICKNAMES")) {
            const target = message.mentions.users.first();
            if (target) {
                if(!args[1]) return message.reply('Please specify a new nickname')

                const memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.setNickname(args.slice(1).join(" ")).catch(message.react(emojis.green_tick));
                message.channel.send('Nickname Changed.')

                const logChannel = db.get(`logchannel_${message.guild.id}`)
                if (logChannel) {
                    const logEmbed = new Discord.MessageEmbed()
                        .setColor('#f5bc2c')
                        //.setAuthor(`${memberTarget.user.username}#${memberTarget.user.discriminator}`, memberTarget.user.displayAvatarURL())
                        .setTitle('Nickname Change')
                        .setDescription(`${memberTarget.user.username}'s nickname was changed to **${args.slice(1).join(' ')}** by <@${message.author.id}>`)
                    
                        client.channels.cache.get(logChannel).send(logEmbed);
                }
            }
        } else {
            const cross = `<:redcross:821055423670517810>`
            const tick = `<:greentick:821055425268285450>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `MANAGE NICKNAMES` permission.')

            return message.channel.send(testEmbed)
        }
        
    }
}