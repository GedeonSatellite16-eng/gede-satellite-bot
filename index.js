const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--disable-extensions',
            '--single-process',
            '--no-zygote',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-default-browser-check'
        ]
    }
});

client.on('qr', (qr) => {
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
        msg.reply(`MENU GEDE SATELLITE:\n1. Formation\n2. Photos / Videos\n3. Musique\n4. Aide\n\nTape le chiffre ou le mot, ex: Formation`);
    }
    else if (texte.includes('formation') || texte == '1') {
        msg.reply(`FORMATION GEDE SATELLITE:\n\nDis-moi quelle formation tu veux : Informatique, Musique, Video ?`);
    }
    else if (texte.includes('photo') || texte.includes('video') || texte == '2') {
        msg.reply(`PHOTOS / VIDEOS:\n\nEnvoie-moi ce que tu veux, on va travailler dessus 📸`);
    }
    else if (texte.includes('musique') || texte == '3') {
        msg.reply(`MUSIQUE 🎵\n\nTu veux ecouter ou creer une musique ?`);
    }
    else if (texte.includes('aide') || texte == '4') {
        msg.reply(`AIDE:\n\nTape MENU pour revenir au menu.`);
    }
    else if (texte == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();
