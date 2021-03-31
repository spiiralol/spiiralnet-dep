module.exports = {
    name: 'eval',
    description: 'OWNER ONLY CMD',
    execute(client, message, args, Discord) {
      const testEmbed = new Discord.MessageEmbed()
          .setColor('#e31b14')
          .setDescription(`🚫  You are not Spiiral.`)  
      
        const ownerId = "769231300472995840"
        if(message.author.id !== ownerId) return message.channel.send(testEmbed);

        function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }

        try {
            const code = args.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
      
    }
}