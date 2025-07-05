const throttle = (fn, waitingTime) => {
    let canRun = true;

    return (...args) => {
        if (canRun) {
            canRun = false;
            fn(...args);
            setTimeout(() => { canRun = true }, waitingTime);
        }
    }
}

const opThrottle = (fn, waitingTime, obj = { trailing: false, leading: false }) => {
    let n;
    if (obj.trailing && obj.leading) {
        let hasRunLeading = false;
        return function (...args) {
            if (!hasRunLeading) {
                hasRunLeading = true;
                fn(...args);
                setTimeout(() => { fn(...args) }, waitingTime);
            }
        }
    }
    if (obj.trailing) { // trailing togelled on
        return function (...args) {
            if (n === undefined) {
                n = '';
                setTimeout(() => { n = undefined; fn(...args); }, waitingTime);
            }
        }
    } else if (obj.leading) { // leading togelled on
        return function (...args) {
            if (n === undefined) {
                n = '';
                fn(...args);
                setTimeout(() => { n = undefined; }, waitingTime);
            }
        }
    } else {
        // need to prevent from calling because both option are false ->means : so no fn call after or before the waiting time
        return () => 0;
    }
}