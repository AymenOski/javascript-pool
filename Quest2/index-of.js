// includes: which returns true if the value was found in the array, and false otherwise.
const includes = (arr,value) => {
    for (const val of arr){
        if (value === val) {
            return true;
        }
    }
    return false;
}

// indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
const indexOf = (arr , value , StartIndex = 0) => {
    if (StartIndex < 0){
        StartIndex = StartIndex + arr.length
    }
    if (StartIndex > arr.length){
        StartIndex = arr.length-1;
    }
    for (let i=StartIndex ; i < arr.length ; i++){
        if (value === arr[i]){
            return i;
        }
    }
    return -1;
}

// lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
const lastIndexOf = (arr , value , StartIndex = arr.length-1) => {
    if (StartIndex < 0){
        StartIndex += arr.length;
    }
    if (StartIndex > arr.length){
        StartIndex = arr.length-1;
    }
    
      for (let i = StartIndex; i >= 0; i--) {
        if (value === arr[i]){
            return i;
        }
    }
    return -1;
}