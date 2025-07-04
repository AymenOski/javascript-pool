const debounce = (fn, waitingTime) => {
    let id;
    return (...args) => {
        if (id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, waitingTime) // excute the function only after the time ends
    }
}
const opDebounce = (fn, waitingTime, leading) => {
    let n ;
    if (leading) {
        return function (...args) {
            if (n === undefined) {
                n = '';
                fn(...args);
                setTimeout(() => { n = undefined; }, waitingTime);
                // we make n = undefined agains after the delay->else if the waitingTime didnt end yet
                // other calls of the opDebounce will go to else instead 
            }
        }
    } else {
        return debounce(fn, waitingTime)
    }
}



