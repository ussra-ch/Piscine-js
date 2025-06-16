const is = {}
function num(x){
    return Number.isInteger(x)
}

function nan(x){
    return Number.isNaN(x)
}


is['num'] = num
