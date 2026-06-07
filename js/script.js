import { criaturas } from "./data/criaturas_db.js";
import { fontsMana } from "./data/fontes_db.js";
import { eventos } from "./data/eventos_db.js"
import { itens } from "./data/itens_db.js"
import { inimigos } from "./data/inimigos_db.js"
import { player } from "./data/player.js"
import { addFontes } from "./logic/addFontes.js";
import { addInvocation } from "./logic/addInvocation.js";
import { game } from "./logic/game.js"
import "./logic/reiniciar.js";
import { openInventory } from "./logic/inventory.js";


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



playerManaTotal.textContent = player.manaAtual.toFixed(2);
playerGoldTotal.textContent = player.gold;



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



// inicializar
const intervaloGame = game(divLogHistory, divManaStats, divSummonStats, player, playerManaTotal, playerDmgQuantity, fontsMana, criaturas, playerGoldTotal);
addFontes(fontsMana, divManaContainer, player, playerGoldTotal, divLogHistory);
addInvocation(criaturas, divInvocacoes, player, playerManaTotal, divLogHistory);
trocarDeAba(tabMana);
trocarDeAba(tabInvoc);
trocarDeAba(tabStatistics);
openInventory()