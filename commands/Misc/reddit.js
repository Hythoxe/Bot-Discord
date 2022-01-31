const { MESSAGES } = require("../../util/constante");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, messageCreate, args) => {
    
    const reddit = await fetch(`https://www.reddit.com/r/${args[0]}.json?sort=top&t=day&limit=500`)
    .then(res => res.json())
    .then(json => json.data.children);

    const img = reddit[Math.floor(Math.random()*reddit.length)].data;
    var type;

    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(img.title)
        .setImage(img.url)
        .setURL(`https://www.reddit.com${img.permalink}`)
        .addField("Up vote", `${img.ups}`, true)
        .addField("Commentaires", `${img.num_comments}`, true)
        .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` })
        .setTimestamp();
    messageCreate.channel.send({embeds: [embed]});

}

module.exports.help = MESSAGES.COMMANDS.MISC.REDDIT;
