const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv-flow').config();

const config = {
  token : process.env.TOKEN,
  owner: process.env.OWNER,
  prefix: process.env.PREFIX
};

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

bot.login(config.token);