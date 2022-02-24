/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281440156
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'owner', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'ɪᴛᴀᴄʜɪs Oᴡɴᴇʀs Nᴜᴍʙᴇʀ ☮︎', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tʜɪs OᴡɴᴇʀsWɪɴᴅʀᴏ Sᴇʀ Nᴀɴʙᴜɴ Aɴᴅ Cʜᴜɴᴋs === ▷*\n\n🎭 *ɪᴛᴀᴄʜɪ Bᴏᴛ Bʏ Wɪɴᴅʀᴏ sᴇʀ *\n 🔮 http://wa.me/+918606413490.\n\n🎭 *Aʙᴜ Bᴏᴛ Bʏ Kᴀᴢᴛʀᴏ sᴇʀ *\n 🔮 http://wa.me/+918281440156.\n\n🎭 *Aʙᴜ Bᴏᴛ Bʏ Lᴜᴄᴋʏ Sᴇʀ*\n🔮 http://wa.me/+916238748280\n\n🎭 *Aʙᴜ Bᴏᴛ Bʏ Kᴀʟɴ*\n🔮 http://wa.me/+916238532742\n\n🎭 *Aʙᴜ Bᴏᴛ Bʏ Aᴘᴘᴜ Sᴇʀ*\n🔮 http://wa.me/+918590432917\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Iᴛᴀᴄʜɪ Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/WVFX1029/ITACHU-BOT\n\n ", rowId:"rowid2"},
        {title: 'Aʙᴜ Bᴏᴛ Oғғɪᴄᴀʟ Gʀᴏᴜᴘ ', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk\n\n ", rowId:" rowid5"},
        {title: 'Kᴀʟɴ Sᴇʀ Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "Aʙᴜ Bᴏᴛ Mᴀᴋɪɴɢ Vɪᴅᴇᴏ Tʜɪs Cʜᴀɴᴀʟ\n\n\n*Kᴀʟᴀɴ Sᴇʀ Cʜᴀɴᴀʟ Sᴜʙsᴄʀᴀɪʙᴇ*\n\n*https://youtu.be/OYhA_ZNQ4GQ* ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "Aʙᴜ sᴇʀ ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚✯ɪᴛᴀᴄʜɪ✯💚',
        description: "💖✻Wɪɴᴅʀᴏ Sᴇʀ Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage, { mimetype: Mimetype.listMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('./photo/windro.png'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/windro.png')}}}});
    
    }));
