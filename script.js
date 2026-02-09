const fotos = document.querySelectorAll(".slider img");
let index = 0;

setInterval(() => {
    fotos[index].classList.remove("activa");
    index = (index + 1) % fotos.length;
    fotos[index].classList.add("activa");
}, 5000);
