var Discord = require('discord.js');
var waifu = require('snekfetch');
const moment = require("moment")
moment.locale("pt-BR")
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
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

    if(message.member.hasRole('457809186755969055')) {
        m.removeRole('457809186755969055');
        message.channel.send(`✅ | O membro ${m} agora pode falar novamente !`)
        let embedB = new Discord.RichEmbed();
        embedB.addField('Membro que pode falar novamente', `${m}`);
        embedB.addField('Moderador', `${message.author}`);
        embedB.addField('Comando efetuado em', `${moment(message.createdAt).format('LLLL')}`)
        client.channels.get('402216351885950977').send(embedB);
    } else {
        let embedC = new Discord.RichEmbed();
        embedC.setColor(`RANDOM`);
        embedC.setDescription('O membro mencionado não está silenciado.');
        embedC.setAuthor(message.author.username, message.author.avatarURL);
        message.channel.send(embedC); 
    }

}