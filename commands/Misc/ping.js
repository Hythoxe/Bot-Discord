const { MESSAGES } = require("../../util/constante");
module.exports.run = (client, messageCreate, args) => {
    messageCreate.channel.send("pong");
}

module.exports.help = MESSAGES.COMMANDS.MISC.PING;
