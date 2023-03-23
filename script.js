let div = document.querySelector("#container");

let colors = ["red", "pink", "blue", "green", "violet", "#009933", "#006699", "#33cccc", "#99cc00", "#f60"]

let numColors = colors.length;

function createCaja(){
    let caja = document.createElement("div");
    let colorElegido = Math.floor(Math.random() * numColors);
    console.log(colorElegido);
    caja.style.backgroundColor = colors[colorElegido];
    caja.style.width = "100px";
    caja.style.height = "50px";
    div.appendChild(caja);
}

for(let i = 0; i< 18; i++){
    createCaja();
}

