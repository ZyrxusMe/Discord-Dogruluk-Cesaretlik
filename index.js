const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
})
const slash = require("discord-sync-commands")
const fs = require("fs")
client.config = require("./config.json")

client.commands = new Discord.Collection()
client.version = require("./package.json").version
// =================================================================

                    // Slash komutlar yükleniyor. \\            
fs.readdir("./src/commands/", async(err,files) => {
    console.log(`[📕] ${files.length} komut yükleniyor.`)
    files.forEach(file => {
        if(!file.endsWith('.js')) return
        let infos = require(`./src/commands/${file}`)
        let name = file.split(".")[0];

        client.commands.set(name,{
            name:name,
            ...infos
        })
        console.log(`[📗] ${name} komutu yüklendi.`)
    });
    slash(client, client.commands.map((c) => ({
        name: c.name,
        description: c.desc || "Açıklama Belirtilmedi.",
        options: c.options || [],
        type: Discord.ApplicationCommandType.ChatInput
    })), {
        debug:true
    });
})
// =================================================================

// =================================================================
                    // Events yükleniyor. \\            
fs.readdir("./src/events/", async(err,files) => {
    console.log(`[📘] Events yükleniyor.`)

    files.forEach(a => {
        if(!a.endsWith('.js')) return 
        const event = require(`./src/events/${a}`)
        let name = a.split(".")[0];

        client.on(name, event.bind(null, client))
        delete require.cache[require.resolve(`./src/events/${a}`)];
        console.log(`[📘] ${name} eventi yüklendi.`)
    })
})
// =================================================================

client.login(client.config.token).then(() => {
    console.log(`[🤖] Bot aktifleştirildi.`)
})

client.kısayol = require("./src/kısayol/dc.js")