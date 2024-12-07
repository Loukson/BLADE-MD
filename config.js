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
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBoWW9MRjh6eDRKdTlzcVF5cW1uYk9BVURJMy93RlZXMzJKNzFIVG0zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0I5cjRyWFRacko4ZmxHNjNRUjJXZDZ2TUIzMTZmN1R0bDgzeXAzSUFtWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TzE1NjZKSkJGWCtRMGMrV1RRZ0J2MDhmSXR0c0xaclVXZDBCZTNGaTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwbGxYbzVxOHJJSGJadkVxbDllUDAwK3p6eU9MKzJzeVI0UVVBL2tvdDNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKNFFBaWxSMU9VNXNuL2dZVTBLUVI4T2txSUNTR0NQdGduNFpBL0RlMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko0RHV2MVhNeitGNlJ1d2VJMVo2eXNuRG1Ua3ZoTDRJY2JFWEtVQm9zRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RlREp4bklvQzhSbWlnNTFKaXlXRHNsQUpXV1N1a1RRZ05rYkF0aDMzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTh2UmR5cVNJR3VaajEzTkp4VTYrSXNBRE1nVnpzYnVuTzBKWWxlbVduVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIvVHpWRDRwWEtzdkNUazRUR2dCWnIxcjM0cjgzMG5SR3FoeHBzSWsyejI1dXlKazZoVFpyRWdweTRSaFpJamhvUVpTRWNIUllBTmFrSDR0NXBSRmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiIvclp4L212RVdDeEtlL0xDSE1SYitBNkNpMU53STBWc2FOUmNlZVFnbmMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmM1ZRRllrT1FjU2JZaThLOXE1RnZRIiwicGhvbmVJZCI6ImY0OTY4MTQxLTUxOGQtNDRjNi04ZjUzLTNiYTlhYjE0MTk3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBYUxOMzZGZXZDUTIyM1phbDlGRmcxRzh1bVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGhQNVRMUjgwR3dpRkx0Z1RHdTQva3k4NGJFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBSVkgzTFZLIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZC/8J2RgvCdkYjwnZC+8J2RhvCdkYLwnZGBIPCdkYjwnZGN8J2RiPCdkYDwnZC08J2QvvCdkLwg8J2Rh/CdkLjwnZC28J2QuyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0R0K2FNRkVPelh6Ym9HR0NrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWWpzSEhMZEVENU9jaXNJeE81Nm9DU1BscjB3bHJQUzIza2drSGk3S20wRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL3h2MG9VUFMzc1g0azV6SnFtWEJ5a0EzTEtBTWZqbXUzaUJJMlpMM2FzeGZpMnhwa1R6VnAvb2hvVktvN2dWM3BXeVFuTGJFQzF3K2l5UWY5QVN6Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdjY0pWL3o4bmQ4UTlyTkhxQU5OUU5ramVucmpUbU54TDhtU2RIQkZqMWRYTHJDSWw4RXM5NUpxYnovaG5oM0RhYUI4SDQ0dktzcUlwdEVJS0VkZmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDIzMzE5ODg6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0k3Qnh5M1JBK1RuSXJDTVR1ZXFBa2o1YTlNSmF6MHR0NUlKQjR1eXB0QiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzUyMDM3Nn0=",      //Put Your Session Id Here
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
 
