const fontsMana = [
  {
    nome: "Meditar",
    manaPorSegundo: 0.1,
    intervalSegundos: 1,
    custaMoedas: 5,
  },
  {
    nome: "Vela Mística",
    manaPorSegundo: 0.25,
    intervalSegundos: 1,
    custaMoedas: 10,
  },
  {
    nome: "Cristal Bruto",
    manaPorSegundo: 0.6,
    intervalSegundos: 1,
    custaMoedas: 30,
  },
  {
    nome: "Altar de Pedra",
    manaPorSegundo: 1.25,
    intervalSegundos: 1,
    custaMoedas: 80,
  },
  {
    nome: "Fonte Arcana",
    manaPorSegundo: 2.5,
    intervalSegundos: 1,
    custaMoedas: 200,
  },
  {
    nome: "Grimório Antigo",
    manaPorSegundo: 5,
    intervalSegundos: 1,
    custaMoedas: 500,
  },
  {
    nome: "Estátua Rúnica",
    manaPorSegundo: 10,
    intervalSegundos: 1,
    custaMoedas: 1200,
  },
  {
    nome: "Portal Elemental",
    manaPorSegundo: 20,
    intervalSegundos: 1,
    custaMoedas: 3000,
  },
  {
    nome: "Nexus de Energia",
    manaPorSegundo: 40,
    intervalSegundos: 1,
    custaMoedas: 7500,
  },
  {
    nome: "Obelisco Sagrado",
    manaPorSegundo: 80,
    intervalSegundos: 1,
    custaMoedas: 20000,
  },
  {
    nome: "Coração do Cosmos",
    manaPorSegundo: 175,
    intervalSegundos: 1,
    custaMoedas: 60000,
  },
];
const criaturas = [
  // — Fogo —
  { nome: "Salamandra", danoPorSegundo: 3, custaMana: 20, elemento: "fogo" },
  {
    nome: "Espírito Ígneo",
    danoPorSegundo: 8,
    custaMana: 60,
    elemento: "fogo",
  },
  { nome: "Fênix", danoPorSegundo: 20, custaMana: 180, elemento: "fogo" },
  {
    nome: "Dragão de Lava",
    danoPorSegundo: 55,
    custaMana: 500,
    elemento: "fogo",
  },
  {
    nome: "Titã das Chamas",
    danoPorSegundo: 130,
    custaMana: 1400,
    elemento: "fogo",
  },

  // — Água —
  { nome: "Tritão", danoPorSegundo: 4, custaMana: 25, elemento: "agua" },
  {
    nome: "Sereia das Névoas",
    danoPorSegundo: 10,
    custaMana: 75,
    elemento: "agua",
  },
  { nome: "Leviatã", danoPorSegundo: 25, custaMana: 220, elemento: "agua" },
  {
    nome: "Kraken Arcano",
    danoPorSegundo: 65,
    custaMana: 620,
    elemento: "agua",
  },
  {
    nome: "Senhor do Dilúvio",
    danoPorSegundo: 150,
    custaMana: 1700,
    elemento: "agua",
  },

  // — Ar —
  { nome: "Sílfide", danoPorSegundo: 3.5, custaMana: 22, elemento: "ar" },
  { nome: "Águia Trovão", danoPorSegundo: 9, custaMana: 68, elemento: "ar" },
  {
    nome: "Djinn do Vendaval",
    danoPorSegundo: 22,
    custaMana: 200,
    elemento: "ar",
  },
  {
    nome: "Colosso do Vento",
    danoPorSegundo: 60,
    custaMana: 560,
    elemento: "ar",
  },
  {
    nome: "Imperador do Céu",
    danoPorSegundo: 140,
    custaMana: 1550,
    elemento: "ar",
  },

  // — Terra —
  {
    nome: "Gnomo das Rochas",
    danoPorSegundo: 5,
    custaMana: 28,
    elemento: "terra",
  },
  {
    nome: "Golem de Pedra",
    danoPorSegundo: 12,
    custaMana: 90,
    elemento: "terra",
  },
  {
    nome: "Guardião Antigo",
    danoPorSegundo: 30,
    custaMana: 260,
    elemento: "terra",
  },
  {
    nome: "Ciclope de Granito",
    danoPorSegundo: 75,
    custaMana: 700,
    elemento: "terra",
  },
  {
    nome: "Behemoth Primordial",
    danoPorSegundo: 175,
    custaMana: 2000,
    elemento: "terra",
  },
];
const eventos = [
  "Uma névoa arcana paira sobre a torre enquanto os feitiços ganham força...",
  "O vento sussurra segredos ancestrais entre as pedras da torre.",
  "Cristais mágicos pulsam nas paredes, vibrando com energia latente.",
  "A lua cheia ilumina os grimórios antigos, amplificando o poder arcano.",
  "Sombras dançam nos corredores enquanto a mana flui pela torre.",
  "Um estranho aroma de ervas místicas toma conta do ambiente.",
  "Runas antigas brilham fracamente nas paredes de pedra da torre.",
  "O silêncio é cortado pelo eco distante de criaturas além do véu.",
  "Faíscas mágicas surgem espontaneamente no ar ao redor do feiticeiro.",
  "A torre treme levemente, como se respondesse ao chamado das estrelas.",
  "Uma fada brilhante passou por você deixando um rastro de pó dourado.",
  "Um pequeno dragão de bolso bocejou e se aninhou no seu chapéu.",
  "Um coelho luminoso farejou seus pés e saltou alegremente pela torre.",
  "Uma borboleta de asas cristalinas pousou gentilmente no seu grimório.",
  "Um espírito curioso em forma de gato roçou suas pernas e desapareceu.",
  "Cogumelos mágicos brotaram no canto da torre e piscaram para você.",
  "Uma estrela cadente passou pela janela e deixou um brilho na parede.",
  "Um duende travesso escondeu sua varinha, mas devolveu sorrindo.",
  "Flores encantadas desabrocharam no peitoril da janela ao seu entusiasmo.",
  "Uma coruja sábia pousou no seu ombro e piscou um olho sabiamente.",
];
const inimigos = [
  // — Fogo —
  {
    nome: "Brasa Rastejante",
    vida: 50,
    elemento: "fogo",
    tempoLimite: 15,
    recompensa: 5,
  },
  {
    nome: "Salamandra Selvagem",
    vida: 120,
    elemento: "fogo",
    tempoLimite: 20,
    recompensa: 12,
  },
  {
    nome: "Espírito das Chamas",
    vida: 280,
    elemento: "fogo",
    tempoLimite: 25,
    recompensa: 30,
  },
  {
    nome: "Golem de Magma",
    vida: 600,
    elemento: "fogo",
    tempoLimite: 30,
    recompensa: 70,
  },
  {
    nome: "Senhor do Inferno",
    vida: 1200,
    elemento: "fogo",
    tempoLimite: 40,
    recompensa: 150,
  },

  // — Água —
  {
    nome: "Lodo Aquático",
    vida: 45,
    elemento: "agua",
    tempoLimite: 15,
    recompensa: 5,
  },
  {
    nome: "Caranguejo Abissal",
    vida: 110,
    elemento: "agua",
    tempoLimite: 20,
    recompensa: 12,
  },
  {
    nome: "Serpente das Marés",
    vida: 260,
    elemento: "agua",
    tempoLimite: 25,
    recompensa: 30,
  },
  {
    nome: "Hidra das Profundezas",
    vida: 580,
    elemento: "agua",
    tempoLimite: 30,
    recompensa: 70,
  },
  {
    nome: "Leviatã Primordial",
    vida: 1150,
    elemento: "agua",
    tempoLimite: 40,
    recompensa: 150,
  },

  // — Ar —
  {
    nome: "Faísca Errante",
    vida: 40,
    elemento: "ar",
    tempoLimite: 15,
    recompensa: 5,
  },
  {
    nome: "Espectro do Vento",
    vida: 100,
    elemento: "ar",
    tempoLimite: 20,
    recompensa: 12,
  },
  {
    nome: "Harpia Tempestuosa",
    vida: 240,
    elemento: "ar",
    tempoLimite: 25,
    recompensa: 30,
  },
  {
    nome: "Djinn Furioso",
    vida: 550,
    elemento: "ar",
    tempoLimite: 30,
    recompensa: 70,
  },
  {
    nome: "Imperador dos Ventos",
    vida: 1100,
    elemento: "ar",
    tempoLimite: 40,
    recompensa: 150,
  },

  // — Terra —
  {
    nome: "Pedra Animada",
    vida: 60,
    elemento: "terra",
    tempoLimite: 15,
    recompensa: 5,
  },
  {
    nome: "Gnomo Furioso",
    vida: 140,
    elemento: "terra",
    tempoLimite: 20,
    recompensa: 12,
  },
  {
    nome: "Troll de Granito",
    vida: 320,
    elemento: "terra",
    tempoLimite: 25,
    recompensa: 30,
  },
  {
    nome: "Colosso de Pedra",
    vida: 650,
    elemento: "terra",
    tempoLimite: 30,
    recompensa: 70,
  },
  {
    nome: "Behemoth das Eras",
    vida: 1300,
    elemento: "terra",
    tempoLimite: 40,
    recompensa: 150,
  },
];
const itens = [
  // — Cabeça —
  {
    nome: "Capuz de Aprendiz",
    slot: "cabeca",
    descricao: "Fontes de mana geram 10% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.1 },
    valor: 50,
    raridade: "normal",
  },
  {
    nome: "Tiara Arcana",
    slot: "cabeca",
    descricao: "Invocações de ar causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoAr", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Elmo de Pedra Rúnica",
    slot: "cabeca",
    descricao: "Invocações de terra causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoTerra", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Capuz do Sábio",
    slot: "cabeca",
    descricao: "Todas as fontes de mana geram 18% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.18 },
    valor: 120,
    raridade: "normal",
  },
  {
    nome: "Coroa do Cosmos",
    slot: "cabeca",
    descricao: "Todas as invocações causam 30% mais dano por segundo.",
    efeito: { alvo: "todasInvocacoes", bonus: 0.3 },
    valor: 500,
    raridade: "raro",
  },

  // — Pés —
  {
    nome: "Sandálias de Viajante",
    slot: "pes",
    descricao: "Invocações de fogo causam 10% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogo", bonus: 0.1 },
    valor: 50,
    raridade: "normal",
  },
  {
    nome: "Botas de Couro Arcano",
    slot: "pes",
    descricao: "Fontes de mana geram 12% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Sapatos de Névoa",
    slot: "pes",
    descricao: "Invocações de água causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoAgua", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Botas Rúnicas",
    slot: "pes",
    descricao: "Invocações de ar causam 18% mais dano por segundo.",
    efeito: { alvo: "invocacaoAr", bonus: 0.18 },
    valor: 120,
    raridade: "normal",
  },
  {
    nome: "Passos do Éter",
    slot: "pes",
    descricao: "Todas as fontes de mana geram 35% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.35 },
    valor: 500,
    raridade: "raro",
  },

  // — Roupão —
  {
    nome: "Roupão de Algodão Arcano",
    slot: "roupao",
    descricao: "Invocações de terra causam 10% mais dano por segundo.",
    efeito: { alvo: "invocacaoTerra", bonus: 0.1 },
    valor: 50,
    raridade: "normal",
  },
  {
    nome: "Manto do Iniciado",
    slot: "roupao",
    descricao: "Fontes de mana geram 12% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Vestes de Chama",
    slot: "roupao",
    descricao: "Invocações de fogo causam 15% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogo", bonus: 0.15 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Manto do Arquimago",
    slot: "roupao",
    descricao: "Todas as invocações causam 18% mais dano por segundo.",
    efeito: { alvo: "todasInvocacoes", bonus: 0.18 },
    valor: 120,
    raridade: "normal",
  },
  {
    nome: "Vestes do Vazio",
    slot: "roupao",
    descricao:
      "Fontes de mana geram 40% mais mana e invocações causam 20% mais dano.",
    efeito: { alvo: "tudo", bonus: { fonteMana: 0.4, todasInvocacoes: 0.2 } },
    valor: 500,
    raridade: "raro",
  },

  // — Luvas —
  {
    nome: "Luvas de Tecido",
    slot: "luvas",
    descricao: "Invocações de água causam 10% mais dano por segundo.",
    efeito: { alvo: "invocacaoAgua", bonus: 0.1 },
    valor: 50,
    raridade: "normal",
  },
  {
    nome: "Luvas Rúnicas",
    slot: "luvas",
    descricao: "Invocações de fogo causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogo", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Manoplas de Gelo",
    slot: "luvas",
    descricao: "Invocações de água causam 15% mais dano por segundo.",
    efeito: { alvo: "invocacaoAgua", bonus: 0.15 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Luvas do Elementalista",
    slot: "luvas",
    descricao: "Fontes de mana geram 18% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.18 },
    valor: 120,
    raridade: "normal",
  },
  {
    nome: "Mãos do Caos",
    slot: "luvas",
    descricao: "Invocações de fogo e terra causam 35% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogoTerra", bonus: 0.35 },
    valor: 500,
    raridade: "raro",
  },

  // — Colar —
  {
    nome: "Amuleto de Osso",
    slot: "colar",
    descricao: "Invocações de ar causam 10% mais dano por segundo.",
    efeito: { alvo: "invocacaoAr", bonus: 0.1 },
    valor: 50,
    raridade: "normal",
  },
  {
    nome: "Colar de Cristal",
    slot: "colar",
    descricao: "Fontes de mana geram 15% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.15 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Pingente de Chama",
    slot: "colar",
    descricao: "Invocações de fogo causam 15% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogo", bonus: 0.15 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Colar do Druida",
    slot: "colar",
    descricao: "Invocações de terra causam 18% mais dano por segundo.",
    efeito: { alvo: "invocacaoTerra", bonus: 0.18 },
    valor: 120,
    raridade: "normal",
  },
  {
    nome: "Orbe da Criação",
    slot: "colar",
    descricao: "Invocações de água e ar causam 35% mais dano por segundo.",
    efeito: { alvo: "invocacaoAguaAr", bonus: 0.35 },
    valor: 500,
    raridade: "raro",
  },

  // — Pet —
  {
    nome: "Ratinho Arcano",
    slot: "pet",
    descricao: "Fontes de mana geram 8% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.08 },
    valor: 50,
    raridade: "normal",
  },
  {
    nome: "Coruja Mística",
    slot: "pet",
    descricao: "Invocações de ar causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoAr", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Lagartixa de Lava",
    slot: "pet",
    descricao: "Invocações de fogo causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogo", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
  },
  {
    nome: "Tartaruga Rúnica",
    slot: "pet",
    descricao: "Invocações de terra causam 15% mais dano por segundo.",
    efeito: { alvo: "invocacaoTerra", bonus: 0.15 },
    valor: 120,
    raridade: "normal",
  },
  {
    nome: "Dragãozinho do Caos",
    slot: "pet",
    descricao:
      "Todas as invocações causam 25% mais dano e fontes geram 20% mais mana.",
    efeito: { alvo: "tudo", bonus: { todasInvocacoes: 0.25, fonteMana: 0.2 } },
    valor: 500,
    raridade: "raro",
  },
];

const divManaContainer = document.querySelector("#mana-container");
const divInvocacoes = document.querySelector("#creature-container");
const tabMana = document.querySelector(".btnMana");
const tabInvoc = document.querySelector(".btnInvocacoes");
const tabStatistics = document.querySelector(".btnEstatisticas");
const divBuyMana = document.querySelector(".pegar-mana");
const divBuySummons = document.querySelector("#invocacoes");
const divStatistics = document.querySelector("#estatisticas");
const divManaStats = document.querySelector(".manaStats");
const divSummonStats = document.querySelector(".summonStats");
const playerManaTotal = document.querySelector(".mana-quantity");
const playerGoldTotal = document.querySelector(".gold-quantity");
const playerDmgQuantity = document.querySelector(".dmg-quantity");
const divLogHistory = document.querySelector("#log-history");

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

  updateGold(fonte, quantidade) {
    this.gold -= fonte.custaMoedas * quantidade;
    playerGoldTotal.textContent = this.gold;
  },

  updateInvocacoes(fonte, quantidade) {
    this.manaAtual -= fonte.custaMana * quantidade;
    playerManaTotal.textContent = this.manaAtual.toFixed(2);
  },

  showStatistics() {
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

  showSummonStats() {
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

let log = {
  pauseEventVerify: false,
};

playerManaTotal.textContent = player.manaAtual.toFixed(2);
playerGoldTotal.textContent = player.gold;

//Funçõe

function addFontes(arr) {
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

      comprarMana(player, fonte, 1);
      player.fontesCompradas.forEach(item => {
        if (item.nome === infoNome) {
          quantity.textContent = `Possui: ${item.quantidade}`;
        }
      });
    });
  });
}

function addInvocation(arr) {
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

      comprarInvocacoes(player, fonte, 1);
      player.invocacoesCompradas.forEach(invocacao => {
        if (invocacao.nome === creatureName) {
          quantity.textContent = `Possui: ${invocacao.quantidade}`;
        }
      });
    });
  });
}

function trocarDeAba(aba) {
  aba.addEventListener("click", e => {
    e.preventDefault();

    if (aba.classList.contains("btnClicked")) return;
    if (aba === tabMana) {
      divBuyMana.classList.remove("hide");
      tabMana.classList.add("btnClicked");
      divBuySummons.classList.add("hide");
      tabInvoc.classList.remove("btnClicked");
      divStatistics.classList.add("hide");
      tabStatistics.classList.remove("btnClicked");
    } else if (aba === tabInvoc) {
      divBuySummons.classList.remove("hide");
      tabInvoc.classList.add("btnClicked");
      divBuyMana.classList.add("hide");
      tabMana.classList.remove("btnClicked");
      divStatistics.classList.add("hide");
      tabStatistics.classList.remove("btnClicked");
    } else if (aba === tabStatistics) {
      divBuySummons.classList.add("hide");
      tabInvoc.classList.remove("btnClicked");
      divBuyMana.classList.add("hide");
      tabMana.classList.remove("btnClicked");
      divStatistics.classList.remove("hide");
      tabStatistics.classList.add("btnClicked");
    }
  });
}

function comprarMana(player, fonte, quantidade) {
  if (player.gold >= fonte.custaMoedas * quantidade) {
    player.updateGold(fonte, quantidade);
    const eventoCompra = `Comprou ${fonte.nome}`;
    updateLog(eventoCompra, false);

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

function comprarInvocacoes(player, invocacao, quantidade) {
  if (player.manaAtual >= invocacao.custaMana * quantidade) {
    player.updateInvocacoes(invocacao, quantidade);
    const eventoCompra = `Comprou ${invocacao.nome}`;
    updateLog(eventoCompra, false);

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

function updatePlayer() {
  player.calcManaPorSegundo();
  playerManaTotal.textContent = player.manaAtual.toFixed(2);
  playerDmgQuantity.textContent = player.danoPorSegundo.toFixed(1);
}

function eventVerify() {
  if (log.pauseEventVerify === true) {
    return;
  }

  const seed = Math.random().toFixed(2);
  // console.log(seed * 100)
  if (!log.pauseEventVerify) {
    if (seed * 100 >= 93 && seed * 100 < 97) {
      log.pauseEventVerify = true;
      drawEvent(eventos, true);
    } else if (seed * 100 >= 97 && seed * 100 < 99) {
      log.pauseEventVerify = true;
      battle();
    }
  }
}

function drawEvent(eventos, stopEvent) {
  const drawEvent = Math.random();
  const drawNumber = drawEvent * eventos.length - 1;
  const id = Math.ceil(drawNumber);
  const eventoSorteado = eventos[id];

  updateLog(eventoSorteado, stopEvent);
}

function updateLog(evento, stopEvent) {
  if (stopEvent === true) {
    const eventP = document.createElement("p");
    eventP.textContent = `-> ${evento}`;
    divLogHistory.prepend(eventP);
    stopEvents();
    return;
  }
  const eventP = document.createElement("p");
  eventP.textContent = `-> ${evento}`;
  divLogHistory.prepend(eventP);
}

function stopEvents() {
  setTimeout(() => {
    log.pauseEventVerify = false;
    const eventWalk = document.createElement("p");
    eventWalk.textContent = "Caminhando";
    divLogHistory.prepend(eventWalk);
  }, 10000);
}

function game() {
  setInterval(() => {
    // atualizar a mana e dano por segundo no info
    updatePlayer();

    // sortear um evento
    eventVerify();

    //Atualizar estatisticas
    player.showStatistics();
    player.showSummonStats();
  }, 1000);
}

function battle() {
  let inimigo = [];
  console.log(player.manaPorSegundo);
  if (player.manaPorSegundo <= 10) {
    const monstrosFracos = [0, 5, 10, 15];
    let sortearmonstro = Math.floor(Math.random() * monstrosFracos.length);
    inimigo = inimigos[monstrosFracos[sortearmonstro]];
  }
  if (player.manaPorSegundo > 10 && player.manaPorSegundo <= 30) {
    const monstrosMedios = [0, 1, 5, 6, 10, 11, 15, 16];
    let sortearmonstro = Math.floor(Math.random() * monstrosMedios.length);
    inimigo = inimigos[monstrosMedios[sortearmonstro]];
  }
  if (player.manaPorSegundo > 30 && player.manaPorSegundo <= 80) {
    const monstrosFortes = [0, 1, 2, 5, 6, 7, 10, 11, 12, 15, 16, 17];
    let sortearmonstro = Math.floor(Math.random() * monstrosFortes.length);
    inimigo = inimigos[monstrosFortes[sortearmonstro]];
  }
  if (player.manaPorSegundo > 80 && player.manaPorSegundo <= 150) {
    const monstrosDificeis = [
      0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18,
    ];
    let sortearmonstro = Math.floor(Math.random() * monstrosDificeis.length);
    inimigo = inimigos[monstrosDificeis[sortearmonstro]];
  }
  if (player.manaPorSegundo > 150 && player.manaPorSegundo <= 300) {
    const monstrosImpossiveis = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    let sortearmonstro = Math.floor(Math.random() * monstrosImpossiveis.length);
    inimigo = inimigos[monstrosImpossiveis[sortearmonstro]];
  }

  const divBatalhaEvent = document.createElement("div");
  const divNomeInimigo = document.createElement("div");
  const pNomeInimigo = document.createElement("p");
  const divElemento = document.createElement("div");
  const pElemento = document.createElement("p");
  const divTempo = document.createElement("div");
  const pTempoLimite = document.createElement("p");
  const divVidaVisual = document.createElement("div");
  const divButton = document.createElement("div");
  const btnAtaque = document.createElement("button");

  divBatalhaEvent.classList.add("div-batalha-evento");
  divNomeInimigo.classList.add("div-nome-inimigo");
  pNomeInimigo.classList.add("p-nome-inimigo");
  divElemento.classList.add("div-elemento-inimigo");
  pElemento.classList.add("p-elemento-inimigo");
  divTempo.classList.add("div-tempo-inimigo");
  pTempoLimite.classList.add("p-tempo-limite");
  divVidaVisual.classList.add("div-vida-visual");
  divButton.classList.add("div-button-ataque");
  btnAtaque.classList.add("button-ataque");

  divNomeInimigo.classList.add(inimigo.elemento);

  console.log(inimigo);

  pNomeInimigo.textContent = inimigo.nome;
  pElemento.textContent = `Elemento ${inimigo.elemento}`;
  pTempoLimite.textContent = `Tempo restante: ${inimigo.tempoLimite}`;
  btnAtaque.textContent = "Bater com o Cajado";

  divVidaVisual.style.width = "100%";

  divNomeInimigo.appendChild(pNomeInimigo);
  divElemento.appendChild(pElemento);
  divTempo.appendChild(pTempoLimite);
  divTempo.appendChild(divVidaVisual);
  divButton.appendChild(btnAtaque);

  divBatalhaEvent.appendChild(divNomeInimigo);
  divBatalhaEvent.appendChild(divElemento);
  divBatalhaEvent.appendChild(divTempo);
  divBatalhaEvent.appendChild(divButton);

  divLogHistory.prepend(divBatalhaEvent);

  let tempoRestante = inimigo.tempoLimite;
  let vidaInimigo = inimigo.vida;

  btnAtaque.addEventListener("click", e => {
    e.preventDefault();
    vidaInimigo -= player.golpear();
    const porcentagem = (vidaInimigo / inimigo.vida) * 100;
    divVidaVisual.style.width = `${porcentagem}%`;
  });
  calcDmg();
  function calcDmg() {
    const intervalo = setInterval(() => {
      vidaInimigo -= player.danoPorSegundo;
      tempoRestante--;
      const porcentagem = (vidaInimigo / inimigo.vida) * 100;
      divVidaVisual.style.width = `${porcentagem}%`;

      console.log(vidaInimigo, tempoRestante, porcentagem);
      pTempoLimite.textContent = `Tempo restante: ${tempoRestante}`;

      if (vidaInimigo <= 0) {
        clearInterval(intervalo);
        divBatalhaEvent.innerHTML = "";

        const divVitoriaResult = document.createElement("div");
        const h4VitoriaResult = document.createElement("h4");
        const divReward = document.createElement("div");
        const pReward = document.createElement("p");
        const iReward = document.createElement("i");

        divBatalhaEvent.style.border = "1px solid var(--moeda)";

        divVitoriaResult.style.display = "flex";
        divVitoriaResult.style.justifyContent = "center";
        divVitoriaResult.style.alignItems = "center";
        divVitoriaResult.style.height = "60%";
        divVitoriaResult.style.width = "100%";

        divReward.style.display = "flex";
        divReward.style.justifyContent = "center";
        divReward.style.alignItems = "center";
        divReward.style.flexDirection = "row";
        divReward.style.height = "40%";
        divReward.style.width = "100%";
        divReward.style.border = "1px solid var(--border-muted)";

        h4VitoriaResult.textContent = "Vitória";
        h4VitoriaResult.style.color = "var(--moeda)";
        h4VitoriaResult.style.textTransform = "uppercase";
        h4VitoriaResult.style.color = "var(--moeda)";

        iReward.style.color = "var(--moeda)";
        iReward.style.width = "20%";

        pReward.textContent = `Ganhou ${inimigo.recompensa} moedas`;
        iReward.classList.add("fa-solid", "fa-coins");
        player.gold += inimigo.recompensa;
        playerGoldTotal.textContent = player.gold;

        divReward.appendChild(iReward);
        divReward.appendChild(pReward);
        divVitoriaResult.appendChild(h4VitoriaResult);

        divBatalhaEvent.appendChild(divVitoriaResult);
        divBatalhaEvent.appendChild(divReward);

        stopEvents();
      }

      if (tempoRestante <= 0) {
        clearInterval(intervalo);
      }
    }, 1000);
  }
}

// inicializar
game();
addFontes(fontsMana);
addInvocation(criaturas);
trocarDeAba(tabMana);
trocarDeAba(tabInvoc);
trocarDeAba(tabStatistics);
