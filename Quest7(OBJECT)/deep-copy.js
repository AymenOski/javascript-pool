const deepCopy = (input) => {
    let result = [];
    if (Array.isArray(input)) {
        input.forEach((val) => {
            if (Array.isArray(val)) {
                result.push(deepCopy(val));
            } else {
                result.push(val);
            }
        })
    }else {
        return structuredClone(input);
    }
    return result;
}