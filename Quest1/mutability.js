const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

// const clone1 = { ...person }; // shalow copy : it give us copy of the first level of the object
// and a reference to the next levels
// const clone2 = { ...person };

// structuredClone
// const samePerson = structuredClone(person); // deep copy : it give us a copy of the entire object
// samePerson is 100% a copy

const samePerson = person; // samePerson is a reference to person , 100% not copy so 100% origin

const clone1 = structuredClone(person); // deep copy : it give us a copy of the entire object
const clone2 = structuredClone(person); 

person.age++;
person.country = 'FR';

// console.log(clone1.country);
// console.log(clone2.country);
// console.log(samePerson.country);
