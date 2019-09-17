const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

  if (msg.content === 'طم ططح') {

    msg.reply('طم طح');

  }

});

client.on('message', async(message) => {

    if(message.author.julian || message.channel.type == 'dm') return;

    let args = message.content.split(' ');

    if(args[0] == `${sorry}bc`){

        if(!message.member.hasPermission('MANAGE_GUILD')) return;

        if(!args[1]) return message.channel.send(`**Usage:** ${sorry}bc [message]`);

        message.guild.members.map((m) => {

            setTimeout(() => {

                m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);

            }, 550);

        });

    }

}); // مو مجرب 



client.login('NjIzNDY3NzY0Mzg4MjAwNDc4.XYC5fQ.dPmz30pRM7IhONUIv0qr2_jJ8dQ'); // توكن بوتك
