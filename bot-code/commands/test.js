const { ReactionCollector, MessageCollector } = require('discord.js-collector')

module.exports = {
    name: 'test',
    async execute(client, message, args, Discord) {
        const botMessage = await message.channel.send("What is the embed title?");
        MessageCollector.question({
            botMessage,
            user: message.author.id,
            onMessage: async (botMessage, message) => { // Every message sent by user will trigger this function.
                await message.delete();
                const title = message.content
                await botMessage.channel.send(`Your message: '${title}'`);
            }
        });

        const botMessage1 = await message.channel.send("What is the embed des?");
        MessageCollector.question({
            botMessage,
            user: message.author.id,
            onMessage: async (botMessage, message) => { // Every message sent by user will trigger this function.
                const des = message.content
                await botMessage.channel.send(`Your message: '${title}' with ${des}`);
            }
        });
    }
}