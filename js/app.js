const btnRestar = document.querySelector("#restar");
const btnResetear = document.querySelector("#resetear");
const btnIncrementar = document.querySelector("#incrementar");
const contador = document.querySelector(".contador");

let contadorNumerico = 0;

btnRestar.addEventListener("click", (e) => {
    contadorNumerico--;
    contador.textContent = contadorNumerico;
});

btnResetear.addEventListener("click", (e) => {
    contadorNumerico = 0
    contador.textContent = contadorNumerico;
});

btnIncrementar.addEventListener("click", (e) => {
    contadorNumerico++;
    contador.textContent = contadorNumerico;
});