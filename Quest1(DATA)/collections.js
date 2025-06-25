const arrToSet = (arr) => new Set(arr);

const arrToStr = (arr) => arr.join('');

const setToArr = (set) => [...set];
// or alternatively: Array.from(set)

const setToStr = (set) => arrToStr(setToArr(set));

const strToArr = (str) => [...str];
// or alternatively: Array.from(str)

const strToSet = (str) => arrToSet(str.split(''));
// or alternatively:   => arrToSet(strToArr(str));

const mapToObj = (map) => Object.fromEntries(map);

const objToArr = (obj) => Reflect.ownKeys(obj).map(key => obj[key]);

const objToMap = (obj) => new Map(Object.entries(obj)); // we turned the object into a 2d array first then we have a map

const arrToObj = (arr) => Object.assign({}, arr);

const strToObj = (str) => Object.assign({}, strToArr(str))
// or alternatively:   => arrToObj(strToArr(str));

const superTypeOf = (value) => {
    if (value === null) return 'null'; // 1995 javascript bug , it should not be typeof object
    if (Array.isArray(value)) {
        return 'Array';
    }
    if (value instanceof Set) {
        return 'Set';
    }
    if (value instanceof Map) {
        return 'Map';
    }
    switch (typeof value) {
        case 'string':
            return 'String';
        case 'number':
            return 'Number';
        case 'boolean':
            return 'Boolean';
        case 'function':
            return 'Function';
        case 'undefined':
            return 'undefined';
        case 'object':
            return 'Object';
    }
}

/*
const  mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.__proto__); // Object [Set] {} => every object you declare inherits from Object.prototype properties and methods
console.log(mySet.__proto__ === Set.prototype); // true
// alternatively, you can use Object.getPrototypeOf(mySet) to get the prototype of an object instead of using __proto__ directly becuase __proto__ is not a standard way to access the prototype chain and may not be available in all environments.
// this is how instance of operator works under the hood
// and we can say that it works as follows:
*/
/*-------
const instanceOf = (obj, constructor) => {
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        if (proto === constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
    }
    --------*/
// we are checking if the prototype of the object is equal to the prototype of the constructor

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set('a', 3)
map.set(3, 'c')
map.set(4, 'd')

/*

console.log(arrToSet(arr)); // Set { 1, 2, 3 }
console.log(arrToStr(arr)); // '1213'
console.log(setToArr(set)); // [1, 2, 3]
console.log(setToStr(set)); // '123'
console.log(strToArr(str)); // ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)); // Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)); // { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)); // [45, 75, 24]
console.log(objToMap(obj)); // Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)); // { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)); // { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o'

*/