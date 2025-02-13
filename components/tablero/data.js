function data() {
let carta_par1 = ['🚀', '🛸', '🌌', '🪐', '🌍', '🌕', '☄️', '⭐'];
let carta_par2 = ['🚀', '🛸', '🌌', '🪐', '🌍', '🌕', '☄️', '⭐'];
let todasLasCartas = carta_par1.concat(carta_par2);

for (let i = todasLasCartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [todasLasCartas[i], todasLasCartas[j]] = [todasLasCartas[j], todasLasCartas[i]];

    }
    return todasLasCartas;

}

export{data}