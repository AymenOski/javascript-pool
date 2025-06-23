/* 
Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. 

There are three exceptions:
Convert numbers which are divisible by 3 to "NA".

Convert numbers which are divisible by 5 to "SA".

Convert numbers which are divisible by 3 and 5 to "NASA".

*/

const nasa = (N) => {
    let str = "";
    let n = N.toString();
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
             if (i === N){
                str += "NASA";
                break;
            }
            str += "NASA "
        } else if (i % 3 === 0) {
             if (i === N){
                str +="NA";
                break;
            }
            str += "NA "
        } else if (i % 5 === 0) {
             if (i === N){
                str += "SA";
                break;
            }
            str += "SA "
        } else {
            if (i === N){
                str += i;
                break;
            }
            str += i + " "
        }
    }
    return str;
}
