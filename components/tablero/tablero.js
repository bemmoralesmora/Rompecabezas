import { data } from "./data.js";

function item(contenido){
    let div = document.createElement('div');
    div.className = "carta";
    div.innerText = contenido;

    return div;
}

function cargarCartas(){
    
    let div = document.createElement('div');
    div.className = "div-tablero";
    
    data().forEach((letra) =>{
        div.appendChild(item(letra));
    });
    
    return div;
}

export{cargarCartas}
