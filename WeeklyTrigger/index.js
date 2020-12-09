const Discord = require('discord.js');
const client = new Discord.client();

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    send_announcement();
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};

// taken liberally from https://stackoverflow.com/questions/47548081/send-scheduled-message
// send notification of weekly games night
function send_announcement() {
    return client.login(process.env.CLIENT_ID).then(() => {
        var guild = client.guilds.get(process.env.GUILD_ID);
        if (guild && guild.channels.get(process.env.CHANNEL_ID)) {
            guild.channels.get(process.env.CHANNEL_ID).send(
                '@everyone There will be a games night Friday at 8. Please let us know if you can join!'
            ).then(() => client.destroy());
        }
    });
}