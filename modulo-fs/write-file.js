const fs = require ('node:fs');

try {
  //writeFileSync() → cria ou sobrescreve arquivo.
  //./arquivo.txt → nome do arquivo.
  // - `utf-8` → formato do texto.
  // - `try/catch` → tratamento de erros.
  fs.writeFileSync ('./arquivo.html', '<H1>Olá, mundo</H1>', 'utf-8');
  console.log ('Arquivo criado com sucesso.');
} catch (error) {
  console.log ('Erro ao escrever o arquivo:', error.message);
}
