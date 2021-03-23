const db = require('quick.db')
const { defualtPrefix } = require('../config.json')

module.exports = {
    name: 'setprefix',
    description: 'Sets the server prefix',
    async execute(client, message, args, Discord) {
        //Perms check
        if (!message.member.hasPermission("ADMINISTATOR")) {
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription('🚫  You do not have the `ADMINISTATOR` permission.')

            //return message.channel.send(testEmbed)
        }

        if (!args[0]) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ Please specify a new prefix.`)

            //return message.channel.send(testEmbed)
        }

        if(args[1]) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ Prefixes cannot have spaces in them.`)

            // message.channel.send(testEmbed)
        }

        if (args[0].length > 3) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ Prefixes cannot be longer than 3 letters.`)

            //return message.channel.send(testEmbed)
        }

        if(args.join("") === defualtPrefix) {
            db.delete(`prefix_${message.guild.id}`)
            
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`Prefix set to ${args[0]}`)

            //return await message.channel.send(testEmbed)
        }

        db.set(`prefix_${message.guild.id}`, args[0])

        const testEmbed = new Discord.MessageEmbed()
            .setColor('#e31b14')
            .setDescription(`Prefix set to ${args[0]}`)

        //return await message.channel.send(testEmbed)
    }
}