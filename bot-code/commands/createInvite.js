const db = require('quick.db');

module.exports = {
  name: 'createinvite',
  async execute(client, message, args, Discord) {
    const ifInvite = db.get(`botinvite_${message.guild.id}`)

    if (ifInvite) {
      return message.channel.send(`Here's your invite: ${ifInvite}`)
    }

    let invite = await message.channel.createInvite({
      maxAge: 0, // maximum time for the invite, in milliseconds
      maxUses: 0
    })

    db.set(`botinvite_${message.guild.id}`, invite.url)
    const noInvite = db.get(`botinvite_${message.guild.id}`)

    message.channel.send(`Here's your invite: ${noInvite}`)
  }
}
