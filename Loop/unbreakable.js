function split(str, sub){
    let res = [], word = ''
    let i = 0

    if (sub.length === 0){
        for (i of str){
            res.push(i)
        }
        return res
    }
    while (i < str.length){
            if (str.slice(i, i + sub.length) === sub){
                res.push(word);
                word = ''
                i += sub.length;
            }else{
                word += str[i]
                i++;
            }
    }
    res.push(word)
    return res
}

function join(arr, sub) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
            res += sub;
    }

    return res.slice(0, res.length-sub.length);
}

console.log(split('a b c', ' '));
