import { player } from "../data/player.js";

const divPlayerItens = document.querySelector("#player-itens");
const divItemImgs = document.querySelectorAll(".itemEquipadoImg");
const divPopUp = document.querySelector("#popup-itens");
const divPopUpContent = document.querySelector("#popup-itens-content");

function openInventory() {
  divItemImgs.forEach(div => {
    div.addEventListener("click", e => {
      e.stopPropagation();
      divPopUpContent.innerHTML = "";
      e.preventDefault();
      const slot = div.dataset.slot;
      popItensHidden(e);
      const slotItensComprados = player.itensComprados.filter(
        item => item.slot === slot,
      );
      slotItensComprados.forEach(item => {
        const divItemComprado = document.createElement("div");
        const divName = document.createElement("div");
        const pName = document.createElement("p");
        const divSVG = document.createElement("div");
        const divDescri = document.createElement("div");
        const pDescri = document.createElement("p");

        divItemComprado.classList.add("popup-item-comprado");
        divName.classList.add("popup-item-comprado-div-name");
        pName.classList.add("popup-item-comprado-p-name");
        divSVG.classList.add("popup-item-comprado-div-svg");
        divDescri.classList.add("popup-item-comprado-div-descri");
        pDescri.classList.add("popup-item-comprado-p-descri");

        if (item.raridade === "raro") {
          pName.classList.add("raro");
        }

        pName.textContent = item.nome;
        divSVG.innerHTML = item.sprite;
        pDescri.textContent = item.descricao;

        divName.appendChild(pName);
        divDescri.appendChild(pDescri);
        divItemComprado.appendChild(divName);
        divItemComprado.appendChild(divSVG);
        divItemComprado.appendChild(divDescri);

        divPopUpContent.appendChild(divItemComprado);

        // Equipar itens
        divItemComprado.addEventListener("click", e => {
          e.preventDefault();
          e.stopPropagation();
          const itemParaEquipar = player.itensComprados.find(item => item.nome === pName.textContent);
          div.innerHTML = itemParaEquipar.sprite
          const divDescricao = div.nextElementSibling
          const pDescricao = divDescricao.querySelector(".itemDescricao")
          if (div.classList.contains("raro")) {
            div.classList.remove("raro")
          }
          if (item.raridade === "raro") {
            div.classList.add("raro")
          }
          pDescricao.textContent = itemParaEquipar.descricao

          player.itensEquipados[itemParaEquipar.slot] = itemParaEquipar
          player.applyEfects()
          console.log(player.fontesCompradas);
          
        });
      });
    });
  });
  document.addEventListener("click", e => {
    if (
      !divPopUp.contains(e.target) &&
      !divPopUp.classList.contains("hidden")
    ) {
      divPopUp.classList.add("hidden");
    }
  });
}

function popItensHidden(e) {
  e.stopPropagation();
  divPopUp.classList.remove("hidden");
}

export { openInventory };
