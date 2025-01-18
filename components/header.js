function header(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<section class="header">
  <header class="header__header">
    <div class="header__servicios-mobile">
      <img src="https://i.ibb.co/5GP3gWH/DALL-E-2025-01-15-18-35-08-A-square-logo-featuring-the-word-Jere-with-a-detailed-wolf-illustration-T.webp" class="header__logo-image"></img>
      <button class="header__button-ventanaAbrir">
        <img
          src="https://i.ibb.co/9nDbfZL/Group.png"
          alt=""
          class="header__button-image"
        />
      </button>
      <div class="header__ventana-servicios">
        <button class="header__button-ventanaCerrar">X</button>
        <div class="header__ventana-links-servicios-oculta">
        <a class="header__servicios-desktop-portfolio-oculta" href="portfolio.html">Portfolio</a>
        <a class="header__servicios-desktop-servicios-oculta" href="servicios.html">Servicios</a>
        <a class="header__servicios-desktop-contacto-oculta"  href="contacto.html">Contacto</a>
      </div>
    </div>
    </div>
    <div class="header__servicios-desktop">
      <img src="https://i.ibb.co/5GP3gWH/DALL-E-2025-01-15-18-35-08-A-square-logo-featuring-the-word-Jere-with-a-detailed-wolf-illustration-T.webp" class="header__logo-image"></img>
      <div class="header__ventana-links-servicios">
        <a class="header__servicios-desktop-portfolio" href="portfolio.html">Portfolio</a>
        <a class="header__servicios-desktop-servicios" href="servicios.html">Servicios</a>
        <a class="header__servicios-desktop-contacto" href="contacto.html">Contacto</a>
      </div>
    </div>
  </header>
    </section>`;

  ventanaOcultaServices(headerEl);

  el.appendChild(headerEl);
}

function ventanaOcultaServices(headerEl) {
  const botonAbrir = headerEl.querySelector(".header__button-ventanaAbrir");
  const botonCerrar = headerEl.querySelector(".header__button-ventanaCerrar");
  const ventanaEl = headerEl.querySelector(".header__ventana-servicios");
  const contenedorAllEl = document.querySelector(".contenedor-all");

  botonAbrir.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
    contenedorAllEl.style.display = "none";
  });
  botonCerrar.addEventListener("click", () => {
    ventanaEl.style.display = "";
    contenedorAllEl.style.display = "";
  });
}
