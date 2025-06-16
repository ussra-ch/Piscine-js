function getAcceleration(obj){
    if (typeof obj['f'] === "number" && typeof obj['m'] === "number"){
        return obj['f'] / obj['m']
    }else if (typeof obj['Δv'] === "number" && typeof obj['Δt'] === "number"){
        return obj['Δv'] / obj['Δt']
    }else if (typeof obj['t'] === "number" && typeof obj['d'] === "number"){
        return (2 * obj['d']) / (obj['t'] ** 2)
    }else{
        return "impossible"    }
}