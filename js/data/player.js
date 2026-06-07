let player = {
  gold: 0,
  manaAtual: 0,
  manaPorSegundo: 0,
  danoPorSegundo: 0,
  fontesCompradas: [
    { nome: "Meditar", quantidade: 1, manaPorSegundo: 0.04, bonus: 1 }
],
  invocacoesCompradas: [],
  itensComprados: [],
  danoGolpeCajado: 5,
  itensEquipados: {
    cabeca: null,
    pes: null,
    roupao: null,
    luvas: null,
    colar: null,
  },

  calcManaPorSegundo() {
    this.manaPorSegundo = 0;
    this.fontesCompradas.forEach(fonte => {
      this.manaPorSegundo +=
        fonte.manaPorSegundo * fonte.quantidade * fonte.bonus;
    });
    this.danoPorSegundo = 0;
    this.invocacoesCompradas.forEach(summon => {
      this.danoPorSegundo +=
        summon.danoPorSegundo * summon.quantidade * summon.bonus;
    });
    this.manaAtual += this.manaPorSegundo;
  },

  updateGold(fonte, quantidade, playerGoldTotal) {
    this.gold -= fonte.custaMoedas * quantidade;
    playerGoldTotal.textContent = this.gold;
  },

  updateInvocacoes(fonte, quantidade, playerManaTotal) {
    this.manaAtual -= fonte.custaMana * quantidade;
    playerManaTotal.textContent = this.manaAtual.toFixed(2);
  },

  showStatistics(divManaStats, fontsMana) {
    const linhas = divManaStats.querySelectorAll(
      ".container-fonte-mana:not(.header-fonte-mana)",
    );
    linhas.forEach(linha => linha.remove());

    fontsMana.forEach(fonte => {
      const comprada = this.fontesCompradas.find(f => f.nome === fonte.nome);
      if (!comprada) return;
      const divContainer = document.createElement("div");
      const divItem = document.createElement("div");
      const divQuantidade = document.createElement("div");
      const divManaPorSegundo = document.createElement("div");
      const divTotalMana = document.createElement("div");
      const pNome = document.createElement("p");
      const pManaPorSegundo = document.createElement("p");
      const pQuantidade = document.createElement("p");
      const pTotal = document.createElement("p");

      pNome.textContent = comprada.nome;
      pManaPorSegundo.textContent = (
        comprada.manaPorSegundo * comprada.bonus
      ).toFixed(2);
      pQuantidade.textContent = comprada.quantidade;
      const valorTotal =
        comprada.quantidade * comprada.manaPorSegundo * comprada.bonus;
      pTotal.textContent = valorTotal.toFixed(2);

      divItem.appendChild(pNome);
      divQuantidade.appendChild(pQuantidade);
      divManaPorSegundo.appendChild(pManaPorSegundo);
      divTotalMana.appendChild(pTotal);

      divContainer.classList.add("container-fonte-mana");
      divItem.classList.add("fonte-description");
      divQuantidade.classList.add("fonte-quantity");
      divManaPorSegundo.classList.add("fonte-reward");
      divTotalMana.classList.add("fonte-total-reward");

      if (comprada.bonus > 1) {
        divManaPorSegundo.classList.add("bonus");
        divTotalMana.classList.add("bonus");
      } else {
        divManaPorSegundo.classList.remove("bonus");
        divTotalMana.classList.remove("bonus");
      }

      divContainer.appendChild(divItem);
      divContainer.appendChild(divQuantidade);
      divContainer.appendChild(divManaPorSegundo);
      divContainer.appendChild(divTotalMana);

      divManaStats.appendChild(divContainer);
    });
  },

  showSummonStats(divSummonStats, criaturas) {
    const linhas = divSummonStats.querySelectorAll(
      ".container-fonte-mana:not(.header-fonte-mana)",
    );
    linhas.forEach(linha => linha.remove());

    criaturas.forEach(criatura => {
      const comprada = this.invocacoesCompradas.find(
        i => i.nome === criatura.nome,
      );
      if (!comprada) return;
      const divContainer = document.createElement("div");
      const divItem = document.createElement("div");
      const divQuantidade = document.createElement("div");
      const divDanoPorSegundo = document.createElement("div");
      const divTotalDano = document.createElement("div");
      const pNome = document.createElement("p");
      const pDanoPorSegundo = document.createElement("p");
      const pQuantidade = document.createElement("p");
      const pTotal = document.createElement("p");

      pNome.textContent = comprada.nome;
      pDanoPorSegundo.textContent = (
        comprada.danoPorSegundo * comprada.bonus
      ).toFixed(2);
      pQuantidade.textContent = comprada.quantidade;
      pTotal.textContent = (
        comprada.quantidade *
        comprada.danoPorSegundo *
        comprada.bonus
      ).toFixed(2);

      divItem.appendChild(pNome);
      divQuantidade.appendChild(pQuantidade);
      divDanoPorSegundo.appendChild(pDanoPorSegundo);
      divTotalDano.appendChild(pTotal);

      divContainer.classList.add("container-fonte-mana");
      divItem.classList.add("fonte-description");
      divQuantidade.classList.add("fonte-quantity");
      divDanoPorSegundo.classList.add("fonte-reward");
      divTotalDano.classList.add("fonte-total-reward");

      if (comprada.bonus > 1) {
        if (comprada.elemento === "fogo") {
          divDanoPorSegundo.classList.add("bonusFire");
          divTotalDano.classList.add("bonusFire");
        } else if (comprada.elemento === "terra") {
          divDanoPorSegundo.classList.add("bonusEarth");
          divTotalDano.classList.add("bonusEarth");
        } else if (comprada.elemento === "agua") {
          divDanoPorSegundo.classList.add("bonusWater");
          divTotalDano.classList.add("bonusWater");
        } else if (comprada.elemento === "ar") {
          divDanoPorSegundo.classList.add("bonusAir");
          divTotalDano.classList.add("bonusAir");
        }
      }

      divContainer.appendChild(divItem);
      divContainer.appendChild(divQuantidade);
      divContainer.appendChild(divDanoPorSegundo);
      divContainer.appendChild(divTotalDano);

      divSummonStats.appendChild(divContainer);
    });
  },

  golpear() {
    return this.danoGolpeCajado;
  },

  applyEfects() {
    // Se não equipou nenhum item eu pulo a aplicação dos efeitos
    if (Object.values(this.itensEquipados).every(slot => slot === null)) return;
    console.log(this.fontesCompradas);
    // zera todos os bonus
    this.invocacoesCompradas.forEach(invocacao => (invocacao.bonus = 1));
    this.fontesCompradas.forEach(fonte => (fonte.bonus = 1));

    // aplico os efeitos dos itens equipados
    Object.values(this.itensEquipados).forEach(item => {
      if (!item) return; // slot vazio
      item.efeito.forEach(efeito => {
        console.log(efeito);
        console.log(this.invocacoesCompradas);
        if (efeito.tipo === "invocacao") {
          this.invocacoesCompradas.forEach(invocacao => {
            if (efeito.alvo === "all" || invocacao.elemento === efeito.alvo) {
              invocacao.bonus += efeito.bonus;
              console.log(invocacao.nome, invocacao.bonus);
            }
          });
        }
        if (efeito.tipo === "fonteMana") {
          this.fontesCompradas.forEach(fonte => {
            fonte.bonus += efeito.bonus;
          });
        }
      });
    });
  },
};

export { player };
