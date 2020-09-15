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

addPerson('Zaza', 'Vanderquack', 13);
addPerson('Riri', 'Duck', 14);