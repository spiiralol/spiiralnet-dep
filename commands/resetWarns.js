const db = require('quick.db');

module.exports = {
    name: 'resetwarns',
    description: 'Resets someones warns',
    async execute(client, message, args, Discord) {
        const user = message.mentions.members.first()

        //Perm check
        if (!message.member.hasPermission('MANAGE_GUILD')) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription('🚫  You do not have the `MANAGE SERVER` permission.')

            return message.channel.send(testEmbed)
        }

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
                .setDescription(`❕ Bots can't have warnings.`)

            return message.channel.send(testEmbed)
        }

        //No warn self check
        if (message.author.id === user.id) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ You cannot reset your own warns.`)

            return message.channel.send(testEmbed)
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if (warnings === null) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`${user} does not have any warnings.`)

            return message.channel.send(testEmbed)
        }

        db.delete(`warnings_${message.guild.id}_${user.id}`)
        const testEmbed = new Discord.MessageEmbed()
            .setColor('#32a852')
            .setTitle('Warning Reset')
            .setDescription(`Your warnings in **${message.guild.name}** were reset by **${message.author.username}**.`)

        user.send(testEmbed)

        const msgEmbed = new Discord.MessageEmbed()
            .setColor('#32a852')
            .setDescription(`${user}'s warnings were reset by ${message.author.username}.`)

        await message.channel.send(msgEmbed)

    }
}