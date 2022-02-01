# Bot-Discord

Installation

git clone git@github.com:Hythoxe/Bot-Discord.git

Création du compte bot:

- Aller sur le site de https://discord.com/developers/applications.
- Connectez-vous avec un compte discord.
- Cliquer sur "New Application" et nommer votre application.
- Aller ensuite dans la section "Bot" puis cliquez sur "Add Bot".
- Aller ensuite dans la section "OAuth2" -> "URL Generator".
- Dans Scopes cliqué sur "bot".
- Donnez les permissions que vous souhaitez.
- puis copiez l'URL Générez dans votre navigateur et choisissez le serveur ou connectez votre bot.

Prérequis:

- Nodejs
- discord.js
- graphql

- vous aurez besoin aussi du token de votre bot à récupérer dans la section "bot" juste en dessous du nom à ajouter dans config.json.

Liste des commandes disponible:

- Ping : Renvoie pong
- Say : Répète le message d'un utilisateur
- CLear : Supprime le nombre de message passé en argument
- Coin : Pile ou Face
- help : Affiche la liste des commandes
- Reddit : Envoie une image du reddit passé en argument
- Anime : Renvoie les infos du site anilist de l'anime passé en argument
- Manga : Renvoie les infos du site anilist du manga passé en argument