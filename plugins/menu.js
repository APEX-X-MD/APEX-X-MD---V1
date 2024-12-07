const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
gruop: '',
owner: '',
convert: '',
search: '',
};


for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋☺️ *_Hello_ ${pushname}*
> *DOWNLOAD COMMANDS* 💥

${menu.download}

> *MAIN COMMANDS* 🤖

${menu.main}

> *GRUOP COMMANDS* 👥

${menu.gruop}

> *OWNER COMMANDS* 👤

${menu.owner}

> *CONVERT COMMANDS* 🔃

${menu.convert}

> *SEARCH COMMANDS* 🔍

${menu.search}

*_💝DEVELOPED BY SETHIKA🔥_*
`
await conn.sendMessege(from,{text:madeMenu},{quoted:mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
