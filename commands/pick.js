// JavaScript source code
module.exports = {
	name: 'pick',
	description: 'Hỏi Pông xem thích A hay B',
	execute(message, args) { message.reply(args.join(' ').split(' hay ')[Math.floor(Math.random() * 100 % 2)]); },
};