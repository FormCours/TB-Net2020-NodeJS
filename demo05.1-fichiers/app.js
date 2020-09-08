const fs = require('fs');

fs.readFile('./datas/demo.txt', (error, data) => {
    console.info(" - Lecture Async");

    if(error) {
        console.log(error);
    }
    else {
        console.log(data);
        console.log(data.toString('utf8'));
    }
});

const contenu = "Zaza Vanderquack!";
fs.writeFile('./datas/new.txt', contenu, (error) => {
    console.info(" - Ecriture d'un fichier");
    
    if(error) {
        console.log(error);
    }
    else {
        console.log('Ecriture OK');
    }
})