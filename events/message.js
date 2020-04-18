const {prefix} = require('../config.js');

module.exports = (bot, msg) => {

    if(msg.author.bot) return;
    if(msg.content.indexOf(prefix) !== 0) return;
  
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
  
    const cmd = bot.commands.get(command);
    if(!cmd) return;
  
    cmd.run(bot, msg, args);
};