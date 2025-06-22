function RNA(str){
    let ADN = ''
    for (let i of str){
        if (i === 'G'){
            ADN += 'C'
        }else if (i === 'C'){
            ADN += 'G'
        }else if (i === 'T'){
            ADN += 'A'
        }else if (i === 'A'){
            ADN += 'U'
        }
    }
    return ADN
}

function DNA(str){
    let RNA = ''
    for (let i of str){
        if (i === 'G'){
            RNA += 'C'
        }else if (i === 'C'){
            RNA += 'G'
        }else if (i === 'A'){
            RNA += 'T'
        }else if (i === 'U'){
            RNA += 'A'
        }
    }
    return RNA
}