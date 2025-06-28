function filterShortStateName(words){
    return words.filter((word) => word.length < 7)
}

function filterStartVowel(words){
    // console.log(w);
    
    return words.filter((word) => vowel(word))
    function vowel(str){
        let rgx = /\b[aeiouAEIOU]\w*/g
        let sp = str.split(" ")
        return rgx.test(sp[0])
    }
}

function filter5Vowels(words){
    return words.filter((word) => vowel(word))
    function vowel(str){
        let s = "aeiouAEIOU"
        let count = 0
        for (let i of str){
            if (s.includes(i)){
                count ++
            }
        }
        if (count >= 5){
            return true
        }
        return false
    }
}

function filter1DistinctVowel(words){
    return words.filter((word) => vowel(word))
    function vowel(str){
        let s = "aeiouAEIOU"
        let tmp = ''
        let state = false
        for (let i of str){
            if (s.includes(i) && !state){
                tmp = i.toUpperCase()
                state = true
            }
            if (s.includes(i) && i.toUpperCase() !== tmp){
                return false
            }
        }
        return true
    }
}

function multiFilter(obj){
    return obj.filter((word) => usr(word))
    function usr(obj){
        let state = true
        let s = "aeiouAEIOU"
        if (!((obj.capital).length >= 8)){
            state = false
        }
        if (s.includes(obj.name[0])){
            state = false
        }
        let tmp = false
        for (let i of obj.tag){
            if (s.includes(i)){
                tmp = true
                break
            }
        }
        if (!tmp){
            state = false
        }
        if (obj.region == 'South'){
            state = false
        }
        return state
    }
}

// the key capital contains at least 8 characters.

// the key name does not start with a vowel.

// the key tag has at least one vowel.

// the key region is not "South"
 