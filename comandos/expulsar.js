var Discord = require('discord.js');
const moment = require("moment")
moment.locale("pt-BR")
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('KICK_MEMBERS')) {
        let embed = new Discord.RichEmbed();
        embed.setColor(`RANDOM`);
        embed.setDescription('Sem permissão');
        embed.setAuthor(message.author.username, message.author.avatarURL);
        message.channel.send(embed);
        return;
    }
    // 402216351885950977

    let m = message.mentions.member.first();
    if(!m) {
        let embedA = new Discord.RichEmbed();
        embedA.setColor(`RANDOM`);
        embedA.setDescription('Mencione um membro para usar esse comando.');
        embedA.setAuthor(message.author.username, message.author.avatarURL);
        message.channel.send(embedA);
        return;
    }

    if(!m.kickable) {
        let embedB = new Discord.RichEmbed();
        embedB.setColor(`RANDOM`);
        embedB.setDescription('Eu não posso fazer isso.');
        embedB.setAuthor(message.author.username, message.author.avatarURL);
        message.channel.send(embedB);
        return; 
    }

    let motivo = args.slice(1).join(' ');
    if(!motivo) return motivo = 'Sem motivio definido';
    m.kick(motivo);
    message.channel.send(`✅ | O membro ${m} foi punido com sucesso !`)

    let embedC = new Discord.RichEmbed();
    embedC.addField('Membro expulso', `${m}`);
    embedC.addField('Moderador', `${message.author}`);
    embedC.addField('Comando efetuado em', `${moment(message.createdAt).format('LLLL')}`)
    embedC.addField('Motivo', `${motivo}`);
    client.channels.get('402216351885950977').send(embedC);
}