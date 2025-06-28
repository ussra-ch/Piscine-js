function adder(arr, init = 0){
    return arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, init)
}

function sumOrMul(arr, init = 0){
    return arr.reduce(
  (accumulator, currentValue) => {if (currentValue % 2 == 0){
    return accumulator * currentValue
  }else{
    return accumulator + currentValue
  }},
   init,);
}


function funcExec(arr, init = 0){
    return arr.reduce((p, f) => f(p), init)
}
console.log(sumOrMul([29, 23, 3, 2, 25]));
