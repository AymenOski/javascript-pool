/*
Instructions
The objective of this exercise is to merge objects into a new object depending on the values type.

Create a function named fusion that:

For array types, you will concatenate them.

fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
For strings, you must concatenate them with a space.

fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }
If they are numbers, you must add them.

fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }
If it is an object, you must join them recursively.

fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
In case of type mismatch you must replace it with the value of the second object (if it exists).

fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }

*/


const fusion = (obj1, obj2) => {
    const a = Object.entries(obj1);
    const b = Object.entries(obj2);
    const resultObj = {};

    const onlyInObj1 = Object.keys(obj1).filter(key => !obj2.hasOwnProperty(key));
    const onlyInObj2 = Object.keys(obj2).filter(key => !obj1.hasOwnProperty(key));
    const trulyUniqueKeys = [...onlyInObj1, ...onlyInObj2];
    
    a.forEach(([key1, val1]) => {
        b.forEach(([key2, val2]) => {
            if (key1 === key2) {
                if (typeof val1 === 'number' && typeof val2 === 'number') {
                    resultObj[key1] = val1 + val2;
                } else if (typeof val1 === 'string' && typeof val2 === 'string') {
                    resultObj[key1] = `${val1} ${val2}`;
                } else if (Array.isArray(val1) && Array.isArray(val2)) {
                    resultObj[key1] = [...val1, ...val2];
                } else if ( // 
                    typeof val1 === 'object' && typeof val2 === 'object' &&
                    !Array.isArray(val1) && !Array.isArray(val2) &&
                    val1 !== null && val2 !== null // null is an object too 
                ) {
                    resultObj[key1] = fusion(val1, val2);
                } else {
                    resultObj[key1] = val2; // In case of type mismatch you must replace it with the value of the second object
                }
            }
        });
    });

    trulyUniqueKeys.forEach((key) => {
        resultObj[key] = obj1.hasOwnProperty(key) ? obj1[key] : obj2[key];
    });

    return resultObj;
};