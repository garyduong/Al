const Discord = require('discord.js');
const client = new Discord.client();

client.login(process.env.CLIENT_ID).then(() => {
    var guild = client.guilds.get(process.env.GUILD_ID);
    if (guild && guild.channels.get(process.env.CHANNEL_ID)){
        guild.channels.get(process.env.CHANNEL_ID).send(
            '@everyone There will be a games night Friday at 8. Please let us know if you can join!'
        ).then(() => client.destroy());
    }
});