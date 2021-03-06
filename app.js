const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'server') {
        message.channel.send(
            `Server name:${message.guild.name}\nTotal members:${message.guild.memberCount}`
        )
    }
    else if (command === 'location') {
        message.channel.send(`Server region:${message.guild.region}`)
    }
    else if (command === 'created') {
        message.channel.send(`Date created:${message.guild.createdAt}`)
    }
    else if (command === 'user-info') {
        message.channel.send(
            `Your username:${message.author.username}\nYour ID:${message.author.id}`
        )
    }
});

client.login(process.env.BOT_TOKEN);