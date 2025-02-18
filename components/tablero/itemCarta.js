function itemCarta(contenido){
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

export {itemCarta}