const matchCron = (cron, date) => {
    let first = cron.split(' ');
    
    for (let i = 0; i < first.length; i++) {
        
        if (first[i] === '*') {
            continue;
        }

        switch (i) {
                case 0:
                    if (first[i] != String(date.getMinutes())){
                        return false;
                    }
                    break;
                case 1:                    
                    if (first[i] !== String(date.getHours())){
                        return false;
                    }
                    break;
                case 2:
                    if (first[i] !== String(date.getDate())){
                        return false;
                    }
                    break;
                case 3:
                    if (first[i] !== String(date.getMonth()+1)){
                        return false;
                    }
                    break;
                case 4:
                    if (first[i] !== String(date.getDay())){
                        return false;
                    }
                    break;
            }
    }
    return true;
}

matchCron('* * * 2 *', new Date('2021-02-01 00:00:00'));