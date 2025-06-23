/*

Instructions
Create a function named reverse which accepts an array or a string. 
It should work like Array.reverse(), and of course you cannot use that.

*/

const reverse = (arr) => {
    let newArr = typeof arr === "string" ? "" : [];

    for (let i=arr.length-1 ; i >= 0 ; i--){
        if (typeof arr === "string") {
            newArr += arr[i];
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}