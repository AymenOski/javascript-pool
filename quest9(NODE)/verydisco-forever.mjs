// import { writeFile } from 'node:fs/promises';
// import { variableToBeExported } from './verydisco.mjs';

// await writeFile('verydisco-forever.txt', variableToBeExported)


import { writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const disco = args.length !== 0 ? args.slice(0, 1).join('') : '';

let firstHalf = '';
let secendHalf = '';
let s = [];
let variableToBeExported = '';

if (disco === '') {
  variableToBeExported = '';
} else if (disco.includes(' ')) {
  var newDisco = disco.split(' ');
  newDisco.forEach(element => {
    firstHalf = element.slice(0, Math.ceil((element.length / 2)));
    secendHalf = element.slice(Math.ceil((element.length / 2)));
    s.push(secendHalf + firstHalf);
  });
  variableToBeExported = s.join(' ');
} else {
  firstHalf = disco.slice(0, Math.ceil(disco.length / 2));
  secendHalf = disco.slice(Math.ceil(disco.length / 2));
  variableToBeExported = secendHalf + firstHalf;
}




await writeFile('verydisco-forever.txt', variableToBeExported)
