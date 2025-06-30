export function pick(){
    let luminosity, hue;
    let body = document.querySelector("body")
    // let x
    let h = window.innerHeight
    let w = window.innerWidth
    let hsl = document.createElement("div")
    body.append(hsl)
    hsl.className = "hsl"
    hsl.style.top = '50%'
    hsl.style.left = '50%'
    let huee = document.createElement("div")
    body.append(huee)
    huee.className = "hue"
    huee.style.position = "absolute"
    let lumi = document.createElement("div")
    body.append(lumi)
    lumi.className = "luminosity"
    lumi.style.position = "absolute"

    let svg = document.createElement('svg')

    body.append(svg)
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    let lineX = document.createElement("line")
    lineX.id = "axisX"
    let lineY = document.createElement("line")
    lineY.id = "axisY"
    svg.append(lineX)
    svg.append(lineY)
    document.addEventListener("mousemove", (event)=>{
        let x = event.pageX
        let y = event.pageY
        
            hue = Math.round(x/(w/360))
            luminosity =  Math.round(y/(h/100))
            body.style.backgroundColor = `hsl(${hue}, 50%, ${luminosity}%)`
            hsl.textContent = `hsl(${hue}, 50%, ${luminosity}%)`
            huee.innerHTML = `<h1>hue <br> ${hue}</h1>`
            lumi.innerHTML = `<h1> ${luminosity}<br>luminosity</h1>`
            // hsl.style.color = `hsl(${360 - hue}, 50%, ${100-luminosity}%)`
            hsl.style.color = `hsl(${hue}, 50%, ${luminosity}%)`
            hsl.style.filter = "invert(100%)"
            let lineX = document.getElementById("axisX")
            lineX.style.stroke = "black"
            lineX.setAttribute("x1", "0%")
            lineX.setAttribute("x2", "100%")
            lineX.setAttribute("y1", `${y}px`)
            lineX.setAttribute("y2", `${y}px`)



    })

}