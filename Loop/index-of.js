function indexOf(idx, value){
    let i
    if (idx !== 0){
        i = idx
    }else{
        i = 0
    }
    while (i < arr.length ){
        if (i === value){
            return i
        }
    }
    return -1
}
