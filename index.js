const Discord = require ("discord.js");
require("dotenv").config()

const TOKEN = "OTcwOTc4NjI4NTA4NzQxNjQ0.YnD0UA.vAtwlhLS2k4tPoOlnXW2MQ7BRTA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        
    ]
});

client.on("ready", () => {
    console.log(`${client.user.tag} 起床啦!!!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Bitch!")
    }
})

client.login(process.env.TOKEN)