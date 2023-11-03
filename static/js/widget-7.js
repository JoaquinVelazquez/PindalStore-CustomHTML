// Configuración del carrusel--

const carrusel = document.querySelector('.marcas-section-carrusel-container');
const izqBtn = document.getElementById('marcas-section-button-izq');
const derBtn = document.getElementById('marcas-section-button-der');

let verificarInicio_y_finCarrusel = 0;
const vueltasDeCarrusel = 2;

derBtn.addEventListener('click', () => moverCarrusel(true));
izqBtn.addEventListener('click', () => moverCarrusel(false));

function moverCarrusel(esDerecha) {
    if (esDerecha) {
        verificarInicio_y_finCarrusel = (verificarInicio_y_finCarrusel + 1) % vueltasDeCarrusel;
        console.log("verificarInicio_y_finCarrusel")
    } else {
        verificarInicio_y_finCarrusel = (verificarInicio_y_finCarrusel - 1 + vueltasDeCarrusel) % vueltasDeCarrusel;
        console.log("verificarInicio_y_finCarrusel1")
    }
    actualizarCarrusel();
}

function actualizarCarrusel() {
    const translateXValue = `translateX(-${verificarInicio_y_finCarrusel * 1050}px)`;
    carrusel.style.transform = translateXValue;
}
