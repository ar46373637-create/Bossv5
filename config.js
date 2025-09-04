const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923496587064" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923496587064";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923496587064";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_15_09_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImp5WGxQMHd2dkVIbUJpWFBDWmRwZVJ2WE05aEZ4bkw0aFJZTzNaMVlBbGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDk2NTg3MDY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MEEyNUQ4Mzk2QzY5NEYzMkFFRkFDQzhEOEUyQjBCMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTY5OTE3MDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTY1ODcwNjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI2QUFDRDAzNUUxMUUzOTNFQjM0OUY5N0VFQzVGNzhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1Njk5MTcxMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPSW8tTnN6OFRoR2w0N05fOFl2Y3dBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlMDBhZjFiLTFmMGItNGQxNi1hMjIxLWUxM2E5MjFmODhmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAyNTIsXG4gICAgICA5MixcbiAgICAgIDEzMSxcbiAgICAgIDIxMixcbiAgICAgIDg0LFxuICAgICAgMCxcbiAgICAgIDIwMyxcbiAgICAgIDM2LFxuICAgICAgNTIsXG4gICAgICAxODQsXG4gICAgICAxMTksXG4gICAgICAxOTQsXG4gICAgICAxOTgsXG4gICAgICA2NCxcbiAgICAgIDc5LFxuICAgICAgMjM5LFxuICAgICAgMTc4LFxuICAgICAgODEsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAyMSxcbiAgICAgIDU2LFxuICAgICAgMjAsXG4gICAgICAxNDIsXG4gICAgICAxMTgsXG4gICAgICAyNTUsXG4gICAgICAyMDksXG4gICAgICAyNDQsXG4gICAgICAxNjEsXG4gICAgICAxNzEsXG4gICAgICA0NyxcbiAgICAgIDgzLFxuICAgICAgMTQwLFxuICAgICAgMTY0LFxuICAgICAgOTMsXG4gICAgICA3NCxcbiAgICAgIDEsXG4gICAgICAzOCxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkMvejZVREVOU2g1c1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1by9jbEVwUWZ1Y3JuekcwTTNGcnhyYng3UVh3WTQwdWRuSFlqaDhzUncwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjA2YzZVdGp5R2lEV0VtcWJackMxdGNhV2hUcjFoUW8yT1UzYVRBb0xSTWZlSGtpU0g4UlZhcndhUHlKaVg4T1BCZUhCV05sVDJJeHcrVzVkdVlRRUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRrY1NPTnFtYUZwRXV5ZUpROHQvbmdPU2lycWQreG01Y0QvR2YzVk14L2JrS3VEdGxOVWZvV2lDdHdVMXMzdWpESFFrUlA4ekx4MkNFdmhBNjlGZGhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk2NTg3MDY0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTY1MzQ0ODc1MTUxNDk6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTWFyeWFtXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTY1ODcwNjQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1Njk5MTcwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMvNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ19fNi5qc29uIjogIntcImtleURhdGFcIjpcImNaZ3VYZkw3YTc3NHlqYUtmMlY4NDJWdXVOVHR5KytVallPNVNpY281SWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg0MjAzNDcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTY5OTE3MDY0NjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
