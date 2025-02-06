import {cargarCartas} from "./components/tablero/tablero.js";

cargarCartas();

let Dom = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "contenedor"; 

let header = document.createElement('div');
header.className = "div_header"
contenedor.appendChild(header);

let progreso = document.createElement('div');
progreso.className = "div_progreso"
contenedor.appendChild(progreso);

let tablero = document.createElement('div');
tablero.className = "div_tablero"
tablero.appendChild(cargarCartas());
contenedor.appendChild(tablero);


let footer = document.createElement('div');
footer.className = "div_footer"
contenedor.appendChild(footer);

Dom.appendChild(contenedor);