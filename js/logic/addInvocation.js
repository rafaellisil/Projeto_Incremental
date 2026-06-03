import { eventVerify, drawEvent, updateLog, stopEvents} from "./log.js"

function addInvocation(arr, divInvocacoes, player, playerManaTotal, divLogHistory) {
  arr.forEach(fonte => {
    let quantidade = 0;
    const creatureName = fonte.nome;
    const creatureDmg = fonte.danoPorSegundo;
    const creaturePrice = fonte.custaMana;

    const divCreature = document.createElement("div");
    const divName = document.createElement("div");
    const creatureNameH3 = document.createElement("h3");
    const creatureDmgP = document.createElement("p");
    const creaturePriceP = document.createElement("p");
    const quantity = document.createElement("p");
    const creatureBtn = document.createElement("button");

    divName.classList.add("div-name-container");
    divCreature.classList.add("option-container");
    creatureDmgP.classList.add("reward");
    creaturePriceP.classList.add("price");
    quantity.classList.add("quantity");
    creatureBtn.classList.add("btnComprar");

    switch (fonte.elemento) {
      case "fogo":
        divCreature.classList.add("fogo");
        break;
      case "agua":
        divCreature.classList.add("agua");
        break;
      case "terra":
        divCreature.classList.add("terra");
        break;
      case "ar":
        divCreature.classList.add("ar");
        break;
    }

    creatureNameH3.textContent = creatureName;
    creatureDmgP.textContent = `${creatureDmg} dano por/s`;
    creaturePriceP.textContent = `Custo de mana ${creaturePrice}`;
    quantity.textContent = `Possui: ${quantidade}`;
    creatureBtn.textContent = "Invocar";

    divName.appendChild(creatureNameH3);
    divCreature.appendChild(divName);
    divCreature.appendChild(creatureDmgP);
    divCreature.appendChild(creaturePriceP);
    divCreature.appendChild(quantity);
    divCreature.appendChild(creatureBtn);

    divInvocacoes.appendChild(divCreature);

    creatureBtn.addEventListener("click", e => {
      e.preventDefault();

      comprarInvocacoes(player, fonte, 1, playerManaTotal, divLogHistory);
      player.invocacoesCompradas.forEach(invocacao => {
        if (invocacao.nome === creatureName) {
          quantity.textContent = `Possui: ${invocacao.quantidade}`;
        }
      });
    });
  });
}

function comprarInvocacoes(player, invocacao, quantidade, playerManaTotal, divLogHistory) {
  if (player.manaAtual >= invocacao.custaMana * quantidade) {
    player.updateInvocacoes(invocacao, quantidade, playerManaTotal);
    const eventoCompra = `Comprou ${invocacao.nome}`;
    updateLog(eventoCompra, false, divLogHistory);

    for (let i = 0; i < player.invocacoesCompradas.length; i++) {
      const invocacaoAtual = player.invocacoesCompradas[i];

      if (invocacaoAtual.nome === invocacao.nome) {
        invocacaoAtual.quantidade += quantidade;
        return;
      }
    }
    player.invocacoesCompradas.push({
      nome: invocacao.nome,
      quantidade: 1,
      danoPorSegundo: invocacao.danoPorSegundo,
    });
  }
}


export {addInvocation}