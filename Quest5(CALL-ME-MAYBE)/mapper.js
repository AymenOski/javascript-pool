const map = (arr, fn) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result
}

const flatMap = (arr, fn) => {
    // [1 , 2 , [4 , 5]] -> [1 , 2 , 4 ,5]
    arr = map(arr ,fn);
    let result = [];
    for(let i = 0 ; i < arr.length ;i++){
        if (Array.isArray(arr[i])){
            for(let j = 0 ; j < arr[i].length ;j++){
                result.push(arr[i][j])
            }
            continue;
        }
        result.push(arr[i]);
    }
    return result;
}