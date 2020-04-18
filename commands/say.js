exports.run = (bot, msg, args) => {
    const response = args.join(` `);
    msg.channel.send(response);
};

exports.help = {
    name: 'say'
};