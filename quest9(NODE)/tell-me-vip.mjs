import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const dir = args[0];
let result = [];
let str = '';
 
try {
    const entries = await readdir(dir);
    for (const fileName of entries) {
        const fullPath = `${dir}/${fileName}`;
        const FirstName = fileName.split('_')[0];
        const LastName = fileName.split('_')[1].split('.')[0];
        let fileContent = await readFile(fullPath, 'utf8');
        const parsed = JSON.parse(fileContent);
        for(const [key , value] of Object.entries(parsed)){
            if(key === 'answer' && value === 'yes'){
                result.push(`${LastName} ${FirstName}`)
            }
        }
    }
    result = result.sort()
    result.forEach((el , i)=>{
        str += `${i + 1}. ` + el
        if (i !== result.length - 1) {
            str += '\n'
        }
  });
  await writeFile('vip.txt', str);

} catch (err) {
    console.error(err);
}