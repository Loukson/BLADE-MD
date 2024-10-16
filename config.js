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
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU8ycGU0UUlNaHdqK0lNaGx1T1EybHB0ZFRVY0pSeDJQSmlEWWUyWTcwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDN4dCsyTEdoTXNOOGVaWENCRFgrSWdVV0hpT1FYd0lvNmdibHk3M2lqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRWtMU1QwRmprVEEvSVJqV2xVMXRDZk9JbzlCc3c4UXZoYXZrQnp3QW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOcThCbDJXaVg4b3RBSldEWTV3aU0wcTBBeDZwdXpuTklEaTR3SmQvbzBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDTm1lYTZUV25DSVFveUJoNDhkZ3ZJS1RGRTFmQ0w1dTdSVm5oS0xCbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlIbkdLWXRXUTdIWjhNVTZVWHQ5U2lXelJtSEdMbFp5cUVBQUY2SlZlblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUh0bzJTNitjTVhhRERTT3ZzNmp5NjRmL0UxQ2s2SkhXeGNhRnZ4UUZVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWC9hQ2xodUNKM0VjdkpKanNpSm9iZW5NQlJ3cnp3TXM0ZXdCRThjeFNUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI0aDdWY1NBTVJIblpPSitHb0pLdlZLdDREaGRlNU12RlFsbzdPNjVvRWRqMmVaWGtDV0xCd1crbXQ1Z1NQMlRiQlliZFhjWkp2OXc4VllrNndVT2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJsQXc4eSt3VDJsS3ZhNHFCZ2RtajVOTlAxMzByYzVydzdaRFRNQ2I3TnhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkZm9BaGs5SVNlR1hFdEI5YnBJc0pRIiwicGhvbmVJZCI6IjhhZThhMTE0LWE4MmYtNDFiZi05MTExLTI1ZmM5ZTIyYmY4NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWEZmclg5ZkJXYk54TitHa0t2VUlOZDl4cHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDkrem8wOFlYTXgwNFFrcnJNK1l4QXB4bVJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjU0RlNaNk5ZIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo1MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCM8J2Qq+KIhfCdlYPwnZWG8J2VjPCdlYLwnZWK8J2VhuKElSDwnZWM4oSk8J2VjPCdlYTwnZS48J2VgvCdlYAgIPCdlYvwnZS84oSC4oSNIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnQrYU1GRU5uendMZ0dHQzRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZanNISExkRUQ1T2Npc0l4TzU2b0NTUGxyMHdsclBTMjNrZ2tIaTdLbTBFPSIsImFjY291bnRTaWduYXR1cmUiOiJsUitOSGpvOXRvSFF5cVVubUZTczIxWkNTSVlYcUdLd0ljZmpqSVpyYWYxUlU5N3hXYUc0QktJTXpYM281MUZoSHJUc2g5RHY2VzR1cWRvLzZ6VFZBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWUZscDcyZ0RCWVFqL25hNHdEc0N3YmZuVDUwOC9paGRZU0hOUzlLZklNbmpKV3daWmxocnZwY0lTZkZSc0R3TEJPYTViS2JYaU12aU1NNnlGTkNVaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwMjMzMTk4ODo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSTdCeHkzUkErVG5JckNNVHVlcUFrajVhOU1KYXowdHQ1SUpCNHV5cHRCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MTE2NjQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhueCJ9",      //Put Your Session Id Here
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
 
