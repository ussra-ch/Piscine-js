function round(num){
    let temp = num - 0.5
    if (temp > parseInt(num)){
        return parseInt(num) + 1
    }else{
        return parseInt(num)
    }
}