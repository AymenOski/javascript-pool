import { writeFile } from 'node:fs/promises';
import { variableToBeExported } from './verydisco.mjs';

await writeFile('verydisco-forever.txt', variableToBeExported)
