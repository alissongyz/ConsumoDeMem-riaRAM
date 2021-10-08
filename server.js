const http = require('http');
const host = 'hhtp://localhost';
const port = 3000;
const stats = require('./pcRamUsage');

http.createServer((req, res) =>{
    var url = req.url;
    if(url === '/stats'){
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end('<p>Seja bem vindo ao vizualizador de consumo de Memoria Ram /n Para acessar digite na barra de pesquisa: localhost:3000/stats</p>');
    }
}).listen(port, ()=> console.log(`Server is running in ${host}:${port}`));