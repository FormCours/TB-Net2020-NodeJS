const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("HOME 1");

    next();

    res.writeHead(200);
    res.end("Hello sur la page home !");
});

router.get('/', (req, res) => {
    console.log("HOME 2");
    
    // Traitement
})

router.get('/test', (req,res) => {
    res.writeHead(200);
    res.end("Page de test !");
})

router.get('/hello/:nom', (req, res) => {

    console.log(req.params);
    const {nom} = req.params;

    const page = fs.readFileSync(__dirname + '/../views/welcome.ejs', 'utf-8');
    const rendu = ejs.render(page, {nom : nom});


    res.writeHead(200);
    res.end(rendu);
});

router.get('/numero/:nb([0-9]{1,3})', (req, res) => {

    console.log(req.params);
    const {nb} = req.params;

    res.writeHead(200);
    res.end(`Votre nombre est ${nb}`);

})





module.exports = router;