const readline = require("readline");

// Créer un outils qui permet d'integagir avec la console
const reader = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

console.log("Hello World");


reader.question("Entrer un message : ", response => {

    reader.write(`Votre message est : ${response}`);
})
