//https://complex-humor-1df.notion.site/Trabalhando-com-Caminhos-no-Node-js-node-path-34ccc8c2db9680cabbebfc74b8cc75b4

const path = require ('node:path');

const dir = 'src';
const file = 'app.js';

const fullPath = path.join (dir, file);

console.log (fullPath);

const relativePath = '../arquivos/relatorio.pdf';

const absolutePath = path.resolve (relativePath);

console.log (absolutePath);

const fileName = path.basename (relativePath);

console.log (fileName);

const folder = path.dirname (absolutePath);

console.log (folder);

const ext = path.extname (absolutePath);

console.log (ext);


//https://complex-humor-1df.notion.site/Trabalhando-com-Informa-es-do-Sistema-no-Node-js-node-os-34fcc8c2db9680bdb9e7de37b0b9ef29