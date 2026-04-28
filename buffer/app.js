const buffer = Buffer.from ('Olá Mundo');

console.log (buffer);
console.log (buffer.toString ());

// Tamanho em bytes
console.log(buffer.length);

// Acessando byte específico
console.log(buffer[0]);