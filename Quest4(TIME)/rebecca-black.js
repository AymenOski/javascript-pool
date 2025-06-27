const isFriday = (date) => {
    const n = String(date).split(' ')[0];
    if (n === "Fri") {
        return true;
    }
    return false;
}

const isWeekend = (date) => {
    const n = String(date).split(' ')[0];
    if (n === "Sun" || n === "Sat") {
        return true;
    }
    return false;
}

const isLeapYear = (date) => {
    const n = String(date).split(' ')[3];
    return (n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0);
}

const isLastDayOfMonth = (date) => {
    const n = String(date).split(' ')[2];

    if (n !== "28" && n !== "29" && n !== "30" && n !== "31") {
        return false;
    }

    const temp = date;
    
    if ((String(new Date(temp.setHours(temp.getHours() + 24))).split(" ")[2]) === "01") {
        return true;
    }
    return false
}
