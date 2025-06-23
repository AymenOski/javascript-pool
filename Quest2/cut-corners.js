//  Some restrictions apply:
// 
// You may not use strings conversion to do it
// 
// No bitwise operator
// 
// No % operator

// round: which behaves similar to Math.round().
function round(int) {
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let counter = 0;
    while (!(int < 1 && int > -1)) {
        int -= 1;
        counter++;
    }
    if (int < 0.5) {
        if (neg) {
            return -counter;
        } else {
            return counter;
        }
    } else {
        if (neg) {
            return -counter - 1;
        } else {
            return counter + 1;
        }
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
const trunc = (n) => {
    if (!Number.isFinite(n)) return 0; // Handle NaN, Infinity
    if (n === 0) return 0;

    let i = 0;
    const step = 1000000; // Large step for efficiency
    if (n > 0) {
        // Fast-forward for large numbers
        while (i + step <= n) i += step;
        // Slow-down for small numbers
        while (i + 1 <= n) i++;
    } else {
        // Fast-forward for large negative numbers
        while (i - step >= n) i -= step;
        // Slow-down for small numbers
        while (i - 1 >= n) i--;
    }
    return i;
};