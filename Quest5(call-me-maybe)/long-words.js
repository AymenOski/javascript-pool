const longWords = (arr) => arr.every(x => typeof x ==="string" && x.length >= 5);

const oneLongWord = (arr) => arr.some(x => typeof x ==="string" && x.length >= 10)

const noLongWords = (arr) => arr.every(x => typeof x ==="string" && x.length < 7);;