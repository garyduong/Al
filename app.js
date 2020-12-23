var graph = require('./graph');
var send = require('./notify');

// send notification of weekly games night
send.weekly(process.env.BOT_TOKEN).then(() => {
    console.log('Weekly announcement was posted!');
}).catch(e => console.log(e));    
