const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('message', message => {

    let msg = message.content.toLowerCase();

    if (!message.author.bot && (msg.includes('amazing') || msg.includes('amazin')))
    {
        let d = new Date(message.createdTimestamp);
        message.channel.send("https://streamable.com/rexhb");
        console.log(d + "\n" + message.author.username + ' - ' + msg + '\n');
    }
    if (!message.author.bot && (msg.includes('beta') || msg.includes('beyta')))
    {
        let d = new Date(message.createdTimestamp);
        message.channel.send("https://streamable.com/w9isd");
        console.log(d + "\n" + message.author.username + ' - ' + msg + '\n');
    }
    else if (!message.author.bot && (msg.includes('tormund') && msg.includes('cry')))
    {
        let d = new Date(message.createdTimestamp);
        message.channel.send("https://i.imgur.com/fUtQxbw.jpg")
        console.log(d + "\n" + message.author.username + ' - ' + msg + '\n');
    }

})

client.login(token);