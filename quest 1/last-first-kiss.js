function first(x){
    return x[0]
}

function last(x){
    return x[x.length - 1]
}

function kiss(x){
    let ret = []
    ret.push(last(x), first(x))
    return ret
}
