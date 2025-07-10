const get = (src, path) => {
    const keys = path.split('.');
    let current = src;
    
    for (let key of keys) {
        if (current === undefined || current === null) return undefined;
        console.log(current);
        current = current[key];
        
    }
    
    return current;
}