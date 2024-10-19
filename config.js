const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '22502331988'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Loukson/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "22502331988"
global.devs = '22502331988'
global.website = 'https://github.com/Loukson/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/315e41d18f5f32b2d767f.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tmRTRiUXN1ai9uUFBSWkFGYnN4NVRVUU1SNjc0WE5DWlRlU0x3UU5uVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMG9nUm55czhyajU5bE1VcEhhNjBMcG0ydW1keERYYlByK1FnZitpZ0J5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS3pHaldsazcyWWw1cEJEbGpKL2tPVjRmRlNsbUE0L0QrNm9DQXA5VW00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMFkyQzVHTTY3blJ3YlFBYjZGaUl5dTRpRmY2SjRQaGRPdGZ4WWQzRWhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIVmdCTUYvbWhvSm5OcXJvbFVCZ1NyaUhXcGFaL01neHQ0RHJwWmw0WEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpTRjFDTll3T2RMTEppTVdiNkpNMXJCeHk4bUF1RThpQnd1UXk4Y2ZrazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01ub0Y5TWJiUGZBSE9yUVNmYjE3TWxUakl0UXMzdnQwQkxoVUFuSm4wZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW5yS29oTGJiaS92QmdPMVhGQmRkL21DT1hjajU0WnQ5bmY4UWhkdkVYOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing2WVVVaGVVN2ZBZFVOa0lyUzJGTmxxYitTOTZVYi9xd0ZBSHNGcENNWDlrczcvVEdiT29OaUUvUUpMODhyUjU1cjlIWVFGNFNoS3BvK0tLeXhEQkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IlROUnFNN2lReVQ4ZjhNdk1YUXMzWVo1akpHSk5RMWRaVHZFdklXL0NSL0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJMS0JBLUg2UmlHakdadTNoT2hGanciLCJwaG9uZUlkIjoiYzMyMDM1ZTQtMjQzYi00M2Y1LWE4N2YtNDM4OWQ5MDIwMzJmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iisva3lJSGpBOTBxWWR2akNZS2xXMlV4ejlmaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdlRQM3hmVkE1WmV6elU1bzFhZys2ek90bzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1M4QTVUWUEiLCJtZSI6eyJpZCI6IjIyNTAyMzMxOTg4OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIzwnZCr4oiF8J2Vg/CdlYbwnZWM8J2VgvCdlYrwnZWG4oSVIPCdlYzihKTwnZWM8J2VhPCdlLjwnZWC8J2VgCAg8J2Vi/CdlLzihILihI0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pudCthTUZFUG0yekxnR0dEMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Illqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdLcHF4SU12WVA2YzR0WkZQQ201S2ttMWdQQVJKR0w2TlB2NkVCTU5yRkE1UStzczF3RXNVRWFZTXZCK1FTYlI5bGUzc05oQU9HYnh3d3ZEQ1hIVkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlK0Vqa3NSeGhnRWtlT3BsU1loZ1VlOWpNeHVJYnZ4STRrUGNsZUZ6Sy9OTzdwYWxuUFRCTjFZeG4zSUptempad1p0QzMvOG1sUjNDdEV4eHlmc3lDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAyMzMxOTg4OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldJN0J4eTNSQStUbklyQ01UdWVxQWtqNWE5TUphejB0dDVJSkI0dXlwdEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkzMDU0ODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSG9DIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '༆ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ༒',
  packname:  process.env.PACK_NAME || '༆ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ༒',
  
  botname:   process.env.BOT_NAME === undefined ? "NARUTO-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '༆ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ༒' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '-' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
