function cutFirst(str){
    return str.slice(2, str.length)
}

function cutLast(str){
    return str.slice(0, str.length - 2)
}

function cutFirstLast(str){
    return str.slice(2, str.length - 2)
}

function keepFirst(str){
    return str.slice(0, 2)
}

function keepLast(str){
    return str.slice(str.length - 2)
}

function keepFirstLast(str){
    if (str.length < 4 ){
        return str
    }else if (keepFirst(str) === keepLast(str) && str.length === 4){
        return keepFirst(str)
    }else{
        return [keepFirst(str), keepLast(str)].join('')
    }
}
console.log(keepFirstLast('afaf'))