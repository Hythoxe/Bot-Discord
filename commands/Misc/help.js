const { MESSAGES } = require("../../util/constante");
const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands')
//console.log(categoryList);


module.exports.run = (client, messageCreate, args) => {
    //console.log(client.commands.filter(cat => cat.help.category === 'misc'));
    if(!args.length){
        const embed = new MessageEmbed()
        .setColor("#FF9F33")
        .addField("**List commande bot**", `Une liste de toutes les sous-catégories disponibles et leurs commande\nPour plus d'informations sur une commande, taper \`${config.prefix}help <command_name>\``)
        for(const category of categoryList){
            embed.addFields(
                { name: `${category}`, 
                  value: `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}` 
                }
            );
        };
        return messageCreate.channel.send({embeds: [embed]});
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
        const embed = new MessageEmbed()
        .setColor("#FF9F33")
        .setTitle(`\`${config.prefix}${command.help.name}\``)
        .addFields(
            { name: "Description", 
              value: `${command.help.description}`
            }
        )
        .addFields(
            { name: "Utilisation", 
              value: command.help.usage ? `${config.prefix}${command.help.name} ${command.help.usage}` : `${config.prefix}${command.help.name}`,
              inline: true
            }
        )
        if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
        return messageCreate.channel.send({embeds: [embed]});
    }; 
}

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;
