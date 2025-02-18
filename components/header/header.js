function cargarHeader(){
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-h";

    let logo = document.createElement('div');
    logo.className = "logo"
    contenedor.appendChild(logo);

    let img = document.createElement('img');
    img.src = "https://images.vexels.com/media/users/3/301886/isolated/preview/a3f9c5b4e15eedcf66c44339bb1b2188-cabeza-aliena-gena-verde.png";
    img.className = "logo-img";
    logo.appendChild(img)

    let h1 = document.createElement('h1');
    h1.innerText = "MEMORIA";
    h1.className = "logo-h1";
    logo.appendChild(h1);

    let botones = document.createElement('div');
    botones.className = "botones-c";
    botones.innerHTML = `
    <a href="#" class="btn">1</a>
    <a href="#" class="btn">2</a>
    <a href="#" class="btn">3</a>
    <a href="#" class="btn">4</a>
    <a href="#" class="btn">5</a>    
    `;
    contenedor.appendChild(botones);

    return contenedor;
}


export {cargarHeader};
