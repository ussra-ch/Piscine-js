const escapeStr = "`" + "\\" + "/" + "\"" + "'"
const arr  = Object.freeze([4, "2"])
const obj = Object.freeze({str:"ussra", num:12, bool:true, undef:undefined})
const nested = Object.freeze({arr: Object.freeze([4, undefined, '2']),
    obj : Object.freeze({str:"u", num:12, bool:true})})