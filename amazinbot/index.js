const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('ready!');
})

client.on('message', message => {

    let msg = message.content.toLowerCase();

    if (!message.author.bot && (msg.includes('amazing') || msg.includes('amazin')))
    {
        message.channel.send("https://streamable.com/rexhb")
    }

})

client.login(token);