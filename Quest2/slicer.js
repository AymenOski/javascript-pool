/*

Instructions
Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

string or array to process.

starting index.

optional ending index.

*/

const slice = (arr, start, end = arr.length) => {
    if (start < 0) {
        start += arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    if (arr.length == 0) {
        return arr;
    }
    let newArr = typeof arr === "string" ? "" : [];
    
    for (let i = start; i < end; i++) {
        if (typeof arr === "string") {
            newArr += arr[i];
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(slice("abcdef", 2));

