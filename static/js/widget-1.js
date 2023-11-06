const flechaCategoria = document.querySelectorAll('.flecha_desplegable');
const subCategoria = document.querySelectorAll('.mobile_subcategorias_contenedor');
const flechaSubCategoria = document.querySelectorAll('.flecha_desplegable_subcategoria');
const subSubCategoria = document.querySelectorAll('.contenedor_sub_subcategoria');

// Iterar sobre las flechas de categoría y agregar un evento de clic
flechaCategoria.forEach((flecha, index) => {
  flecha.addEventListener('click', () => {
    // Toggle para expandir o contraer la subcategoría correspondiente
    subCategoria[index].classList.toggle('invisible');
    flechaCategoria[index].classList.toggle('rotar');
  });
});

// Iterar sobre las flechas de subcategoría y agregar un evento de clic
flechaSubCategoria.forEach((flecha, index) => {
  flecha.addEventListener('click', () => {
    // Toggle para expandir o contraer la subsubcategoría correspondiente
    subSubCategoria[index].classList.toggle('invisible');
    flechaSubCategoria[index].classList.toggle('rotar');
  });
});