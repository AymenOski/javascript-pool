const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

const filterKeys = (obj, callBack) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
        if (callBack(key)) {
            newObj[key] = value;
        }
    }
    return newObj;
}
// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

const mapKeys = (obj, callBack) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
        newObj[callBack(key)] = value;
    }
    return newObj;
}
// console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }


const reduceKeys = (obj , callBack , initialValue) => {
    const keys = Object.keys(obj);
    let acc = initialValue !== undefined ? initialValue : keys[0];
    let i = 0;
    for (let i = initialValue !== undefined ? 0 : 1; i < keys.length; i++) {
        acc = callBack(acc , keys[i])
    }
    return acc;
}
// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
