import { data } from "./data.js";


function item(contenido){
    let div = document.createElement('div');
    div.className = "carta";
    
    let front = document.createElement('div');
    front.className = "front";
    
    let back = document.createElement('div');
    back.className = "back";
    back.innerText = contenido; // Mostrar el contenido en la parte trasera
    
    div.appendChild(front);
    div.appendChild(back);
    
    div.addEventListener("click", () => {
        div.classList.toggle("volteada");
    });
    
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
