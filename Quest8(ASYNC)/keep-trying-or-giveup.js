const retry = (maxCount, callback) => {
    let count = 0;
    return async function func(...args){
        try {
            return await callback(...args)
        } catch (error) {
            if (count === maxCount){
                throw error;
            }
            count++;
            return await func(...args)
        }
    };
};

const timeout = (delay ,callback) => {
    let x = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), delay)
    )
    return async function (...args) {
        try {
            return await Promise.race([callback(...args),x])
        } catch (error) {
            throw error
        }
    }
}
