const readline = require('readline');
const calcDay = require('./modules/calc-day');



const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.write(`Que voulez vous obtenir : 
    1) Noël
    2) Anniversaire
    3) Vacances
    0) Quitter
`);

reader.question('Votre choix : ', (response) => {
    const choice = parseInt(response);

    switch (choice) {
        case 1:
            const nbChristmas = calcDay.fromChristmas();

            if(nbChristmas > 0)  {
                console.log(`Prochain Noël dans ${nbChristmas}`);
            }
            else {
                console.log('C\'est Noël');
            }

            closeApp();
            break;
        case 2:
            reader.question("Quel est le jour de votre anniversaire :", function(dateInput) {

                reader.question("Quel est le mois : ", function(monthInput) {

                    const dateBirthdate = parseInt(dateInput);
                    const monthBirthdate = parseInt(monthInput);

                    if(!isNaN(dateBirthdate) && !isNaN(monthBirthdate)) {
                        const nbBirthdate = calcDay.fromBirthdate(monthBirthdate, dateBirthdate);
            
                        if(nbBirthdate > 0)  {
                            console.log(`Vous prenez une année dans ${nbBirthdate}`);
                        }
                        else {
                            console.log('Bon anniversaire!');
                        }
                    }
                    else {
                        console.log('Date d\'anniversaire invalide');
                    }

                    closeApp();
                });
            })
            break;
        case 3:
            const nbHolidays = calcDay.fromHolidays();

            if(nbHolidays > 0)  {
                console.log(`Prochain vacance dans ${nbHolidays} (pour les gamins)`);
            }
            else {
                console.log('Les enfants sont en vacances (pas vous ;) )');
            }

            closeApp();
            break;
        case 0:
            console.log("Merci de ne pas avoir utiliser notre programme");
            closeApp();
            break;
        default:
            console.log("Ce n'est pas un choix valide");
            closeApp();
            break;
    }
})

const closeApp = () => {
    console.log('Au revoir');
    reader.close();
}


