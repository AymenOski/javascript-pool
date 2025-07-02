/*
Instructions
Create a function named invert which takes an object and returns a new one with its keys and values inverted.

*/

const invert = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const invertedObj = new Object();

    for(let i = 0 ; i < keys.length ;i++){
        invertedObj[values[i]] = keys[i];
    }
    return invertedObj;
}

// const original = {
//   name: "aymen",
//   age: "22",
//   city: "oujda"
// };

// console.log(invert(original));
