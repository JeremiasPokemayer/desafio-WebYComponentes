function getContentfulDataPresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/hcygwg1fas5r/environments/master/entries?access_token=ylvtFym7rHIsKeyBu2MlvrV6AVjyJbdEtwt2ZiAUc_w&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const imageEl = data.includes.Asset;
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.image.sys.id;
        const image = imageEl.find((asset) => asset.sys.id == imageId)?.fields
          .file.url;

        return {
          title: item.fields.title,
          text: item.fields.text,
          imagen: image,
        };
      });
      return fieldsCollection;
    });
}

function getContentfulDataServicios() {
  return fetch(
    "https://cdn.contentful.com/spaces/hcygwg1fas5r/environments/master/entries?access_token=ylvtFym7rHIsKeyBu2MlvrV6AVjyJbdEtwt2ZiAUc_w&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const imageEl = data.includes.Asset;
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.image.sys.id;
        const image = imageEl.find((asset) => asset.sys.id == imageId)?.fields
          .file.url;

        return {
          subtitle: item.fields.subtitle,
          text: item.fields.text,
          imagen: image,
        };
      });
      return fieldsCollection;
    });
}

function addPresentacionCard(params = {}) {
  const template = document.querySelector("#presentacion__content-template");
  const container = document.querySelector(".presentacion__content");

  template.content.querySelector(".presentacion__title").textContent =
    params.title;
  template.content.querySelector(".presentacion__text").textContent =
    params.text;
  template.content.querySelector(".presentacion__image").src = params.imagen;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function addServiciosCard(params = {}) {
  const template = document.querySelector("#servicios__content-template");
  const container = document.querySelector(".servicios__content");

  template.content.querySelector(".servicios__subtitle").textContent =
    params.subtitle;
  template.content.querySelector(".servicios__text").textContent = params.text;
  template.content.querySelector(".servicios__image").src = params.imagen;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const headerEl = document.querySelector(".header");
    header(headerEl);

    const bienvenidaEl = document.querySelector(".bienvenida");
    bienvenida(bienvenidaEl);

    getContentfulDataPresentacion().then((presenT) => {
      for (const p of presenT) {
        addPresentacionCard(p);
      }
    });

    getContentfulDataServicios().then((serviC) => {
      for (const s of serviC) {
        addServiciosCard(s);
      }
    });

    const contactoEl = document.querySelector(".contacto");
    contacto(contactoEl);

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", envioDeDatos);

    const footerEl = document.querySelector(".footer");
    footer(footerEl);
  });
})();
