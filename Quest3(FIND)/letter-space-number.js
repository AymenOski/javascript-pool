/*

Create a function named letterSpaceNumber that accepts a string; 
returning an array with every instance of a letter, followed by a space,
followed by a number, only if that number has only one digit,
and is not followed by any letter.

Examples
console.log(letterSpaceNumber('example 1, example 20'))
// output: ['e 1']

*/

const letterSpaceNumber = (str) => {
    const regex = str.match(/([a-zA-Z])\s(\d(?!\w))/g);
     if (!regex) {
        return [];
     }
     return regex;
};

// console.log(letterSpaceNumber('example 1, example 2000'));
// const match = str.match(/([a-zA-Z]+)\s+(\d{2})/) // { letters: 'example', number: '20' }
// const match = str.match(/([a-zA-Z]+)\s+(\d{1})/) // { letters: 'example', number: '1' }
// const match = str.match(/([a-zA-Z]+)\s+(\d+)/) // { letters: 'example', number: '2000' }
