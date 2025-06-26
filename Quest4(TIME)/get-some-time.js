const firstDayWeek = (week, year) => {
    let date = addingWeeks(week , year);
    
    date = searchingForMonday(date , year);
    if(year < 1000 ){
        date.setFullYear(date.getFullYear()-1900);
        date.setHours(date.getHours()+24)
    }

    const d = date.toISOString().slice(0, 10).split('-');
    const result = [d[2], d[1], d[0]];
    return result.join('-');
}

const searchingForMonday = (date , year) => {
    let k = String(date).split(' ')[0];
    
    while(k !== "Mon"){
        // return anyday in that year
        if (date.getDate() === 1 && date.getMonth() === 0){
            return date;
        }
        var n = new Date(date.setDate(date.getDate()-1));
        k = String(n).split(' ')[0];
    }    
    return n;
}

const addingWeeks = (week , year) => {
    const date = new Date(Number(year) ,0 ,1);
    return new Date(date.setDate(date.getDate()+ 7 * (week - 1)));
}