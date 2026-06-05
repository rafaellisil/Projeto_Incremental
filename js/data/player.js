let player = {
  gold: 100,
  manaAtual: 0,
  manaPorSegundo: 0,
  danoPorSegundo: 0,
  fontesCompradas: [],
  invocacoesCompradas: [],
  danoGolpeCajado: 5,

  calcManaPorSegundo() {
    this.manaPorSegundo = 0;
    this.fontesCompradas.forEach(fonte => {
      this.manaPorSegundo += fonte.manaPorSegundo * fonte.quantidade;
    });
    this.danoPorSegundo = 0;
    this.invocacoesCompradas.forEach(summon => {
      this.danoPorSegundo += summon.danoPorSegundo * summon.quantidade;
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
      pManaPorSegundo.textContent = comprada.manaPorSegundo;
      pQuantidade.textContent = comprada.quantidade;
      const valorTotal = comprada.quantidade * comprada.manaPorSegundo;
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
      pDanoPorSegundo.textContent = comprada.danoPorSegundo;
      pQuantidade.textContent = comprada.quantidade;
      pTotal.textContent = (
        comprada.quantidade * comprada.danoPorSegundo
      ).toFixed(1);

      divItem.appendChild(pNome);
      divQuantidade.appendChild(pQuantidade);
      divDanoPorSegundo.appendChild(pDanoPorSegundo);
      divTotalDano.appendChild(pTotal);

      divContainer.classList.add("container-fonte-mana");
      divItem.classList.add("fonte-description");
      divQuantidade.classList.add("fonte-quantity");
      divDanoPorSegundo.classList.add("fonte-reward");
      divTotalDano.classList.add("fonte-total-reward");

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
};

export { player }