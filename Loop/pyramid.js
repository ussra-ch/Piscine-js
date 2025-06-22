function pyramid(str, n){
    let ret = '', star = 1

    for (let i = 0; i < n; i++){
        let sub = ((2 * n)-1) - star
        for (let j = 0; j < sub / 2; j++){
            ret += ' '.repeat(str.length)
        }
        for (let t = 0; t < star; t++){
            ret += str
        }
        star = star + 2
        if (i !== n-1){
            ret += '\n'
        }
    }

    return ret
}
console.log(pyramid('a', 7));
