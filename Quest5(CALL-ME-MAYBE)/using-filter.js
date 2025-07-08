const filterShortStateName = (arr , len = 7) => arr.filter(x => x.length < len);

const filterStartVowel = (arr) => arr.filter(x => x.match(/^[aeiou]/gi));

const filter5Vowels = (arr,len = 5) => {
  return arr.filter(word => {
    const regex = word.match(/[aeiou]/gi);
    return regex && regex.length >= len; // if the condition is true keep it in the array
  });
};

const filter1DistinctVowel = (arr) => {
  return arr.filter(word => {
    const regex = word.match(/[aeiou]/gi);
    console.log(regex.join(''));
    
    let check = checkUniqnuese(regex.join(''));
    return check;
  })
}

// console.log(filter1DistinctVowel(["Alabama", "anas", "shut_up", "eux"]));

function checkUniqnuese(regex) {
  for (let i = 0; i < regex.length; i++) {
    for (let j = 0; j < regex.length; j++) {
      if (i !== j) {
        if (regex[j].toLowerCase() !== regex[i].toLowerCase()) {
          return false;
        }
      }
    }
    return true;
  }
}

function multiFilter(arrOfobj){
  
  return arrOfobj.filter(x => {
      if (x.capital.length >= 8 &&
      (!/^[aeiou]/i.test(x.name)) &&
      /[aeiou]+/i.test(x.tag) &&
      x.region !== "South"){
          return true;
        }
    })
}

// console.log(multiFilter([
//    {
//     name: "aymen",
//     capital: "cairo123",
//     tag : "tag",
//     region :"Nortsh"
//     },
//     {
//       name: "anas",
//       capital: "cairo123",
//       tag : "tag",
//       region :"South"
//     }
// ]));
// console.log(multiFilter(
// [
//     { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//     { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
//     {
//       tag: 'MO',
//       name: 'Missouri',
//       capital: 'Jefferson City',
//       region: 'Midwest',
//     },
//     {
//       tag: 'PA',
//       name: 'Pennsylvania',
//       capital: 'Harrisburg',
//       region: 'Northeast',
//     },
//     {
//       tag: 'RI',
//       name: 'Rhode Island',
//       capital: 'Providence',
//       region: 'Northeast',
//     },
//   ]
// ));