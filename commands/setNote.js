const db = require('quick.db')

module.exports = {
    name: 'setnote',
    execute(client, message, args, Discord) {
        const note = args.slice(0).join(' ')
        
        if (note.length > 50) {
            const testEmbed = new Discord.MessageEmbed()
                .setColor('#e31b14')
                .setDescription(`❕ Notes have a cap of 50 characters.`)

            return message.channel.send(testEmbed)
        }

        const chx = db.get(`note_${message.author.id}`)
        if (chx) {
            db.delete(`note_${message.author.id}`)
            db.set(`note_${message.author.id}`, note)
            
            const setEmbed = new Discord.MessageEmbed()
                .setTitle('Note Set')
                .setDescription(`Set **${note}** as your new note.`)

            return message.channel.send(setEmbed)
        }

        db.set(`note_${message.author.id}`, note)

        const setEmbed = new Discord.MessageEmbed()
            .setTitle('Note Set')
            .setDescription(`Set **${note}** as your note.`)

        message.channel.send(setEmbed)

        message.channel.send()
    }
}