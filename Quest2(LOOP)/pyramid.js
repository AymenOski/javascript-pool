function pyramid(str, num) {
  let result = '';

  for (let i = 1; i <= num; i++) {
    let spaces = str.length * (num - i);
    result += ' '.repeat(spaces) + str.repeat(((i-1) * 2) + 1); 
    if (i !== num) {
      result += '\n';
    }
  }

  return result;
}

// console.log(pyramid('{}' , 20));
