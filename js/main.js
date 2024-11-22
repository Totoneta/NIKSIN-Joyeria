const fDer = document.querySelector(".flecha-der");
const fIzq = document.querySelector(".flecha-izq");
const container = document.querySelector(".productos-container");


fDer.addEventListener("click", deslizarDer);
fIzq.addEventListener("click", deslizarIzq);


function deslizarDer() {
    container.style.transform = 'translateX(-50%)'
}

function deslizarIzq() {
    container.style.transform = 'translateX(0)'
}
