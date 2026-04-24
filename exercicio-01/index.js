import fs from 'node:fs';

// Criar arquivo
export function createFile(text) {
  fs.writeFileSync('meuarquivo.txt', text, 'utf-8');
  console.log('Arquivo criado com sucesso!');
}

// Atualizar conteúdo
export function updateFile(text) {
  fs.writeFileSync('meuarquivo.txt', text, 'utf-8');
  console.log('Arquivo atualizado com sucesso!');
}

// Mostrar conteúdo
export function showFile() {
  const content = fs.readFileSync('meuarquivo.txt', 'utf-8');
  console.log(content);
}

// Excluir arquivo
export function deleteFile() {
  fs.unlinkSync('meuarquivo.txt');
  console.log('Arquivo excluído com sucesso!');
}