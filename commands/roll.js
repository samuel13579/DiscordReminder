exports.run = (bot, msg, args) => {
    const name = msg.member.displayName;
    const number = args.join(` `);
    var num = parseInt(number);
    var random = Math.floor(Math.random() * (num - 1) + 1);
    msg.channel.send(`Your random number is ${random}`);
};

exports.help = {
    name: 'roll'
};