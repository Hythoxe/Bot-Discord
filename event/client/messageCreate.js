const { Collection } = require("discord.js");
const config = require("../../config.json");

module.exports = (client, messageCreate) => {
    if (!messageCreate.content.startsWith(config.prefix) || messageCreate.author.bot) return;

    const args = messageCreate.content.slice(config.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if(!command) return;

    console.log(command);

    if (command.help.args && !args.length){
        let norArgsReply = `Il nous faut des arguments pour cette commande, ${messageCreate.author} !`

        if(command.help.usage) norArgsReply += `\nVoici comment utiliser la commande: \`${config.prefix}${command.help.name} ${command.help.usage}\``

        return messageCreate.channel.send(norArgsReply);
    }
    command.run(client, messageCreate, args);
    //messageCreate.channel.send("messageCreate reçu !");
};