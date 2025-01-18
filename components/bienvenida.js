function bienvenida(el) {
  const bienvenidaEl = document.createElement("div");
  bienvenidaEl.innerHTML = `
  <div class="bienvenida__content"></div>
  <template id="bienvenida__content-template">
  <section class="bienvenida">
      <div class="bienvenida__container">
        <div class="bienvenida__title">
          <span class="color-blanco">xd</span>
          <span class="color-cyan">adadadad</span>
        </div>
        <div class="bienvenida__container-iys">
          <img
            src="https://s3-alpha-sig.figma.com/img/55f1/baa5/71288abb7a84f595fe9c9f245e252e2c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HdVZ0Uc6LPe9QyoKA~d4CZOI0syBRP~seD7cqvfc9NOTwwkXM3qREC4nwFvgnWUDgpq1IMHerxwO2Ej2nfLKUYN24BJLV-PzZok8~8oYQfsbigBCS99f5RKqw1d9EXFsF1q8RZKZt5L9Fhql1AI1UoSrNIda0m86IFi08YNreWaLAeiyFfnDHat61y1i~H737hbiOjoR9GDThAlVvTIiYmTwMp6OUk7vWvuqQjrm8-OUa9l261OQs4LMQ5v5Ee4ygDChf-KpbHVB64WF10-QKbUFf1pSgZAmfpOp3TjrN2mhgbDwlRpP5to8cHxcKk6sGSfOFQN1Zk0iRkuTQ7prCQ__"
            alt=""
            class="bienvenida__image"
          />
          <div class="bienvenida__sombra-intro"></div>
        </div>
      </div>
    </section>
    </template>`;

  el.appendChild(bienvenidaEl);
}

function getContentfulData() {
  return fetch(
    "https://cdn.contentful.com/spaces/hcygwg1fas5r/environments/master/entries?access_token=ylvtFym7rHIsKeyBu2MlvrV6AVjyJbdEtwt2ZiAUc_w&content_type=bienvenida"
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
          title2: item.fields.title2,
          imagen: image,
        };
      });
      return fieldsCollection;
    });
}

function addBienvenidaCard(params = {}) {
  const template = document.querySelector("#bienvenida__content-template");
  const container = document.querySelector(".bienvenida__content");

  template.content.querySelector(".color-blanco").textContent = params.title;
  template.content.querySelector(".color-cyan").textContent = params.title2;
  template.content.querySelector(".bienvenida__image").src = params.imagen;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

(function () {
  getContentfulData().then((bienV) => {
    for (const b of bienV) {
      addBienvenidaCard(b);
    }
  });
})();
