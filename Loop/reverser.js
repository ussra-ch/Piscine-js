function reverse(input){
    let val = []
    for (let i = input.length-1; i >= 0; i--){
        val.push(input[i])
    }
    if (typeof input === 'string'){
        return val.join('')
    }
    return val
}

console.log(reverse([1, 2, 3]));
