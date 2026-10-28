// =============================================
// DIAGRAMAS SVG POR TIPO
// =============================================

function makeSpiralSVG(r) {
  // Diagrama em espiral para amigurumi
  var pts = r.parts && r.parts[0] && r.parts[0].rows ? r.parts[0].rows.length : 8;
  var numRings = Math.min(pts, 5);
  var svgParts = [];
  svgParts.push('<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:200px">');
  svgParts.push('<rect width="220" height="220" fill="white" rx="8"/>');
  // Anel mágico central
  svgParts.push('<circle cx="110" cy="110" r="14" fill="none" stroke="#8b5cc4" stroke-width="2.5"/>');
  svgParts.push('<circle cx="110" cy="110" r="5" fill="#8b5cc4"/>');
  svgParts.push('<text x="110" y="114" text-anchor="middle" font-size="7" fill="white" font-weight="bold">⊕</text>');
  // Anéis concêntricos representando voltas
  var radii = [28, 44, 60, 76, 92];
  var counts = [6, 12, 18, 24, 30];
  var colors = ['#8b5cc4','#a67dd4','#b794e8','#c4a8f0','#d4bef8'];
  for (var ring = 0; ring < Math.min(numRings, 5); ring++) {
    var rad = radii[ring];
    var count = counts[ring];
    var color = colors[ring];
    // Círculo guia tracejado
    svgParts.push('<circle cx="110" cy="110" r="'+rad+'" fill="none" stroke="'+color+'" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>');
    // Pontos ao redor
    for (var i = 0; i < count; i++) {
      var angle = (i / count) * 2 * Math.PI - Math.PI/2;
      var px = 110 + rad * Math.cos(angle);
      var py = 110 + rad * Math.sin(angle);
      svgParts.push('<circle cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3.5" fill="'+color+'"/>');
    }
  }
  // Seta de sentido horário
  svgParts.push('<path d="M 135 85 Q 145 100 135 115" fill="none" stroke="#8b5cc4" stroke-width="2" marker-end="url(#arr)"/>');
  // Legenda
  svgParts.push('<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#8b5cc4"/></marker></defs>');
  svgParts.push('<rect x="4" y="178" width="212" height="38" rx="4" fill="#f3e8ff"/>');
  svgParts.push('<circle cx="16" cy="190" r="4" fill="#8b5cc4"/>');
  svgParts.push('<text x="25" y="193" font-size="9" fill="#5a4070">ponto baixo (pb)</text>');
  svgParts.push('<circle cx="110" cy="187" r="6" fill="none" stroke="#8b5cc4" stroke-width="2"/>');
  svgParts.push('<circle cx="110" cy="187" r="2" fill="#8b5cc4"/>');
  svgParts.push('<text x="120" y="193" font-size="9" fill="#5a4070">anel mágico</text>');
  svgParts.push('<text x="8" y="210" font-size="9" fill="#5a4070">V1=6pb  V2=12pb  V3=18pb  V4=24pb  V5=30pb</text>');
  svgParts.push('</svg>');
  return svgParts.join('');
}

function makeFlatCircleSVG() {
  // Diagrama para tapete/porta-copo (fileiras em círculo)
  var svgParts = [];
  svgParts.push('<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:200px">');
  svgParts.push('<rect width="220" height="220" fill="white" rx="8"/>');
  var radii = [14,30,46,62,78];
  var labels = ['V1','V2','V3','V4','V5'];
  var colors = ['#8b5cc4','#9b6dd4','#ab7ee0','#bb90eb','#cba2f5'];
  for (var i = 0; i < 5; i++) {
    svgParts.push('<circle cx="110" cy="105" r="'+radii[i]+'" fill="none" stroke="'+colors[i]+'" stroke-width="'+(i===0?3:2)+'"/>');
    svgParts.push('<text x="'+(110+radii[i]+3)+'" y="108" font-size="9" fill="'+colors[i]+'" font-weight="'+(i===0?'bold':'normal')+'">'+labels[i]+'</text>');
  }
  // Setas radiais indicando aumento
  for (var j = 0; j < 6; j++) {
    var ang = j * 60 * Math.PI / 180;
    var x1 = 110 + 18 * Math.cos(ang);
    var y1 = 105 + 18 * Math.sin(ang);
    var x2 = 110 + 72 * Math.cos(ang);
    var y2 = 105 + 72 * Math.sin(ang);
    svgParts.push('<line x1="'+x1.toFixed(1)+'" y1="'+y1.toFixed(1)+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="#d4bef8" stroke-width="1" stroke-dasharray="2,2"/>');
  }
  svgParts.push('<circle cx="110" cy="105" r="5" fill="#8b5cc4"/>');
  svgParts.push('<rect x="4" y="180" width="212" height="36" rx="4" fill="#f3e8ff"/>');
  svgParts.push('<text x="8" y="196" font-size="9" fill="#5a4070">Trabalhe em espiral. Aumente 6 pts por volta.</text>');
  svgParts.push('<text x="8" y="210" font-size="9" fill="#5a4070">Borda: 1 volta de ponto caranguejo para acabar.</text>');
  svgParts.push('</svg>');
  return svgParts.join('');
}

function makeFlatGridSVG() {
  // Diagrama para peças retangulares (tapete quadrado, descanso)
  var svgParts = [];
  svgParts.push('<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:190px">');
  svgParts.push('<rect width="220" height="200" fill="white" rx="8"/>');
  var rows = 5, cols = 7;
  var startX = 20, startY = 20, cw = 26, ch = 22;
  var rowColors = ['#8b5cc4','#9b6dd4','#ab7ee0','#bb90eb','#cba2f5'];
  for (var r2 = 0; r2 < rows; r2++) {
    // Row label
    svgParts.push('<text x="8" y="'+(startY + r2*ch + ch/2 + 4)+'" font-size="9" fill="#8b5cc4" font-weight="bold">V'+(r2+1)+'</text>');
    for (var c = 0; c < cols; c++) {
      var x = startX + c * cw;
      var y = startY + r2 * ch;
      // Draw stitch symbol (T shape for dc/pa)
      svgParts.push('<line x1="'+(x+cw/2)+'" y1="'+y+'" x2="'+(x+cw/2)+'" y2="'+(y+ch)+'" stroke="'+rowColors[r2]+'" stroke-width="2"/>');
      svgParts.push('<line x1="'+(x+4)+'" y1="'+(y+ch*0.3)+'" x2="'+(x+cw-4)+'" y2="'+(y+ch*0.3)+'" stroke="'+rowColors[r2]+'" stroke-width="2"/>');
    }
  }
  // Borda indicativa
  svgParts.push('<rect x="'+(startX-4)+'" y="'+(startY-4)+'" width="'+(cols*cw+8)+'" height="'+(rows*ch+8)+'" fill="none" stroke="#8b5cc4" stroke-width="1.5" stroke-dasharray="4,2" rx="2"/>');
  svgParts.push('<rect x="4" y="145" width="212" height="50" rx="4" fill="#f3e8ff"/>');
  svgParts.push('<line x1="14" y1="160" x2="14" y2="178" stroke="#8b5cc4" stroke-width="2"/>');
  svgParts.push('<line x1="10" y1="165" x2="18" y2="165" stroke="#8b5cc4" stroke-width="2"/>');
  svgParts.push('<text x="24" y="168" font-size="9" fill="#5a4070">= Ponto alto (pa) / Double Crochet</text>');
  svgParts.push('<text x="8" y="185" font-size="9" fill="#5a4070">Vire o trabalho ao final de cada fileira.</text>');
  svgParts.push('<text x="8" y="194" font-size="9" fill="#5a4070">3 correntes para subir = 1 ponto alto.</text>');
  svgParts.push('</svg>');
  return svgParts.join('');
}

function makeFlatSVG() {
  // Diagrama genérico em fileiras
  var svgParts = [];
  svgParts.push('<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:190px">');
  svgParts.push('<rect width="220" height="200" fill="white" rx="8"/>');
  // Base chain
  var chainY = 170;
  svgParts.push('<text x="8" y="'+chainY+'" font-size="9" fill="#8b5cc4" font-weight="bold">Base:</text>');
  for (var c2 = 0; c2 < 12; c2++) {
    svgParts.push('<ellipse cx="'+(38+c2*14)+'" cy="'+(chainY-4)+'" rx="5" ry="4" fill="none" stroke="#8b5cc4" stroke-width="1.5"/>');
  }
  // Rows of stitches (pb = X symbol)
  var rowY = [150, 128, 106, 84];
  var rowColors2 = ['#8b5cc4','#9b6dd4','#ab7ee0','#bb90eb'];
  for (var row = 0; row < 4; row++) {
    svgParts.push('<text x="8" y="'+(rowY[row]+4)+'" font-size="9" fill="'+rowColors2[row]+'" font-weight="bold">V'+(row+1)+'</text>');
    for (var col = 0; col < 11; col++) {
      var cx2 = 38 + col * 14;
      var cy2 = rowY[row] - 4;
      // X symbol for pb
      svgParts.push('<line x1="'+(cx2-4)+'" y1="'+(cy2-4)+'" x2="'+(cx2+4)+'" y2="'+(cy2+4)+'" stroke="'+rowColors2[row]+'" stroke-width="2"/>');
      svgParts.push('<line x1="'+(cx2+4)+'" y1="'+(cy2-4)+'" x2="'+(cx2-4)+'" y2="'+(cy2+4)+'" stroke="'+rowColors2[row]+'" stroke-width="2"/>');
    }
  }
  svgParts.push('<rect x="4" y="6" width="212" height="36" rx="4" fill="#f3e8ff"/>');
  // X legend
  svgParts.push('<line x1="14" y1="18" x2="22" y2="26" stroke="#8b5cc4" stroke-width="2"/>');
  svgParts.push('<line x1="22" y1="18" x2="14" y2="26" stroke="#8b5cc4" stroke-width="2"/>');
  svgParts.push('<text x="28" y="26" font-size="9" fill="#5a4070">= Ponto Baixo (pb) / Single Crochet (sc)</text>');
  svgParts.push('<ellipse cx="14" cy="35" rx="5" ry="4" fill="none" stroke="#8b5cc4" stroke-width="1.5"/>');
  svgParts.push('<text x="24" y="39" font-size="9" fill="#5a4070">= Corrente (ch) / Chain</text>');
  svgParts.push('</svg>');
  return svgParts.join('');
}

function getDiagram(r) {
  switch(r.diagramType) {
    case 'spiral':      return makeSpiralSVG(r);
    case 'flat_circle': return makeFlatCircleSVG();
    case 'flat_grid':   return makeFlatGridSVG();
    default:            return makeFlatSVG();
  }
}
