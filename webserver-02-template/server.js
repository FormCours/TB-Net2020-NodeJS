const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

// Création du serveur
const server = express();
const port = 8080;

// Routing
server.get('/', (req, res) => {
    const page = fs.readFileSync('./views/home.ejs', 'utf-8');
    const renduHtml = ejs.render(page);
    res.writeHead(200);
    res.end(renduHtml);
}); 

// Demarrer le serveur
server.listen(port, () => {
    console.log('Serveur is ON');
});