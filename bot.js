const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require("./işaret.json");

var prefix = işaret.prefix


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('icewaLL The KING', { type: 'PLAYING' })
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
  .catch(console.error);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'sa') {
      msg.reply('Aleyküm Selam!');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'kuran yakmışsın') {
      msg.reply('Ane');
      msg.reply('Ğ');
    }
    client.on('message', msg => {
        if (msg.content.toLocaleLowerCase() === 'bot davet') {
          msg.author.send('Botu kendi sunucunda kullanmak için icewaLL ile konuşman gerek');
        }
      });
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'polisler geldi') {
      msg.reply('ben bisi uapmadim');
    }
    });
    client.on('message', message => { 

      function rasteleSembol(uzunluk, semboller) {
  
  var maske = '';
  
  if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
  
  if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  if (semboller.indexOf('0') > -1) maske += '0123456789';
  
  
  var sonuc = '';
  
   
  
  for (var i = uzunluk; i > 0; --i) 
  
  {
  
  sonuc += maske[Math.floor(Math.random() * maske.length)];
  
  }
  
  return sonuc;
  
  }
  
  function spamla(){
      message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
  }
  
      if (message.channel.id = "803353348127850507"){ //NİTROYU ATACAĞI KANALIN İDSİ
          if(message.content.startsWith("gift!nitro")){
          try{
          var veri = message.content.toString();
          var veriSn = veri.substring(10)
           var saniye = parseInt(veriSn);
           var saniye1 = saniye * 1000;
          if (saniye > 1){
          setInterval(spamla, saniye1);
          }
  
          else{
              message.reply("Bir Hata Oluştu. Bu Arada En Az 2 Saniye Girmelisin");
          }
          }
          catch(err){
              message.channel.send("bir hata oluştu!");
          }
          }
          }
  
  
  
  });


client.login('ODAzMjQ5NzY5Mzc1MjAzMzY4.YA7CpA.ITW3Ih7X7Xl-ZR5uKBdXBPJiIo8');