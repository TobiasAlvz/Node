const fs = require ('node:fs');

const content = 'Maçã,Banana,Uva,Laranja';

fs.writeFile ('./arquivo.txt', content, 'utf-8', error => {
  if (error) {
    console.log ('Erro ao escrever o arquivo:', error.message);
    return;
  }

  console.log ('Arquivo criado com sucesso de forma assíncrona.');
});
