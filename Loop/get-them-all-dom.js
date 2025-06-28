function getArchitects() {
        var all = document.body.getElementsByTagName("*");
        var archi = document.body.getElementsByTagName("a");
        const bar = [...all].filter(el => el.tagName !== 'A')
        return [Array.from(archi), bar]
}

function getClassical() {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ]
}

function getActive() {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ]
}

function getBonannoPisano() {
    return [
        document.getElementById("BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

export { getArchitects, getClassical, getActive, getBonannoPisano };