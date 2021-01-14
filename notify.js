var command = function (bot_token) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    return client.login(bot_token).then(() => {
        client.on('message', message => {
            if (message.content.startsWith(process.env.PREFIX + 'game')) {
                message.channel.send(
                    'There will be games Friday at 8 in the evening! Care to join?'
                ).then(() => client.destroy());
            }
        });
    });
}

module.exports.command = command;