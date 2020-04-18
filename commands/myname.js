exports.run = (bot, msg, args) => {
    const name = msg.member.displayName;
    msg.delete();
    msg.channel.send(`Your name is ${name}`);
};

exports.help = {
    name: 'myname'
};