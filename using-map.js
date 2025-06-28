function citiesOnly(obj){
    let ret = []
    let test = obj.map(({ city, temperature })  => ({ [city]: temperature }))
    for (let i of test){
        ret.push(Object.keys(i)[0])

    }
    return ret
}

function upperCasingStates(input){
    let ret = input.map(i => usr(i));
    function usr(sentence){
        let tmp = sentence.split(" ")
        let word = ''
        if (tmp.length > 1){
            for (let i = 0; i < tmp.length; i++){
                word += tmp[i][0].toUpperCase()
                word += tmp[i].slice(1, tmp[i].length)
                if (i < tmp.length-1){
                    word += ' '
                }
            }
        }else{
            word += tmp[0][0].toUpperCase()
            word  += tmp[0].slice(1, tmp[0].length) 
        }
        return word
    }
    return ret
}


function fahrenheitToCelsius(arr){
    return arr.map(i => used(i))
    function used(f){
        f = f.split('°')
        let t = Number(f[0])
        let out = String(Math.floor((t - 32) * 5/9)) + '°C'
        return out
    }
}


function trimTemp(tmp){
    // console.log(typeof tmp);
    
    let arr = tmp.map(tmp => usr1(tmp))
    function usr(str){
        let rgx = /\s+/g
        return str.replace(rgx, "")
    }
    function usr1(obj){
        let t = {
            ...obj, 
            temperature : usr(obj.temperature)}
        return t
    }
    return arr
}

function tempForecasts(obj){
    
    return obj.map(i => used(i))
    function used(f){
        let tempTrim = usr1(f)
        tempTrim.state = Cap(tempTrim.state)
        let temCel = String(Math.floor((Number(tempTrim.temperature.slice(0, tempTrim.temperature.length - 2)) - 32) * 5/9)) + '°Celsius'
        let ret = temCel + ' in ' + String(f.city) + ', ' + String(tempTrim.state)
        return ret
    }
    function usr(str){
        let rgx = /\s+/g
        return str.replace(rgx, "")
    }
    function usr1(obj){
        let t = {
            ...obj, 
            temperature : usr(obj.temperature)}
        return t
    }
    function Cap(sentence){
        let tmp = sentence.split(" ")
        let word = ''
        if (tmp.length > 1){
            for (let i = 0; i < tmp.length; i++){
                word += tmp[i][0].toUpperCase()
                word += tmp[i].slice(1, tmp[i].length)
                if (i < tmp.length-1){
                    word += ' '
                }
            }
        }else{
            word += tmp[0][0].toUpperCase()
            word  += tmp[0].slice(1, tmp[0].length) 
        }
        return word
    }
//'38°Celsius in Pasadena, California'
}

console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]));
