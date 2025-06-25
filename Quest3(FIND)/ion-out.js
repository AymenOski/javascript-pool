/*

Instructions
Create a function named ionOut, that receives a string and returns 
an array with every word containing 'ion' following a 't'. 
The words should be returned without the 'ion' part.

*/

function ionOut(str) {

    const regex = /\w*t(?=ion)\w*/g;

    const matches = str.match(regex) || [];

    return matches.map(word => word.replace("ion", ""));


}
