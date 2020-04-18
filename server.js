const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const bot = new Discord.Client();
require('dotenv-flow').config();

const config = {
  token : process.env.TOKEN,
  owner: process.env.OWNER,
  prefix: process.env.PREFIX
};

const prefix = config.prefix;

bot.commands = new Enmap();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  if(msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();

  const cmd = bot.commands.get(command);
  if(!cmd) return;

  cmd.run(bot, msg, args);

  // switch (command) {
  //   case 'ping': {
  //     msg.reply('Pong!');
  //     break;
  //   }

  //   case 'myname': {
  //     const name = msg.member.displayName;
  //     msg.delete();
  //     msg.channel.send(`Your name is ${name}`);
  //     break;
  //   }

  //   case 'say': {
  //     const response = args.join(` `);
  //     msg.channel.send(response);
  //     break;
  //   }

  //   default:
  //   msg.channel.send('This command is unknown');
  //   break;
  // }

});

fs.readdir('./commands/', async(err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if(!file.endsWith('.js')) return;
      let props = require(`./commands/${file}`);
      let cmdName = file.split('.')[0];
      console.log(`Loaded command '${cmdName}'.`);
      bot.commands.set(cmdName, props);
  });
});

bot.login(config.token);