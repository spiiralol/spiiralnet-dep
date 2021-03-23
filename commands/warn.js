const db = require("quick.db")

module.exports = {
    name: 'warn',
    description: 'Warns a user',
    async execute(client, message, args, Discord) {
        //Perm check
        if (!message.member.hasPermission('MANAGE_GUILD')) {
            const cross = `<:redcross:821055423670517810>`
            const tick = `<:greentick:821055425268285450>`
            
            const testEmbed = new Discord.MessageEmbed()
                    .setColor('#e31b14')
                    .setDescription(cross + '  You do not have the `MANAGE SERVER` permission.')

            return message.channel.send(testEmbed)
        }

        const user = message.mentions.members.first()

        //If mentioned check
        if (!user) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ Please mention a user.`)

            return message.channel.send(testEmbed)
        }

        //If user bot check
        if (message.mentions.users.first().bot) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ You can not warn a bot.`)

            return message.channel.send(testEmbed)
        }

        //No warn self check
        if (message.author.id === user.id) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ You cannot warn yourself.`)

            return message.channel.send(testEmbed)
        }

        //Warn onwer check
        if (user.id === message.guild.owner.id) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ You cannot warn a server owner.`)

            return message.channel.send(testEmbed)
        }

        const reason = args.slice(1).join(" ")

        //If reason check
        if (!reason) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ Please provide a reason.`)

            return message.channel.send(testEmbed)
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if (warnings === 3) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ ${message.mentions.users.first().username} has already reached the 3 warning cap.`)

            return message.channel.send(testEmbed)
        }

        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)

            const warnDMEmbed = new Discord.MessageEmbed()
                .setColor('#f5bc2c')
                .setAuthor(`Moderator: ${message.author.tag}`)
                .setTitle('Warn Report')
                .setDescription(`You have been warned in **${message.guild.name}** with reason of ${reason}`)

            user.send(warnDMEmbed)

            const warnMSGEmbed = new Discord.MessageEmbed()
                .setColor('#f5bc2c')
                .setAuthor(`Moderator: ${message.author.tag}`)
                .setTitle('Warn Report')
                .setDescription(`${message.mentions.users.first().username} was warned for ${reason}.`)

            await message.channel.send(warnMSGEmbed)
        } else if (warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)

            const warnDMEmbed = new Discord.MessageEmbed()
                .setColor('#f5bc2c')
                .setAuthor(`Moderator: ${message.author.tag}`)
                .setTitle('Warn Report')
                .setDescription(`You have been warned in **${message.guild.name}** with reason of ${reason}`)

            user.send(warnDMEmbed)

            const warnMSGEmbed = new Discord.MessageEmbed()
                .setColor('#f5bc2c')
                .setAuthor(`Moderator: ${message.author.tag}`)
                .setTitle('Warn Report')
                .setDescription(`${message.mentions.users.first().username} was warned for ${reason}.`)

            await message.channel.send(warnMSGEmbed)
        }



    }
}