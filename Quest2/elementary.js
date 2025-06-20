

// multiply that acts like the * operator, without using it.
const multiply = (a,b) => {
    let n = 0;
    for (let i=0 ; i < b ; i++){
        n += a
    }
    return n;
}

// divide that acts like the integer division operator /, without using it.
const divide = (a,b) => {
    let n = 0;
    for (let i=0 ; i < a ; i++){
        if (b * i > a ){
            n = i-1 ;
            break;
        }
    }
    return n;
}

// modulo that acts like the % operator, without using it.
const modulo = (a,b) => {
    let s = divide(a,b);
    if (a-(s*b) !==0 ){
        return a-(s*b);
    }else {
        return 0;
    }
}

console.log(multiply(11,7));
console.log(divide(24,2));
console.log(modulo(25,2));


