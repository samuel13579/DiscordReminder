const moment = require('moment-timezone');

exports.run = (bot, msg, args) => {
    var eastern = moment().tz("America/New_York");
    msg.channel.send(`Current Eastern time is ${eastern}`);
};
exports.help = {
    name: 'time'
};