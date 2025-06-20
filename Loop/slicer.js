function slice(str, startIndex, endIndex){
    let end = str.length
    if (endIndex !== undefined){
        end = endIndex
    }
    if (startIndex < 0){
        startIndex = str.length + startIndex
    }
    if (end < 0){
        end = str.length + end
    }
    let ret = []
    for (let i = startIndex; i < end; i++){
        ret.push(str[i])
    }
    if (typeof str === 'string'){
        return ret.join('')
    }
    return ret
}

console.log(slice('123456789', 2))