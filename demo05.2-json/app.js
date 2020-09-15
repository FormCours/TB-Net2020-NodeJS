const {readFile} = require('fs');

const getDataFromJson = (filename) => {
    return new Promise((resolve, reject) => {
        readFile(filename, (error, data) => {
            if(error) {
                reject(error);
                return;
            }
            try {
                const json = JSON.parse(data);
                resolve(json);
            } catch (error) {
                reject(error)
            }
        })
    })
}

getDataFromJson('./datas/people.json').then(data => {
    for (const person of data.people) {
        console.log(`${person.firstname} ${person.lastname}`);
    }
}).catch(error => {
    console.log(`Une erreur c'est produite !`);
    console.log(error);
})