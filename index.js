require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.once('ready', () => {
  console.log(`✅ Bot logado como ${client.user.tag}`);
});
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  const comando = message.content.toLowerCase();

  // Pega o nome do usuário (nickname no servidor ou, se não existir, o username)
  const nome = message.member?.displayName || message.author.username;

  if (comando === '!on') {
    message.channel.send(`✅ ${nome} has logged in.`);
  }

  if (comando === '!off') {
    message.channel.send(`❌ ${nome} has logged out.`);
  }
});

client.login(process.env.TOKEN);
