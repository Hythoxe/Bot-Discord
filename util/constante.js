const MESSAGES = {
    COMMANDS: {
        MISC: {
            SAY: {
                name: 'say',
                aliases: ['say'],
                category: 'misc',
                description: 'répète le message d\'un utilisateur',
                usage: '<votre_message>',
                args: true
            },
            CLEAR: {
                name: 'clear',
                aliases: ['clear'],
                category: 'misc',
                description: 'Supprime le nombre de message passé en argument',
                usage: '<nombre_de_massage_a_supprimer>',
                args: true
            },
            HELP: {
                name: 'help',
                aliases: ['help', 'h'],
                category: 'misc',
                description: 'affiche la liste des commandes',
                usage: ' ',
                args: false
            },
            COIN: {
                name: 'coin',
                aliases: ['coin','c'],
                category: 'misc',
                description:'pile ou face',
                usage: ' ',
                args: false
            },
            PING: {
                name: 'ping',
                aliases: ['ping'],
                category: 'misc',
                description: 'Renvoie pong',
                usage: ' ',
                args: false
            },
            REDDIT: {
                name: 'reddit',
                aliases: ['reddit', 'r'],
                category: 'misc',
                description: 'Envoie une image du reddit passé en argument',
                usage: '<nom_du_reddit>',
                args: true
            },
            ANIME: {
                name: 'anime',
                aliases: ['anime', 'a'],
                category: 'misc',
                description: 'Renvoie les infos du site anilist de l\'anime passé en argument',
                usage: '<nom_de_l\'anime>',
                args: true
            },
        }
    }
}

exports.MESSAGES = MESSAGES;