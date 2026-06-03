import { player } from "../data/player.js";
import { stopEvents } from "./log.js";

function battle(divLogHistory, inimigos, playerGoldTotal) {
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
    const monstrosFortes = [1, 2, 6, 7, 11, 12, 16, 17];
    let sortearmonstro = Math.floor(Math.random() * monstrosFortes.length);
    inimigo = inimigos[monstrosFortes[sortearmonstro]];
  }
  if (player.manaPorSegundo > 80 && player.manaPorSegundo <= 150) {
    const monstrosDificeis = [
      2, 3, 7, 8, 12, 13, 17, 18,
    ];
    let sortearmonstro = Math.floor(Math.random() * monstrosDificeis.length);
    inimigo = inimigos[monstrosDificeis[sortearmonstro]];
  }
  if (player.manaPorSegundo > 150) {
    const monstrosImpossiveis = [
      3, 4, 8, 9, 13, 14, 18, 19,
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

        stopEvents(divLogHistory);
      }

      if (tempoRestante <= 0) {
        clearInterval(intervalo);
      }
    }, 1000);
  }
}


export { battle }