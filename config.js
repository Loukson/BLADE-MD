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
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ViemZta0ZCRjA0d0ZyU09iei9EZTBFZHBMSStlakNpd1RuSlBaZjFVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3Q2MDNMdTFUQVduU1ZWalJuZGVTaktjZUhVNjIrcFE0VHUzZDJhZUIzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ0U0QU1xRUVmaUgyQ0VyeGdpVkFNZGpCd0JkVE5vcjRwNkp2b3l1WTAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UFVMVnNKTmhvenVRNjlnMVpHbm8xMkZGYzJ6Z2dKeHhpWG53R1l6Smp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDSVFQZFl2dHZuRGdrSEJ6UktIR0p1SnlTSlpPUTlmTU1BNjhWaGlMbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzM2VFb2Y3WFVsMkhEMldyWE8zdGZINUJqaHc5OC8vbi8wLytLQjVXUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JkSE5FN2ErbnFqMzNURTZMbW5RMDhNR1Y4QlZVOEhJSmphdjNTeTZrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFZob0tLTGNrSTRzNlQzU051WWlmSXhKMDRYUHlnNlo0MUp4dHhPbmloUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZGak1ocjhJbXE2Q09uWE1zRjg2U3ZZU0tKUDBsUlY0NXZQK0NUM0toc1hoZnI0elRIWTQxT1dXaFRwTG1GUTZUdkdtTmdiYXdBbFMxM3F2Yk9HcWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJ3blM4UTdpSnFLd2RTNXpYOHdLTHc1ekVIQ0EwOEF2SmZDRGRUVG9MMG9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKSVBkNmVPUlE3YWZNMlVSMEw0YUl3IiwicGhvbmVJZCI6ImE5ZWYyNGE3LWM5OTEtNDhkNS04OWFkLTJlNmU5ZGFiMjM5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3NzNWRTJyS3pqeUw1ODNRZG82VVlSWGZWUFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG1GY3MzOFhwYklNYlNFQXp0T0tNdGJzTklvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1ONkRNRlNFIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo3MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvIbKn+G0j+G0nOG0i3PhtI/JtCDhtZjhtrvhtZjhtZDhtYPhtY/igbHgvJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xUY3o0b0RFSytVOGJjR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNxU0JJL013MUtYT3VtbW5QWWRQZmQ3K1hCSjNYcHJRSGJ4YkloeHB5WDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilcvckg2YlJpUDI5UUJMUmlJNEJZYkNmM0toLytxdzVxOGtpRmJVLzVaTXY3d0JZNjgvVllNQXlXTGYxclo5NkNocHdPU2ZmT2wwTjk5L2F4WUZ6WUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6RmYxa3owWm42VURGa1A4SDVCVVJaUHRzblpTWlFLZ3dBd05QZzRRZTBLUG5EWXF5anlFZUw0dnlvdnhGMHN6SWpCcHFsL0FxOU0wYU52TlV3aUNndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAyMzMxOTg4OjcxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVxa2dTUHpNTlNsenJwcHB6MkhUMzNlL2x3U2QxNmEwQjI4V3lJY2FjbC8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc4MTAxMDl9",      //Put Your Session Id Here
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
 
