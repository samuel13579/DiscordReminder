const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const bot = new Discord.Client();
const { token } = require('./config');

bot.commands = new Enmap();

bot.mongoose = require('./utils/db');

fs.readdir('./events/', (err, files) => {
  if(err) return console.error;
  files.forEach(file => {
    if(!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split(`.`)[0];
    console.log(`Loaded '${evtName}'.`);
    bot.on(evtName, evt.bind(null, bot));
  });
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

bot.mongoose.init();
bot.login(token);