 // get the number that is "close enough" to an integer
    const getIntegerPart = (n) => {
        
        let intPart = 0;
        if (n >= 0) {
            while (intPart + 1 <= n) intPart++;
        } else {
            while (intPart > n) intPart--;
        }
        
        return intPart;
};

const getTruncIntegerPart = (n) => {
    let intPart = 0;
    if (n >= 0) {
        while (intPart + 1 <= n) intPart++;
    } else {
        while (intPart - 1 >= n) intPart--;
    }
    
    return intPart;
};

// round: which behaves similar to Math.round().
const round = (num) => {
    const EPSILON = 1e-12;// Small threshold for floating-point comparison
    let i = 0, j = 0;
    let temp1 = num, temp2 = num;

    // Math.abs
    const abs = (x) => x < 0 ? -x : x;

   
    const isCloseToInteger = (n) => {
        let intPart = getIntegerPart(n);
        // Check if decimal part is small enough
        
        return abs(n - intPart) < EPSILON;
    };
    
    while (!isCloseToInteger(temp1) && i <= 5) {
        // console.log(temp1);
        temp1 -= 0.1; 
        // console.log(i);
        
        i++;        
    }

    while (!isCloseToInteger(temp2) && j <= 5) {
        temp2 += 0.1; 
        j++;
    }
       
    // Going down got us fewer steps to the integer
    if (i < j) {
        return getIntegerPart(temp1);
        // If the steps are equal, round toward +infinity
    } else if (i == j) {
        return getIntegerPart(temp2);
    } else {
        return getIntegerPart(temp2);
    }
};

// floor: which behaves similar to Math.floor().
const floor = (num) => {
    if (num === 0) return 0;
    if (num > 0) {
        if (round(num) > num) {
            return round(num) - 1;
        } else {
            return round(num);
        }
    } else if (num < 0) {
        if (round(num) < num) {
            return round(num);
        } else {
            return round(num) - 1;
        }
    }
};

// ceil: which behaves similar to Math.ceil().
const ceil = (num) => {
    if (num === 0) return 0;
    if (num > 0) {
        if (round(num) > num) {
            return round(num);
        } else {
            return round(num) + 1;
        }
    } else if (num < 0) {
        if (round(num) < num) {
            return round(num) + 1;
        } else {
            return round(num);
        }
    }
};

// trunc: which behaves similar to Math.trunc().
const trunc = (num) => getTruncIntegerPart(num);

// const nums = [3.7, -3.7, 3.1, -3.1, 5.5, -5.5, 0, 0.5, -0.5];
// console.log(nums.map(round));  // [4, -4, 3, -3, 6, -5, 0, 1, 0] 

const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0];
console.log(nums.map(round)); // [3, -3, 3, -3, 0]
console.log(nums.map(floor)); // [3, -4, 2, -3, 0]
console.log(nums.map(ceil));  // [4, -3, 3, -2, 0]
console.log(nums.map(trunc)); // [3, -3, 2, -2, 0]
// const nums = [3.7, -3.7, 3.1, -3.1, 5.5, -5.5, 0, 0.5, -0.5];
// console.log(nums.map(round));  // [4, -4, 3, -3, 6, -5, 0, 1, 0] 

// const nums = [Math.PI];
// console.log(nums.map(round), [3, -3, 3, -3, 0]);