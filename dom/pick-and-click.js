export function pick(){
    let luminosity, hue;

    let body = document.querySelector("body")

    let h = window.innerHeight
    let w = window.innerWidth

    let hsl = document.createElement("div")
    let huee = document.createElement("div")
    let lumi = document.createElement("div")

    body.append(hsl)
    body.append(huee)
    body.append(lumi)

    hsl.className = "hsl"
    // hsl.style.top = '50%'
    // hsl.style.left = '50%'

    huee.className = "hue"
    huee.style.position = "absolute"

    lumi.className = "luminosity"
    lumi.style.position = "absolute"

    let svg = document.createElement('svg')
    body.append(svg)

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    // svg.setAttribute("width", "100%")
    // svg.setAttribute("height", "100%")
    svg.style.position = "fixed"
    svg.style.top = "0"
    svg.style.left = "0"
    svg.style.width = "100vw"
    svg.style.height = "100vh"
    svg.style.pointerEvents = "none"

    let lineX = document.createElement("line")
    lineX.id = "axisX"
    lineX.setAttribute("stroke-width", "1")
    lineX.setAttribute("xmlns", "http://www.w3.org/2000/svg")


    let lineY = document.createElement("line")
    lineY.setAttribute("stroke-width", "1")
    lineY.id = "axisY"
    lineY.setAttribute("xmlns", "http://www.w3.org/2000/svg")


    svg.append(lineX)
    svg.append(lineY)

    document.addEventListener("mousemove", (event)=>{
        let x = event.clientX
        let y = event.clientY
        
            hue = Math.round(x/(w/360))
            luminosity =  Math.round(y/(h/100))
            body.style.background = `hsl(${hue}, 50%, ${luminosity}%)`
            hsl.textContent = `hsl(${hue}, 50%, ${luminosity}%)`
            huee.innerHTML = `<h1>hue <br> ${hue}</h1>`
            lumi.innerHTML = `<h1> ${luminosity}<br>luminosity</h1>`
            // hsl.style.color = `hsl(${360 - hue}, 50%, ${100-luminosity}%)`
            hsl.style.color = `hsl(${hue}, 50%, ${luminosity}%)`
            hsl.style.filter = "invert(100%)"
            let lineX = document.getElementById("axisX")
            lineX.setAttribute("stroke", "black")
            lineY.setAttribute("stroke", "black")

            lineY.setAttribute("x1", 0)
            lineY.setAttribute("x2", w)
            lineY.setAttribute("y1", y)
            lineY.setAttribute("y2", y)

            lineX.setAttribute("x1", x)
            lineX.setAttribute("x2", x)
            lineX.setAttribute("y1", 0)
            lineX.setAttribute("y2", h)
            
        })
        document.addEventListener('click', () => {
    navigator.clipboard.writeText(hsl.textContent);
  });
}