/*

Instructions
Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.

*/


const split = (str, separator = '') => {
    let result = [];
    let temp = '';
    let i = 0;
    if (separator.length === 0) {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }

    while (i < str.length) {
        
        if (str.slice(i, i + separator.length) === separator) {
            result.push(temp);
            temp = '';
            i += separator.length;
        } else {
            temp += str[i];
            i++;
        }
    }

    result.push(temp);

    return result;
};
// console.log(split('ggg - ddd - b', ' - ')); // ['ggg', 'ddd', 'b']

const join = (arr,seperator = '') => {
    let s = "";

    for (let i = 0 ; i < arr.length ; i++) {
        if (i === arr.length-1){
        s +=  arr[i];
        break;    
        }
        s +=  arr[i] + seperator ;
    }
    return s;
}

// console.log(join(['ee', 'ff', 'g', ''], ','));


