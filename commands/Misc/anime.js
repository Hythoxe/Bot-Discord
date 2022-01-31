const { MESSAGES } = require("../../util/constante");
const { TitleQuery } = require("../../util/query/TitleQuery");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { graphql, buildSchema } = require('graphql');

module.exports.run = async (client, messageCreate, args) => {
    
    var query = TitleQuery;
    var variables = { search: args.join(" ") };
    var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

    const anilist = await fetch(url, options)
        .then(res => res.json())
        .then(json => json.data.Media);

    const anime = await anilist;
    console.log(anime)

    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(anime.title.romaji)
        .setURL(anime.siteUrl)
        .setDescription(anime.description.replace(/<p>|<br>|<br \/>|<\/p>|\n/g, ''))
        .setThumbnail(anime.coverImage.large)
        .addFields(
            { name: 'Status', value: anime.status, inline: true },
            { name: 'Saison', value: `${anime.season} ${anime.seasonYear}`, inline: true },
            { name: 'Nb D\'Épisode', value: `${anime.episodes}`, inline: true },
            //{ name: '', value: anime, inline: true },
            //{ name: '', value: anime, inline: true },
        )
        .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` })
        .setTimestamp();
    messageCreate.channel.send({embeds: [embed]});

}

module.exports.help = MESSAGES.COMMANDS.MISC.ANIME;