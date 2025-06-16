const is = {}
function num(x){
    return typeof x === "number"
}
function nan(x){
    return Number.isNaN(x)
}
function str(x){
    return typeof x === "string"
}
function bool(x){
    return typeof x === "boolean"
}
function undef(x){
    return typeof x === "undefined"
}
function def(x){
    return typeof x !== "undefined"
}
function arr(x){
    return Array.isArray(x)
}
function obj(x){
    return typeof x === "object" && x !== null && !Array.isArray(x)
}
function fun(x){
    return typeof x === "function"
}
function truthy(x){
    return !!x
}
function falsy(x){
    return !truthy(x)
}

is['num'] = num
is['nan'] = nan
is['str'] = str
is['bool'] = bool
is['undef'] = undef
is['def'] = def
is['arr'] = arr
is['obj'] = obj
is['fun'] = fun
is['truthy'] = truthy
is['falsy'] = falsy
