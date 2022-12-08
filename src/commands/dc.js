const Discord = require("discord.js")
const {ActionRowBuilder,ButtonBuilder,ButtonStyle} = require("discord.js")

module.exports = {
    run: async(client,interaction) => {
        try {
        const sesteki = interaction.guild.members.cache.get(interaction.member.user.id).voice.channel
            console.log(sesteki.members.filter(x => x.id !== interaction.user.id && !x.user.bot))
            let filter = sesteki.members.filter(x => x.id !== interaction.user.id && !x.user.bot)

                let seçildi = filter.random()
            if(!seçildi) return interaction.reply({embeds:[
            new Discord.EmbedBuilder()
                .setTitle("📕 | Hata Oluştu!")
                .setColor("#2f3136")
                .setAuthor({name:client.user.username,iconURL:client.user.avatarURL()})
                .setDescription(`**> » Ses kanalında minimum 3 kullanıcı bulunmalı (${(filter.size)} kullanıcı bulunuyor.)**`)
                ]})
                const embed = new Discord.EmbedBuilder()
                .setColor("#2f3136")
                .setThumbnail(client.user.avatarURL())
                .setAuthor({name:client.user.username,iconURL:client.user.avatarURL()})
                .setDescription(`
                
                **> » ${seçildi} kullanıcısı ${interaction.user} kullanıcısının kurbanı oldu. **
                **> ${seçildi} Doğruluk için :regional_indicator_d: butonuna, Cesaretlik için :regional_indicator_c: butonuna tıkla.**
                
                `)

                const dc = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(interaction.user.id+seçildi+"dogruluk")
                        .setLabel("🇩")
                        .setStyle(ButtonStyle.Primary),
                            new ButtonBuilder()
                        .setCustomId(interaction.user.id+seçildi+"cesaretlik")
                        .setLabel("🇨")
                        .setStyle(ButtonStyle.Primary),
                );

                await interaction.reply({embeds:[embed], components: [dc]})
                    const ffilter = i => i.user.id === seçildi.id
                    const collector = interaction.channel.createMessageComponentCollector({ ffilter, time: 60000 })

                    collector.on("collect", async i => {
                        if(i.customId === interaction.user.id+seçildi+"dogruluk") {
                            const question = await client.kısayol.dogruluk()

                            const embed = new Discord.EmbedBuilder()
                            .setColor("#2f3136")
                            .setThumbnail(client.user.avatarURL())
                            .setAuthor({name:client.user.username,iconURL:client.user.avatarURL()})
                            .setDescription(`
                            
                            **> » ${seçildi} kullanıcısı ${interaction.user} kullanıcısının kurbanı oldu.**
                            **➥  ${seçildi} doğrulugu seçti!**
                            **➥ Doğruluk Sorusu : ${question}**`)
                            await interaction.editReply({embeds:[embed], components:[]})
            
                        }
                        if(i.customId === interaction.user.id+seçildi+"cesaretlik") {
                            const question = await client.kısayol.cesaretlik()

                            const embed = new Discord.EmbedBuilder()
                            .setColor("#2f3136")
                            .setThumbnail(client.user.avatarURL())
                            .setAuthor({name:client.user.username,iconURL:client.user.avatarURL()})
                            .setDescription(`
                            
                            **> » ${seçildi} kullanıcısı ${interaction.user} kullanıcısının kurbanı oldu.**
                            **➥ ${seçildi} cesaretliği seçti!**
                            **➥ Cesaretlik Sorusu : ${question}**
`)
                            await interaction.editReply({embeds:[embed], components:[]})
            
                        }

                    })
                } catch(err) {
                    console.error(err)
                }
    },
    desc: "Doğruluk Cesaretlik oynarsınız. (Ses Kanalında bulunmalısınız.)"
}