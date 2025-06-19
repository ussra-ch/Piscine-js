function repeat(str, num){
    let ret = ''
    for (let i = 0; i < num; i++){
        ret += str
    }
    return ret
}

console.log(repeat('us', 2))