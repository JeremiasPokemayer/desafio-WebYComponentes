function getContentfulData() {
  return fetch(
    "https://cdn.contentful.com/spaces/hcygwg1fas5r/environments/master/entries?access_token=ylvtFym7rHIsKeyBu2MlvrV6AVjyJbdEtwt2ZiAUc_w&content_type=portfolio"
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

function addPortfolioCard(params = {}, container = null) {
  const template = document.querySelector("#portfolio__content-template");
  const targetContainer =
    container || document.querySelector(".portfolio__content");

  template.content.querySelector(".misTrabajos__subtitle").textContent =
    params.subtitle;
  template.content.querySelector(".misTrabajos__text").textContent =
    params.text;
  template.content.querySelector(".misTrabajos__image").src = params.imagen;

  const clone = document.importNode(template.content, true);
  targetContainer.appendChild(clone);
}

(function verMas() {
  const verMasButton = document.querySelector(".misTrabajos__button-verMas");
  const contenidoAdicional = document.querySelector(
    ".misTrabajos__container-trabajos-contAdicional"
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

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const headerEl = document.querySelector(".header");
    header(headerEl);

    const footerEl = document.querySelector(".footer");
    footer(footerEl);
  });

  getContentfulData().then((portF) => {
    const container = document.querySelector(".portfolio__content");
    const hiddenContainer = document
      .querySelector(".misTrabajos__container-trabajos-contAdicional")
      .querySelector(".portfolio__content");

    const visibleLimite = 3;
    const visiblePortfolio = portF.slice(0, visibleLimite);
    const hiddenPortfolio = portF.slice(visibleLimite);

    for (const p of visiblePortfolio) {
      addPortfolioCard(p);
    }

    for (const p of hiddenPortfolio) {
      addPortfolioCard(p, hiddenContainer);
    }
  });
})();
