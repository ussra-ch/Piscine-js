function round(num){
    if (num=== Infinity || num === -Infinity){
        return num
    }
   // hssab dyal nbr entier
   let nbrEntier = 0, state = false
   if (num < 0){
    num = -num
    state = true
   }   
   for (let i = 1; i < num; i++){
        if (nbrEntier < num){
            nbrEntier += 1
        }
   }
   let sub = num - nbrEntier
   if (sub >= 0.5){
        nbrEntier = nbrEntier + 1
   }
   if (state){
    return -nbrEntier
   }else{
    return nbrEntier
   }
}

function ceil(num){
    if (num === Infinity || num === -Infinity){
        return num
    }
    if (num === 0){
        return 0
    }
    let nbrEntier = 0, state = false
   if (num < 0){ 
    for (let i = 0; i >= num; i--){
        nbrEntier = i
    }
    return nbrEntier
   }   
   for (let i = 0; i < num; i++){
        if (nbrEntier < num){
            nbrEntier += 1
        }
   }
//    if (state){
//     return -nbrEntier
//    }else{
    return nbrEntier
//    }
}

function floor(num){
        if (num === Infinity || num === -Infinity){
        return num
    }
    let nbrEntier = 0, state = false
   if (num < 0){
    num = -num
    state = true
    for (let i = 0; i >= -num; i--){
        nbrEntier = i
    }

    return nbrEntier-1
   }   
   for (let i = 1; i < num; i++){
        if (nbrEntier < num){
            nbrEntier += 1
        }
   }
   return nbrEntier
}

function trunc(num){
    if (num === Infinity || num === -Infinity){
        return num
    }
    
        let nbrEntier = 0;
     if (num > 0xfffffffff) { 
       num -= 0xfffffffff
       nbrEntier += 0xfffffffff
    }else if (num < -0xfffffffff) {
        num += 0xfffffffff;
        nbrEntier -= 0xfffffffff;
    }

    let i = 0
    if (num < 0){
        while (i >= num){   
            nbrEntier = i;
            i--
        }
        return nbrEntier;                
    }

    while (i <= num){       
        nbrEntier = i;
        i++
    }

    return nbrEntier;
}




console.log(ceil(-3));
// console.log(Math.ceil(4));
