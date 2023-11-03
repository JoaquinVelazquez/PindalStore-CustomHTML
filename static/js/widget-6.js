const info = document.getElementById("info-section");
const slide = document.querySelector(".section-category__container");
const huella = document.getElementById(".adorno-titulo");
const destacadas = document.querySelector(".section-category__title .font-primary-text");

    setTimeout(() => {
        if (slide) {
            slide.insertAdjacentElement("afterend", info);
        }
    }, 600);

const mark = document.getElementById("marcas-section");
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (slide) {
            info.insertAdjacentElement("afterend", mark);
        }
    }, 600);
});

// setTimeout(()=> {   
// destacadas.insertAdjacentElement("beforebegin" , huella )
// }, 500);


var submenuItems = document.querySelectorAll(".submenu-h ul");
submenuItems.forEach(function (item) {
    item.previousElementSibling.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});


let url = window.location.pathname;

if (url === '/') {
    console.log('verificaimg')
    const tituloCategoria = document.querySelector('.section-category__title');
    const tituloProductos = document.querySelector('.section-header__title--base');

    const imagenCategoria = `<img class="logo-pelota-texto" src="https://iili.io/JFtWD6Q.png" alt="">`
    const imagenProducto = `<img class="logo-pelota-producto" src="https://iili.io/JFtWD6Q.png" alt="">`

    setTimeout(() => {
        tituloCategoria.insertAdjacentHTML('beforebegin', imagenCategoria);
        tituloProductos.insertAdjacentHTML('afterend', imagenProducto);
        
     }, 1000);
     
}
