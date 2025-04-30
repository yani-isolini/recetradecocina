const botonModo= document.getElementById("ModoOscuroBtn");
const body = document.body;

// console.log("soy yani");

botonModo.addEventListener("click",function () {
    body.classList.toggle("Modo-Oscuro");

    if (body.classList.contains("Modo-Oscuro")){
    botonModo.textContent = "Modo Claro";
} else {
    botonModo.textContent="Modo Oscuro";
}
});