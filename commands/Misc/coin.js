const { MESSAGES } = require("../../util/constante");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, messageCreate, args) => {
    const randomcoin = () => {
        var coin = Math.floor(Math.random()*2)+1;
        if(coin === 1) return "pile";
        else return "face";
    }
    
    const embed = new MessageEmbed()
        .setColor("#FF9F33")
        .setTitle("**Pile ou Face**")
        .addFields(
            { name: 'coin', value: randomcoin() },
        );
    messageCreate.channel.send({embeds: [embed]});
}

module.exports.help = MESSAGES.COMMANDS.MISC.COIN;
