/*
Instructions
FINALLY, you got the names. But you could forget it... loose it... How could you write it without puting the surprise in danger?!

Create a tell-it-cypher.mjs script that:

Takes a file as first argument

Takes one of these keywords as second argument:

encode: convert your file to base64, then save the result in a cypher.txt file.

decode: convert your file from base64, then save the result in a clear.txt file.

Could take a string as third argument and use it as the new file name. Extension must be precised.
*/

import { readFile, writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const file = args[0];
const command = args[1];
const outputFile = args[2];

try {
    const content = await readFile(file, 'utf8');
    let result = '';

    if (command === 'encode') {
        result = Buffer.from(content, 'utf8').toString('base64');
    } else if (command === 'decode') {
        result = Buffer.from(content, 'base64').toString('utf8');
    }
    const defaultName = command === 'encode' ? 'cypher.txt' : 'clear.txt';
    const output = outputFile || defaultName;
    await writeFile(output, result, 'utf8');

} catch (err) {
    console.error(err);
}