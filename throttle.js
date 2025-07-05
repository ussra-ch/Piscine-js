function throttle(func, d) {
    let shouldWait = false
    let wairtingArgs
    const TimeoutFunc = () => {
        if (wairtingArgs == null) {
            shouldWait = false
        } else {
            func(...wairtingArgs)
            wairtingArgs = null
            setTimeout(TimeoutFunc, d)
        }
    }
    return (...args) => {
        if (shouldWait) {
            wairtingArgs = args
            return
        }
        func(...args)
        shouldWait = true
        setTimeout(TimeoutFunc, d)
    }
}

function opThrottle(func, d, options = {trailing : false, leading : false}) {
    let shouldWait = false
    let wairtingArgs
    return (...args) => {
        const TimeoutFunc = () => {
            if (wairtingArgs == null || !options['trailing']) {
                shouldWait = false
            } else {
                func(...wairtingArgs)
                wairtingArgs = null
                setTimeout(TimeoutFunc, d)
            }
        }
      
        if (shouldWait) {
            wairtingArgs = args
            return
        }
        if (options['leading']) {
            func(...args)
            if (options['trailing']){
                wairtingArgs = args
            }
        }
       
        shouldWait = true
        setTimeout(TimeoutFunc, d)
    }
}