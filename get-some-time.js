function firstDayWeek(nbr, str){
    if (isNaN(Number(str))){
        return false
    }
    let arr 
    let y = Number(str)
    if ( y % 400 == 0){
        arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }else if (y % 100 == 0){
        arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }else if (y % 4 == 0 ){
        arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }else{
       arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
    let d, m
    d = (nbr * 7) - 6
        for (let i in arr){
            
            if (d <= arr[i]){
                m = Number(i) + 1
                break
            }
            d = d - arr[i]
        }
    let day = String(d) 
    let month = String(m) 
    if (m < 10){
        month = '0' + String(m) 
    }
    if (d < 10){
        day = '0' + String(d) 
    }
    return day + '-' + month + '-' + String(y)
}

// firstDayWeek(1, '1000')
console.log(firstDayWeek(52, '1000'));
