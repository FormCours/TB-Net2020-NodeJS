const readline = require('readline');
const axios = require('axios');

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon-species/__id__";

const demanderId = () => {

    return new Promise((resolve, reject) => {
        
        const reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        // Async!
        reader.question('Entrer un numero de pokemon : ', response => {
            const id = parseInt(response);

            if (!isNaN(id)) {
                resolve(id);
            }
            else {
                reject();
            }

            reader.close();
        });
    })
}

demanderId().then(id => {

    const url = URL_POKEMON.replace("__id__", id);

    axios.get(url)
    .then(({data}) => {
        // handle success
        const name = data.names.find(n => n.language.name === 'fr').name || data.name;
        const genus = data.genera.find(g => g.language.name === 'fr').genus || 'Inconnu';

        console.log(`Le pokemon est « ${name} - ${genus} »`);
    })
    .catch((error) => {
        if(error.response.status === 404) {
            console.log("Pokemon non trouvé");
        }
        else {
            console.log("Erreur lors de la requete...");
        }
    })

}).catch(() => {
    console.log("Veuillez entrer une nombre correct");
    console.log("Au revoir !");
})