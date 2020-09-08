const calcDay = require('./modules/calc-day');

const nbChristmas = calcDay.fromChristmas();
const nbBirthdate = calcDay.fromBirthdate(2, 6);
const nbHolidays = calcDay.fromHolidays();


if(nbChristmas > 0)  {
    console.log(`Prochain Noël dans ${nbChristmas}`);
}
else {
    console.log('C\'est Noël');
}


if(nbBirthdate > 0)  {
    console.log(`Vous prenez une année dans ${nbBirthdate}`);
}
else {
    console.log('Bon anniversaire!');
}


if(nbHolidays > 0)  {
    console.log(`Prochain vacance dans ${nbHolidays} (pour les gamins)`);
}
else {
    console.log('Les enfants sont en vacances (pas vous ;) )');
}