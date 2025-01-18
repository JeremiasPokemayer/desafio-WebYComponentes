function getContentfulData() {
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

function addServiciosCard(params = {}, container = null) {
  const template = document.querySelector("#servicios__content-template");
  const targetContainer =
    container || document.querySelector(".servicios__content");

  template.content.querySelector(".misServicios__subtitle").textContent =
    params.subtitle;
  template.content.querySelector(".misServicios__text").textContent =
    params.text;
  template.content.querySelector(".misServicios__image").src = params.imagen;

  const clone = document.importNode(template.content, true);
  targetContainer.appendChild(clone);
}

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const headerEl = document.querySelector(".header");
    header(headerEl);

    const footerEl = document.querySelector(".footer");
    footer(footerEl);
  });

  getContentfulData().then((serviC) => {
    const container = document.querySelector(".servicios__content");
    const hiddenContainer = document
      .querySelector(".misServicios__container-trabajos-contAdicional")
      .querySelector(".servicios__content");

    const visibleLimite = 3;
    const visiblePortfolio = serviC.slice(0, visibleLimite);
    const hiddenPortfolio = serviC.slice(visibleLimite);

    for (const s of visiblePortfolio) {
      addServiciosCard(s);
    }

    for (const s of hiddenPortfolio) {
      addServiciosCard(s, hiddenContainer);
    }
  });
})();

(function verMas() {
  const verMasButton = document.querySelector(".misServicios__button-verMas");
  const contenidoAdicional = document.querySelector(
    ".misServicios__container-trabajos-contAdicional"
  );

  verMasButton.addEventListener("click", () => {
    if (contenidoAdicional.style.display === "none") {
      contenidoAdicional.style.display = "block";
      verMasButton.innerHTML = `<span class="icon">
      <i class="fas fa-arrow-up" style="color: #ffffff"></i>
    </span> Ver menos`;
    } else {
      contenidoAdicional.style.display = "none";
      verMasButton.innerHTML = `<span class="icon">
      <i class="fas fa-arrow-down" style="color: #ffffff"></i>
    </span> Ver más`;
    }
  });
})();
