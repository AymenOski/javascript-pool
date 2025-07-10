const args = process.argv.slice(2);
const disco = args.length !== 0 ? args.slice(0, 1).join('') : '';

let firstHalf = '';
let secendHalf = '';
let s = [];
if (disco === '') {
    process.exit(0);
}
if (disco.includes(' ')) {
    var newDisco = disco.split(' ')
    newDisco.forEach(element => {
        firstHalf = element.slice(0, Math.ceil((element.length / 2)));
        secendHalf = element.slice((Math.ceil(element.length / 2)));
        s.push(secendHalf + firstHalf);
    });
    console.log(s.join(' '));
    process.exit(0)
}
firstHalf = disco.slice(0, (Math.ceil(disco.length / 2)));
secendHalf = disco.slice(Math.ceil((disco.length / 2)))
console.log(secendHalf + firstHalf);

