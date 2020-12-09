module.exports = async function (context, myTimer) {
    send_announcement().then(() => {
        context.log('Weekly announcement was posted!')
    }).catch(e => context.log(e));
};

// taken liberally from https://stackoverflow.com/questions/47548081/send-scheduled-message
// send notification of weekly games night
async function send_announcement() {
    const Discord = require('discord.js');
    const client = new Discord.client();
    return await client.login(process.env.CLIENT_ID).then(() => {
        var guild = client.guilds.get(process.env.GUILD_ID);
        if (guild && guild.channels.get(process.env.CHANNEL_ID)) {
            guild.channels.get(process.env.CHANNEL_ID).send(
                '@everyone There will be a games night Friday at 8. Please let us know if you can join!'
            ).then(() => client.destroy());
        }
    });
}