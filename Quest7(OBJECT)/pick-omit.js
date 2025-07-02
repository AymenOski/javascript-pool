/*

Instructions
Create two functions which takes an object and a string or array of strings. They should return a new object which:

pick: contains only those keys which appear in the string or array of strings.

omit: contains only those keys which do not match the string, or do not appear in the array of strings.

Those functions are pure and must not modify the given object It should ignore properties from the prototype chain

*/

const pick = (obj , arrOrString) => {
    const newObj = new Object();
    const keys = Object.keys(obj);

    if(Array.isArray(arrOrString)){
        keys.forEach(el => {
            if(arrOrString.includes(el)){
                newObj[el] = obj[el];
            }
        })
    }else if (typeof arrOrString === 'string'){
        keys.forEach( el => {
            if(arrOrString === el){
                newObj[el] = obj[el];
            }
        })
    }
    return newObj;
}

const omit = (obj , arrOrString) => {
    const newObj = new Object();
    const keys = Object.keys(obj);

    if(Array.isArray(arrOrString)){
        keys.forEach(el => {
            if(!arrOrString.includes(el)){
                newObj[el] = obj[el];
            }
        })
    }else if (typeof arrOrString === 'string'){
        keys.forEach( el => {
            if(arrOrString !== el){
                newObj[el] = obj[el];
            }
        })
    }
    return newObj;
}

const original = {
  name: "aymen",
  age: "22",
  city: "oujda"
};

console.log(pick(original, ['city']));
