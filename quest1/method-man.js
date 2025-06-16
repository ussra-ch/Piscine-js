function words(x){
    return x.split(' ')
}

function sentence(x){
    return x.join(' ')
}

function yell(x){
    return x.toUpperCase()
}

function whisper(x){
    return "*" + x.toLowerCase() + "*"
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
