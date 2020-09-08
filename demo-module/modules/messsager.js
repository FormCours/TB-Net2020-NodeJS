const messager = {

    hello: () => {
        console.log("Bienvenue !");
    },

    say: (msg) => {
        console.log(`Message : ${msg}`);
    },

    goodbye: () => {
        const heure = (new Date()).getHours();

        const msg = heure >= 22 ? "Bonne nuit" : (heure >= 17 ? "Bonne soirée" : "Au revoir")
        console.log(msg);
    }
}

module.exports = messager;