import { cargarHeader } from "./components/header/header.js";
import { cargarTablero } from "./components/tablero/tablero.js"
import { cargarProgreso } from "./components/progreso/progreso.js";
import { cargarFooter } from "./components/footer/footer.js";

function cargarDOM() {
    
    let Dom = document.querySelector("#root");
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";
    
    let header = document.createElement('div');
    header.className = "div_header";
    header.appendChild(cargarHeader());
    contenedor.appendChild(header);
    
    let progreso = document.createElement('div');
    progreso.className = "div_progreso";
    contenedor.appendChild(progreso);
    
    let tablero = document.createElement('div');
    tablero.className = "div_tablero";
    tablero.appendChild(cargarTablero());
    contenedor.appendChild(tablero);
    
    let footer = document.createElement('div');
    footer.className = "div_footer";
    contenedor.appendChild(footer);
    
    Dom.appendChild(contenedor);

    // Evento para cada carta
    let todasCartasDom = document.querySelectorAll('.carta');
    todasCartasDom.forEach(cadaCarta => {
        cadaCarta.addEventListener("click", () => {
            cadaCarta.classList.add("marcado");
        });
    });
}

cargarDOM();
