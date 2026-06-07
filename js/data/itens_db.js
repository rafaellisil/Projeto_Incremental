const itens = [
  // — Cabeça —
  {
    nome: "Capuz de Aprendiz",
    slot: "cabeca",
    descricao: "Fontes de mana geram 10% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.1 }],
    valor: 50,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="1" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="2" width="1" height="5" fill="#4a2580"/>
  <rect x="13" y="2" width="1" height="5" fill="#4a2580"/>
  <rect x="3" y="2" width="10" height="5" fill="#6b35b8"/>
  <rect x="4" y="3" width="8" height="3" fill="#9b5de5"/>
  <rect x="5" y="4" width="6" height="1" fill="#c49af5"/>
  <rect x="1" y="7" width="14" height="2" fill="#4a2580"/>
  <rect x="2" y="7" width="12" height="1" fill="#6b35b8"/>
  <rect x="6" y="9" width="4" height="1" fill="#4a2580"/>
  <rect x="5" y="10" width="6" height="5" fill="#4a2580"/>
  <rect x="6" y="10" width="4" height="4" fill="#3a1560"/>
</svg>`
  },
  {
    nome: "Tiara Arcana",
    slot: "cabeca",
    descricao: "Invocações de ar causam 12% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "ar", bonus: 0.12 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="2" y="4" width="12" height="1" fill="#4a2580"/>
  <rect x="1" y="5" width="14" height="3" fill="#4a2580"/>
  <rect x="2" y="5" width="12" height="2" fill="#b8a0d4"/>
  <rect x="4" y="5" width="2" height="2" fill="#9b5de5"/>
  <rect x="10" y="5" width="2" height="2" fill="#9b5de5"/>
  <rect x="7" y="3" width="2" height="4" fill="#4a2580"/>
  <rect x="7" y="3" width="2" height="3" fill="#c49af5"/>
  <rect x="7" y="2" width="2" height="1" fill="#ffffff"/>
  <rect x="3" y="4" width="1" height="1" fill="#c49af5"/>
  <rect x="12" y="4" width="1" height="1" fill="#c49af5"/>
  <rect x="2" y="7" width="12" height="1" fill="#4a2580"/>
</svg>`
  },
  {
    nome: "Elmo de Pedra Rúnica",
    slot: "cabeca",
    descricao: "Invocações de terra causam 12% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "terra", bonus: 0.12 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="2" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="3" width="1" height="6" fill="#4a2580"/>
  <rect x="13" y="3" width="1" height="6" fill="#4a2580"/>
  <rect x="3" y="9" width="10" height="1" fill="#4a2580"/>
  <rect x="3" y="3" width="10" height="6" fill="#5a8c3e"/>
  <rect x="4" y="4" width="8" height="4" fill="#3a7a3a"/>
  <rect x="5" y="4" width="2" height="1" fill="#f5d76e"/>
  <rect x="9" y="4" width="2" height="1" fill="#f5d76e"/>
  <rect x="7" y="5" width="2" height="2" fill="#f5d76e"/>
  <rect x="5" y="7" width="6" height="1" fill="#2d6b2d"/>
  <rect x="4" y="9" width="3" height="2" fill="#4a2580"/>
  <rect x="9" y="9" width="3" height="2" fill="#4a2580"/>
  <rect x="5" y="9" width="2" height="1" fill="#5a8c3e"/>
  <rect x="9" y="9" width="2" height="1" fill="#5a8c3e"/>
</svg>`
  },
  {
    nome: "Capuz do Sábio",
    slot: "cabeca",
    descricao: "Todas as fontes de mana geram 18% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.18 }],
    valor: 120,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="5" y="0" width="6" height="1" fill="#4a2580"/>
  <rect x="4" y="1" width="8" height="1" fill="#6b35b8"/>
  <rect x="3" y="2" width="10" height="1" fill="#9b5de5"/>
  <rect x="2" y="3" width="12" height="5" fill="#9b5de5"/>
  <rect x="3" y="3" width="10" height="4" fill="#c49af5"/>
  <rect x="7" y="4" width="2" height="2" fill="#f5d76e"/>
  <rect x="1" y="8" width="14" height="2" fill="#4a2580"/>
  <rect x="2" y="8" width="12" height="1" fill="#6b35b8"/>
  <rect x="5" y="10" width="6" height="5" fill="#4a2580"/>
  <rect x="6" y="10" width="4" height="4" fill="#3a1560"/>
  <rect x="7" y="11" width="2" height="1" fill="#9b5de5"/>
</svg>`
  },
  {
    nome: "Coroa do Cosmos",
    slot: "cabeca",
    descricao: "Todas as invocações causam 30% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "all", bonus: 0.3 }],
    valor: 500,
    raridade: "raro",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="1" y="4" width="1" height="5" fill="#4a2580"/>
  <rect x="14" y="4" width="1" height="5" fill="#4a2580"/>
  <rect x="2" y="8" width="12" height="1" fill="#4a2580"/>
  <rect x="2" y="4" width="12" height="4" fill="#f5d76e"/>
  <rect x="3" y="5" width="10" height="2" fill="#e8c84a"/>
  <rect x="1" y="3" width="2" height="2" fill="#4a2580"/>
  <rect x="1" y="3" width="1" height="1" fill="#f5d76e"/>
  <rect x="7" y="1" width="2" height="3" fill="#4a2580"/>
  <rect x="7" y="1" width="2" height="2" fill="#f5d76e"/>
  <rect x="13" y="3" width="2" height="2" fill="#4a2580"/>
  <rect x="14" y="3" width="1" height="1" fill="#f5d76e"/>
  <rect x="4" y="5" width="1" height="1" fill="#9b5de5"/>
  <rect x="7" y="5" width="2" height="1" fill="#9b5de5"/>
  <rect x="11" y="5" width="1" height="1" fill="#9b5de5"/>
  <rect x="2" y="9" width="12" height="2" fill="#4a2580"/>
  <rect x="3" y="9" width="10" height="1" fill="#c49af5"/>
</svg>`
  },

  // — Pés —
  {
    nome: "Sandálias de Viajante",
    slot: "pes",
    descricao: "Invocações de fogo causam 10% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "fogo", bonus: 0.1 }],
    valor: 50,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="2" y="8" width="5" height="1" fill="#4a2580"/>
  <rect x="9" y="8" width="5" height="1" fill="#4a2580"/>
  <rect x="2" y="9" width="5" height="4" fill="#8B4513"/>
  <rect x="9" y="9" width="5" height="4" fill="#8B4513"/>
  <rect x="3" y="9" width="3" height="3" fill="#a0522d"/>
  <rect x="10" y="9" width="3" height="3" fill="#a0522d"/>
  <rect x="2" y="13" width="6" height="1" fill="#4a2580"/>
  <rect x="8" y="13" width="6" height="1" fill="#4a2580"/>
  <rect x="3" y="5" width="3" height="3" fill="#4a2580"/>
  <rect x="3" y="5" width="2" height="2" fill="#dd4400"/>
  <rect x="10" y="5" width="3" height="3" fill="#4a2580"/>
  <rect x="10" y="5" width="2" height="2" fill="#dd4400"/>
</svg>`
  },
  {
    nome: "Botas de Couro Arcano",
    slot: "pes",
    descricao: "Fontes de mana geram 12% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.12 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="2" y="4" width="4" height="1" fill="#4a2580"/>
  <rect x="10" y="4" width="4" height="1" fill="#4a2580"/>
  <rect x="2" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="5" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="10" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="13" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="3" y="5" width="2" height="6" fill="#5a3a1a"/>
  <rect x="11" y="5" width="2" height="6" fill="#5a3a1a"/>
  <rect x="2" y="13" width="5" height="1" fill="#4a2580"/>
  <rect x="9" y="13" width="5" height="1" fill="#4a2580"/>
  <rect x="2" y="11" width="6" height="3" fill="#4a2580"/>
  <rect x="9" y="11" width="6" height="3" fill="#4a2580"/>
  <rect x="3" y="11" width="4" height="2" fill="#7a5a2a"/>
  <rect x="10" y="11" width="4" height="2" fill="#7a5a2a"/>
  <rect x="4" y="7" width="1" height="1" fill="#9b5de5"/>
  <rect x="11" y="7" width="1" height="1" fill="#9b5de5"/>
</svg>`
  },
  {
    nome: "Sapatos de Névoa",
    slot: "pes",
    descricao: "Invocações de água causam 12% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "agua", bonus: 0.12 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="2" y="8" width="5" height="1" fill="#4a2580"/>
  <rect x="9" y="8" width="5" height="1" fill="#4a2580"/>
  <rect x="2" y="9" width="5" height="4" fill="#4a9ebf"/>
  <rect x="9" y="9" width="5" height="4" fill="#4a9ebf"/>
  <rect x="3" y="9" width="3" height="3" fill="#60cfff"/>
  <rect x="10" y="9" width="3" height="3" fill="#60cfff"/>
  <rect x="2" y="13" width="6" height="1" fill="#4a2580"/>
  <rect x="8" y="13" width="6" height="1" fill="#4a2580"/>
  <rect x="3" y="6" width="3" height="2" fill="#4a2580"/>
  <rect x="3" y="6" width="2" height="1" fill="#aaddff"/>
  <rect x="10" y="6" width="3" height="2" fill="#4a2580"/>
  <rect x="10" y="6" width="2" height="1" fill="#aaddff"/>
</svg>`
  },
  {
    nome: "Botas Rúnicas",
    slot: "pes",
    descricao: "Invocações de ar causam 18% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "ar", bonus: 0.18 }],
    valor: 120,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="2" y="4" width="4" height="1" fill="#4a2580"/>
  <rect x="10" y="4" width="4" height="1" fill="#4a2580"/>
  <rect x="2" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="5" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="10" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="13" y="5" width="1" height="8" fill="#4a2580"/>
  <rect x="3" y="5" width="2" height="6" fill="#2a1040"/>
  <rect x="11" y="5" width="2" height="6" fill="#2a1040"/>
  <rect x="2" y="13" width="5" height="1" fill="#4a2580"/>
  <rect x="9" y="13" width="5" height="1" fill="#4a2580"/>
  <rect x="2" y="11" width="6" height="3" fill="#4a2580"/>
  <rect x="9" y="11" width="6" height="3" fill="#4a2580"/>
  <rect x="3" y="11" width="4" height="2" fill="#3a1560"/>
  <rect x="10" y="11" width="4" height="2" fill="#3a1560"/>
  <rect x="4" y="6" width="1" height="3" fill="#b8a0d4"/>
  <rect x="11" y="6" width="1" height="3" fill="#b8a0d4"/>
  <rect x="3" y="7" width="3" height="1" fill="#b8a0d4"/>
  <rect x="10" y="7" width="3" height="1" fill="#b8a0d4"/>
</svg>`
  },
  {
    nome: "Passos do Éter",
    slot: "pes",
    descricao: "Todas as fontes de mana geram 35% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.35 }],
    valor: 500,
    raridade: "raro",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="2" y="7" width="5" height="1" fill="#4a2580"/>
  <rect x="9" y="7" width="5" height="1" fill="#4a2580"/>
  <rect x="2" y="8" width="5" height="5" fill="#9b5de5"/>
  <rect x="9" y="8" width="5" height="5" fill="#9b5de5"/>
  <rect x="3" y="8" width="3" height="4" fill="#c49af5"/>
  <rect x="10" y="8" width="3" height="4" fill="#c49af5"/>
  <rect x="2" y="13" width="6" height="1" fill="#4a2580"/>
  <rect x="8" y="13" width="6" height="1" fill="#4a2580"/>
  <rect x="4" y="9" width="1" height="1" fill="#f5d76e"/>
  <rect x="11" y="9" width="1" height="1" fill="#f5d76e"/>
  <rect x="3" y="5" width="3" height="2" fill="#4a2580"/>
  <rect x="3" y="5" width="2" height="1" fill="#c49af5"/>
  <rect x="10" y="5" width="3" height="2" fill="#4a2580"/>
  <rect x="10" y="5" width="2" height="1" fill="#c49af5"/>
  <!-- brilho éter -->
  <rect x="1" y="9" width="1" height="1" fill="#c49af5"/>
  <rect x="14" y="9" width="1" height="1" fill="#c49af5"/>
  <rect x="1" y="11" width="1" height="1" fill="#9b5de5"/>
  <rect x="14" y="11" width="1" height="1" fill="#9b5de5"/>
</svg>`
  },

  // — Roupão —
  {
    nome: "Roupão de Algodão Arcano",
    slot: "roupao",
    descricao: "Invocações de terra causam 10% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "terra", bonus: 0.1 }],
    valor: 50,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="1" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="13" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="3" y="14" width="10" height="1" fill="#4a2580"/>
  <rect x="3" y="2" width="10" height="12" fill="#e8e8e8"/>
  <rect x="4" y="3" width="8" height="10" fill="#dddddd"/>
  <rect x="6" y="2" width="4" height="3" fill="#4a2580"/>
  <rect x="7" y="2" width="2" height="2" fill="#cccccc"/>
  <rect x="6" y="6" width="1" height="4" fill="#5a8c3e"/>
  <rect x="9" y="6" width="1" height="4" fill="#5a8c3e"/>
  <rect x="7" y="7" width="2" height="2" fill="#5a8c3e"/>
</svg>`
  },
  {
    nome: "Manto do Iniciado",
    slot: "roupao",
    descricao: "Fontes de mana geram 12% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.12 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="1" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="13" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="3" y="14" width="10" height="1" fill="#4a2580"/>
  <rect x="3" y="2" width="10" height="12" fill="#6b35b8"/>
  <rect x="4" y="3" width="8" height="10" fill="#9b5de5"/>
  <rect x="6" y="2" width="4" height="3" fill="#4a2580"/>
  <rect x="7" y="2" width="2" height="2" fill="#c49af5"/>
  <rect x="6" y="6" width="1" height="4" fill="#f5d76e"/>
  <rect x="9" y="6" width="1" height="4" fill="#f5d76e"/>
  <rect x="7" y="7" width="2" height="2" fill="#f5d76e"/>
</svg>`
  },
  {
    nome: "Vestes de Chama",
    slot: "roupao",
    descricao: "Invocações de fogo causam 15% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "fogo", bonus: 0.15 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="1" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="13" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="3" y="14" width="10" height="1" fill="#4a2580"/>
  <rect x="3" y="2" width="10" height="12" fill="#cc3300"/>
  <rect x="4" y="3" width="8" height="10" fill="#dd4400"/>
  <rect x="6" y="2" width="4" height="3" fill="#4a2580"/>
  <rect x="7" y="2" width="2" height="2" fill="#ff6622"/>
  <rect x="5" y="5" width="2" height="5" fill="#ff6622"/>
  <rect x="9" y="5" width="2" height="5" fill="#ff6622"/>
  <rect x="7" y="6" width="2" height="3" fill="#ffaa00"/>
  <rect x="8" y="6" width="1" height="2" fill="#ffdd44"/>
</svg>`
  },
  {
    nome: "Manto do Arquimago",
    slot: "roupao",
    descricao: "Todas as invocações causam 18% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "all", bonus: 0.18 }],
    valor: 120,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="1" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="13" y="2" width="1" height="12" fill="#4a2580"/>
  <rect x="3" y="14" width="10" height="1" fill="#4a2580"/>
  <rect x="3" y="2" width="10" height="12" fill="#2a1040"/>
  <rect x="4" y="3" width="8" height="10" fill="#3a1560"/>
  <rect x="6" y="2" width="4" height="3" fill="#4a2580"/>
  <rect x="7" y="2" width="2" height="2" fill="#9b5de5"/>
  <rect x="5" y="5" width="1" height="1" fill="#f5d76e"/>
  <rect x="10" y="5" width="1" height="1" fill="#f5d76e"/>
  <rect x="7" y="6" width="2" height="1" fill="#f5d76e"/>
  <rect x="6" y="8" width="4" height="1" fill="#9b5de5"/>
  <rect x="7" y="9" width="2" height="3" fill="#9b5de5"/>
</svg>`
  },
  {
    nome: "Vestes do Vazio",
    slot: "roupao",
    descricao: "Fontes de mana geram 40% mais mana e invocações causam 20% mais dano.",
    efeito: [
      { tipo: "fonteMana", alvo: "all", bonus: 0.4 },
      { tipo: "invocacao", alvo: "all", bonus: 0.2 },
    ],
    valor: 500,
    raridade: "raro",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="3" y="1" width="10" height="1" fill="#2a1040"/>
  <rect x="2" y="2" width="1" height="12" fill="#2a1040"/>
  <rect x="13" y="2" width="1" height="12" fill="#2a1040"/>
  <rect x="3" y="14" width="10" height="1" fill="#2a1040"/>
  <rect x="3" y="2" width="10" height="12" fill="#1a0030"/>
  <rect x="4" y="3" width="8" height="10" fill="#1a0030"/>
  <rect x="6" y="2" width="4" height="3" fill="#2a1040"/>
  <rect x="7" y="2" width="2" height="2" fill="#6b35b8"/>
  <rect x="4" y="4" width="1" height="1" fill="#60cfff"/>
  <rect x="11" y="4" width="1" height="1" fill="#60cfff"/>
  <rect x="5" y="7" width="6" height="1" fill="#9b5de5"/>
  <rect x="7" y="5" width="2" height="6" fill="#9b5de5"/>
  <rect x="6" y="6" width="4" height="1" fill="#c49af5"/>
  <rect x="4" y="9" width="1" height="1" fill="#f5d76e"/>
  <rect x="11" y="9" width="1" height="1" fill="#f5d76e"/>
  <rect x="4" y="11" width="1" height="1" fill="#60cfff"/>
  <rect x="11" y="11" width="1" height="1" fill="#60cfff"/>
</svg>`
  },

  // — Luvas —
  {
    nome: "Luvas de Tecido",
    slot: "luvas",
    descricao: "Invocações de água causam 10% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "agua", bonus: 0.1 }],
    valor: 50,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="1" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="10" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="1" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="5" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="10" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="14" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="2" y="6" width="3" height="5" fill="#4a9ebf"/>
  <rect x="11" y="6" width="3" height="5" fill="#4a9ebf"/>
  <rect x="1" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="9" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="2" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="3" width="1" height="2" fill="#4a9ebf"/>
  <rect x="4" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="11" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="12" y="3" width="1" height="2" fill="#4a9ebf"/>
  <rect x="13" y="3" width="1" height="3" fill="#4a2580"/>
</svg>`
  },
  {
    nome: "Luvas Rúnicas",
    slot: "luvas",
    descricao: "Invocações de fogo causam 12% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "fogo", bonus: 0.12 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="1" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="10" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="1" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="5" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="10" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="14" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="2" y="6" width="3" height="5" fill="#cc3300"/>
  <rect x="11" y="6" width="3" height="5" fill="#cc3300"/>
  <rect x="1" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="9" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="2" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="3" width="1" height="2" fill="#cc3300"/>
  <rect x="4" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="11" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="12" y="3" width="1" height="2" fill="#cc3300"/>
  <rect x="13" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="7" width="1" height="2" fill="#f5d76e"/>
  <rect x="2" y="8" width="3" height="1" fill="#f5d76e"/>
  <rect x="12" y="7" width="1" height="2" fill="#f5d76e"/>
  <rect x="11" y="8" width="3" height="1" fill="#f5d76e"/>
</svg>`
  },
  {
    nome: "Manoplas de Gelo",
    slot: "luvas",
    descricao: "Invocações de água causam 15% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "agua", bonus: 0.15 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="1" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="10" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="1" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="5" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="10" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="14" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="2" y="6" width="3" height="5" fill="#aaddff"/>
  <rect x="11" y="6" width="3" height="5" fill="#aaddff"/>
  <rect x="1" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="9" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="2" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="3" width="1" height="2" fill="#aaddff"/>
  <rect x="4" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="11" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="12" y="3" width="1" height="2" fill="#aaddff"/>
  <rect x="13" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="7" width="1" height="1" fill="#ffffff"/>
  <rect x="2" y="8" width="3" height="1" fill="#60cfff"/>
  <rect x="12" y="7" width="1" height="1" fill="#ffffff"/>
  <rect x="11" y="8" width="3" height="1" fill="#60cfff"/>
</svg>`
  },
  {
    nome: "Luvas do Elementalista",
    slot: "luvas",
    descricao: "Fontes de mana geram 18% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.18 }],
    valor: 120,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="1" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="10" y="5" width="5" height="1" fill="#4a2580"/>
  <rect x="1" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="5" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="10" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="14" y="6" width="1" height="6" fill="#4a2580"/>
  <rect x="2" y="6" width="3" height="5" fill="#6b35b8"/>
  <rect x="11" y="6" width="3" height="5" fill="#6b35b8"/>
  <rect x="1" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="9" y="12" width="6" height="1" fill="#4a2580"/>
  <rect x="2" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="3" width="1" height="2" fill="#6b35b8"/>
  <rect x="4" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="11" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="12" y="3" width="1" height="2" fill="#6b35b8"/>
  <rect x="13" y="3" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="7" width="1" height="1" fill="#f5d76e"/>
  <rect x="3" y="9" width="1" height="1" fill="#f5d76e"/>
  <rect x="2" y="8" width="3" height="1" fill="#c49af5"/>
  <rect x="12" y="7" width="1" height="1" fill="#f5d76e"/>
  <rect x="12" y="9" width="1" height="1" fill="#f5d76e"/>
  <rect x="11" y="8" width="3" height="1" fill="#c49af5"/>
</svg>`
  },
  {
    nome: "Mãos do Caos",
    slot: "luvas",
    descricao: "Invocações de fogo e terra causam 35% mais dano por segundo.",
    efeito: [
      { tipo: "invocacao", alvo: "fogo", bonus: 0.35 },
      { tipo: "invocacao", alvo: "terra", bonus: 0.35 },
    ],
    valor: 500,
    raridade: "raro",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="1" y="5" width="5" height="1" fill="#2a1040"/>
  <rect x="10" y="5" width="5" height="1" fill="#2a1040"/>
  <rect x="1" y="6" width="1" height="6" fill="#2a1040"/>
  <rect x="5" y="6" width="1" height="6" fill="#2a1040"/>
  <rect x="10" y="6" width="1" height="6" fill="#2a1040"/>
  <rect x="14" y="6" width="1" height="6" fill="#2a1040"/>
  <rect x="2" y="6" width="3" height="5" fill="#1a6060"/>
  <rect x="11" y="6" width="3" height="5" fill="#cc3300"/>
  <rect x="1" y="12" width="6" height="1" fill="#2a1040"/>
  <rect x="9" y="12" width="6" height="1" fill="#2a1040"/>
  <rect x="2" y="3" width="1" height="3" fill="#2a1040"/>
  <rect x="3" y="3" width="1" height="2" fill="#1a6060"/>
  <rect x="4" y="3" width="1" height="3" fill="#2a1040"/>
  <rect x="11" y="3" width="1" height="3" fill="#2a1040"/>
  <rect x="12" y="3" width="1" height="2" fill="#cc3300"/>
  <rect x="13" y="3" width="1" height="3" fill="#2a1040"/>
  <rect x="3" y="7" width="1" height="3" fill="#60cfff"/>
  <rect x="2" y="8" width="3" height="1" fill="#60cfff"/>
  <rect x="12" y="7" width="1" height="3" fill="#ffaa00"/>
  <rect x="11" y="8" width="3" height="1" fill="#ffaa00"/>
</svg>`
  },

  // — Colar —
  {
    nome: "Amuleto de Osso",
    slot: "colar",
    descricao: "Invocações de ar causam 10% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "ar", bonus: 0.1 }],
    valor: 50,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="6" y="1" width="4" height="1" fill="#4a2580"/>
  <rect x="5" y="2" width="6" height="3" fill="#4a2580"/>
  <rect x="6" y="2" width="4" height="2" fill="#e0e0e0"/>
  <rect x="7" y="2" width="2" height="1" fill="#ffffff"/>
  <rect x="7" y="5" width="2" height="1" fill="#4a2580"/>
  <rect x="4" y="6" width="1" height="1" fill="#4a2580"/>
  <rect x="11" y="6" width="1" height="1" fill="#4a2580"/>
  <rect x="3" y="7" width="1" height="1" fill="#4a2580"/>
  <rect x="12" y="7" width="1" height="1" fill="#4a2580"/>
  <rect x="2" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="13" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="5" y="6" width="6" height="1" fill="#cccccc"/>
  <rect x="4" y="7" width="8" height="1" fill="#cccccc"/>
  <rect x="3" y="8" width="10" height="3" fill="#cccccc"/>
  <rect x="4" y="11" width="8" height="1" fill="#cccccc"/>
  <rect x="6" y="12" width="4" height="2" fill="#4a2580"/>
  <rect x="7" y="12" width="2" height="1" fill="#e0e0e0"/>
  <rect x="6" y="11" width="1" height="2" fill="#4a2580"/>
  <rect x="9" y="11" width="1" height="2" fill="#4a2580"/>
  <rect x="7" y="9" width="2" height="1" fill="#b8a0d4"/>
</svg>`
  },
  {
    nome: "Colar de Cristal",
    slot: "colar",
    descricao: "Fontes de mana geram 15% mais mana por segundo.",
    efeito: [{ tipo: "fonteMana", alvo: "all", bonus: 0.15 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="6" y="1" width="4" height="1" fill="#4a2580"/>
  <rect x="5" y="2" width="6" height="3" fill="#4a2580"/>
  <rect x="6" y="2" width="4" height="2" fill="#60cfff"/>
  <rect x="7" y="2" width="2" height="1" fill="#aaddff"/>
  <rect x="7" y="5" width="2" height="1" fill="#4a2580"/>
  <rect x="5" y="6" width="6" height="1" fill="#4a9ebf"/>
  <rect x="4" y="7" width="8" height="1" fill="#4a9ebf"/>
  <rect x="3" y="8" width="10" height="3" fill="#4a9ebf"/>
  <rect x="4" y="11" width="8" height="1" fill="#4a9ebf"/>
  <rect x="2" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="13" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="6" y="12" width="4" height="2" fill="#4a2580"/>
  <rect x="7" y="12" width="2" height="1" fill="#60cfff"/>
  <rect x="7" y="9" width="2" height="1" fill="#ffffff"/>
</svg>`
  },
  {
    nome: "Pingente de Chama",
    slot: "colar",
    descricao: "Invocações de fogo causam 15% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "fogo", bonus: 0.15 }],
    valor: 80,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="6" y="1" width="4" height="1" fill="#4a2580"/>
  <rect x="5" y="2" width="6" height="3" fill="#4a2580"/>
  <rect x="6" y="2" width="4" height="2" fill="#ff6622"/>
  <rect x="7" y="2" width="2" height="1" fill="#ffdd44"/>
  <rect x="7" y="5" width="2" height="1" fill="#4a2580"/>
  <rect x="5" y="6" width="6" height="1" fill="#cc3300"/>
  <rect x="4" y="7" width="8" height="1" fill="#cc3300"/>
  <rect x="3" y="8" width="10" height="3" fill="#cc3300"/>
  <rect x="4" y="11" width="8" height="1" fill="#cc3300"/>
  <rect x="2" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="13" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="6" y="12" width="4" height="2" fill="#4a2580"/>
  <rect x="7" y="12" width="2" height="1" fill="#ff6622"/>
  <rect x="7" y="9" width="2" height="1" fill="#ffaa00"/>
  <rect x="8" y="8" width="1" height="3" fill="#ffdd44"/>
</svg>`
  },
  {
    nome: "Colar do Druida",
    slot: "colar",
    descricao: "Invocações de terra causam 18% mais dano por segundo.",
    efeito: [{ tipo: "invocacao", alvo: "terra", bonus: 0.18 }],
    valor: 120,
    raridade: "normal",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="6" y="1" width="4" height="1" fill="#4a2580"/>
  <rect x="5" y="2" width="6" height="3" fill="#4a2580"/>
  <rect x="6" y="2" width="4" height="2" fill="#5a8c3e"/>
  <rect x="7" y="2" width="2" height="1" fill="#8bc34a"/>
  <rect x="7" y="5" width="2" height="1" fill="#4a2580"/>
  <rect x="5" y="6" width="6" height="1" fill="#3a7a3a"/>
  <rect x="4" y="7" width="8" height="1" fill="#3a7a3a"/>
  <rect x="3" y="8" width="10" height="3" fill="#3a7a3a"/>
  <rect x="4" y="11" width="8" height="1" fill="#3a7a3a"/>
  <rect x="2" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="13" y="8" width="1" height="3" fill="#4a2580"/>
  <rect x="6" y="12" width="4" height="2" fill="#4a2580"/>
  <rect x="7" y="12" width="2" height="1" fill="#5a8c3e"/>
  <rect x="7" y="9" width="2" height="1" fill="#f5d76e"/>
  <rect x="6" y="8" width="4" height="1" fill="#f5d76e"/>
</svg>`
  },
  {
    nome: "Orbe da Criação",
    slot: "colar",
    descricao: "Invocações de água e ar causam 35% mais dano por segundo.",
    efeito: [
      { tipo: "invocacao", alvo: "agua", bonus: 0.35 },
      { tipo: "invocacao", alvo: "ar", bonus: 0.35 },
    ],
    valor: 500,
    raridade: "raro",
    sprite: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect x="6" y="1" width="4" height="1" fill="#4a2580"/>
  <rect x="5" y="2" width="6" height="3" fill="#4a2580"/>
  <rect x="6" y="2" width="4" height="2" fill="#9b5de5"/>
  <rect x="7" y="2" width="2" height="1" fill="#c49af5"/>
  <rect x="7" y="5" width="2" height="2" fill="#4a2580"/>
  <rect x="5" y="7" width="6" height="1" fill="#4a2580"/>
  <rect x="4" y="8" width="8" height="5" fill="#4a2580"/>
  <rect x="5" y="8" width="6" height="4" fill="#1a0030"/>
  <rect x="6" y="8" width="4" height="4" fill="#2a1040"/>
  <rect x="7" y="8" width="2" height="4" fill="#4a2580"/>
  <rect x="6" y="9" width="4" height="2" fill="#4a9ebf"/>
  <rect x="7" y="9" width="2" height="2" fill="#60cfff"/>
  <rect x="5" y="10" width="1" height="1" fill="#b8a0d4"/>
  <rect x="10" y="10" width="1" height="1" fill="#b8a0d4"/>
  <rect x="5" y="13" width="6" height="1" fill="#4a2580"/>
</svg>`
  },
];

export { itens };