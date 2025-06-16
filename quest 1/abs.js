function isPositive(x){
    if (x <= 0){
        return false
    }else{
        return true
    }
}

function abs(x){
    if (x == 0){
        return 0
    }else if (isPositive(x)){
        return x
    }else{
        return -x
    }
}