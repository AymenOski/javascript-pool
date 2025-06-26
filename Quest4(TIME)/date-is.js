const isValid = (date) => {

    if (typeof date === "string" || Number.isNaN(date.valueOf())) {
        return false;
    } else if (typeof date === "number" || date instanceof Date) {
        if (date == "Invalid Date") {
            return false;
        }
        return true;
    }
};

const isAfter = (date1, date2) => {

    if (date1 instanceof Date || typeof date1 ==="number"){
    return date1 > date2;
    }
    return false;
}   

const isBefore = (date1, date2) => {
    if (date1 instanceof Date || typeof date1 ==="number")  {
        return date1 < date2;
    }
    return false;
}

const isFuture = (date1) => {
    if (date1 instanceof Date || typeof date1 ==="number"){
        return date1 > Date.now();
    }
    return false;
}

const isPast = (date1) => {
    if (date1 instanceof Date || typeof date1 ==="number"){
        return date1 < Date.now();
    }
    return false;
}
