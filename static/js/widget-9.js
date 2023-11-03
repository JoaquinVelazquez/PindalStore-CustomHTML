setTimeout(function () {
    $(document).ready(function () {
      // Ocultar el submenu al principio
      // Cuando se hace hover en "menu-container"
      $(".menu-container").hover(
        function () {
          // Mostrar el submenu con fade in
          $(".subcategorias-desktop").stop().removeClass('invisible');
        },
        function () {
          // Ocultar el submenu con fade out
          $(".subcategorias-desktop").stop().addClass('invisible');
        }
      );
    });
  }, 200);
  