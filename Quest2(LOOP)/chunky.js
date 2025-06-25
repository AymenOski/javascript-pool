/*

Instructions
Create a function named chunk which accepts an array and an integer representing a size.

Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements.
The length of each sub-array is denoted by the size argument.

If the array cannot be split evenly, the last sub-array will contain the remaining elements.

*/

const chunk = (arr , num) => {
    let newArr = [];
    let row = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (i % num === 0 && i != 0){
            newArr.push(row);
            row = [];
        }
        row.push(arr[i]);
        if (i === arr.length-1 ){
            newArr.push(row);
        }
    }
    return newArr;
}

// console.log(chunk([1,2,3,4,5,6,7],2));
