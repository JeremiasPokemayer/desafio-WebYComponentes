function contacto(el) {
  const contactoEl = document.createElement("div");
  contactoEl.innerHTML = `<section class="contacto">
      <div class="contacto__container">
        <h2 class="contacto__title">Escribime</h2>
        <form id="contact-form" class="contacto__form">
        <div class="contacto__container-nye">
          <label class="contacto__label-name" for="name">
            <h3 class="contacto__form-input-name">Nombre</h3>
            <input id="input-name" class="input name" type="text" placeholder="Tu nombre" />
          </label>
          <label class="contacto__label-email" for="email">
            <h3 class="contacto__form-input-email">Email</h3>
            <input id="input-email" class="input mail" type="email" placeholder="tu@mail.com" />
          </label>
          </div>
          <label class="contacto__label-mensaje" for="mensaje">
            <h3 class="contacto__form-input-mensaje">Mensaje</h3>
            <textarea id="input-text" class="input textarea-input" name="" ></textarea>
          </label>
          <button class="button is-rounded">
            <span>Enviar</span>
            <span class="icon"><i class="far fa-paper-plane"></i></span>
          </button>
        </form>
      </div>
    </section>`;

  el.appendChild(contactoEl);
}

function envioDeDatos(event) {
  event.preventDefault();

  const url = "https://apx.school/api/utils/email-to-student";

  const nombreEl = document.getElementById("input-name").value;
  const emailEl = document.getElementById("input-email").value;
  const mensajeEl = document.getElementById("input-text").value;

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: nombreEl,
      to: emailEl,
      message: mensajeEl,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
}

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const headerEl = document.querySelector(".header__contacto");
    header(headerEl);

    const contactoEl = document.querySelector(".contacto__contacto");
    contacto(contactoEl);

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", envioDeDatos);

    console.log(form);

    const footerEl = document.querySelector(".footer__contacto");
    footer(footerEl);
  });
})();
