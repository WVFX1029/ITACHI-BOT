const Asena = require("../events");
const { MessageType } = require("@adiwajshing/baileys");
const { photooxy, ePhotoDownload, getBuffer } = require('../config')


Asena.addCommand({ pattern: 'effects ?(.*)', fromMe: true, desc: "Photooxy list", }, async (message, match) => {
  return await message.sendMessage('```' + '.burn\n\n.hacker\n\n.8bit\n\n.smoke\n\n.banner\n\n.flaming\n\n.hp\n\n.2metal\n\n.cementary\n\n.2glitch\n\n.2cup\n\n.romance\n\n.wooden\n\n.ocean\n\n.wolf\n\n.rainbow\n\n.nightsky\n\n.smokyneon\n\n.dragon\n\n.warface\n\n.cf\n\n.csgo\n\n.battle\n\n.pubg\n\n.mercy\n\n.captain' + '```')
  });

Asena.addCommand({ pattern: 'banner ?(.*)', fromMe: true,dontAddCommandList: true , desc: "banner text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html"
    const url = await photooxy(effect_url, match,0)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });

  Asena.addCommand({ pattern: 'burn ?(.*)', fromMe: true, desc: "burn text effect",dontAddCommandList: true }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  
  Asena.addCommand({ pattern: 'smoke ?(.*)', fromMe: true,dontAddCommandList: true , desc: "smoke text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'flaming ?(.*)', fromMe: true,dontAddCommandList: true , desc: "flaming text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'hp ?(.*)', fromMe: true,dontAddCommandList: true , desc: "harrypotter text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: '2metal ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Matallic text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'cementary ?(.*)', fromMe: true,dontAddCommandList: true , desc: "cementary text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: '2glitch ?(.*)', fromMe: true,dontAddCommandList: true , desc: "logo glitch text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/other-design/retro-avatar-league-of-legends-147.html"
    const url = await photooxy(effect_url, match,Math.floor(Math.random()* 894 ))
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: '2cup ?(.*)', fromMe: true,dontAddCommandList: true , desc: "coffeecup text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'romance ?(.*)', fromMe: true,dontAddCommandList: true , desc: "romantic text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'wooden ?(.*)', fromMe: true,dontAddCommandList: true , desc: "wooden text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'ocean ?(.*)', fromMe: true,dontAddCommandList: true , desc: "ocean text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'wolf ?(.*)', fromMe: true,dontAddCommandList: true , desc: "wolf text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'rainbow ?(.*)', fromMe: true,dontAddCommandList: true  , desc: "rainbow text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'nightsky ?(.*)', fromMe: true,dontAddCommandList: true , desc: "nightsky text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html"
    const url = await photooxy(effect_url, match)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });

  Asena.addCommand({ pattern: 'dragon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "black dragon text effect" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html"
    const url = await photooxy(effect_url, match,0)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  
  Asena.addCommand({ pattern: 'cf ?(.*)', fromMe: true,dontAddCommandList: true , desc: "crossfire gaming logo" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/cross-fire/nice-cross-fire-cover-137.html"
    const url = await photooxy(effect_url, match,0)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });

  Asena.addCommand({ pattern: 'warface ?(.*)', fromMe: true,dontAddCommandList: true , desc: "war face gaming logo" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/warface/make-warface-cover-online-135.html"
    const url = await photooxy(effect_url, match,0)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'mercy ?(.*)', fromMe: true,dontAddCommandList: true , desc: "mercy hero gaming logo" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/overwatch/cover-overwatch-with-heros-134.html"
    const url = await photooxy(effect_url, match,0)
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
  Asena.addCommand({ pattern: 'csgo ?(.*)', fromMe: true,dontAddCommandList: true , desc: "cross go gaming logo" }, async (message, match) => {
    if (match == '') return await message.sendMessage("Give me text")
    const effect_url = "https://photooxy.com/cs-go/great-cs-go-banner-131.html"
    const url = await photooxy(effect_url, match,Math.floor(Math.random()* 6 ))
    if (!url) return
    const { buffer } = await getBuffer(url)
    if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
  });
  
     Asena.addCommand({ pattern: 'battle ?(.*)', fromMe: true,dontAddCommandList: true , desc: "battle gaming logo" }, async (message, match) => {
      if (match == '') return await message.sendMessage("Give me text = textmaker\n\n.Example .battle user;bot")
      const [text1, text2] = match.split(';')
      if (!text1 || !text2) return await message.sendMessage("Give me text = textmaker\n\n.Example .battle user;bot")
      const effect_url = "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html"
      const { status, url } = await photooxy(effect_url, match)
      if (!status) return
      const { buffer } = await getBuffer(url)
     if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
     });

       Asena.addCommand({ pattern: 'captain ?(.*)', fromMe: true, dontAddCommandList: true, desc: "captain text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text = textmaker\n\n.Example .battle user;bot")
        const [text1, text2] = match.split(';')
        if (!text1 || !text2) return await message.sendMessage("Give me text = textmaker\n\n.Example .battle user;bot")
        const effect_url = "https://photooxy.com/captain-america-text-generator-403.html"
        const  url = await photooxy(effect_url, match)
        if (!url) return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
      })

      Asena.addCommand({ pattern: 'pubg ?(.*)', fromMe: true, dontAddCommandList: true, desc: "captain text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text = textmaker\n\n.Example .battle user;bot")
        const [text1, text2] = match.split(';')
        if (!text1 || !text2) return await message.sendMessage("Give me text = textmaker\n\n.Example .battle user;bot")
        const effect_url = "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html"
        const  url = await photooxy(effect_url, match)
        if (!url) return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
      })

      Asena.addCommand({ pattern: '8bit ?(.*)', fromMe: true, dontAddCommandList: true ,desc: "Glitch text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text\nExample .glitch steel;effect")
        const [text1, text2] = match.split(';')
        if (!text1 || !text2) return await message.sendMessage("Give me text\nExample .glitch steel;effect")
        const effect_url = "https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html"
        const  url = await photooxy(effect_url, match)
        if (!url) return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
      });

      Asena.addCommand({ pattern: 'hacker ?(.*)', fromMe: true, desc: "Sad text effect", dontAddCommandList: true }, async (message, match) => {
      if (match == '') return await message.sendMessage("Give me text")
      const effect_url = "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
      const {status, url} = await ePhotoDownload(effect_url, match,"71074346-5cb3-4b7d-9b8b-a84e4f142ba4")
      if(!status)return
      const { buffer } = await getBuffer(url)
      if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
     });
   
