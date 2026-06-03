import { eventVerify, drawEvent, updateLog, stopEvents} from "./log.js"

function game(divLogHistory, divManaStats, divSummonStats, player, playerManaTotal, playerDmgQuantity, fontsMana, criaturas, playerGoldTotal) {
  setInterval(() => {
    // atualizar a mana e dano por segundo no info
    updatePlayer(divLogHistory, divManaStats, divSummonStats, player, playerManaTotal, playerDmgQuantity);

    // sortear um evento
    eventVerify(divLogHistory, playerGoldTotal);

    //Atualizar estatisticas
    player.showStatistics(divManaStats, fontsMana);
    player.showSummonStats(divSummonStats, criaturas);
  }, 1000);
}

function updatePlayer(divLogHistory, divManaStats, divSummonStats, player, playerManaTotal, playerDmgQuantity) {
  player.calcManaPorSegundo();
  playerManaTotal.textContent = player.manaAtual.toFixed(2);
  playerDmgQuantity.textContent = player.danoPorSegundo.toFixed(1);
}


export { game }