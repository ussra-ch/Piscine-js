function fold(arr, func, accumulator){
    let v = accumulator
    for (let i = 0; i < arr.length; i++){
        v = func(v, arr[i])
    }
    return v
}

function foldRight(arr, func, accumulator){
    let v = accumulator
    for (let i = arr.length-1; i >= 0; i--){
        v = func(v, arr[i])
    }
    return v
}

function reduce(arr, func, accumulator){
    if (arr.length < 1){
        return
    }
    let start = 0
    if (typeof accumulator == 'undefined'){
        accumulator = arr[0]
        start = 1
    }
    let v = accumulator
    for (let i = start; i < arr.length; i++){
        v = func(v, arr[i])
    }
    return v
}

function reduceRight(arr, func, accumulator) {
    if (arr.length < 1 && typeof accumulator === 'undefined') {
        throw new TypeError("error");
    }
    let start, v;
    if (typeof accumulator === 'undefined') {
        v = arr[arr.length - 1];
        start = arr.length - 2;
    } else {
        v = accumulator;
        start = arr.length - 1;
    }
    for (let i = start; i >= 0; i--) {
        v = func(v, arr[i]);
    }
    return v;
}

// const adder = (a, b) => a + b
// console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3));
// console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1));
// console.log(reduce([1, 2, 3], adder));