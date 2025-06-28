const vowels = /\w/g
function vowelDots(str){
    if (str == ''){
        return ''
    }
    let ret = ''
    let arr = str.match(vowels)
    
    for (let i of arr){
        ret += i
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U'){
            ret += '.'
        }
    }
    return ret
}
console.log(vowelDots(''));