const {cmd , commands} = require('../command')
const fg = require ('api-dylux')
const yts = require ('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a `URL` or `TITLE` !  *")
const search = await yts(q)
const data = search.video[0];
const url = data.url 

let dec = `
*_💥 Apex x MD Song Downloader 💥_*

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

> MADE BY SETHIKA 💝
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMassage(from,{audio: {url:downloadUrl},mimetype:"aduio/mpeg"},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
