const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `

*Oᴡɴᴇʀ number Aʙᴜ* : https://wa.me/918606413490.


*Gʀᴏᴜᴘ Lɪɴᴋ* : https://chat.whatsapp.com/FPCaXl55jkYK3PgTDtdvAV.


*Gɪᴛ Lɪɴᴋs* : https://github.com/WVFX1029/ITACHI-BOT.



◄━⦁💝𝐈𝐓𝐀𝐂𝐇𝐈 𝐖𝐀 𝐁𝐎𝐓💝⦁━►
■□ ~💙𝐈𝐓𝐀𝐂𝐇𝐈❤️~■□ 

`}) 

}));
