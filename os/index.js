const os = require ('node:os');

const plataforma = os.platform ();

console.log ('Plataforma do SO:', plataforma);

const arquitetura = os.arch ();

console.log ('Arquitetura do SO:', arquitetura);

const processadores = os.cpus ();

console.log ('Informações da CPU:', processadores[0]);

const memoria = os.totalmem ();

console.log ('Total de memória do PC:', memoria / 1024 / 1024 / 1024, 'GB');

const livre = os.freemem ();

console.log ('Memória livre:', livre / 1024 / 1024 / 1024, 'GB');

//https://complex-humor-1df.notion.site/exercicio-2-34fcc8c2db9680419bb9c9fb0d187e42?pvs=73