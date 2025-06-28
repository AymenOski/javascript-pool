const adder = (arr ,initialValue = 0) => {
    return arr.reduce((acc,val) => acc + val ,initialValue);
}

const sumOrMul = (arr , initialValue = 1) => {
    return arr.reduce((acc , val , index) => {
        if (index === 0 && initialValue == 1) return val;
        return val % 2 === 0 ? acc * val : acc + val }
        ,initialValue);
    }

const funcExec = (arr , initialValue = 0) => {
    return arr.reduce((acc , fun) => fun(acc), initialValue)
}

// console.log(sumOrMul([18, 17, 7, 13, 25], 12));
