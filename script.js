let div = document.querySelector("#container");

// let colors = ["red", "pink", "blue", "green", "violet", "#009933", "#006699", "#33cccc", "#99cc00", "#f60"];



// let numColors = colors.length;

function createCaja(){
    let caja = document.createElement("div");
    // let colorElegido = Math.floor(Math.random() * numColors);
    // console.log(colorElegido);
    // caja.style.backgroundColor = colors[colorElegido];
    let micolor = randomColorRGBA();
    console.log(micolor);
    caja.style.backgroundColor = micolor;
    caja.style.width = "100px";
    caja.style.height = "50px";
    caja.addEventListener("click", bindClick);
    div.appendChild(caja);
}

for(let i = 0; i< 18; i++){
    createCaja();
}


function generarAleatorio(max){
    return Math.floor(Math.random() * max)
}


function randomColorRGB(){
    return "rgb(" + generarAleatorio(255) + "," + generarAleatorio(255) + "," + generarAleatorio(255) + ")";
}

function randomColorRGBA(){
    return "rgba(" + generarAleatorio(255) + "," + generarAleatorio(255) + "," + generarAleatorio(255) + "," + Math.random() + ")";
}

function randomColorHSL(){
    return "hsl(" + generarAleatorio(360) + "," + generarAleatorio(100) + "%," + generarAleatorio(100) + "%)";
}

function bindClick(event){
    console.log(event.target.style.backgroundColor);
}













