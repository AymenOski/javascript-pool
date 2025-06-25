/*

Instructions
Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.



*/

const sameAmount = (str, regex1, regex2) => {

    const globalRegex1 = new RegExp(regex1.source, regex1.flags + 'g');
    const globalRegex2 = new RegExp(regex2.source, regex2.flags + 'g');
    
    const matches1 = [...str.matchAll(globalRegex1)].length;
    const matches2 = [...str.matchAll(globalRegex2)].length;
    return matches1 === matches2;
};

