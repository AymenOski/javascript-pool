const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
const filterValues = (obj , callBack) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
        if(callBack(value)){
            newObj[key] = value
        }
    }
    return newObj;
}
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

const mapValues = (obj ,callBack) => {
    const newObj = {};
    for(const [key,value] of Object.entries(obj)){
        newObj[key] = callBack(value);
    }
    return newObj;
}
// console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }


const reduceValues = (obj , callBack , initialValue = 0) => {
    let acc = initialValue;
    for(const [key,value] of Object.entries(obj)){
        acc = callBack(acc ,value )
    }
    return acc;
}
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37
