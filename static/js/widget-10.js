
// Menu desktop
const menu = document.querySelectorAll('.menu-desktop-item');

const desplegarMenu = (menuItem) => {
    const primerDivHijo = menuItem.querySelector('.menu-container-desplegable');
    primerDivHijo.classList.add('desplegar-flex');

    primerDivHijo.addEventListener('mouseleave', () => {
        setTimeout(() => {
            primerDivHijo.classList.remove('desplegar-flex');
        }, 100);
    });
}
menu.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
        desplegarMenu(elem);
    });
});

const ocultarSubMenu = (menuItem) => {
    const subMenu = menuItem.querySelector('.menu-container-desplegable');
    subMenu.classList.remove('desplegar-flex');
};

const mostrarSubMenu = (menuItem) => {
    const subMenu = menuItem.querySelector('.menu-container-desplegable');
    subMenu.classList.add('desplegar-flex');
};

menu.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
        clearTimeout(menuItem.timer);
        mostrarSubMenu(menuItem);
    });

    menuItem.addEventListener('mouseleave', () => {
        menuItem.timer = setTimeout(() => {
            ocultarSubMenu(menuItem);
        }, 100);
    });

    const subMenu = menuItem.querySelector('.menu-container-desplegable');
    subMenu.addEventListener('mouseenter', () => {
        clearTimeout(menuItem.timer);
    });

    subMenu.addEventListener('mouseleave', () => {
        menuItem.timer = setTimeout(() => {
            ocultarSubMenu(menuItem);
        }, 100);
    });
});

// Menu mobile
let menu_desplegable = document.getElementById('responsive-menu');
let menu_desplegable_children = menu_desplegable.children;
const submenus = document.querySelectorAll('.subcategorias-container');
const botonMenu = document.getElementById('hamburguer-menu');

botonMenu.addEventListener('click', () => {
    menu_desplegable.classList.toggle('abrir');
    for (let i = 0; i < menu_desplegable_children.length; i++) {
        menu_desplegable_children[i].classList.toggle('desplegar');
    }
});

submenus.forEach((elem) => {
    elem.addEventListener('click', () => {
        console.log('funciona');
        elem.querySelector('.subcategorias').classList.toggle('desplegar'); // Cambiado 'subcategorias-container' por 'subcategorias'
    });
});
