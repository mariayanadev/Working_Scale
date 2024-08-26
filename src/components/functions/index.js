export function toggleContainer() {
    let c = document.getElementById("containerCadastro");

    //suavizar o aparecimento da tela
    if (c.classList.contains("hidden")) {
        c.classList.toggle("hidden");
        setTimeout(() => {
            c.classList.toggle("opacity-0");
        }, 150);
    } else {
        c.classList.toggle("opacity-0");
        setTimeout(() => {
            c.classList.toggle("hidden");
        }, 150);
    }
}
