// flecha = document.querySelectorAll(".flecha-desplegable");
// subcategorias = document.querySelectorAll(".subcategorias-container");
// flecha menu mobile
const flechaGenero = document.getElementById("flecha-mobile-genero");
const flechaCategoria = document.getElementById("flecha-mobile-categoria")
const flechaDisciplina = document.getElementById("flecha-mobile-disciplina")
const flechaMarca = document.getElementById("flecha-mobile-marca")
// subcategoria menu mobile
const subCategoriaGenero = document.getElementById("subcategorias-genero");
const subcategoriaCategoria = document.getElementById("subcategorias-categoria")
const subcategoriaDisciplina = document.getElementById("subcategorias-disciplina")
const subcategoriaMarca = document.getElementById("subcategorias-marca");

flechaGenero.addEventListener("click", function () {
  flechaGenero.classList.toggle("rotate");
  subCategoriaGenero.classList.toggle("invisible");
  subcategoriaCategoria.classList.add("invisible");
  subcategoriaDisciplina.classList.add("invisible");
  subcategoriaMarca.classList.add("invisible");
});
flechaCategoria.addEventListener("click", function () {
  flechaCategoria.classList.toggle("rotate");
  subCategoriaGenero.classList.add("invisible");
  subcategoriaCategoria.classList.toggle("invisible");
  subcategoriaDisciplina.classList.add("invisible");
  subcategoriaMarca.classList.add("invisible");
});
flechaDisciplina.addEventListener("click", function () {
  flechaDisciplina.classList.toggle("rotate");
  subCategoriaGenero.classList.add("invisible");
  subcategoriaCategoria.classList.add("invisible");
  subcategoriaDisciplina.classList.toggle("invisible");
  subcategoriaMarca.classList.add("invisible");
});
flechaMarca.addEventListener("click", function () {
  flechaMarca.classList.toggle("rotate");
  subCategoriaGenero.classList.add("invisible");
  subcategoriaCategoria.classList.add("invisible");
  subcategoriaDisciplina.classList.add("invisible");
  subcategoriaMarca.classList.toggle("invisible");
});



// flecha[0].addEventListener("click", function () {
//   flecha[0].classList.toggle("rotate");
//   subcategorias[0].classList.toggle("invisible");
//   subcategorias[1].classList.add("invisible");
//   subcategorias[2].classList.add("invisible");
//   subcategorias[3].classList.add("invisible");
//   subcategorias[4].classList.add("invisible");
// });

// flecha[1].addEventListener("click", function () {
//   flecha[1].classList.toggle("rotate");
//   subcategorias[0].classList.add("invisible");
//   subcategorias[1].classList.toggle("invisible");
//   subcategorias[2].classList.add("invisible");
//   subcategorias[3].classList.add("invisible");
//   subcategorias[4].classList.add("invisible");
// });

// flecha[2].addEventListener("click", function () {
//   flecha[2].classList.toggle("rotate");
//   subcategorias[0].classList.add("invisible");
//   subcategorias[1].classList.add("invisible");
//   subcategorias[2].classList.toggle("invisible");
//   subcategorias[3].classList.add("invisible");
//   subcategorias[4].classList.add("invisible");
// });

// let flechas = document.querySelectorAll(".flecha-desplegable");
// let subcategorias = document.querySelectorAll(".subcategorias-container");

// flechas.forEach((flecha, index) => {
//     flecha.addEventListener("click", function() {
//         subcategorias.forEach((subcategoria, subIndex) => {
//             if (subIndex === index) {
//                 subcategoria.classList.toggle("desplegar");
//             } else {
//               subcategorias.style.display = 'none';
//             }
//         });

//         flechas.forEach((flecha, arrowIndex) => {
//             if (arrowIndex === index) {
//                 flecha.classList.toggle("rotate");
//             } else {
//                 flecha.classList.remove("rotate");
//             }
//         });
//     });
// });


//   document.addEventListener("DOMContentLoaded", function() {
//     let flechas = document.querySelectorAll(".flecha-desplegable");
//     let subcategorias = document.querySelectorAll(".subcategorias-container");

//     flechas.forEach((flecha, index) => {
//         flecha.addEventListener("click", function() {
//             subcategorias.forEach((subcategoria, subIndex) => {
//                 if (subIndex === index) {
//                     subcategoria.classList.toggle("invisible");
//                 } else {
//                     subcategoria.classList.add("invisible");
//                 }
//             });

//             flechas.forEach((flecha, arrowIndex) => {
//                 if (arrowIndex === index) {
//                     flecha.classList.toggle("rotate");
//                 } else {
//                     flecha.classList.remove("rotate");
//                 }
//             });
//         });
//     });
// });
