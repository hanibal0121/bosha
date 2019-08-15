const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("611572544608141315")
setInterval(function() {
channel.send(`سبحان الله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);