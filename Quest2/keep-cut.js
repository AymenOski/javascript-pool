/*

Instructions
Create some functions, which each take a string as an argument:

cutFirst: returns the string with the first 2 characters removed.

cutLast returns the string with the last 2 characters removed.

cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

keepFirst returns only the first 2 characters.

keepLast returns only the last 2 characters.

keepFirstLast returns the first 2 characters, and the last 2 characters.

*/

const cutFirst = (str) => str.slice(2);

const cutLast = (str) => str.slice(0, str.length - 2);

const cutFirstLast = (str) => cutLast(cutFirst(str));

const keepFirst = (str) => str.slice(0, 2);

const keepLast = (str) => str.slice(str.length - 2, str.length);
// or : const keepLast = (str) => str.slice(-2);

const keepFirstLast = (str) => str.length <= 3 ? str : keepFirst(str) + keepLast(str);

// console.log(keepFirstLast("12"));
