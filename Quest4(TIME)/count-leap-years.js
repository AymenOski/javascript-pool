const countLeapYears = (date) => {
    let n = date.getFullYear();
    let c = 0;
    console.log(n);
    
    for (let i=1 ; i < n ; i++){
        if (isLeapYear(i)) {
            c++
        }
    }
    
    return c;
}

const isLeapYear = (n) => {
    return (n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0);
}

console.log(countLeapYears(new Date('0001-12-01')));
