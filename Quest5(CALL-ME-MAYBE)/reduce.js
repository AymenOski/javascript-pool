const fold = (arr, fn, acc) => {
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc;
}

const foldRight = (arr ,fn ,acc) => {
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[arr.length-i-1], arr.length-i-1, arr)
    }
    return acc;
}

const reduce = (arr ,fn ) => {
    if (arr.length === 0) {
        throw new Error('reduce() of empty array with no initial value')
    }
    let acc = arr[0];
    for(let i =1 ; i < arr.length; i++) {
        acc = fn(acc , arr[i] , i ,arr);
    }
    return acc;
}

const reduceRight = (arr ,fn ) => {
    if (arr.length === 0) {
        throw new Error('reduce() of empty array with no initial value')
    }
    let acc = arr[arr.length-1];
    for(let i =1 ; i < arr.length; i++) {
        acc = fn(acc , arr[arr.length-i-1] , arr.length-i-1 ,arr);
    }
    return acc;
}