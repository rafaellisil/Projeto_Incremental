import { log, eventVerify, drawEvent, updateLog, stopEvents } from "./log.js";
import { itens } from "../data/itens_db.js";
import { player } from "../data/player.js";
import { state } from "./state.js";
import { fontsMana } from "../data/fontes_db.js";
import { criaturas } from "../data/criaturas_db.js";
import { game } from "./game.js";
import "./inventory.js"

const divLogHistory = document.querySelector("#log-history");
const playerGoldTotal = document.querySelector(".gold-quantity");
const divManaStats = document.querySelector(".manaStats");
const divSummonStats = document.querySelector(".summonStats");
const playerManaTotal = document.querySelector(".mana-quantity");
const playerDmgQuantity = document.querySelector(".dmg-quantity");

function gerarLoja() {
  clearInterval(state.intervaloGame);

  const divShop = document.createElement("div");
  const divTitle = document.createElement("div");
  const pTitle = document.createElement("p");
  const divSVG = document.createElement("div");
  const divProducts = document.createElement("div");
  const btnComprar = document.createElement("button");

  divSVG.innerHTML = `<svg width="100%" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="0" y="0" width="160" height="100" fill="#1a1228"/>
  <rect x="0"   y="0"  width="20" height="10" fill="#2a1f3d"/>
  <rect x="20"  y="0"  width="20" height="10" fill="#231833"/>
  <rect x="40"  y="0"  width="20" height="10" fill="#2a1f3d"/>
  <rect x="60"  y="0"  width="20" height="10" fill="#231833"/>
  <rect x="80"  y="0"  width="20" height="10" fill="#2a1f3d"/>
  <rect x="100" y="0"  width="20" height="10" fill="#231833"/>
  <rect x="120" y="0"  width="20" height="10" fill="#2a1f3d"/>
  <rect x="140" y="0"  width="20" height="10" fill="#231833"/>
  <rect x="10"  y="10" width="20" height="10" fill="#231833"/>
  <rect x="30"  y="10" width="20" height="10" fill="#2a1f3d"/>
  <rect x="50"  y="10" width="20" height="10" fill="#231833"/>
  <rect x="70"  y="10" width="20" height="10" fill="#2a1f3d"/>
  <rect x="90"  y="10" width="20" height="10" fill="#231833"/>
  <rect x="110" y="10" width="20" height="10" fill="#2a1f3d"/>
  <rect x="130" y="10" width="20" height="10" fill="#231833"/>
  <rect x="0"   y="10" width="10" height="10" fill="#2a1f3d"/>
  <rect x="150" y="10" width="10" height="10" fill="#2a1f3d"/>
  <rect x="0"   y="20" width="20" height="10" fill="#2a1f3d"/>
  <rect x="20"  y="20" width="20" height="10" fill="#231833"/>
  <rect x="40"  y="20" width="20" height="10" fill="#2a1f3d"/>
  <rect x="60"  y="20" width="20" height="10" fill="#231833"/>
  <rect x="80"  y="20" width="20" height="10" fill="#2a1f3d"/>
  <rect x="100" y="20" width="20" height="10" fill="#231833"/>
  <rect x="120" y="20" width="20" height="10" fill="#2a1f3d"/>
  <rect x="140" y="20" width="20" height="10" fill="#231833"/>
  <rect x="2"  y="28" width="40" height="3" fill="#5a3a1a"/>
  <rect x="2"  y="28" width="40" height="1" fill="#7a5a2a"/>
  <rect x="4"  y="31" width="2" height="10" fill="#3a2a0a"/>
  <rect x="36" y="31" width="2" height="10" fill="#3a2a0a"/>
  <rect x="8"  y="20" width="5" height="8"  fill="#4a2580"/>
  <rect x="9"  y="21" width="3" height="6"  fill="#cc2222"/>
  <rect x="10" y="22" width="1" height="4"  fill="#ff5555"/>
  <rect x="9"  y="20" width="3" height="1"  fill="#888888"/>
  <rect x="10" y="19" width="1" height="1"  fill="#aaaaaa"/>
  <rect x="18" y="20" width="5" height="8"  fill="#4a2580"/>
  <rect x="19" y="21" width="3" height="6"  fill="#2244cc"/>
  <rect x="20" y="22" width="1" height="4"  fill="#55aaff"/>
  <rect x="19" y="20" width="3" height="1"  fill="#888888"/>
  <rect x="20" y="19" width="1" height="1"  fill="#aaaaaa"/>
  <rect x="28" y="20" width="9" height="8"  fill="#4a2580"/>
  <rect x="29" y="21" width="7" height="6"  fill="#8B4513"/>
  <rect x="29" y="21" width="1" height="6"  fill="#5a2a00"/>
  <rect x="31" y="22" width="4" height="1"  fill="#f5d76e"/>
  <rect x="31" y="24" width="4" height="1"  fill="#f5d76e"/>
  <rect x="31" y="26" width="2" height="1"  fill="#f5d76e"/>
  <rect x="32" y="23" width="2" height="1"  fill="#9b5de5"/>
  <rect x="118" y="28" width="40" height="3" fill="#5a3a1a"/>
  <rect x="118" y="28" width="40" height="1" fill="#7a5a2a"/>
  <rect x="120" y="31" width="2" height="10" fill="#3a2a0a"/>
  <rect x="154" y="31" width="2" height="10" fill="#3a2a0a"/>
  <rect x="122" y="19" width="2" height="9"  fill="#5a3a1a"/>
  <rect x="122" y="19" width="2" height="1"  fill="#9b5de5"/>
  <rect x="121" y="19" width="4" height="2"  fill="#6b35b8"/>
  <rect x="122" y="18" width="2" height="1"  fill="#c49af5"/>
  <rect x="130" y="21" width="7" height="7"  fill="#4a2580"/>
  <rect x="131" y="22" width="5" height="5"  fill="#1a6060"/>
  <rect x="132" y="22" width="2" height="2"  fill="#60cfff"/>
  <rect x="134" y="24" width="2" height="2"  fill="#1a8080"/>
  <rect x="133" y="27" width="1" height="1"  fill="#7a5a2a"/>
  <rect x="131" y="27" width="5" height="1"  fill="#5a3a1a"/>
  <rect x="144" y="20" width="8" height="8"  fill="#4a2580"/>
  <rect x="145" y="20" width="6" height="8"  fill="#f5e6c8"/>
  <rect x="145" y="20" width="6" height="1"  fill="#ddd0a8"/>
  <rect x="145" y="27" width="6" height="1"  fill="#ddd0a8"/>
  <rect x="146" y="22" width="4" height="1"  fill="#9b5de5"/>
  <rect x="146" y="24" width="3" height="1"  fill="#9b5de5"/>
  <rect x="146" y="26" width="4" height="1"  fill="#9b5de5"/>
  <rect x="0"  y="72" width="160" height="28" fill="#3a2a0a"/>
  <rect x="0"  y="72" width="160" height="4"  fill="#6b4a1a"/>
  <rect x="0"  y="74" width="160" height="2"  fill="#7a5a2a"/>
  <rect x="5"  y="78" width="14" height="8"  fill="#4a3010"/>
  <rect x="25" y="78" width="14" height="8"  fill="#4a3010"/>
  <rect x="45" y="78" width="14" height="8"  fill="#4a3010"/>
  <rect x="65" y="78" width="14" height="8"  fill="#4a3010"/>
  <rect x="85" y="78" width="14" height="8"  fill="#4a3010"/>
  <rect x="105" y="78" width="14" height="8" fill="#4a3010"/>
  <rect x="125" y="78" width="14" height="8" fill="#4a3010"/>
  <rect x="145" y="78" width="14" height="8" fill="#4a3010"/>
  <rect x="0"  y="76" width="160" height="1" fill="#f5d76e"/>
  <rect x="30" y="67" width="4" height="5"  fill="#4a2580"/>
  <rect x="31" y="68" width="2" height="4"  fill="#cc2222"/>
  <rect x="31" y="67" width="2" height="1"  fill="#888888"/>
  <rect x="55" y="70" width="3" height="2"  fill="#f5d76e"/>
  <rect x="59" y="70" width="3" height="2"  fill="#f5d76e"/>
  <rect x="63" y="70" width="3" height="2"  fill="#e8c84a"/>
  <rect x="115" y="65" width="6" height="7" fill="#4a2580"/>
  <rect x="116" y="66" width="4" height="5" fill="#f5d76e"/>
  <rect x="117" y="66" width="2" height="2" fill="#fff0a0"/>
  <rect x="118" y="71" width="1" height="1" fill="#cc9900"/>
  <rect x="60" y="38" width="18" height="34" fill="#4a2580"/>
  <rect x="61" y="39" width="16" height="32" fill="#6b35b8"/>
  <rect x="63" y="44" width="2" height="2"  fill="#f5d76e"/>
  <rect x="73" y="48" width="2" height="2"  fill="#f5d76e"/>
  <rect x="66" y="55" width="1" height="1"  fill="#c49af5"/>
  <rect x="71" y="58" width="1" height="1"  fill="#c49af5"/>
  <rect x="64" y="62" width="2" height="1"  fill="#9b5de5"/>
  <rect x="64" y="38" width="10" height="3" fill="#9b5de5"/>
  <rect x="65" y="37" width="8"  height="2" fill="#c49af5"/>
  <rect x="63" y="24" width="12" height="13" fill="#4a2580"/>
  <rect x="64" y="25" width="10" height="11" fill="#f5c89a"/>
  <rect x="65" y="27" width="2" height="2"  fill="#2a1040"/>
  <rect x="65" y="27" width="1" height="1"  fill="#60cfff"/>
  <rect x="71" y="27" width="2" height="2"  fill="#2a1040"/>
  <rect x="72" y="27" width="1" height="1"  fill="#60cfff"/>
  <rect x="65" y="26" width="3" height="1"  fill="#888888"/>
  <rect x="70" y="26" width="3" height="1"  fill="#888888"/>
  <rect x="64" y="31" width="10" height="5" fill="#cccccc"/>
  <rect x="65" y="32" width="8"  height="4" fill="#e0e0e0"/>
  <rect x="66" y="35" width="6"  height="2" fill="#cccccc"/>
  <rect x="67" y="31" width="4" height="1"  fill="#aaaaaa"/>
  <rect x="68" y="29" width="2" height="2"  fill="#e0a87a"/>
  <rect x="59" y="24" width="20" height="2" fill="#2a1040"/>
  <rect x="60" y="23" width="18" height="2" fill="#4a2580"/>
  <rect x="64" y="14" width="10" height="10" fill="#4a2580"/>
  <rect x="65" y="13" width="8"  height="10" fill="#6b35b8"/>
  <rect x="66" y="8"  width="6"  height="6"  fill="#6b35b8"/>
  <rect x="67" y="5"  width="4"  height="4"  fill="#9b5de5"/>
  <rect x="68" y="3"  width="2"  height="3"  fill="#9b5de5"/>
  <rect x="67" y="16" width="4"  height="1"  fill="#f5d76e"/>
  <rect x="68" y="15" width="2"  height="3"  fill="#f5d76e"/>
  <rect x="50" y="42" width="10" height="4" fill="#4a2580"/>
  <rect x="51" y="43" width="9"  height="2" fill="#6b35b8"/>
  <rect x="48" y="38" width="6"  height="6" fill="#4a2580"/>
  <rect x="49" y="39" width="4"  height="4" fill="#6b35b8"/>
  <rect x="46" y="37" width="4"  height="4" fill="#f5c89a"/>
  <rect x="45" y="36" width="2"  height="2" fill="#f5c89a"/>
  <rect x="78" y="55" width="10" height="4" fill="#4a2580"/>
  <rect x="79" y="56" width="9"  height="2" fill="#6b35b8"/>
  <rect x="88" y="67" width="5"  height="4" fill="#f5c89a"/>
  <rect x="46" y="15" width="3" height="8"  fill="#5a3a1a"/>
  <rect x="47" y="14" width="1" height="2"  fill="#7a5a2a"/>
  <rect x="46" y="8"  width="3" height="7"  fill="#ff6600"/>
  <rect x="47" y="6"  width="1" height="4"  fill="#ffdd00"/>
  <rect x="46" y="7"  width="3" height="2"  fill="#ffaa00"/>
  <rect x="47" y="5"  width="1" height="2"  fill="#ffffff"/>
  <rect x="111" y="15" width="3" height="8" fill="#5a3a1a"/>
  <rect x="112" y="14" width="1" height="2" fill="#7a5a2a"/>
  <rect x="111" y="8"  width="3" height="7" fill="#ff6600"/>
  <rect x="112" y="6"  width="1" height="4" fill="#ffdd00"/>
  <rect x="111" y="7"  width="3" height="2" fill="#ffaa00"/>
  <rect x="112" y="5"  width="1" height="2" fill="#ffffff"/>
  <rect x="42" y="10" width="4" height="3"  fill="#2a1f00"/>
  <rect x="114" y="10" width="4" height="3" fill="#2a1f00"/>
</svg>`;

  divShop.style.width = "100%";
  divShop.style.borderBottom = "1px solid var(--border-muted)";

  divTitle.style.display = "flex";
  divTitle.style.justifyContent = "center";
  divTitle.style.alignItems = "center";
  divTitle.style.width = "100%";
  divTitle.style.height = "15%";
  divTitle.style.border = "2px solid var(--moeda)";

  pTitle.textContent = "Loja 💰";
  pTitle.style.setProperty("color", "var(--moeda)", "important");
  pTitle.style.fontWeight = "bold";
  pTitle.style.textTransform = "upperCase";

  divProducts.style.height = "300px";

  divSVG.style.border = "2px solid var(--moeda)";

  btnComprar.classList.add("shop-btn");
  btnComprar.textContent = "Comprar itens selecionados";

  const itensSorteados = sortearItens(itens);

  itensSorteados.forEach(item => {
    let selecionado = false;

    const divProduct = document.createElement("div");
    const divProductName = document.createElement("div");
    const pProductName = document.createElement("p");
    const spanProductRaridade = document.createElement("span");
    const divDescriPriceSlot = document.createElement("div");
    const divProductSlot = document.createElement("div");
    const pProductSlot = document.createElement("p");
    const divProductDescri = document.createElement("div");
    const pProductDescri = document.createElement("p");
    const divBelowAside = document.createElement("div");
    const divProductPreco = document.createElement("div");
    const pProductPreco = document.createElement("p");
    const divProductIcon = document.createElement("div");
    const iIconeCoins = document.createElement("i");

    divProduct.classList.add("store-product");
    divProductName.classList.add("product-name-container");
    pProductName.classList.add("product-name");
    spanProductRaridade.classList.add("product-rarity");
    divDescriPriceSlot.classList.add("product-container-below");
    divProductDescri.classList.add("product-descri-container");
    pProductDescri.classList.add("product-descri");
    divBelowAside.classList.add("product-below-aside");
    divProductSlot.classList.add("product-slot-container");
    pProductSlot.classList.add("product-slot");
    divProductPreco.classList.add("product-preco-container");
    pProductPreco.classList.add("product-preco");
    divProductIcon.classList.add("product-icon-container");
    iIconeCoins.classList.add("product-icon");

    iIconeCoins.classList.add("fa-solid");
    iIconeCoins.classList.add("fa-coins");

    if (item.soldOut) {
      divProduct.textContent = "Sold Out‼️";
      divProduct.classList.add("sold-out");
      divProducts.appendChild(divProduct);
      return;
    }

    pProductName.textContent = item.nome;
    spanProductRaridade.textContent = item.raridade;
    pProductSlot.textContent = item.slot;
    pProductDescri.textContent = item.descricao;
    pProductPreco.textContent = item.valor;

    if (item.raridade === "raro") {
      spanProductRaridade.classList.add("raro");
    }

    divProductName.appendChild(pProductName);
    divProductName.appendChild(spanProductRaridade);
    divProductDescri.appendChild(pProductDescri);
    divProductSlot.appendChild(pProductSlot);
    divProductPreco.appendChild(pProductPreco);
    divProductIcon.appendChild(iIconeCoins);

    divBelowAside.appendChild(divProductSlot);
    divBelowAside.appendChild(divProductPreco);
    divBelowAside.appendChild(divProductIcon);

    divDescriPriceSlot.appendChild(divProductDescri);
    divDescriPriceSlot.appendChild(divBelowAside);

    divProduct.appendChild(divProductName);
    divProduct.appendChild(divDescriPriceSlot);

    divProducts.appendChild(divProduct);

    divProduct.addEventListener("click", e => {
      e.preventDefault();

      selecionado = !selecionado;

      divProduct.classList.toggle("selecionado");
      if (selecionado) {
        divProduct.style.backgroundColor = "var(--bg-light)";
      } else {
        divProduct.style.backgroundColor = "";
      }
    });
  });

  btnComprar.addEventListener("click", e => {
    e.preventDefault();

    let custoCompra = 0;
    let itensSelecionados = [];

    const selecionados = divProducts.querySelectorAll(".selecionado");
    selecionados.forEach(itemSelecionado => {
      const nome = itemSelecionado.querySelector(".product-name").textContent;
      const item = itens.find(i => i.nome === nome);
      itensSelecionados.push(item);
      custoCompra += item.valor;
    });

    if (custoCompra > player.gold) {
      const divPrecos = divProducts.querySelectorAll(".product-preco");

      divPrecos.forEach(preco => {
        preco.classList.toggle("low-money");
        setTimeout(() => {
          preco.classList.toggle("low-money");
        }, 500);
      });
    }
    if (custoCompra <= player.gold) {
      player.itensComprados = player.itensComprados.concat(itensSelecionados);
      player.gold -= custoCompra;
      playerGoldTotal.textContent = player.gold;
      divProducts.remove();
      btnComprar.remove();
      
      selecionados.forEach(itemSelecionado => {
        const eventoCompra = `Comprou ${itemSelecionado.querySelector(".product-name").textContent} 💸`;
        updateLog(eventoCompra, false, divLogHistory);
      })

      stopEvents(divLogHistory);
      game(
        divLogHistory,
        divManaStats,
        divSummonStats,
        player,
        playerManaTotal,
        playerDmgQuantity,
        fontsMana,
        criaturas,
        playerGoldTotal,
      );
    }
  });

  divTitle.appendChild(pTitle);
  divShop.appendChild(divTitle);
  divShop.appendChild(divSVG);
  divShop.appendChild(divProducts);
  divShop.appendChild(btnComprar);
  divLogHistory.prepend(divShop);
}

function sortearItens(itens) {
  let itensSorteados = [];
  const itensDisponiveis = itens.filter(
    item => !player.itensComprados.includes(item),
  );

  const raros = itensDisponiveis.filter(item => item.raridade === "raro");
  let normais = itensDisponiveis.filter(item => item.raridade === "normal");

  for (let i = 0; i < 3; i++) {
    const raridade = Math.floor(Math.random() * 100);
    if (raridade > 90 && raros.length > 0) {
      const index = Math.floor(Math.random() * raros.length);
      itensSorteados.push(raros[index]);
      raros.splice(index, 1);
    } else if (normais.length > 0) {
      const index = Math.floor(Math.random() * normais.length);
      itensSorteados.push(normais[index]);
      normais.splice(index, 1);
    } else {
      itensSorteados.push({ soldOut: true });
    }
  }

  return itensSorteados;
}

export { gerarLoja };
