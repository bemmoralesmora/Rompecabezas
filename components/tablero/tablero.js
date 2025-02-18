import { cargarCartas } from "./funcionesCarta.js";
import { mezclarCartas } from "./funcionesCarta.js";
import { itemCarta } from "./itemCarta.js";

function cargarTablero () {

     let cartas = cargarCartas();
     let cartasMezcladas = mezclarCartas(cartas);
 
     let div = document.createElement('div');
     div.className = "div-tablero";
 
     cartasMezcladas.forEach((letra) => {
         div.appendChild(itemCarta(letra));
     });
 
     return div; 
}

export {cargarTablero};

