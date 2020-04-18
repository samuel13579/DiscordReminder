exports.run = (bot, msg, args) => {
    msg.reply('Pong!').catch(console.error);
};

exports.help = {
    name: 'ping'
};