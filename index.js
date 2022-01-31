const { Client, Collection, Intents } = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");
const config = require("./config.json");

const client = new Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, ] });
client.commands = new Collection();

loadCommands(client);
loadEvents(client);

client.login(config.token);