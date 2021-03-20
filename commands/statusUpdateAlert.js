module.exports = {
    name: 'updatealert',
    description: 'dms all',
    execute(client, message, args, Discord) {
        const testEmbed = new Discord.MessageEmbed()
            .setColor('#e31b14')
            .setDescription(`🚫  You do not have the right permissions to execute this command.`)

        
        if (message.author.id === '769231300472995840' || message.author.id === '701561771529470074') {
            const updateEmbed = new Discord.MessageEmbed()  
                .setColor('#f5bc2c') 
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
                .setTitle(`Status Update | ${args[0]}`)
                .setDescription(args.slice(1).join(' '))
                .setTimestamp()
                .setFooter('SpiiralNet | Status Update System')
            
            message.guild.roles.cache.get("821400228489199696").members.forEach(member => member.send(updateEmbed))
            const channelID = "817827404307103780"
            client.channels.cache.get(channelID).send(updateEmbed)
        } else {
            return message.channel.send(testEmbed)
        }
    }
}