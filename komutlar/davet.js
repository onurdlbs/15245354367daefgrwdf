const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=717539171023192066&scope=bot&permissions=8) \n [__**Destek Sunucusu**__](https://discord.gg/TjKbSM4) \n [__**Web Sitesi**__](https://onrmedia.glitch.me/index.html) (Mobil Uyumlu Deildir)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};