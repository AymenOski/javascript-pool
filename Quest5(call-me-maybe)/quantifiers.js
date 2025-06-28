const every = (arr ,fn ) => {
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i], i ,arr) === false){
            return false;
        }
    } 
    return true
}

const some = (arr ,fn ) => {
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i], i ,arr) === true){
            return true;
        }
    } 
    return false;
}

const none = (arr ,fn ) => {
    let n = true;
    
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i], i ,arr) === true){
            n = false
            break;
        }
    }
    return n
}