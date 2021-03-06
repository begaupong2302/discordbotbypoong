const Discord = require('discord.js');
const slalice = require('./slalice.json');
const { request } = require('http');

let prefix = slalice.prefix;

const bot = new Discord.Client({ disableEveryone: true });

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}
bot.on("ready", async () => {
    console.log(`Iem đã sẵn sàng`)
    bot.user.setActivity("Pông", {type: "PLAYING"});
});

bot.on('message', message => {
    if(!message.content.startsWith(prefix)) {
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
    }
	else{
		let args = message.content.slice(prefix.length).trim().split(' ');
		const command = args.shift().toLowerCase();
		if (!bot.commands.has(command)) return;

		try {
			bot.commands.get(command).execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
	}	    
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `nghiện`){
        return message.channel.send("https://cdn.discordapp.com/attachments/851256916110082068/860905923681714236/unknown.png")
    }
})

bot.login(process.env.token);
