const { MESSAGES } = require("../../util/constante");
const { TitleQuery } = require("../../util/query/TitleMangaQuery");
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

    const manga = await anilist;
    console.log(manga)


    const tomes = () => {
        var tome;
        if(manga.volumes === null) 
            return tome = 0;
        else 
            return tome = manga.volumes;
    }

    const ContenuAdulte = () => {
        var adulte;
        if(manga.isAdult === null) 
            return adulte = "Non";
        else 
            return adulte = "Oui";
    }
    
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(manga.title.romaji)
        .setURL(manga.siteUrl)
        .setDescription(manga.description.replace(/<p>|<\/p>|<br>|<br \/>|<i>|<\/i>|&quot;/g, ''))
        .setThumbnail(manga.coverImage.large)
        .addFields(
            { name: 'Status', value: manga.status, inline: true },
            { name: 'Date de Sortie', value: `${manga.startDate.day}/${manga.startDate.month}/${manga.startDate.year}`, inline: true },
            { name: 'Nb De chapitre', value: `${manga.chapters}`, inline: true },
            { name: 'Nb De tomes', value: `${tomes()}`, inline: true },
            { name: 'Contenu Adulte', value: ContenuAdulte(), inline: true },
            //{ name: '', value: manga, inline: true },
            //{ name: '', value: manga, inline: true },
        )
        .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` })
        .setTimestamp();
    messageCreate.channel.send({embeds: [embed]});

}

module.exports.help = MESSAGES.COMMANDS.MISC.MANGA;