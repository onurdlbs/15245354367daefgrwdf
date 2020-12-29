const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **FiireBoat (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/786968577341259796/788327127098982400/20201028_000911.png")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» !balık-tut :** Denizde balık tutarsınız.
> **» !beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» !ara155 :** Polisi aramanıza yarar.
> **» !efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» !ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» !espri :** Bot sizin için espri yapar.
> **» !hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» !kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» !kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» !kralol :** Kral olmanıza yarar.
> **» !tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» !yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» !yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» !öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» !şekerye :** Bot size şeker ikram eder.

▬▬▬▬▬▬[ :closed_lock_with_key: **Effect** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !alev :** Alevli Bir Font İle Logo Oluşturur.
> **» !altın :** Altın Bir Font İle Bir Logo OLuşturur.
> **» !anime :** Animatik Bir Font İle Bir Logo OLuşturur.
> **» !arrow :** Ok İle Çevrili Bir Logo Oluşturur.
> **» !banner :** Banner Boyutunda Bir Yazı Oluşturur.
> **» !dinamik :** Dinamik Bir Font İle Logo Oluşturur.
> **» !prologo :** PROFESYONEL Sayılabilecek Düzeyde Bir Logo Oluşturur.
> **» !wasted :** Bir Profile Wasted Animasyonu Verir.

▬▬▬▬▬▬[ :closed_lock_with_key: **Kullanıcı** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !avatar :** Avatarınızı Sizlere Sunar.
> **» !server-icon :** Bulunduğunuz Sunucunun İconunu Gösterir.

▬▬▬▬▬▬[ :closed_lock_with_key: **Ana Komutlar** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !bug-report :** Botta Oluşan Bir BUGU Yapım Şirketine Bildirir.
> **» !davet :** Botun Davet,Web Site, Oylama Ve Destek Sunucu Linkine Ulaşabilirsiniz.
> **» !istatistik :** Botun İstatistiklerini Gösterir.
> **» !Ping :** Botun Gecikme Süresini Gösterir.

▬▬▬▬▬▬[ :closed_lock_with_key: **Yetkili** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !ban :** Belirlenen Kulanıcıyı Sunucudan Yasaklar.
> **» !üye-durum :** Sunucunun Anlık Üye Durumunu Gösterir.
> **» !sohbet-aç/kapat :** Kanalın sohbetini Açar/kapatır.
> **» !temizle :** Kanaldaki Mesajlerın Belirlenen Kadarını Siler(MAX 100).
> **» !un-ban :** Bir Kulanıcının Yasaklamasını Kaldırır.

▬▬▬▬▬▬[ :closed_lock_with_key: **Sistemler** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !sa-as aç/kapat :** Bot Selam Veren Birine Selem Verip Vermemesini Ayarlar.
> **» !kanal-koruma aç/kapat :** Belirlenen Kanlı Korumaya Alır Kanal Silinmez (Sunucu Sahibi Hariç).
> **» !küfür-engel aç/kapat :** Sunucuda Küfür Edilmesini Engeller.
> **» !reklem-engel aç/kapat :** Sunucuda Reklem Yapılmasını Engeller.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/TjKbSM4)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/TjKbSM4)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=717539171023192066&scope=bot&permissions=8)** **•** **[Web-Site](https://onrmedia.glitch.me)** **•** **[Oy](https://top.gg/bot/717539171023192066/vote)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};