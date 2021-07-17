const Discord = require('discord.js');
const slalice = require('./slalice.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`Iem đã sẵn sàng`)
    bot.user.setActivity("Pông", {type: "PLAYING"});
});

bot.on("guildMemberAdd", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
  welcomeChannel.send (`Welcome! ${member}`)
})

bot.on("guildMemberRemove", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'goodbye')
  welcomeChannel.send (`Goodbye! ${member}`)
})

bot.on('message', message => {
    if (message.content.toLocaleLowerCase() == 'cán bộ nghiện') {
      message.channel.send('https://cdn.discordapp.com/attachments/851256916110082068/860905923681714236/unknown.png');
    }

    if (message.content.toLocaleLowerCase() == 'cán bộ nghiện') {
      message.channel.send('https://cdn.discordapp.com/attachments/864447635766771743/864863791312535562/unknown.png');
    }

    if (message.content.toLocaleLowerCase() == 'm ngô') {
      message.channel.send('m cx ngô');
    }

    if (message.content.toLocaleLowerCase() == 'm ngu') {
      message.channel.send('m cx ngu');
    }

    if (message.content.toLocaleLowerCase() == 'ngô') {
      message.channel.send('mình ngô mà cứ bảo người khác ngô');
    }
  });

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = slalice.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `giới thiệu`){
        return message.channel.send("xin chào, đây là Pông, con gái Nhật Thành")
    }

    if(cmd === `nghiện`){
        return message.channel.send("https://cdn.discordapp.com/attachments/851256916110082068/860905923681714236/unknown.png")
    }
})

bot.login(process.env.token);