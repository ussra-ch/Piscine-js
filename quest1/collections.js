function arrToSet(x){
    return new Set(x)
}
function arrToStr(s){
    return s.join('')
}
function setToStr(x){
    return x.join('')
}
function setToArr(x){
    return [...x]
}
function strToArr(x){
    return x.split('')
}
console.log(setToStr([2, 3, 4]))