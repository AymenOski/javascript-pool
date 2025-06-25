/*

Instructions
Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

Your RegEx should be stored in a variable named vowels.

a, e, i, o and u are considered as vowels here.

*/

const vowels = (/[aeiou]/gi);

const vowelDots = (str) => {

   
    
    return str.replace(vowels, match => match + ".");
}

// /g is the global flag, which allows the regex to find all matches in the string, not just the first one.

// str.replace if we want to replace a pattren in a string with something else.
// str.match if we want to find all matches of a pattern in a string and return them as an array. (finding patterns in a string)

