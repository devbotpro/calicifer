const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!bois') {
    msg.reply(`Bonjour ${msg.author.tag}, tu veux de l'argent ? Tu deviendras riche !`);
  }
  if (msg.content === '!ban') {
    msg.reply(`Calcifer à volé le cœur de :`);
  }
});

client.login('NzgyMzM2MTczNTkwMzE1MDQ5.X8KtVg.qaHSLJmMdSPYi4_xd0jd0wVAg5E');