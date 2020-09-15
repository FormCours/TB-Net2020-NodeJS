const {getDataFromJson} = require('./modules/file-helper')

getDataFromJson(__dirname + "/datas/students.json").then((dataJson) => {
    // - Obtenir la liste les profs
    console.log(" - Profs :");
    const profs = getProfs(dataJson);
    for (const prof of profs) {
        console.log(prof);
    }
    console.log();
    

    // - Obtenir la liste les éléves
    console.log(" - Etudiants :");
    const students = getStudents(dataJson);
    for (const student of students) {
        console.log(student);
    }
    console.log();

    // - Obtenir la moyenne de chaque section
    // 	Section 1010 - Moyenne 11.66
    // 	Section 1310 - Moyenne 17.5
    // 	Section 1111 - Moyenne 15.5
    console.log(" - Moyenne de chaque section : ");
    for (const result of dataJson.results) {
        const secionId = result.section.code;
        const avgSection = getAvg1(result.students);
        console.log(`${secionId} : ${numberToString(avgSection)}`);
    }
    console.log();
    
    // - Obtenir la moyenne général
    console.log(" - Moyenne général : ");
    const allStudents = dataJson.results.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.students], []);

    const avgGobal1 = getAvg1(allStudents);
    const avgGobal2 = getAvg2(allStudents);
    console.log(numberToString(avgGobal1));
    console.log(numberToString(avgGobal2));
    

}).catch((error) => {
    console.log("Une erreur s'est produite ! :(");
});

const numberToString = (number) => {
    return number.toLocaleString('fr-BE', {maximumFractionDigits : 2});
}

const getAvg1 = (allStudents) => {
    let count = 0;
    let total = 0;
    for (const student of allStudents) {
        if(student.year_result !== null) {
            total += student.year_result;
            count++;
        }
    }
    return total / count;
}

const getAvg2 = (allStudents) => {
    const data = allStudents.filter(s => s.year_result !== null);    

    const total = data.reduce((acc, curr) => acc + curr.year_result, 0)
    return total / data.length;
}


const getStudents = (dataJson) => {
    const students = new Set();
    for (const result of dataJson.results) {
        for (const student of result.students) {
            const { firstname, lastname } = student;
            students.add(`${firstname} ${lastname}`);
        }
    }
    return students;
}

const getProfs = (dataJson) => {
    const profs = new Set();
    for (const result of dataJson.results) {
        const { firstname, lastname } = result.professor;
        profs.add(`${firstname} ${lastname}`);
    }
    return profs;
}





