function multiply(a, b){
    if (a == 0 || b == 0){
        return 0
    }
    let signA = false, signB = false
    if (a < 0){
        signA = true
        a = -a
    }
    if (b < 0){
        signB = true
        b = -b
    }
    if (a == Infinity || a == -Infinity 
        || b == Infinity || b == -Infinity
    ){
        if (signA == signB){
            return Infinity
        }else{
            return -Infinity
        }
    }
    let ret = 0
    while (a > 0){
        ret += b
        --a
    }
    if (signA == signB){
        return ret
    }else{
        return -ret
    }
}

console.log(multiply(0, Infinity));
console.log(BigInt() < 0xfffffffff);