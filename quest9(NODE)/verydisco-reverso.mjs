import { readFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const fileName = args.length !== 0 ? args.slice(0, 1).join('') : '';

try {
    const fileContent = await readFile(fileName, 'utf8');
    
    let firstHalf = '';
    let secendHalf = '';
    let s = [];
    let variableToBeExported = '';
    
    if (fileContent === '') {
        variableToBeExported = '';
    } else if (fileContent.includes(' ')) {
        var newfileContent = fileContent.split(' ');
        newfileContent.forEach(element => {
            firstHalf = element.slice(0, Math.floor((element.length / 2)));
            secendHalf = element.slice(Math.floor((element.length / 2)));
            s.push(secendHalf + firstHalf);
        });
        variableToBeExported = s.join(' ');
    } else {
        firstHalf = fileContent.slice(0, Math.floor(fileContent.length / 2));
        secendHalf = fileContent.slice(Math.floor(fileContent.length / 2));
        variableToBeExported = secendHalf + firstHalf;
    }
    // console.log(variableToBeExported.includes('\n'));
    console.log(variableToBeExported.trim());
    
} catch (error) {
    throw Error(error)
}


