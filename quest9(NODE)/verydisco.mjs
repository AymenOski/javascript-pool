const args = process.argv.slice(2);
const disco = args.length !== 0 ?  args.slice(0, 1).join('') : '';

const verydisco = () => {
    let firstHalf = '';
    let secendHalf = '';    
    let s ='';
    if (disco === ''){
        return '';
    }
    if (disco.includes(' ')) {        
        var newDisco = disco.split(' ')
        newDisco.forEach(element => {
            if (element.length % 2 === 0) {
                 firstHalf = element.slice(0, (element.length / 2));
                 secendHalf = element.slice((element.length / 2))
                 s += secendHalf + firstHalf + ' ';
            } else {
                 firstHalf = element.slice(0, (element.length / 2) + 1);
                 secendHalf = element.slice((element.length / 2) + 1);
                 s += secendHalf + firstHalf + ' ';
            }
        });
        return s;
    }
        if (disco.length % 2 === 0) {
             firstHalf = disco.slice(0, (disco.length / 2));
             secendHalf = disco.slice((disco.length / 2))
        } else {
             firstHalf = disco.slice(0, (disco.length / 2) + 1);
             secendHalf = disco.slice((disco.length / 2) + 1)
        }

    return secendHalf + firstHalf;
}
// console.log(verydisco());

