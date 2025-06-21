function chunk(arr, size){
    let count = 0, idx = 0
    let res = [[]]
    for (let i in arr){
        if (count < size){
            if (!res[idx]) {
                res[idx] = [];
            }
            res[idx].push(arr[i])
            count++
        }else{
            idx += 1
            if (!res[idx]) {
                res[idx] = [];
            }
            res[idx].push(arr[i])
            count = 0
        }
    }
    return res
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
