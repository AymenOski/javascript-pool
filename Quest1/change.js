// const sourceObject = {
//   num: 42,
//   bool: true,
//   str: 'some text',
//   log: console.log,
// }

// -get: a function that takes a key and returns the corresponding value from the sourceObject.
const get = (objKey) => sourceObject[objKey];

// -set: a function that takes a key and a value. Update the value for the corresponding property of the sourceObject and return the value.
const set = (key,value) => sourceObject[key]=value;

/*
// -delete: a function that takes a key and removes the corresponding property from the sourceObject and return
const deleteProperty = (key) => delete sourceObject[key];

// -has: a function that takes a key and returns true if the key exists in the sourceObject
const has = (key) => key in sourceObject;

// -keys: a function that returns an array of all keys in the sourceObject
const keys = (object) => Object.keys(object);

// -values: a function that returns an array of all values in the sourceObject
const values = (object) => Object.values(object);


console.log(values(sourceObject));
*/