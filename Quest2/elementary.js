

// multiply that acts like the * operator, without using it.
const multiply = (a, b) => {
    if (a < 0 && b < 0) {
        return multiplyHelper(a, b);
    } else if (a < 0 || b < 0) {        
        return -multiplyHelper(a, b);
    }
    return multiplyHelper(a, b);
}

const multiplyHelper = (a, b) => {
    let n = 0;
    // local a and b => we can change them witout effecting the origin
    let [x, y] = checker(a, b)
    
    for (let i = 0; i < y; i++) {
        n += x;
    }
    
    return n;
}

const checker = (a, b) => {
    if (a < 0 && b < 0) {
        return [-a, -b];
    }
    if (a < 0) {

        a = -a;
    }
    if (b < 0) {

        b = -b;
    }    
    return [a, b];
}
// divide that acts like the integer division operator /, without using it.
const divide = (a, b) => {
    let n = 0;
    let [x, y] = checker(a, b)
    for (let i = 0; i < x; i++) {
        if (multiply(y, i) > x) {
            n = i - 1;
            break;
        }
    }
    if (a < 0 && b < 0) {
        return n;
    } else if (a < 0 || b < 0) {
        return -n;
    }
    return n;
}

// modulo that acts like the % operator, without using it.
const modulo = (a, b) => {
    let s = divide(a, b);
    if (a - (multiply(s, b)) !== 0) {
        return a - (multiply(s, b));
    } else {
        return 0;
    }
}

// console.log(multiply(-123, 22));
// console.log(divide(123, -22));
// console.log(modulo(17, 2));