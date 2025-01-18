function footer(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
      <div class="footer__mobile">
        <img
          src="https://i.ibb.co/5GP3gWH/DALL-E-2025-01-15-18-35-08-A-square-logo-featuring-the-word-Jere-with-a-detailed-wolf-illustration-T.webp"
          alt=""
          class="footer__logo"
        />
        <div class="footer__container-servicios">
          <a class="footer__a-servicios" href="index.html"
            ><span class="icon">
              <i class="fas fa-home" style="color: #ffffff"></i>
            </span>
            <span class="footer__span-servicios">Home</span>
          </a>
          <a class="footer__a-servicios" href="servicios.html">
            <span class="icon">
              <i class="far fa-user" style="color: #ffffff"></i>
            </span>
            <span class="footer__span-servicios">Servicios</span>
          </a>
          <a class="footer__a-servicios" href="contacto.html">
            <span class="icon">
              <i class="fas fa-phone" style="color: #ffffff"></i>
            </span>
            <span class="footer__span-servicios">Contacto</span>
          </a>
        </div>
        <div class="footer__container-redes">
          <a href="https://www.linkedin.com/in/jeremias-pokemayer-203006272/" class="footer__button-linkedin">
            <span class="icon footer-icon">
              <i class="fab fa-linkedin" style="font-size: 3rem"></i>
            </span>
          </a>
          <a href="https://github.com/JeremiasPokemayer" class="footer__button-github">
            <span class="icon footer-icon">
              <i class="fab fa-github" style="font-size: 3rem"></i>
            </span>
          </a>
          <a href="https://x.com/jere_poke" class="footer__button-twitter">
            <span class="icon footer-icon">
              <i class="fab fa-twitter" style="font-size: 3rem"></i>
            </span>
          </a>
        </div>
        <p class="footer__creditos">©2024 - https://apx.school</p>
      </div>
      <div class="footer__desktop">
        <img
          src="https://i.ibb.co/5GP3gWH/DALL-E-2025-01-15-18-35-08-A-square-logo-featuring-the-word-Jere-with-a-detailed-wolf-illustration-T.webp"
          alt=""
          class="footer__logo"
        />
        <div class="footer__container-servicios">
          <a class="footer__a-servicios" href="index.html"
            ><span class="icon">
              <i class="fas fa-home" style="color: #ffffff"></i>
            </span>
            <span class="footer__span-servicios">Home</span>
          </a>
          <a class="footer__a-servicios" href="servicios.html">
            <span class="icon">
              <i class="far fa-user" style="color: #ffffff"></i>
            </span>
            <span class="footer__span-servicios">Servicios</span>
          </a>
          <a class="footer__a-servicios" href="contacto.html">
            <span class="icon">
              <i class="fas fa-phone" style="color: #ffffff"></i>
            </span>
            <span class="footer__span-servicios">Contacto</span>
          </a>
        </div>
        <div class="footer__container-redes">
          <a href="https://www.linkedin.com/in/jeremias-pokemayer-203006272/" class="footer__button-linkedin">
            <span class="icon footer-icon">
              <i class="fab fa-linkedin" style="font-size: 3rem"></i>
            </span>
          </a>
          <a href="https://github.com/JeremiasPokemayer" class="footer__button-github">
            <span class="icon footer-icon">
              <i class="fab fa-github" style="font-size: 3rem"></i>
            </span>
          </a>
          <a href="https://x.com/jere_poke" class="footer__button-twitter">
            <span class="icon footer-icon">
              <i class="fab fa-twitter" style="font-size: 3rem"></i>
            </span>
          </a>
        </div>
        <p class="footer__creditos">©2024 - https://apx.school</p>
      </div>`;

  el.appendChild(footerEl);
}
