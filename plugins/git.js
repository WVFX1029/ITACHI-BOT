/* Copyright (C) Aᴊx-Aʙᴜ
Mwonu credits kalayalle
Sana-Aᴊx-Aʙᴜ
*/

const Sana = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Sana.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/iqfW5XR.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 𝐒𝐀𝐍𝐀 𝐌𝐖𝐎𝐋💝⦁━►


*Oᴡɴᴇʀ number Aʙᴜ* :https://wa.me/917025868709.
            

*Oᴡɴᴇʀ number Sᴀɴᴀ* :https://wa.me/919605385305.


*Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ Sᴀɴᴀ Mᴡᴏʟ* :https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk_.


*Gɪᴛ Lɪɴᴋs* : https://github.com/Ajx-Abu/Abu_ser.


*Gɪᴛ Lɪɴᴋs* : https://github.com/Ajx-Abu/Sana-Mwol.


*Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs* :https://github.com/Ajx-Abu/sana-media/tree/main/bgm.


*sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs* :https://github.com/Ajx-Abu/sana-media/tree/main/stickers.

◄━⦁💝 𝐒𝐀𝐍𝐀 𝐌𝐖𝐎𝐋💝⦁━►
■□ ~💙 𝐀𝐁𝐔 ❤️I💙 𝐒𝐀𝐍𝐀 ❤️~■□ 

`}) 

}));
