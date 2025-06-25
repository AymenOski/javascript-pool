/*

Instructions
Have you ever pondered the etymology of grep?

Create 4 regular expression variables:

normal: matches with the expression 'hi'.

begin: matches with the expression 'hi', only when it is at the beginning.

end: matches with the expression 'hi', only when it is at the end.

beginEnd: matches with the expression 'hi', only when it is exactly hi.

*/

const normal = /hi/;

const begin = /^hi/;

const end = /hi$/;

// this will match 'hi' at the beginning and end of the `string` 
const beginEnd = /^hi$/;



// this will search inside a `line` and go into the depth
// const beginEnd = /\bhi\b/gi;