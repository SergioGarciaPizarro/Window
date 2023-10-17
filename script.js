function caidaElemnto() {
    const elemento = document.createElement("div");
    elemento.classList.add("elemento");
    elemento.style.setProperty('--random-x', Math.random());

    elemento.addEventListener("animationiteration", () => {
        elemento.remove();
    });

    document.querySelector(".contenedor").appendChild(elemento);
}

setInterval(caidaElemnto, 1500);
