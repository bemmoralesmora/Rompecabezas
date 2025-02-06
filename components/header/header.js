function header1(){
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-h";

    let logo = document.createElement('div');
    logo.className = "logo"
    contenedor.appendChild(logo);

    let img = document.createElement('img');
    img.src = "https://cdni.iconscout.com/illustration/premium/thumb/astronaut-playing-badminton-illustration-download-in-svg-png-gif-file-formats--sketch-logo-space-suit-exploration-activities-pack-people-illustrations-4989874.png?f=webp";
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


export {header1};
