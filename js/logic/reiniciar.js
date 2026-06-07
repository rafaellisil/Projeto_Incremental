import { player } from "../data/player.js";
import { log } from "./log.js";
import { addFontes } from "./addFontes.js";
import { addInvocation } from "./addInvocation.js";
import { game } from "./game.js"
import { criaturas } from "../data/criaturas_db.js";
import { fontsMana } from "../data/fontes_db.js";

const playerManaTotal = document.querySelector(".mana-quantity");
const playerGoldTotal = document.querySelector(".gold-quantity");
const buttonReiniciar = document.querySelector("#btn-reiniciar");
const divLogHistory = document.querySelector("#log-history");
const divManaStats = document.querySelector(".manaStats");
const divSummonStats = document.querySelector(".summonStats");
const playerDmgQuantity = document.querySelector(".dmg-quantity");

buttonReiniciar.addEventListener("click", e => {
  e.preventDefault();

  player.gold = 10;
  player.manaAtual = 0;
  player.manaPorSegundo = 0;
  player.danoPorSegundo = 0;
  player.fontesCompradas = [{ nome: "Meditar", quantidade: 1, manaPorSegundo: 0.04, bonus: 1 }];
  player.invocacoesCompradas = [];
  player.itensComprados = [],
  player.danoGolpeCajado = 5;
  player.itensEquipados = {
    cabeca: null,
    pes: null,
    roupao: null,
    luvas: null,
    colar: null,
  },

  playerGoldTotal.textContent = player.gold;
  const lifeContainer = document.querySelector(".life-container");

  for (let i = 0; i < 3; i++) {
    const divIconeLife = document.createElement("div");
    const iIconeLife = document.createElement("i");

    divIconeLife.classList.add("icone-life");
    iIconeLife.classList.add("fa-solid", "fa-heart");

    divIconeLife.appendChild(iIconeLife);
    lifeContainer.appendChild(divIconeLife);
  }

  const divLogHistory = document.querySelector("#log-history");
  divLogHistory.innerHTML = "";
  const divManaContainer = document.querySelector("#mana-container");
  divManaContainer.innerHTML = ""
  addFontes(fontsMana, divManaContainer, player, playerGoldTotal, divLogHistory)
  const divInvocacoes = document.querySelector("#creature-container");
  divInvocacoes.innerHTML = ""
  addInvocation(criaturas, divInvocacoes, player, playerManaTotal, divLogHistory)
  game(divLogHistory, divManaStats, divSummonStats, player, playerManaTotal, playerDmgQuantity, fontsMana, criaturas, playerGoldTotal)


  document.querySelector("#popup-gameover").classList.add("hidden");
});
