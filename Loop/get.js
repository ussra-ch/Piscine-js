function get(src, path){
    let temp = src
    path = path.split(".")
    for (let i of path){
        if (temp === undefined){
            return undefined
        }
        temp = temp[i]
    }
    return temp
}
console.log(get({ nested: { key: 'value' } }, 'nx.nx'));
