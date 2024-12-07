const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "OYIBlLxI#nWAtmvL6rRhh5TOLJlWROo4UVyqg9VE6C-PwFliTpsw",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/tPNQjmX/20241128-184557.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*_👋Hey There, Im Alive Now☺️.How Can I Help You🙃_*",
};
