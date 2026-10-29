// =============================================
// DIAGRAMAS TÉCNICOS DE PONTOS DE CROCHÊ
// Padrão Internacional (Craft Yarn Council / Revistas)
// =============================================

function drawCrochetCross(cx, cy, size, color) {
  // Símbolo clássico de Ponto Baixo (sc / pb): + ou x
  var s = size / 2;
  return '<line x1="'+(cx-s).toFixed(1)+'" y1="'+cy.toFixed(1)+'" x2="'+(cx+s).toFixed(1)+'" y2="'+cy.toFixed(1)+'" stroke="'+color+'" stroke-width="1.8" stroke-linecap="round"/>' +
         '<line x1="'+cx.toFixed(1)+'" y1="'+(cy-s).toFixed(1)+'" x2="'+cx.toFixed(1)+'" y2="'+(cy+s).toFixed(1)+'" stroke="'+color+'" stroke-width="1.8" stroke-linecap="round"/>';
}

function drawCrochetIncrease(cx, cy, rad, angle, color) {
  // Símbolo clássico de Aumento em pb: V com duas cruzes
  var s = 3.5;
  var spread = 0.08;
  var a1 = angle - spread;
  var a2 = angle + spread;
  var x1 = 140 + rad * Math.cos(a1);
  var y1 = 130 + rad * Math.sin(a1);
  var x2 = 140 + rad * Math.cos(a2);
  var y2 = 130 + rad * Math.sin(a2);
  var baseR = rad - 12;
  var bx = 140 + baseR * Math.cos(angle);
  var by = 130 + baseR * Math.sin(angle);

  var lines = '<line x1="'+bx.toFixed(1)+'" y1="'+by.toFixed(1)+'" x2="'+x1.toFixed(1)+'" y2="'+y1.toFixed(1)+'" stroke="'+color+'" stroke-width="1.5"/>' +
              '<line x1="'+bx.toFixed(1)+'" y1="'+by.toFixed(1)+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="'+color+'" stroke-width="1.5"/>';
  return lines + drawCrochetCross(x1, y1, s, color) + drawCrochetCross(x2, y2, s, color);
}

function drawDoubleCrochet(cx, cy, height, color, angleDeg) {
  // Símbolo clássico de Ponto Alto (pa / dc): T com barra transversal oblíqua (como na foto do usuário)
  var rot = angleDeg ? ' transform="rotate('+angleDeg.toFixed(1)+' '+cx.toFixed(1)+' '+cy.toFixed(1)+')"' : '';
  var half = height / 2;
  var tWidth = height * 0.45;
  return '<g'+rot+'>' +
         '<line x1="'+cx.toFixed(1)+'" y1="'+(cy-half).toFixed(1)+'" x2="'+cx.toFixed(1)+'" y2="'+(cy+half).toFixed(1)+'" stroke="'+color+'" stroke-width="1.8"/>' +
         '<line x1="'+(cx-tWidth/2).toFixed(1)+'" y1="'+(cy-half).toFixed(1)+'" x2="'+(cx+tWidth/2).toFixed(1)+'" y2="'+(cy-half).toFixed(1)+'" stroke="'+color+'" stroke-width="1.8"/>' +
         '<line x1="'+(cx-3.5).toFixed(1)+'" y1="'+(cy-1.5).toFixed(1)+'" x2="'+(cx+3.5).toFixed(1)+'" y2="'+(cy+1.5).toFixed(1)+'" stroke="'+color+'" stroke-width="1.8"/>' +
         '</g>';
}

function makeSpiralSVG(r) {
  // Gráfico circular para amigurumi com símbolos autênticos de crochê
  var svg = [];
  svg.push('<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#ffffff">');
  
  // Grade sutil técnica de fundo (estilo revista)
  svg.push('<defs>');
  svg.push('<pattern id="grid" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M 14 0 L 0 0 0 14" fill="none" stroke="#f0ebf8" stroke-width="0.8"/></pattern>');
  svg.push('</defs>');
  svg.push('<rect width="280" height="280" fill="url(#grid)" rx="8"/>');
  svg.push('<rect width="280" height="280" fill="none" stroke="#d8cef0" stroke-width="1.5" rx="8"/>');

  var cx = 140, cy = 125;

  // Centro: Símbolo do Anel Mágico (círculo com seta)
  svg.push('<circle cx="'+cx+'" cy="'+cy+'" r="14" fill="none" stroke="#1f2474" stroke-width="2"/>');
  svg.push('<circle cx="'+cx+'" cy="'+cy+'" r="3.5" fill="#1f2474"/>');
  svg.push('<text x="'+cx+'" y="'+(cy+3.5)+'" text-anchor="middle" font-size="7" font-weight="bold" fill="#ffffff">0</text>');

  // Cores técnicas por carreira (idêntico ao modelo da foto do usuário: azul, verde, amarelo, vermelho)
  var colors = ['#1f2474', '#1f7a40', '#c2850a', '#b32424'];

  // --- VOLTA 1: 6 pontos baixos (+) dentro do anel (azul marinho) ---
  var r1 = 28;
  for (var i = 0; i < 6; i++) {
    var a = (i / 6) * 2 * Math.PI - Math.PI/2;
    var x = cx + r1 * Math.cos(a);
    var y = cy + r1 * Math.sin(a);
    svg.push(drawCrochetCross(x, y, 6, colors[0]));
  }
  // Indicador Carreira 1
  svg.push('<circle cx="'+(cx+2)+'" cy="'+(cy-r1)+'" r="6" fill="#1f2474"/>');
  svg.push('<text x="'+(cx+2)+'" y="'+(cy-r1+3)+'" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">1</text>');

  // --- VOLTA 2: 6 aumentos (V com duas cruzes) (verde) ---
  var r2 = 50;
  for (var j = 0; j < 6; j++) {
    var aj = (j / 6) * 2 * Math.PI - Math.PI/2;
    // Par de pontos baixos convergindo na mesma base (aumento)
    var p1x = cx + r2 * Math.cos(aj - 0.12);
    var p1y = cy + r2 * Math.sin(aj - 0.12);
    var p2x = cx + r2 * Math.cos(aj + 0.12);
    var p2y = cy + r2 * Math.sin(aj + 0.12);
    var base1x = cx + r1 * Math.cos(aj);
    var base1y = cy + r1 * Math.sin(aj);

    svg.push('<line x1="'+base1x.toFixed(1)+'" y1="'+base1y.toFixed(1)+'" x2="'+p1x.toFixed(1)+'" y2="'+p1y.toFixed(1)+'" stroke="'+colors[1]+'" stroke-width="1.2"/>');
    svg.push('<line x1="'+base1x.toFixed(1)+'" y1="'+base1y.toFixed(1)+'" x2="'+p2x.toFixed(1)+'" y2="'+p2y.toFixed(1)+'" stroke="'+colors[1]+'" stroke-width="1.2"/>');
    svg.push(drawCrochetCross(p1x, p1y, 5.5, colors[1]));
    svg.push(drawCrochetCross(p2x, p2y, 5.5, colors[1]));
  }
  // Indicador Carreira 2
  svg.push('<circle cx="'+(cx+4)+'" cy="'+(cy-r2)+'" r="6" fill="#1f7a40"/>');
  svg.push('<text x="'+(cx+4)+'" y="'+(cy-r2+3)+'" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">2</text>');

  // --- VOLTA 3: 18 pontos (1 pb, 1 aum) x 6 (amarelo/laranja) ---
  var r3 = 74;
  for (var k = 0; k < 18; k++) {
    var ak = (k / 18) * 2 * Math.PI - Math.PI/2;
    var xk = cx + r3 * Math.cos(ak);
    var yk = cy + r3 * Math.sin(ak);
    if (k % 3 === 0) {
      // Ponto simples
      svg.push(drawCrochetCross(xk, yk, 5, colors[2]));
    } else {
      // Aumento
      svg.push(drawCrochetCross(xk, yk, 5, colors[2]));
      var baseKx = cx + r2 * Math.cos(ak);
      var baseKy = cy + r2 * Math.sin(ak);
      svg.push('<line x1="'+baseKx.toFixed(1)+'" y1="'+baseKy.toFixed(1)+'" x2="'+xk.toFixed(1)+'" y2="'+yk.toFixed(1)+'" stroke="'+colors[2]+'" stroke-width="1" opacity="0.7"/>');
    }
  }
  // Indicador Carreira 3
  svg.push('<circle cx="'+(cx+6)+'" cy="'+(cy-r3)+'" r="6" fill="#c2850a"/>');
  svg.push('<text x="'+(cx+6)+'" y="'+(cy-r3+3)+'" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">3</text>');

  // --- VOLTA 4: 24 pontos (2 pb, 1 aum) x 6 (vermelho) ---
  var r4 = 98;
  for (var m = 0; m < 24; m++) {
    var am = (m / 24) * 2 * Math.PI - Math.PI/2;
    var xm = cx + r4 * Math.cos(am);
    var ym = cy + r4 * Math.sin(am);
    svg.push(drawCrochetCross(xm, ym, 5, colors[3]));
  }
  // Indicador Carreira 4
  svg.push('<circle cx="'+(cx+8)+'" cy="'+(cy-r4)+'" r="6" fill="#b32424"/>');
  svg.push('<text x="'+(cx+8)+'" y="'+(cy-r4+3)+'" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">4</text>');

  // LEGENDA TÉCNICA OFICIAL (estilo livro de crochê)
  svg.push('<rect x="6" y="232" width="268" height="42" rx="6" fill="#f8f5fc" stroke="#e0d6f0" stroke-width="1"/>');
  
  // Item 1: Ponto Baixo (+)
  svg.push(drawCrochetCross(18, 245, 7, '#1f2474'));
  svg.push('<text x="28" y="248" font-size="8.5" font-weight="bold" fill="#2d2438">Ponto Baixo (pb)</text>');
  
  // Item 2: Aumento (V)
  svg.push('<path d="M 124 249 L 128 242 L 132 249" fill="none" stroke="#1f7a40" stroke-width="1.8"/>');
  svg.push(drawCrochetCross(125, 242, 4, '#1f7a40'));
  svg.push(drawCrochetCross(131, 242, 4, '#1f7a40'));
  svg.push('<text x="138" y="248" font-size="8.5" font-weight="bold" fill="#2d2438">Aumento (2 pb juntos)</text>');

  // Item 3: Anel Mágico (0)
  svg.push('<circle cx="18" cy="263" r="5" fill="none" stroke="#1f2474" stroke-width="1.5"/>');
  svg.push('<text x="28" y="266" font-size="8.5" font-weight="bold" fill="#2d2438">Anel Mágico</text>');

  // Números de volta
  svg.push('<text x="120" y="266" font-size="8.5" fill="#6f6580">Voltas 1 a 4 numeradas por cor</text>');

  svg.push('</svg>');
  return svg.join('');
}

function makeFlatCircleSVG() {
  // Gráfico técnico circular em Pontos Altos (pa) com símbolos em T transversal (idêntico à foto do usuário)
  var svg = [];
  svg.push('<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#ffffff">');
  svg.push('<defs>');
  svg.push('<pattern id="gridC" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M 14 0 L 0 0 0 14" fill="none" stroke="#f0ebf8" stroke-width="0.8"/></pattern>');
  svg.push('</defs>');
  svg.push('<rect width="280" height="280" fill="url(#gridC)" rx="8"/>');
  svg.push('<rect width="280" height="280" fill="none" stroke="#d8cef0" stroke-width="1.5" rx="8"/>');

  var cx = 140, cy = 125;

  // Centro: Anel de correntinhas
  svg.push('<circle cx="'+cx+'" cy="'+cy+'" r="12" fill="none" stroke="#1f2474" stroke-width="2"/>');
  for (var c = 0; c < 6; c++) {
    var ca = (c / 6) * 2 * Math.PI;
    svg.push('<ellipse cx="'+(cx+12*Math.cos(ca)).toFixed(1)+'" cy="'+(cy+12*Math.sin(ca)).toFixed(1)+'" rx="3" ry="1.8" fill="none" stroke="#1f2474" stroke-width="1.2"/>');
  }

  var colors = ['#1f2474', '#1f7a40', '#c2850a', '#b32424'];

  // Volta 1: 12 Pontos Altos (T cortado)
  var r1 = 34;
  for (var i = 0; i < 12; i++) {
    var a1 = (i / 12) * 2 * Math.PI - Math.PI/2;
    var x1 = cx + r1 * Math.cos(a1);
    var y1 = cy + r1 * Math.sin(a1);
    var deg1 = (a1 * 180 / Math.PI) + 90;
    svg.push(drawDoubleCrochet(x1, y1, 14, colors[0], deg1));
  }
  svg.push('<circle cx="'+(cx+3)+'" cy="'+(cy-r1+3)+'" r="5.5" fill="#1f2474"/>');
  svg.push('<text x="'+(cx+3)+'" y="'+(cy-r1+6)+'" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#fff">1</text>');

  // Volta 2: 24 Pontos Altos com aumentos em V
  var r2 = 62;
  for (var j = 0; j < 24; j++) {
    var a2 = (j / 24) * 2 * Math.PI - Math.PI/2;
    var x2 = cx + r2 * Math.cos(a2);
    var y2 = cy + r2 * Math.sin(a2);
    var deg2 = (a2 * 180 / Math.PI) + 90;
    svg.push(drawDoubleCrochet(x2, y2, 14, colors[1], deg2));
  }
  svg.push('<circle cx="'+(cx+5)+'" cy="'+(cy-r2+3)+'" r="5.5" fill="#1f7a40"/>');
  svg.push('<text x="'+(cx+5)+'" y="'+(cy-r2+6)+'" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#fff">2</text>');

  // Volta 3: 36 Pontos Altos
  var r3 = 90;
  for (var k = 0; k < 32; k++) {
    var a3 = (k / 32) * 2 * Math.PI - Math.PI/2;
    var x3 = cx + r3 * Math.cos(a3);
    var y3 = cy + r3 * Math.sin(a3);
    var deg3 = (a3 * 180 / Math.PI) + 90;
    svg.push(drawDoubleCrochet(x3, y3, 14, colors[2], deg3));
  }
  svg.push('<circle cx="'+(cx+7)+'" cy="'+(cy-r3+3)+'" r="5.5" fill="#c2850a"/>');
  svg.push('<text x="'+(cx+7)+'" y="'+(cy-r3+6)+'" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#fff">3</text>');

  // Legenda
  svg.push('<rect x="6" y="232" width="268" height="42" rx="6" fill="#f8f5fc" stroke="#e0d6f0" stroke-width="1"/>');
  svg.push(drawDoubleCrochet(18, 248, 14, '#1f2474', 0));
  svg.push('<text x="28" y="251" font-size="8.5" font-weight="bold" fill="#2d2438">= Ponto Alto (pa / dc)</text>');
  svg.push('<ellipse cx="140" cy="248" rx="4" ry="2.5" fill="none" stroke="#1f2474" stroke-width="1.5"/>');
  svg.push('<text x="150" y="251" font-size="8.5" font-weight="bold" fill="#2d2438">= Correntinha (corr / ch)</text>');
  svg.push('<text x="12" y="267" font-size="8" fill="#6f6580">Símbolos técnicos oficiais (conforme gráfico padrão de revistas)</text>');
  svg.push('</svg>');
  return svg.join('');
}

function makeFlatGridSVG() {
  // Gráfico linear em carreiras de ida e volta (Ponto Alto com correntes de subida)
  var svg = [];
  svg.push('<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#ffffff">');
  svg.push('<defs>');
  svg.push('<pattern id="gridG" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M 14 0 L 0 0 0 14" fill="none" stroke="#f0ebf8" stroke-width="0.8"/></pattern>');
  svg.push('</defs>');
  svg.push('<rect width="280" height="240" fill="url(#gridG)" rx="8"/>');
  svg.push('<rect width="280" height="240" fill="none" stroke="#d8cef0" stroke-width="1.5" rx="8"/>');

  var colors = ['#1f2474', '#1f7a40', '#c2850a', '#b32424'];

  // Correntes de base
  var baseY = 190;
  svg.push('<text x="12" y="'+(baseY+3)+'" font-size="8.5" font-weight="bold" fill="#1f2474">Base</text>');
  for (var c = 0; c < 14; c++) {
    svg.push('<ellipse cx="'+(48+c*16)+'" cy="'+baseY+'" rx="4.5" ry="2.8" fill="none" stroke="#1f2474" stroke-width="1.5"/>');
  }

  // 4 Carreiras de Ponto Alto (T cortado)
  var rowY = [160, 126, 92, 58];
  for (var r = 0; r < 4; r++) {
    var y = rowY[r];
    var col = colors[r];
    svg.push('<circle cx="22" cy="'+y+'" r="6" fill="'+col+'"/>');
    svg.push('<text x="22" y="'+(y+3)+'" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">'+(r+1)+'</text>');
    
    // 3 Correntinhas de subida no início da carreira
    for (var ch = 0; ch < 3; ch++) {
      svg.push('<ellipse cx="38" cy="'+(y+10 - ch*7)+'" rx="2.5" ry="2" fill="none" stroke="'+col+'" stroke-width="1.2"/>');
    }

    // Pontos altos
    for (var colIdx = 0; colIdx < 13; colIdx++) {
      var x = 56 + colIdx * 16;
      svg.push(drawDoubleCrochet(x, y, 16, col, 0));
    }
  }

  // Legenda
  svg.push('<rect x="6" y="208" width="268" height="26" rx="4" fill="#f8f5fc" stroke="#e0d6f0" stroke-width="1"/>');
  svg.push(drawDoubleCrochet(18, 221, 12, '#1f2474', 0));
  svg.push('<text x="28" y="224" font-size="8.5" font-weight="bold" fill="#2d2438">Ponto Alto (pa)</text>');
  svg.push('<ellipse cx="120" cy="221" rx="4" ry="2.5" fill="none" stroke="#1f2474" stroke-width="1.5"/>');
  svg.push('<text x="130" y="224" font-size="8.5" font-weight="bold" fill="#2d2438">Correntinha (corr)</text>');

  svg.push('</svg>');
  return svg.join('');
}

function makeFlatSVG() {
  return makeSpiralSVG({parts:[{rows:[1,2,3,4,5]}]});
}

function getDiagram(r) {
  switch(r.diagramType) {
    case 'spiral':      return makeSpiralSVG(r);
    case 'flat_circle': return makeFlatCircleSVG();
    case 'flat_grid':   return makeFlatGridSVG();
    default:            return makeSpiralSVG(r);
  }
}
