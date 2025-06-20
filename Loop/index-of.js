function indexOf(arr, value, idx){
    let i
    if (idx !== undefined){
        i = idx
    }else{
        i = 0
    }
    while (i < arr.length){
        if (arr[i] === value){
            return i
        }
        i++
    }
    return -1
}

function lastIndexOf(arr, value, idx){
     let i
    if (idx !== undefined){
        i = idx
    }else{
        i = arr.length
    }
    while (i >= 0){
        if (arr[i] === value){
            return i
        }
        i--
    }
    return -1
}

function includes(arr, value){
    let i = 0
     while (i < arr.length){
        if (arr[i] === value){
            return true
        }
        i++
    }
    return false
}
// console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))