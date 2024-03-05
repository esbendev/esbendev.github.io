function initColores() {
    if (localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
    } else {
        document.documentElement.setAttribute('data-theme', 'reset');
        guardarColores(botones,btnReset,'reset');
    }
    // document.documentElement.setAttribute('data-theme', 'reset');
}

function guardarColores(botones,claseBoton, opcion) {
    document.documentElement.setAttribute('data-theme', opcion);
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove('seleccionado');
    }
    claseBoton.classList.add('seleccionado');
}