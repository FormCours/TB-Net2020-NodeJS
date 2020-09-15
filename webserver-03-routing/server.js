const express = require('express');
const router = require('./config/routes');

// Création du serveur
const server = express();
const port = 8080;

server.use('/', router);

// Demarrage du serveur sur le port 8080
server.listen(port, ()=> {
    console.log(`Server is running at http://127.0.0.1:${port}`);    
})