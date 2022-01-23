const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === ".start") {
    msg.reply("Hello user, Welcome to DungeonSX. Please start a tutorial by doing the following command: .tutorial")
  }
})

client.login(process.env.TOKEN)
