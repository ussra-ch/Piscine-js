function currify(func){
    return function rec(...params){
        if (params.length == func.length){
            return func(...params)
        }
        return (...nextparam) => rec(...params, ...nextparam)
    }
}

// const mget-them-all.js