// const fs = require ('node:fs');

// const stream = fs.createReadStream ('texto.txt', 'utf-8');

// stream.on ('data', chunk => {
//   console.log ('Parte recebida:');
//   console.log (chunk);
// });

const fs = require ('node:fs');

const stream = fs.createWriteStream ('saida.txt');

stream.write ('Olá\n');
stream.write ('Aprendendo Streams');
stream.end ();
