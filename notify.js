// taken liberally from https://stackoverflow.com/questions/47548081/send-scheduled-message
var weekly = function (bot_token) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    return client.login(bot_token).then(() => {
        var guild = client.guilds.cache.get(process.env.GUILD_ID);
        if (guild && guild.channels.cache.get(process.env.CHANNEL_ID)) {
            guild.channels.cache.get(process.env.CHANNEL_ID).send(
                '@everyone There will be a games night Friday at 8. Please let us know if you can join!'
            ).then(() => client.destroy());
        }
    });
}

module.exports.weekly = weekly;