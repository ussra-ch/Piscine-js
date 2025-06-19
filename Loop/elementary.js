function multiply(a, b){
    let a_State = false, b_State = false, mul = 0
    if (a < 0){
        a = -a
        a_State = true
    }
    if (b < 0){
        b = -b
        b_State = true
    }
    while (a > 0){
        mul += b
        --a
    }
    if ((a_State && b_State) || (!a_State && !b_State)){
        return mul
    }else{
        return -mul 
    }
}

function divide(a, b){
    let a_State = false, b_State = false, div = 0
    if (a < 0){
        a = -a
        a_State = true
    }
    if (b < 0){
        b = -b
        b_State = true
    }
    while (a >= b){
        // console.log(a)
        a = a - b
        ++div
    }
    if ((a_State && b_State) || (!a_State && !b_State)){
        return div
    }else{
        return -div
    }
}
function modulo(a, b){
    let a_State = false, b_State = false, div = 0
    if (a < 0){
        a = -a
        a_State = true
    }
    if (b < 0){
        b = -b
        b_State = true
    }
    while (a >= b){
        a = a - b
    }
    if (a === 0){
        return 0
    }
    if ((!a_State && b_State) || (!a_State && !b_State)){
        return a
    }else{
        return -a
    }
}
console.log(modulo(34, 78))