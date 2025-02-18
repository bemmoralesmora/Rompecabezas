import { data } from "./data.js";

function mezclarCartas(todasLasCartas) {
    for (let i = todasLasCartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todasLasCartas[i], todasLasCartas[j]] = [todasLasCartas[j], todasLasCartas[i]];
    }
    return todasLasCartas;
}

export { mezclarCartas}

function cargarCartas(){
    let cartas = data();
    return cartas; 
}

export{cargarCartas};
