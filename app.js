var graph = require('./graph');
var send = require('./notify');

// send notification of weekly games night
send.command(process.env.BOT_TOKEN).then(() => {
    console.log('A command was invoked!');
}).catch(e => console.log(e));
