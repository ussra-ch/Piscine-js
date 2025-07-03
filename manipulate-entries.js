function filterEntries(arr){
    let key = arr[0]
    let value = arr[1]

    if (value < 50){
        return true
    }
    return false
}

function mapEntries(){

}

function reduceEntries(cart, acc){
    let values = Object.values(cart)
    for (let i of values){
        acc = i + acc
    }
    return acc
}

// that will return the total calories of a cart.
function totalCalories(cart){
    // i need reduce here
    let keys = Object.keys(cart)
    let values = Object.values(cart)

    return reduceEntries(cart, 0)
}

function lowCarbs(cart){
    let 
}


function cartTotal(){

}