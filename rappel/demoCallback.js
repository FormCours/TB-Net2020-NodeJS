

const demoCallback = (name, callback) => {

    // Traitement Async
    setTimeout(() => {
        console.log("Affichage " + name);
        
        callback();
    }, 1000);
}


demoCallback("Toto", () => {
    console.log("Fini");
});
