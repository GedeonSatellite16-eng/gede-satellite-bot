console.log("GEDE SATELLITE BOT est en ligne !");
console.log("GENERATION CONNECTEE - LUBUMBASHI");

const messages = [
  "Salut ! Bienvenue chez GEDE SATELLITE",
  "Tape MENU pour voir les services",
  "Merci pour ta confiance !"
];

function repondre(message) {
  if (message.toLowerCase().includes("bonjour")) {
    return messages[0];
  }
  if (message.toLowerCase().includes("menu")) {
    return "MENU GEDE SATELLITE:\n1. Forfait Internet\n2. Activation\n3. Support";
  }
  return messages[2];
}

console.log(repondre("bonjour"));
