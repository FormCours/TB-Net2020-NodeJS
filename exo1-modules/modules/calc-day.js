const ONE_DAY = 1000 * 60 * 60 * 24;

const getNextDate = (month, date) => {
    const today = new Date();

    let year = today.getFullYear();
    if(today.getMonth() > month ||
    (today.getMonth === month && today.getDate() > date)) {
        year++;
    }

    return new Date(year, month, date)
}

const getDiffDays = (targetDate) => {
    const today = new Date();

    if (today.getMonth() === targetDate.getMonth() && today.getDate() === targetDate.getDate()) {
        return 0;
    }

    const diff = targetDate.getTime() - today.getTime();
    return Math.ceil(diff / ONE_DAY);
}

const calcDay = {

    fromChristmas : () => { 
        // Obtenir la date de noel (Check année du prochain)
        const christmas = getNextDate(11, 25);
        
        // Obtenir la diff de jour
        const nbJour = getDiffDays(christmas);

        return nbJour;
    },

    fromBirthdate : (month, date) => {
        const birthdate = getNextDate(month - 1, date);
        return getDiffDays(birthdate);
    },

    fromHolidays : () => {
        const month = (new Date()).getMonth();

        if (month === 6 || month === 7) {
            return 0;
        }

        const nextHolidays = getNextDate(6, 1);
        return getDiffDays(nextHolidays);
    },
}

module.exports = calcDay;