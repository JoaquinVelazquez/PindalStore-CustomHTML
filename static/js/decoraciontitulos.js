// Aplicando el gif en los titulos de los carruseles de ms
const tituloCarruselMS = document.querySelectorAll('.section-category__title');
const gifTitulo = '<img style="width: 50px;" src="https://iili.io/JqoKWo7.png" alt="">'
tituloCarruselMS.forEach((elem)=>{
    setTimeout(() => {
        elem.insertAdjacentHTML('beforebegin', gifTitulo);
    }, 500);
});