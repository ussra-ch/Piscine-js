function repeat(str, nbr){
    if (nbr < 0 || nbr == Infinity || nbr == -Infinity){
        return 'RangeError'
    }
    if (nbr == 0){
        return ""
    }
    let tmp1 = nbr, ret = '', tmp2 = 0
    while (tmp1 >= 1) {
        tmp1 -= 1
        tmp2 += 1
    }
    while (tmp2 > 0){
        ret += str
        --tmp2
    }
    return ret
}

console.log(repeat('hey ', 4.908));