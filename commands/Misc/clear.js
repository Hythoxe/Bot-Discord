const { MESSAGES } = require("../../util/constante");

module.exports.run = (client, messageCreate, args) => {
    messageCreate.channel.bulkDelete(args.join(" "));
}

module.exports.help = MESSAGES.COMMANDS.MISC.CLEAR;