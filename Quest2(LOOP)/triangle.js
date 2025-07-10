function triangle(str, num) {
  let result = '';

  for (let i = 1; i <= num; i++) {
    result += str.repeat(i);
    if (i !== num) {
      result += '\n';
    }
  }

  return result;
}
