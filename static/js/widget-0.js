// const cat_calzado = document.querySelector(".categoria_calzado");
// const cat_indumentaria = document.querySelector(".categoria_indumentaria");
// const cat_accesorios = document.querySelector(".categoria_accesorios");
// const submenu = document.querySelector(".contenedor_subcategorias_menu");
// const submenu_calzado = document.querySelector(".subcategoria_calzado");
// const submenu_indumentaria = document.querySelector(".subcategoria_indumentaria");
// const submenu_accesorios = document.querySelector(".subcategoria_accesorios");

// cat_calzado.addEventListener("mouseover", () => {
//   submenu.classList.remove("invisible");
//   submenu_calzado.classList.remove("invisible");
// });

// submenu.addEventListener("mouseleave", () => {
//   submenu.classList.add("invisible");
//   submenu_calzado.classList.add("invisible");
// });

const categorias = {
  calzado: {
    categoria: document.querySelector(".categoria_calzado"),
    subcategoria: document.querySelector(".subcategoria_calzado")
  },
  indumentaria: {
    categoria: document.querySelector(".categoria_indumentaria"),
    subcategoria: document.querySelector(".subcategoria_indumentaria")
  },
  // accesorios: {
  //   categoria: document.querySelector(".categoria_accesorios"),
  //   subcategoria: document.querySelector(".subcategoria_accesorios")
  // }
};

const submenu = document.querySelector(".contenedor_subcategorias_menu");

for (const categoria in categorias) {
  categorias[categoria].categoria.addEventListener("mouseover", () => {
    submenu.classList.remove("invisible");
    for (const otraCategoria in categorias) {
      if (otraCategoria !== categoria) {
        categorias[otraCategoria].subcategoria.classList.add("invisible");
      }
    }
    categorias[categoria].subcategoria.classList.remove("invisible");
  });
}

submenu.addEventListener("mouseleave", () => {
  submenu.classList.add("invisible");
  for (const categoria in categorias) {
    categorias[categoria].subcategoria.classList.add("invisible");
  }
});
