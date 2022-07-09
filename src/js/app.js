document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  darkMode();
});

function eventListeners() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const darkModeBtn = document.querySelector(".dark-mode-boton");
  mobileMenu.addEventListener("click", responsiveNav);
  darkModeBtn.addEventListener("click", darkMode);
}

function responsiveNav() {
  const navegacion = document.querySelector(".navegacion");
  navegacion.classList.toggle("mostrar");
}

function darkMode() {
  const preferencias = window.matchMedia("{prefers-color-scheme: dark}");

  // Al cargarse la página
  if (preferencias.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("remove");
  }

  // Cambio automático
  preferencias.addEventListener("change", function () {
    if (preferencias.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("remove");
    }
  });

  document.body.classList.toggle("dark-mode");
}
