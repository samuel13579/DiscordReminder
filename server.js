const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv-flow').config();

const config = {
  token : process.env.TOKEN,
  owner: process.env.OWNER,
  prefix: process.env.PREFIX
};

const prefix = config.prefix;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  if(msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();

  switch (command) {
    case 'ping': {
      msg.reply('Pong!');
      break;
    }

    case 'myname': {
      const name = msg.member.displayName;
      msg.delete();
      msg.channel.send(`Your name is ${name}`);
      break;
    }

    case 'say': {
      const response = args.join(` `);
      msg.channel.send(response);
      break;
    }

    default:
    msg.channel.send('This command is unknown');
    break;
  }

});

bot.login(config.token);