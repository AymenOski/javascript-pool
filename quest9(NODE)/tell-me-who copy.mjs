import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';

const args = process.argv.slice(2);
const dir = args[0];
let result = [];

try {
    const entries = await readdir(dir);
    for (const fileName of entries) {
        const fullPath = `${dir}/${fileName}`;
        const FirstName = fileName.split('_')[0];
        const LastName = fileName.split('_')[1].split('.')[0];
        let fileContent = await readFile(fullPath, 'utf8');
        if (fileContent.trim() === '') console.log('');
        result.push(`${LastName} ${FirstName}`)
    }
    result = result.sort()
    result.forEach((el , i)=>{
    console.log(`${i + 1}.`,el);
  });
} catch (err) {
    console.error(err);
}


/*
Instructions
Create a tell-me-who.mjs script that takes your directory path as an argument and print the names of all the guests in the console.

The output must print one guest per line, in ascending alphabetic order, and formated as following: Number. Lastname Firstname (starting from 1).

*/

// usage : node tell-me-who.mjs ~/Desktop/piscine-js/guests | grep "Aaisha"
// Aaisha_Mcculloch.json

