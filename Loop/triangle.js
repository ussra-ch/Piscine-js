function triangle(str,n){
    let ret = '', temp = 1

    for (let i =0; i < n; i++){
        for (let j = 0; j < temp; j++){
            ret += str
        }
        ++temp
        if (i !== n-1){
            ret += '\n'
        }
    }

    return ret
}

console.log(triangle('*', 7));
