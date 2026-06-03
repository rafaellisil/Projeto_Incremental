import { eventVerify, drawEvent, updateLog, stopEvents} from "./log.js"

function addFontes(arr, divManaContainer, player, ouroJogadorTotal, divLogHistory) {
  arr.forEach(fonte => {
    const infoNome = fonte.nome;
    const infoManaSecond = fonte.manaPorSegundo;
    const infoPrice = fonte.custaMoedas;

    const divFontes = document.createElement("div");
    const divName = document.createElement("div");
    const fontName = document.createElement("h3");
    const manaSecond = document.createElement("p");
    const price = document.createElement("p");
    const quantity = document.createElement("p");
    const fontesBtn = document.createElement("button");

    divName.classList.add("div-name-container");
    divFontes.classList.add("option-container");
    fontesBtn.classList.add("btnComprar");
    manaSecond.classList.add("reward");
    price.classList.add("price");
    quantity.classList.add("quantity");

    fontName.textContent = infoNome;
    manaSecond.textContent = `${infoManaSecond} mana por/s`;
    price.textContent = `Valor $${infoPrice}`;
    quantity.textContent = `Possui: ${0}`;
    fontesBtn.textContent = "Comprar";

    divName.appendChild(fontName);

    divFontes.appendChild(divName);
    divFontes.appendChild(manaSecond);
    divFontes.appendChild(price);
    divFontes.appendChild(quantity);
    divFontes.appendChild(fontesBtn);

    divManaContainer.appendChild(divFontes);

    fontesBtn.addEventListener("click", e => {
      e.preventDefault();

      comprarMana(player, fonte, 1, ouroJogadorTotal, divLogHistory);
      player.fontesCompradas.forEach(item => {
        if (item.nome === infoNome) {
          quantity.textContent = `Possui: ${item.quantidade}`;
        }
      });
    });
  });
}

function comprarMana(player, fonte, quantidade, ouroJogadorTotal, divLogHistory) {
  if (player.gold >= fonte.custaMoedas * quantidade) {
    player.updateGold(fonte, quantidade, ouroJogadorTotal);
    const eventoCompra = `Comprou ${fonte.nome}`;
    updateLog(eventoCompra, false, divLogHistory);

    for (let i = 0; i < player.fontesCompradas.length; i++) {
      const fonteAtual = player.fontesCompradas[i];

      if (fonteAtual.nome === fonte.nome) {
        fonteAtual.quantidade += quantidade;
        return;
      }
    }
    player.fontesCompradas.push({
      nome: fonte.nome,
      quantidade: 1,
      manaPorSegundo: fonte.manaPorSegundo,
    });
  }
}

export { addFontes }