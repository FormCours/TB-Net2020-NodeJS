// Importation du module Mongoose
const mongoose = require('mongoose');


// Configuration pour MongoDB
const mongoDB = 'mongodb://127.0.0.1/Exemple';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Recuperation de la connection
const db = mongoose.connection;

// Gestion d'erreur sur la db mongoDB
db.on('error', () => {
    console.log('MongoDB connection error');
});


// Definition d'un schema mongoose
const personSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age : Number
}, {
    collection: 'Person'
});


const addPerson = (firstname, lastname, age) => {
    const Person = mongoose.model("Person", personSchema);

    const newPerson = new Person({
        firstname: firstname,
        lastname: lastname,
        age: age
    });

    newPerson.save((err, data) => {
        if(err) {
            console.log("Erreur lors de l'ajout !");
        }
        else {
            console.log("Personne ajouté.");
            console.log(data);
        }
    });
}

// addPerson('Zaza', 'Vanderquack', 13);
// addPerson('Riri', 'Duck', 14);
// addPerson('Donald', 'Duck', 30);
// addPerson('Daisy', 'Duck', 29);
// addPerson('Archiblad', 'Gripsou', 70);
// addPerson('Balthazar', 'Picsou', 67);


// -- Recuperation de tout les ducks
const getAllDuck = () => {
    return new Promise((resolve, reject) => {
            const Person = mongoose.model('Person', personSchema);
        
            Person.findOne({lastname: 'Duck'}, (err, data) => {
                if(err) {
                    reject('Erreur lors de la recuperation');
                }
                else {
                    resolve(data);
                }
            })
    });
}

async function demoAsync() {
    console.log('Avant');
    const ducks = await getAllDuck();
    console.log(ducks);
    console.log('Après');
};

demoAsync();