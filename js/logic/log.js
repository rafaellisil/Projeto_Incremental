import {eventos} from "../data/eventos_db.js"
import {inimigos} from "../data/inimigos_db.js"
import { battle } from "./battle.js"

let log = {
  pauseEventVerify: false,
};

function eventVerify(divLogHistory, playerGoldTotal) {
  if (log.pauseEventVerify === true) {
    return;
  }

  const seed = Math.random().toFixed(2);
  if (!log.pauseEventVerify) {
    console.log(seed*100)
    if (seed * 100 >= 93 && seed * 100 < 94) {
      log.pauseEventVerify = true;
      drawEvent(eventos, true, divLogHistory);
    } else if (seed * 100 >= 94 && seed * 100 < 100) {
      log.pauseEventVerify = true;
      battle(divLogHistory, inimigos, playerGoldTotal);
    }
  }
}

function drawEvent(eventos, stopEvent, divLogHistory) {
  const drawEvent = Math.random();
  const drawNumber = drawEvent * eventos.length - 1;
  const id = Math.ceil(drawNumber);
  const eventoSorteado = eventos[id];

  updateLog(eventoSorteado, stopEvent, divLogHistory);
}

function updateLog(evento, stopEvent, divLogHistory) {
  if (stopEvent === true) {
    const eventP = document.createElement("p");
    eventP.textContent = `-> ${evento}`;
    divLogHistory.prepend(eventP);
    stopEvents(divLogHistory);
    return;
  }
  const eventP = document.createElement("p");
  eventP.textContent = `-> ${evento}`;
  divLogHistory.prepend(eventP);
}

function stopEvents(divLogHistory) {
  setTimeout(() => {
    log.pauseEventVerify = false;
    const eventWalk = document.createElement("p");
    eventWalk.textContent = "Caminhando";
    divLogHistory.prepend(eventWalk);
  }, 10000);
}

export {log, eventVerify, drawEvent, updateLog, stopEvents}