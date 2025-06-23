const chunk = (arr , num) => {
    let newArr = [];
    let row = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (i % num === 0 && i != 0){
            newArr.push(row);
            row = [];
        }
        row.push(arr[i]);
        if (i === arr.length-1 ){
            newArr.push(row);
        }
    }
    return newArr;
}

// console.log(chunk([1,2,3,4,5,6,7],2));
