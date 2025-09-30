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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_41_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MixcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQU0ovVERNUXhtb1hUcXVVQ1ZXekJqZUhmVEhHNXpwcGdXM05NZmxLVldnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOUzNZVDdmdlM1U2wycVBLalFPS1BRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1ODMzYzU1LWJhNDYtNGQ2Yi1hZDE2LWQ2YzczMjJhMjYxZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxMjksXG4gICAgICA0NCxcbiAgICAgIDIzNCxcbiAgICAgIDExNSxcbiAgICAgIDc5LFxuICAgICAgMTgsXG4gICAgICAyMjksXG4gICAgICAxMDcsXG4gICAgICA4LFxuICAgICAgMTMwLFxuICAgICAgMjEzLFxuICAgICAgOTksXG4gICAgICAxMzMsXG4gICAgICA5MixcbiAgICAgIDE5OCxcbiAgICAgIDI0OSxcbiAgICAgIDksXG4gICAgICAyNDYsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA3NyxcbiAgICAgIDIxMyxcbiAgICAgIDEzOCxcbiAgICAgIDE2NSxcbiAgICAgIDE2LFxuICAgICAgMTY4LFxuICAgICAgMjQ1LFxuICAgICAgMTE2LFxuICAgICAgNSxcbiAgICAgIDE0LFxuICAgICAgODksXG4gICAgICA1NyxcbiAgICAgIDI1LFxuICAgICAgMTQ5LFxuICAgICAgMTI5LFxuICAgICAgMTQzLFxuICAgICAgNjcsXG4gICAgICA2OCxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlR4dU1NREVMM243c1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1b1Yvc1VuRlJ4R0JQRmk3TWFJR2d3d1pqblFPbk00WnhUZGUwTDc4SG5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklSa29vUFRIUjZVdVdZb3NZeFBMNEZ6Skp4VGtZWjF6ZlFrd3lROXJZZWNrSjJmKzEwREx4cHZRR1ZuRThRZWtXdW1RdzVLdmIrUU4vNnhWV2l2R0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjk5T2VlZjVGVGhZazVlWkk0Y3lQUGVnT3RGa0Z0cEM3aWdQMC9aRGM1Vm5xeFJlL0hLcU1BS2g0cmpXS3JWTEw2QVNDMVdpVUFWdmhpMlZTUFBrcWdRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk2NTg3MDY0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFyeWFtXCIsXG4gICAgXCJsaWRcIjogXCIyNTY1MzQ0ODc1MTUxNDk6MTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTY1ODcwNjQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTkyMjg4NjVcbn0iCn0="  // PUT your SESSION_ID 


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
