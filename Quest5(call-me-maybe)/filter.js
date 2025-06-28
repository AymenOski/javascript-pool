const filter = (arr, fn) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const reject = (arr, fn) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const partition = (arr, fn) => {
    return [filter(arr, fn), reject(arr, fn)];
}