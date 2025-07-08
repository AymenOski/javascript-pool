// Create the function named flow that will act like the _.flow([funcs]) from lodash.

const flow = (arrOfFunctions) => {
  return (...args) => {
      
      let result = arrOfFunctions[0](...args)

    for (let i = 1; i < arrOfFunctions.length; i++) {
      result = arrOfFunctions[i](result)
    }

    return result
  }
}


// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])

// console.log(flowedFunctions(2, 3));
