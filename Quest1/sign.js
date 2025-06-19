const sign = (num) => {
    if (num === 0) {
        return 0;
    }
    if (num > 0) {
        return 1;
    }else if (num < 0){
        return -1;
    }
} 

const sameSign = (a , b) => {
    if (a==0 && b==0) {
        return true;
    }

    if ((a < 0 && b < 0) || (a > 0 && b > 0)){
        return true;
    }else {
        return false;
    }
}