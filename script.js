const fotos = document.querySelectorAll(".slider img");
let index = 0;

// precargar imágenes
fotos.forEach(img => {
    const preload = new Image();
    preload.src = img.src;
});

// mostrar la primera inmediatamente
fotos[0].classList.add("activa");

function cambiarFoto() {
    fotos[index].classList.remove("activa");
    index = (index + 1) % fotos.length;
    fotos[index].classList.add("activa");
}

// empezar sin espera
setInterval(cambiarFoto, 4000);
