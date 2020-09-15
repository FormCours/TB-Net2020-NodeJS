const express = require('express');


// Création du serveur
const server = express();
const port = 8080;

// Définition des routes
server.get('/', (request, response) => {

    response.send('Hello World');
});

server.get('/test', (req, res) => {

    res.writeHead(200, { 'Content-type' : 'text/html'});
    res.end(`
    <h1>Page de Test</h1>
    <div>
    <p>Hello</p>
    <p>Techno.Bel</p>
    </div>
    `);
})


// Lancer le serveur
server.listen(port, () => {
    console.log(`Server is running on 127.0.0.1:${port}`);
})