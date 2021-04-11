const ms = require('ms')

module.exports = {
    name: 'lockdown',
    execute(client, message, args, Discord) {
        const cross = `<:redcross:821055423670517810>`
        
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + ' You do not have the `ADMINISTATOR` permission.')

            return message.channel.send(testEmbed)
        }

        if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
            const cross = `<:redcross:821055423670517810>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + ' I do not have the `MANAGE ROLES` permission.')

            return message.channel.send(testEmbed)
        }

        if (!client.lockit) client.lockit = [];

        const time = args.join(' ');
        const validUnlocks = ['release', 'unlock'];

        const noDuration = new Discord.MessageEmbed()
            .setDescription(cross + ` You need to specify a lockdown duration.`)
        const durationLong = new Discord.MessageEmbed()
            .setDescription(cross + ` Specified duration is too long.`)
        const lockdownLifted = new Discord.MessageEmbed()
            .setDescription(`Lockdown has been lifted.`)

        if (!time) return message.reply(noDuration);
        if (validUnlocks.includes(time)) {
          message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
            message.channel.send(lockdownLifted);
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
          }).catch(error => {
            console.log(error);
          });
        } else {
          if (ms(time) >= 2147483647) return message.reply(durationLong);
          message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false }).then(() => {
            const lockdownActive = new Discord.MessageEmbed()
                .setDescription(`Channel locked down for ${ms(ms(time), { long:true })}. To lift, run **~lockdown ${validUnlocks[Math.floor(Math.random() * validUnlocks.length)]}**`);

            message.channel.send(lockdownActive).then(() => {
      
              client.lockit[message.channel.id] = setTimeout(() => {
                message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null }).then(message.channel.send(lockdownLifted)).catch(console.error);
                delete client.lockit[message.channel.id];
              }, ms(time));
      
            }).catch(error => {
              console.log(error);
            });
          });
        }
    }
}