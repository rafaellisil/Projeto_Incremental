const pets = [
      {
    nome: "Ratinho Arcano",
    slot: "pet",
    descricao: "Fontes de mana geram 8% mais mana por segundo.",
    efeito: { alvo: "fonteMana", bonus: 0.08 },
    valor: 50,
    raridade: "normal",
    icone: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">

  <rect x="3" y="1" width="1" height="2" fill="#4a2580"/>
  <rect x="4" y="1" width="1" height="1" fill="#bbbbbb"/>
  <rect x="8" y="1" width="1" height="2" fill="#4a2580"/>
  <rect x="8" y="1" width="1" height="1" fill="#bbbbbb"/>

  <rect x="3" y="3" width="7" height="1" fill="#4a2580"/>
  <rect x="2" y="4" width="1" height="4" fill="#4a2580"/>
  <rect x="9" y="4" width="1" height="4" fill="#4a2580"/>
  <rect x="3" y="8" width="7" height="1" fill="#4a2580"/>
  <rect x="3" y="4" width="7" height="4" fill="#aaaaaa"/>

  <rect x="4" y="5" width="1" height="1" fill="#60cfff"/>
  <rect x="7" y="5" width="1" height="1" fill="#60cfff"/>
  <!-- nariz -->
  <rect x="5" y="7" width="2" height="1" fill="#ff9999"/>

  <rect x="3" y="9" width="7" height="1" fill="#4a2580"/>
  <rect x="2" y="10" width="1" height="3" fill="#4a2580"/>
  <rect x="9" y="10" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="13" width="7" height="1" fill="#4a2580"/>
  <rect x="3" y="10" width="7" height="3" fill="#999999"/>
  <!-- detalhe mana peito -->
  <rect x="5" y="11" width="3" height="1" fill="#60cfff"/>

  <rect x="3" y="14" width="2" height="1" fill="#4a2580"/>
  <rect x="8" y="14" width="2" height="1" fill="#4a2580"/>

  <rect x="10" y="11" width="2" height="1" fill="#999999"/>
  <rect x="11" y="10" width="1" height="1" fill="#9b5de5"/>
  </svg>`,
  },
  {
    nome: "Coruja Mística",
    slot: "pet",
    descricao: "Invocações de ar causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoAr", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
    icone: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">

  <rect x="4" y="0" width="1" height="2" fill="#4a2580"/>
  <rect x="8" y="0" width="1" height="2" fill="#4a2580"/>

  <rect x="3" y="2" width="7" height="1" fill="#4a2580"/>
  <rect x="2" y="3" width="1" height="5" fill="#4a2580"/>
  <rect x="9" y="3" width="1" height="5" fill="#4a2580"/>
  <rect x="3" y="8" width="7" height="1" fill="#4a2580"/>
  <rect x="3" y="3" width="7" height="5" fill="#e8e8e8"/>

  <rect x="3" y="4" width="2" height="2" fill="#4a2580"/>
  <rect x="3" y="4" width="1" height="1" fill="#f5c842"/>
  <rect x="7" y="4" width="2" height="2" fill="#4a2580"/>
  <rect x="8" y="4" width="1" height="1" fill="#f5c842"/>

  <rect x="5" y="6" width="3" height="1" fill="#f5a623"/>

  <rect x="3" y="9" width="7" height="1" fill="#4a2580"/>
  <rect x="2" y="10" width="1" height="3" fill="#4a2580"/>
  <rect x="9" y="10" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="13" width="7" height="1" fill="#4a2580"/>
  <rect x="3" y="10" width="7" height="3" fill="#dddddd"/>

  <rect x="4" y="10" width="5" height="1" fill="#cccccc"/>
  <rect x="5" y="11" width="3" height="1" fill="#aaddff"/>

  <rect x="2" y="10" width="1" height="2" fill="#cccccc"/>
  <rect x="10" y="10" width="1" height="2" fill="#cccccc"/>

  <rect x="4" y="14" width="1" height="1" fill="#f5a623"/>
  <rect x="8" y="14" width="1" height="1" fill="#f5a623"/>
</svg>`
  },
  {
    nome: "Lagartixa de Lava",
    slot: "pet",
    descricao: "Invocações de fogo causam 12% mais dano por segundo.",
    efeito: { alvo: "invocacaoFogo", bonus: 0.12 },
    valor: 80,
    raridade: "normal",
    icone: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">

  <rect x="1" y="4" width="6" height="1" fill="#4a2580"/>
  <rect x="0" y="5" width="1" height="3" fill="#4a2580"/>
  <rect x="6" y="5" width="1" height="3" fill="#4a2580"/>
  <rect x="1" y="8" width="6" height="1" fill="#4a2580"/>
  <rect x="1" y="5" width="5" height="3" fill="#dd4400"/>

  <rect x="2" y="5" width="1" height="1" fill="#ffdd00"/>
  <rect x="4" y="5" width="1" height="1" fill="#ffdd00"/>
  <!-- língua -->
  <rect x="0" y="7" width="1" height="1" fill="#ff2200"/>

  <rect x="3" y="9" width="9" height="1" fill="#4a2580"/>
  <rect x="2" y="10" width="1" height="3" fill="#4a2580"/>
  <rect x="11" y="10" width="1" height="3" fill="#4a2580"/>
  <rect x="3" y="13" width="9" height="1" fill="#4a2580"/>
  <rect x="3" y="10" width="8" height="3" fill="#dd4400"/>

  <rect x="5" y="10" width="4" height="3" fill="#ff6622"/>
  <rect x="6" y="11" width="2" height="1" fill="#ffaa00"/>

  <rect x="2" y="11" width="1" height="1" fill="#cc3300"/>
  <rect x="11" y="11" width="1" height="1" fill="#cc3300"/>
  <rect x="3" y="14" width="2" height="1" fill="#4a2580"/>
  <rect x="9" y="14" width="2" height="1" fill="#4a2580"/>

  <rect x="12" y="10" width="2" height="1" fill="#cc3300"/>
  <rect x="13" y="9"  width="1" height="1" fill="#cc3300"/>
  <rect x="14" y="8"  width="1" height="1" fill="#aa2200"/>
</svg>`
  },
  {
    nome: "Tartaruga Rúnica",
    slot: "pet",
    descricao: "Invocações de terra causam 15% mais dano por segundo.",
    efeito: { alvo: "invocacaoTerra", bonus: 0.15 },
    valor: 120,
    raridade: "normal",
    icone: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">

  <rect x="2" y="3" width="4" height="1" fill="#4a2580"/>
  <rect x="1" y="4" width="1" height="3" fill="#4a2580"/>
  <rect x="5" y="4" width="1" height="3" fill="#4a2580"/>
  <rect x="2" y="7" width="4" height="1" fill="#4a2580"/>
  <rect x="2" y="4" width="3" height="3" fill="#5aaa5a"/>

  <rect x="2" y="4" width="1" height="1" fill="#ffdd88"/>
  <rect x="4" y="4" width="1" height="1" fill="#ffdd88"/>

  <rect x="3" y="8" width="10" height="1" fill="#4a2580"/>
  <rect x="2" y="9" width="1" height="5" fill="#4a2580"/>
  <rect x="12" y="9" width="1" height="5" fill="#4a2580"/>
  <rect x="3" y="14" width="10" height="1" fill="#4a2580"/>
  <rect x="3" y="9" width="9" height="5" fill="#3a7a3a"/>

  <rect x="4" y="9"  width="3" height="2" fill="#2d6b2d"/>
  <rect x="8" y="9"  width="3" height="2" fill="#2d6b2d"/>
  <rect x="5" y="11" width="5" height="2" fill="#2d6b2d"/>

  <rect x="5" y="9"  width="1" height="1" fill="#f5d76e"/>
  <rect x="9" y="9"  width="1" height="1" fill="#f5d76e"/>
  <rect x="7" y="11" width="1" height="1" fill="#f5d76e"/>
  <rect x="5" y="12" width="1" height="1" fill="#f5d76e"/>
  <rect x="9" y="12" width="1" height="1" fill="#f5d76e"/>

  <rect x="1" y="10" width="1" height="2" fill="#5aaa5a"/>
  <rect x="13" y="10" width="1" height="2" fill="#5aaa5a"/>
  <rect x="4" y="15"  width="2" height="1" fill="#5aaa5a"/>
  <rect x="9" y="15"  width="2" height="1" fill="#5aaa5a"/>
</svg>`
  },
  {
    nome: "Dragãozinho do Caos",
    slot: "pet",
    descricao:
      "Todas as invocações causam 25% mais dano e fontes geram 20% mais mana.",
    efeito: { alvo: "tudo", bonus: { todasInvocacoes: 0.25, fonteMana: 0.2 } },
    valor: 500,
    raridade: "raro",
    icone: `<svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">

  <rect x="4" y="0" width="1" height="2" fill="#9b5de5"/>
  <rect x="9" y="0" width="1" height="2" fill="#9b5de5"/>

  <rect x="0" y="4" width="2" height="4" fill="#4a2580"/>
  <rect x="12" y="4" width="2" height="4" fill="#4a2580"/>
  <rect x="1" y="5" width="1" height="2" fill="#6b35b8"/>
  <rect x="13" y="5" width="1" height="2" fill="#6b35b8"/>

  <rect x="3" y="2" width="8" height="1" fill="#2a1040"/>
  <rect x="2" y="3" width="1" height="5" fill="#2a1040"/>
  <rect x="11" y="3" width="1" height="5" fill="#2a1040"/>
  <rect x="3" y="8" width="8" height="1" fill="#2a1040"/>
  <rect x="3" y="3" width="8" height="5" fill="#5a2090"/>

  <rect x="3" y="3" width="4" height="2" fill="#1a6060"/>
  <rect x="7" y="5" width="4" height="2" fill="#1a6060"/>

  <rect x="4" y="4" width="2" height="2" fill="#2a1040"/>
  <rect x="4" y="4" width="1" height="1" fill="#ffdd00"/>
  <rect x="5" y="5" width="1" height="1" fill="#ff6600"/>
  <rect x="8" y="4" width="2" height="2" fill="#2a1040"/>
  <rect x="9" y="4" width="1" height="1" fill="#ffdd00"/>
  <rect x="8" y="5" width="1" height="1" fill="#ff6600"/>

  <rect x="4" y="7" width="1" height="1" fill="#ffffff"/>
  <rect x="6" y="7" width="1" height="1" fill="#ffffff"/>
  <rect x="8" y="7" width="1" height="1" fill="#ffffff"/>

  <rect x="3" y="9"  width="8" height="1" fill="#2a1040"/>
  <rect x="2" y="10" width="1" height="4" fill="#2a1040"/>
  <rect x="11" y="10" width="1" height="4" fill="#2a1040"/>
  <rect x="3" y="14" width="8" height="1" fill="#2a1040"/>
  <rect x="3" y="10" width="8" height="4" fill="#5a2090"/>

  <rect x="3" y="10" width="4" height="2" fill="#1a6060"/>
  <rect x="7" y="12" width="4" height="2" fill="#1a6060"/>

  <rect x="5" y="11" width="4" height="2" fill="#3a1560"/>
  <rect x="6" y="11" width="2" height="1" fill="#f5d76e"/>
  <rect x="6" y="11" width="1" height="1" fill="#ffffff"/>

  <rect x="2" y="11" width="1" height="2" fill="#5a2090"/>
  <rect x="1" y="12" width="1" height="1" fill="#c49af5"/>
  <rect x="12" y="11" width="1" height="2" fill="#5a2090"/>
  <rect x="13" y="12" width="1" height="1" fill="#c49af5"/>
  <rect x="4" y="15"  width="2" height="1" fill="#5a2090"/>
  <rect x="8" y="15"  width="2" height="1" fill="#5a2090"/>

  <rect x="11" y="13" width="2" height="1" fill="#5a2090"/>
  <rect x="12" y="12" width="1" height="1" fill="#5a2090"/>
  <rect x="13" y="11" width="1" height="1" fill="#6b35b8"/>
  <rect x="14" y="10" width="1" height="1" fill="#f5d76e"/>
</svg>`
  },
]