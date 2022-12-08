const Discord = require("discord.js")

module.exports = {
    run: async (client,interaction) =>{
        const embed = new Discord.EmbedBuilder()
        .setThumbnail(client.user.avatarURL())
        .setTitle(`${client.user.username} | Yardım Menüsü`)
        .setColor("#2f3136")
        .setAuthor({name:client.user.username,iconURL:client.user.avatarURL()})
        .setDescription(`
        
        **🎈 Bilgi**
        > **» Bot sürümü : ${client.version}**
        > **» Sunucu Sayısı : ${client.guilds.cache.size}**

        **✨ Komutlar**
        > **» </yardım:0>** Yardım menüsünü görüntüle.
        > **» </dc:0>** Doğruluk Cesaretlik oynarsınız. (Ses Kanalında bulunmalısınız.)
        
        **🎎 Bağlantılar**
        > [**[Destek Sunucusu]**](https://discord.gg/uptime-support-915639081554305085)
        > [**[Discord Bot List]**](https://example.com)
        > [**[Ekle]**](https://ptb.discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)
        
        `)
        
        .setTimestamp()
        interaction.reply({embeds:[embed]})
    },

    desc: "Yardım menüsünü görüntüle."
}