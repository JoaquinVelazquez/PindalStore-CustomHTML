// document.querySelector('.subcategorias-desktop').addEventListener('click', function() {
//     // Encuentra las subcategorías dentro de este elemento
//     var subcategorias = this.querySelector('.subcategorias');
    
//     // Verifica si las subcategorías están actualmente visibles
//     if (subcategorias.style.display === 'block') {
//         subcategorias.style.display = 'none'; // Ocultar las subcategorías
//     } else {
//         subcategorias.style.display = 'flex'; // Mostrar las subcategorías
//     }
// });
document.querySelector('.subcategorias-desktop').addEventListener('click', function() {
    // Encuentra las subcategorías dentro de este elemento
    var subcategorias = this.querySelector('.subcategorias');

    // Verifica si las subcategorías están actualmente visibles
    var isHidden = subcategorias.style.display === 'none' || subcategorias.style.display === '';

    if (isHidden) {
        subcategorias.style.display = 'flex'; // Mostrar las subcategorías
    } else {
        subcategorias.style.display = 'none'; // Ocultar las subcategorías
    }
});