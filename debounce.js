function debounce(func, d) {
    let t
    return function (...args) {
        clearTimeout(t)
        t = setTimeout(() => {
            func(...args)
        }, d)
    }
}


function opDebounce(func, d, leading = false) {
    let t
    console.log("sad");
    
    return function (...args) {
        if (leading) {
            func(...args)
            console.log("123");
            leading = false
            console.log("456");
            clearTimeout(t)
            t = setTimeout(() => {
                func(...args)

            }, d)
        } else {
            clearTimeout(t)
            console.log("456");
            t = setTimeout(() => {
                func(...args)
            }, d)
        }
    }
}

function add() {
    console.log('add function called');
}
opDebounce(add, 200, { leading: true })(1,2,4)
