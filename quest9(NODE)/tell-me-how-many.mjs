import { readdir } from 'node:fs/promises';
import { isAbsolute } from 'node:path';

const args = process.argv.slice(2);
const folder = args[0];

try {
  const entries = await readdir(folder); // uses process.cwd() to get the current working directory wether it's absolute or relative
    
  console.log(entries.length);
  
} catch (err) {
  console.error(err);
}

// usage : node quest9\(NODE\)/tell-me-how-many.mjs "./quest9(NODE)/guests"