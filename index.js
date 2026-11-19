const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { args: ['--no-sandbox'] }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('SCANNE CE QR AVEC WHATSAPP');
});

client.on('ready', () => {
  console.log('GEDE SATELLITE BOT EST EN LIGNE !');
});

client.on('message', async msg => {
  const texte = msg.body.toLowerCase();
  const nom = msg._data.notifyName || 'ami';

  if (texte.includes('bonjour') || texte.includes('salut') || texte.includes('hello')) {
    msg.reply(`Salut ${nom} ! Bienvenue chez GEDE SATELLITE 🔥\n\nTape MENU pour voir les services.`);
  }
  else if (texte.includes('menu')) {
    msg.reply(`MENU GEDE SATELLITE:\n\n1. Formation\n2. Photos / Videos\n3. Musique\n4. Aide\n\nTape le numero, ex: 1`);
  }
  else if (texte === '1') {
    msg.reply('FORMATION GEDE SATELLITE : On t apprend a creer ton bot, tes videos, ta musique. Tape INFO pour plus.');
  }
  else if (texte === '2') {
    msg.reply('PHOTOS / VIDEOS : Envoie-nous ton projet, on te fait un devis rapide.');
  }
  else if (texte === '3') {
    msg.reply('MUSIQUE : Ecoute GENERATION CONNECTEE sur toutes les plateformes !');
  }
  else if (texte === '4' || texte.includes('aide')) {
    msg.reply('AIDE : Ecris a Gedeon directement, il va te repondre.');
  }
  else {
    msg.reply(`Merci ${nom} ! Tape MENU pour voir les services de GEDE SATELLITE.`);
  }
});

client.initialize();
