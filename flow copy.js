function flow(arr){
    return function (...param1){
        // console.log(param1);
        let old = arr[0](...param1)
        
        for (let i = 1; i < arr.length; i++){
            old = arr[i](old)
        }
        return old
    }
}


// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// console.log(flowedFunctions(2, 3) )// -> 25);
