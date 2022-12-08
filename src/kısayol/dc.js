/**
 * 
 * @returns Random dogruluk
 */

async function dogruluk() {
    let dogruluk = [
        "Görünmez olsan ilk olarak ne yapardın?",
        "Herkesten sakladığın en büyük sırrın ne?",
        "Sosyal medyada en son kimi stalkladın?",
        "Üç dilek hakkın olsa bunları ne için kullanırdın?",
        "Yarın piyango sana çıksa satın alacağın ilk şey ne olurdu?",
        "Birini ekmek için hangi yalanı söylersin?",
        "En son kime, ne yalan söyledin?",
        "En utanç verici ilk buluşma anını anlat.",
        "Issız bir adaya düşsen yanına alacağın 5 şey nedir?",
        "En son ne zaman, ne için ağladın?",
        "Ömrünün sonuna kadar sadece tek bir şarkı dinleyebilecek olsan bu ne olurdu? BTS Dışında.",
        "Ömrünün sonuna kadar sadece tek bir şey yiyebilecek olsan bu ne olurdu?",
        "Bugüne kadar gördüğün en garip rüya neydi?",
        "En büyük korkun ne?",
        "İnsanların senin hakkındaki en büyük yanılgılarının ne olduğunu düşünüyorsun?",
        "Hoşlanmadığın bir ortamdan kaçmak için hiç yalan söyledin mi?",
        "En son ne için para harcadığına pişman oldun?",
        "Hayatının en güzel/kötü gününü anlat.",
        "Bu seslideki birinin yerine geçecek ve onun hayatını yaşayacak olsan bu kim olurdu?",
        "En son ne zaman yemek yedin?",
        "Sana zorbalık yapan oldu mu?"
    ]

    let random = dogruluk[Math.floor(Math.random() * dogruluk.length)]
    return random
}

/**
 * 
 * @returns Random
 */
async function cesaretlik() {
    let cesaretli = [
        "Bu seslideki birinin senin yerine tweet/instagram gönderisi atmasına izin ver.",
        "Bu seslideki birinin senin yerine birine mesaj atmasına izin ver.",
        "Bu seslideki birinin taklidini yap ama kim olduğunu söyleme.",
        "Aile bireylerinden birini ara ve onu çok korkutacak bir şaka yap.",
        "Bir dakika boyunca plank pozisyonunda dur.",
        "Çok kötü çıktığını düşündüğün bir fotoğrafı sosyal medyada paylaş.",
        "En son attığın 5 mesajı yüksek sesle oku.",
        "Seslideki insanların en sevmediğin özelliklerini söyle.",
        "Hoşlandığın kişinin en eski instagram gönderilerinden birini beğen.",
        "Hakkında bir doğru ve bir yanlış bilgi paylaş. Seslidekiler hangisinin doğru olduğunu tahmin etsin.",
        "Gizli yeteneğini göster. Varsa :)",
        "Rastgele bir numara çevir ve karşıdaki kişiye bir fıkra anlat.",
        "En sevdiğin kıyafetlerinden birini bir arkadaşına hediye et.",
        "Eski sevgilini ara ve onu çok özlediğini söyle.",
        "Discord'da en son konuştugun kişiye senden nefret ediyorum yaz.",
        "Telefonunu bu masadan birine ver ve tüm gün boyunca gelen mesajları/aramaları o yanıtlasın.",
        "Instagramda karşına çıkan ilk 5 hikayeye cevap ver.",
        "5 dakika boyunca seslidekiler ne derse onu yap.",
        "1 saat boyunca sadece arkadaşlarının zevkine göre giyin.",
    ]
    let random = cesaretli[Math.floor(Math.random() * cesaretli.length)]
    return random

}

module.exports = {dogruluk,cesaretlik}