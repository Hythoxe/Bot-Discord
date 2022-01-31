const { MESSAGES } = require("../../util/constante");

module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
}

module.exports.help = MESSAGES.COMMANDS.MISC.SAY;