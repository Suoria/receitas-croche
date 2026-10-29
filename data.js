// =============================================
// DADOS: RECEITAS DE CROCHÊ
// =============================================

var RECS = [
  {
    id:"esfera", videoTitle:"Esfera Perfeita para Amigurumi (Passo a Passo)", videoUrl:"https://www.youtube.com/results?search_query=como+fazer+esfera+perfeita+amigurumi+passo+a+passo", n:"Esfera Base (Amigurumi)", emoji:"🔵", lvl:"Iniciante", cat:"Amigurumi",
    stars:1, tempo:45, tags:["base","amigurumi","esfera"],
    desc:"A base de quase todo amigurumi. Aprenda esta primeiro antes de qualquer outra receita.",
    img:"assets/foto-esfera.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão ou acrílico 100g","Agulha de crochê 2,5mm (uma numeração abaixo da indicada no fio)","Enchimento (fibra siliconada)","Marcador de ponto","Agulha de tapeçaria"],
    parts:[
      {n:"Corpo",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","aumento em todos os pontos (6 aum)","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","(3 pb, 1 aum) × 6","30"],["V6–V10","1 pb em cada ponto, 5 voltas iguais","30"],
        ["V11","(3 pb, 1 dim) × 6","24"],["V12","(2 pb, 1 dim) × 6","18"],
        ["Encher","Encha firme agora antes de fechar mais","–"],
        ["V13","(1 pb, 1 dim) × 6","12"],["V14","dim × 6","6"],
        ["Fechar","Corte o fio, passe pelas laçadas da frente, puxe e esconda a ponta","–"]
      ]}
    ],
    tips:"Use o marcador no primeiro ponto de cada volta e conte os pontos ao terminar. Contagem errada é o erro mais comum.",
    metrosEst:40
  },
  {
    id:"chaveiro", videoTitle:"Chaveiro Bolinha de Crochê Amigurumi", videoUrl:"https://www.youtube.com/results?search_query=chaveiro+bolinha+amigurumi+croche", n:"Chaveiro Bolinha", emoji:"🔑", lvl:"Iniciante", cat:"Amigurumi",
    stars:1, tempo:30, tags:["chaveiro","presente","rápido"],
    desc:"Peça pequena e rápida, ótima para lembrancinhas e presentes. Usa a técnica da esfera menor.",
    img:"assets/foto-chaveiro.jpg",
    diagramType:"spiral",
    mat:["Fio fino de algodão 30g","Agulha 2mm a 2,5mm","Argola de chaveiro","Enchimento","Olhos de segurança 6mm ou bordado em fio"],
    parts:[
      {n:"Corpo",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5–V7","1 pb em cada ponto, 3 voltas","24"],
        ["V8","(2 pb, 1 dim) × 6","18"],["V9","(1 pb, 1 dim) × 6","12"],
        ["Encher","Encha antes de fechar","–"],["V10","dim × 6, feche e esconda o fio","6"]
      ]},
      {n:"Acabamento",rows:[
        ["Alça","Faça uma corrente de 12 e prenda no topo com ponto baixíssimo (pbx)","–"],
        ["Argola","Passe a argola na alça e costure firme","–"],
        ["Rosto","Borde olhos e boquinha, ou fixe os olhos antes de encher","–"]
      ]}
    ],
    tips:"Para vender, borde o rosto em vez de usar olhos de plástico se o público for criança pequena.",
    metrosEst:20
  },
  {
    id:"chocalho", videoTitle:"Chocalho para Bebê em Amigurumi Fácil", videoUrl:"https://www.youtube.com/results?search_query=chocalho+bebe+croche+amigurumi", n:"Chocalho de Bebê", emoji:"🍼", lvl:"Iniciante", cat:"Bebê",
    stars:2, tempo:90, tags:["bebê","chocalho","segurança"],
    desc:"Esfera com guizo dentro e cabo simples. Presente perfeito para recém-nascidos.",
    img:"assets/foto-esfera.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão macio 80g","Agulha 2,5mm","Bolinha de guizo grande ou cápsula de chocalho","Enchimento","Anel de madeira (opcional)"],
    parts:[
      {n:"Bola",rows:[
        ["V1–V5","Siga a receita da Esfera base até V5","30"],
        ["V6–V10","1 pb em cada ponto, 5 voltas","30"],
        ["V11","(3 pb, 1 dim) × 6","24"],["V12","(2 pb, 1 dim) × 6","18"],
        ["Guizo","Encha um pouco e coloque o guizo no centro, envolto no enchimento","–"],
        ["V13","(1 pb, 1 dim) × 6","12"],["V14","dim × 6, feche com costura reforçada","6"]
      ]},
      {n:"Cabo",rows:[
        ["V1","6 pb no anel mágico","6"],["V2–V8","1 pb em cada ponto, 7 voltas","6"],
        ["Fim","Encha levemente, costure na base da bola e esconda o fio","–"]
      ]}
    ],
    warn:"SEGURANÇA: Para bebês, nada de peças soltas. Costure tudo reforçado, não use olhos de plástico e teste puxando cada parte. Confira as normas do INMETRO para brinquedos antes de comercializar.",
    tips:"Faça o ponto bem apertado para o guizo não aparecer entre as laçadas.",
    metrosEst:60
  },
  {
    id:"ursinho", videoTitle:"Ursinho Amigurumi Clássico Passo a Passo", videoUrl:"https://www.youtube.com/results?search_query=ursinho+amigurumi+croche+passo+a+passo", n:"Ursinho Simples", emoji:"🐻", lvl:"Intermediário", cat:"Amigurumi",
    stars:3, tempo:180, tags:["urso","amigurumi","presente"],
    desc:"Cabeça e corpo em esferas, mais orelhas, braços e pernas. Clássico e adorável.",
    img:"assets/foto-ursinho.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão 150g","Agulha 2,5mm","Enchimento","Olhos de segurança 6 a 8mm (ou bordado)","Agulha de tapeçaria","Alfinetes para posicionar"],
    parts:[
      {n:"Cabeça e Corpo",rows:[
        ["Cabeça","Faça uma Esfera base completa (ver receita Esfera Base)","30"],
        ["Corpo","Faça outra esfera parando em 24 pontos (até V7 do Chaveiro)","24"],
        ["Nota","Deixe uma ponta longa em ambos para costurar depois","–"]
      ]},
      {n:"Orelhas (2×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3–V4","1 pb em cada ponto, 2 voltas","12"],
        ["Fim","Achate, feche e deixe fio longo para costurar","–"]
      ]},
      {n:"Braços e Pernas (4×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","(1 pb, 1 aum) × 3","9"],
        ["V3–V7","1 pb em cada ponto, 5 voltas","9"],
        ["Fim","Encha de leve, feche e deixe fio longo","–"]
      ]},
      {n:"Montagem",rows:[
        ["1","Costure a cabeça no corpo com pontos firmes em volta","–"],
        ["2","Prenda as orelhas com alfinete, confira a simetria e costure","–"],
        ["3","Costure braços nas laterais e pernas na base do corpo","–"],
        ["4","Posicione olhos e focinho com alfinete antes de fixar definitivamente","–"]
      ]}
    ],
    warn:"Teste a firmeza das peças puxando com força. Para bebês, prefira rosto bordado.",
    tips:"Teste a posição do rosto com alfinetes e olhe de longe antes de costurar. Pequenas diferenças mudam muito a expressão.",
    metrosEst:120
  },
  {
    id:"gatinho", videoTitle:"Gatinho de Crochê Amigurumi para Iniciantes", videoUrl:"https://www.youtube.com/results?search_query=gatinho+amigurumi+croche+passo+a+passo", n:"Gatinho Amigurumi", emoji:"🐱", lvl:"Intermediário", cat:"Amigurumi",
    stars:3, tempo:210, tags:["gato","amigurumi","fofo"],
    desc:"Orelhas pontudas, bigodes bordados e rabinho! Um clássico do amigurumi muito querido.",
    img:"assets/foto-gatinho.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão cor principal 120g","Fio rosa para orelha interna 20g","Agulha 2,5mm","Enchimento","Olhos de segurança 8mm","Agulha de tapeçaria","Fio preto para bigodes"],
    parts:[
      {n:"Cabeça",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","(3 pb, 1 aum) × 6","30"],["V6–V9","30 pb em cada volta","30"],
        ["Olhos","Fixe os olhos entre V6 e V7, com 8 pontos de distância entre eles","–"],
        ["V10","(3 pb, 1 dim) × 6","24"],["V11","(2 pb, 1 dim) × 6","18"],
        ["Encher","Encha a cabeça firme agora","–"],
        ["V12","(1 pb, 1 dim) × 6","12"],["V13","dim × 6, feche","6"]
      ]},
      {n:"Orelhas Externas (2×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","(1 pb, 1 aum) × 3","9"],
        ["V3","9 pb","9"],["Fim","Feche achatado, não encha","–"]
      ]},
      {n:"Orelha Interna Rosa (2×)",rows:[
        ["V1","5 pb no anel mágico","5"],["Fim","Feche e costure na orelha externa","–"]
      ]},
      {n:"Corpo",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5–V10","24 pb em cada volta","24"],
        ["V11","(2 pb, 1 dim) × 6","18"],["Encher","Encha o corpo","–"],
        ["V12","(1 pb, 1 dim) × 6","12"],["V13","dim × 6, feche","6"]
      ]},
      {n:"Cauda",rows:[
        ["Base","Faça corrente de 15","–"],["Volta","14 pb de volta na corrente","14"],
        ["Fim","Feche e costure na traseira do corpo","–"]
      ]},
      {n:"Patas Dianteiras (2×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2–V6","6 pb em cada volta","6"],
        ["Fim","Feche e costure nas laterais do corpo","–"]
      ]},
      {n:"Montagem e Acabamento",rows:[
        ["1","Costure a cabeça no corpo centralizando","–"],
        ["2","Costure as orelhas no topo da cabeça, simétricas","–"],
        ["3","Costure as patas nas laterais do corpo","–"],
        ["4","Costure a cauda na traseira em ângulo","–"],
        ["Bigodes","Borde 3 bigodes de cada lado com fio preto, passando pela cabeça","–"],
        ["Focinho","Borde um triângulo rosa para o nariz","–"]
      ]}
    ],
    tips:"Marque com alfinete a posição das orelhas e das patas antes de costurar. Olhe de frente para garantir a simetria.",
    metrosEst:140
  },
  {
    id:"coelho", videoTitle:"Coelhinho da Páscoa em Amigurumi", videoUrl:"https://www.youtube.com/results?search_query=coelhinho+amigurumi+croche+passo+a+passo", n:"Coelhinho da Páscoa", emoji:"🐰", lvl:"Intermediário", cat:"Amigurumi",
    stars:3, tempo:240, tags:["coelho","páscoa","amigurumi"],
    desc:"Orelhas longas características e um rabinho fofinho. Ótimo para a Páscoa ou como presente.",
    img:"assets/foto-ursinho.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão branco ou colorido 150g","Agulha 2,5mm","Enchimento","Olhos de segurança 8mm","Agulha de tapeçaria"],
    parts:[
      {n:"Cabeça e Corpo",rows:[
        ["Cabeça","Faça Esfera base completa até fechar","30"],
        ["Corpo","Esfera até 24 pontos (como no Ursinho)","24"]
      ]},
      {n:"Orelhas Longas (2×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","(1 pb, 1 aum) × 3","9"],
        ["V3–V12","9 pb em cada volta, 10 voltas","9"],
        ["V13","(1 pb, 1 dim) × 3","6"],
        ["Fim","Feche achatado e dobre levemente, costure na cabeça","–"]
      ]},
      {n:"Braços e Pernas (4×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","(1 pb, 1 aum) × 3","9"],
        ["V3–V7","9 pb em cada volta","9"],
        ["Fim","Encha de leve e feche","–"]
      ]},
      {n:"Rabinho (1×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","6 pb","12"],
        ["V4","dim × 6, encha e feche","6"]
      ]},
      {n:"Montagem",rows:[
        ["1","Costure a cabeça no corpo","–"],
        ["2","Costure as orelhas no topo — deixe um espaço entre elas","–"],
        ["3","Costure braços e pernas","–"],
        ["4","Costure o rabinho na traseira","–"],
        ["Rosto","Borde olhos rosados ou fixe os de segurança, nariz e boca","–"]
      ]}
    ],
    tips:"Para as orelhas ficarem em pé, não encha e dobre levemente ao costurar.",
    metrosEst:150
  },
  {
    id:"pinguim", videoTitle:"Pinguim de Crochê Amigurumi Passo a Passo", videoUrl:"https://www.youtube.com/results?search_query=pinguim+amigurumi+croche+passo+a+passo", n:"Pinguim Amigurumi", emoji:"🐧", lvl:"Iniciante", cat:"Amigurumi",
    stars:2, tempo:120, tags:["pinguim","preto","branco","amigurumi"],
    desc:"Simpático pinguim preto e branco com barriga redonda. Projeto rápido e encantador!",
    img:"assets/foto-esfera.jpg",
    diagramType:"spiral",
    mat:["Fio preto 100g","Fio branco 50g","Fio laranja 20g","Agulha 2,5mm","Enchimento","Olhos de segurança 8mm"],
    parts:[
      {n:"Corpo (preto)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","(3 pb, 1 aum) × 6","30"],["V6–V14","30 pb em cada volta","30"],
        ["V15","(3 pb, 1 dim) × 6","24"],["V16","(2 pb, 1 dim) × 6","18"],
        ["Encher","Encha firme","–"],
        ["V17","(1 pb, 1 dim) × 6","12"],["V18","dim × 6, feche","6"]
      ]},
      {n:"Barriga Branca",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","24 pb","24"],["Fim","Não encha. Costure na frente do corpo","–"]
      ]},
      {n:"Asas Pretas (2×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3–V7","12 pb","12"],["Fim","Achate e costure nas laterais","–"]
      ]},
      {n:"Pés Laranjas (2×)",rows:[
        ["Base","Corrente de 6","–"],["V1","5 pb, 3 no canto, 5 pb, 2 no canto","15"],
        ["V2","15 pb","15"],["Fim","Feche e costure na base","–"]
      ]},
      {n:"Bico Laranja",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","(1 pb, 1 dim) × 2","4"],
        ["Fim","Feche e costure no rosto","–"]
      ]},
      {n:"Montagem",rows:[
        ["1","Costure a barriga branca na frente do corpo","–"],
        ["2","Fixe os olhos acima da barriga","–"],
        ["3","Costure o bico entre os olhos","–"],
        ["4","Costure as asas nas laterais","–"],
        ["5","Costure os pés na base","–"]
      ]}
    ],
    tips:"Costure a barriga branca antes de encher o corpo para facilitar.",
    metrosEst:100
  },
  {
    id:"polvo", videoTitle:"Polvo de Crochê Amigurumi (Tentáculos Espirais)", videoUrl:"https://www.youtube.com/results?search_query=polvo+amigurumi+croche+passo+a+passo", n:"Polvo Colorido", emoji:"🐙", lvl:"Iniciante", cat:"Amigurumi",
    stars:2, tempo:90, tags:["polvo","tentáculos","rápido"],
    desc:"Cabeça redonda com 8 tentáculos. Muito rápido de fazer e super divertido!",
    img:"assets/foto-esfera.jpg",
    diagramType:"spiral",
    mat:["Fio colorido de algodão 80g","Agulha 2,5mm","Enchimento","Olhos de segurança 10mm","Agulha de tapeçaria"],
    parts:[
      {n:"Cabeça",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","(3 pb, 1 aum) × 6","30"],["V6–V10","30 pb em cada volta","30"],
        ["Olhos","Fixe os olhos entre V6 e V7","–"],
        ["V11","(3 pb, 1 dim) × 6","24"],["V12","(2 pb, 1 dim) × 6","18"],
        ["Encher","Encha a cabeça","–"],
        ["V13","(1 pb, 1 dim) × 6","12"],["V14","dim × 6, feche","6"]
      ]},
      {n:"Tentáculos (8×)",rows:[
        ["Base","Faça corrente de 18","–"],
        ["Volta","Faça 1 pb em cada corrente de volta (17 pb)","17"],
        ["Fim","Feche e deixe fio longo para costurar","–"]
      ]},
      {n:"Montagem",rows:[
        ["1","Distribua os 8 tentáculos uniformemente na base da cabeça","–"],
        ["2","Costure cada tentáculo firmemente","–"],
        ["3","Borde a boca com fio preto","–"]
      ]}
    ],
    tips:"Os tentáculos naturalmente ficam ondulados por causa da tensão diferente entre a corrente e os pb. Não precisa moldar!",
    metrosEst:80
  },
  {
    id:"sapatinho", videoTitle:"Sapatinho de Bebê em Crochê Fácil", videoUrl:"https://www.youtube.com/results?search_query=sapatinho+de+croche+para+bebe+iniciante", n:"Sapatinho de Bebê", emoji:"👟", lvl:"Intermediário", cat:"Bebê",
    stars:3, tempo:120, tags:["bebê","sapato","presente","enxoval"],
    desc:"Sapatinho fofo para recém-nascido. Presente carinhoso para chá de bebê.",
    img:"assets/foto-sapatinho.jpg", diagramImg:"assets/grafico-oval-sapatinho.jpg",
    diagramType:"flat",
    mat:["Fio de algodão macio antialérgico 80g","Agulha 2,5mm","Agulha de tapeçaria","Fita de cetim 50cm (opcional)"],
    parts:[
      {n:"Sola (faça 2)",rows:[
        ["Base","Corrente de 10","–"],
        ["V1","1 pb na 2ª corrente, 7 pb, 3 pb na última, continue pelo outro lado: 7 pb, 2 pb na 1ª","20"],
        ["V2","(1 pb, 1 aum) × 1, 7 pb, (1 aum) × 3, 7 pb, (1 aum) × 2","26"],
        ["V3","26 pb","26"]
      ]},
      {n:"Laterais",rows:[
        ["V1","26 pb atrás das laçadas (para criar borda)","26"],
        ["V2–V4","26 pb em cada volta, 3 voltas","26"]
      ]},
      {n:"Biqueira",rows:[
        ["V5","8 pb, (dim) × 5, 8 pb","21"],
        ["V6","7 pb, (dim) × 3, 7 pb","18"],
        ["V7","6 pb, (dim) × 2, 6 pb, feche","16"]
      ]},
      {n:"Arremate",rows:[
        ["Borda","1 volta de ponto caranguejo em toda a abertura","–"],
        ["Laço","Passe fita de cetim ou faça corrente de 40 para amarrar","–"]
      ]}
    ],
    tips:"Faça os dois sapatinhos um após o outro para não esquecer os detalhes da receita.",
    metrosEst:60
  },
  {
    id:"touquinha", videoTitle:"Touca de Crochê para Bebê Recém-Nascido", videoUrl:"https://www.youtube.com/results?search_query=touca+croche+bebe+recem+nascido", n:"Touquinha de Bebê", emoji:"👶", lvl:"Iniciante", cat:"Bebê",
    stars:2, tempo:60, tags:["bebê","touca","enxoval","inverno"],
    desc:"Touquinha quentinha para recém-nascido. Rápida de fazer e muito necessária no enxoval.",
    img:"assets/foto-esfera.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão macio ou lã fina 100g","Agulha 2,5mm","Agulha de tapeçaria"],
    parts:[
      {n:"Topo da touca (trabalhe em espiral)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","(3 pb, 1 aum) × 6","30"],["V6","(4 pb, 1 aum) × 6","36"],
        ["V7–V14","36 pb em cada volta, 8 voltas retas","36"]
      ]},
      {n:"Borda",rows:[
        ["V15","1 volta de pbx (slip stitch) em toda a volta","36"],
        ["Opcional","2 voltas de pa para criar dobra decorativa","–"]
      ]}
    ],
    tips:"Para testar o tamanho, a touca deve cobrir as orelhas sem apertar. Recém-nascido: 32–34cm de circunferência.",
    metrosEst:50
  },
  {
    id:"tapete", videoTitle:"Tapete Redondo de Crochê Fácil em Espiral", videoUrl:"https://www.youtube.com/results?search_query=tapete+redondo+de+croche+facil+passo+a+passo", n:"Tapetinho Redondo", emoji:"🔴", lvl:"Iniciante", cat:"Casa",
    stars:2, tempo:180, tags:["tapete","casa","decoração","espiral"],
    desc:"Tapete básico em espiral contínua. Use fio mais grosso e agulha maior para ir rápido!",
    img:"assets/foto-tapete.jpg",
    diagramType:"flat_circle",
    mat:["Fio grosso 4mm ou fio de malha 200g","Agulha 5mm a 6mm","Tesoura","Agulha de tapeçaria"],
    parts:[
      {n:"Tapete (espiral contínua)",rows:[
        ["V1","8 pb no anel mágico","8"],["V2","8 aum","16"],
        ["V3","(1 pb, 1 aum) × 8","24"],["V4","(2 pb, 1 aum) × 8","32"],
        ["V5","(3 pb, 1 aum) × 8","40"],["V6","(4 pb, 1 aum) × 8","48"],
        ["V7","(5 pb, 1 aum) × 8","56"],["V8","(6 pb, 1 aum) × 8","64"],
        ["Continuar","Continue aumentando 8 pontos por volta até atingir o diâmetro desejado","–"],
        ["Borda","1 volta de ponto caranguejo para acabamento","–"]
      ]}
    ],
    tips:"Para o tapete não enrolar, não aperte demais o ponto. Se enrolar, tente uma agulha um número acima.",
    metrosEst:200
  },
  {
    id:"portacopo", videoTitle:"Porta-Copos Redondo em Crochê", videoUrl:"https://www.youtube.com/results?search_query=porta+copos+croche+redondo+passo+a+passo", n:"Porta-Copo Redondo", emoji:"☕", lvl:"Iniciante", cat:"Casa",
    stars:1, tempo:45, tags:["porta-copo","casa","útil","rápido"],
    desc:"Porta-copo em crochê, rápido e útil. Ótimo para presentear e para praticar pontos novos.",
    img:"assets/foto-portacopo.jpg",
    diagramType:"flat_circle",
    mat:["Fio de algodão colorido 40g","Agulha 2,5mm a 3mm","Agulha de tapeçaria"],
    parts:[
      {n:"Porta-Copo",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","24 pb (sem aumentos — cria borda vertical)","24"],
        ["Borda","1 volta de ponto caranguejo","24"]
      ]}
    ],
    tips:"Para um porta-copo maior (para caneca), faça uma V5 extra com (3 pb, 1 aum) × 6 = 30 pontos antes de parar os aumentos.",
    metrosEst:25
  },
  {
    id:"scrunchie", videoTitle:"Scrunchie / Xuxinha de Cabelo em Crochê", videoUrl:"https://www.youtube.com/results?search_query=scrunchie+croche+passo+a+passo", n:"Scrunchie de Cabelo", emoji:"💜", lvl:"Iniciante", cat:"Acessórios",
    stars:1, tempo:30, tags:["scrunchie","cabelo","acessório","rápido"],
    desc:"Elástico de cabelo coberto de crochê. Super fashion e rapidíssimo de fazer!",
    img:"assets/foto-chaveiro.jpg",
    diagramType:"flat",
    mat:["Fio de algodão colorido 20g","Agulha 3mm","Elástico de cabelo largo","Agulha de tapeçaria"],
    parts:[
      {n:"Cobertura do Elástico",rows:[
        ["Prep","Segure o elástico junto com o fio. Faça correntes por dentro do elástico","–"],
        ["V1","Faça de 80 a 100 correntinhas cobrindo todo o elástico","80-100"],
        ["Fechar","Una na primeira corrente com pbx","–"],
        ["V2","Faça 1 pb em cada correntinha, franzindo levemente","80-100"]
      ]},
      {n:"Acabamento",rows:[
        ["Opcional","Para mais volume: faça 1 pa em cada ponto da última volta","–"],
        ["Fim","Feche e esconda o fio","–"]
      ]}
    ],
    tips:"Quanto mais correntes fizer em relação ao tamanho do elástico, mais franzido e volumoso fica o scrunchie.",
    metrosEst:15
  },
  {
    id:"bolsinha", videoTitle:"Bolsinha de Crochê com Alça Fácil", videoUrl:"https://www.youtube.com/results?search_query=bolsinha+de+croche+facil+com+alca", n:"Bolsinha com Alça", emoji:"👜", lvl:"Intermediário", cat:"Acessórios",
    stars:3, tempo:300, tags:["bolsa","acessório","presente"],
    desc:"Bolsinha pequena com alça de corrente. Prática para usar e linda para presentear.",
    img:"assets/foto-portacopo.jpg",
    diagramType:"flat",
    mat:["Fio de algodão 150g","Agulha 3mm","Agulha de tapeçaria","Botão de pressão (opcional)","Forro de tecido (opcional)"],
    parts:[
      {n:"Fundo Oval",rows:[
        ["Base","Corrente de 14","–"],
        ["V1","12 pb, 3 pb no canto, 12 pb, 3 pb no outro canto (oval)","30"],
        ["V2","12 pb, (1 aum) × 3, 12 pb, (1 aum) × 3","36"],
        ["V3","36 pb atrás das laçadas (cria borda para erguer o corpo)","36"]
      ]},
      {n:"Corpo da Bolsa",rows:[
        ["V1–V20","36 pb em espiral, 20 voltas","36"],
        ["Borda","1 volta de pbx na abertura","36"]
      ]},
      {n:"Alça",rows:[
        ["Base","Faça corrente de 80","–"],
        ["V1","Faça 1 pb em cada corrente de volta","79"],
        ["Fixar","Costure as duas pontas da alça nas laterais da bolsa, simétricas","–"]
      ]},
      {n:"Acabamento",rows:[
        ["Botão","Costure botão de pressão na abertura","–"],
        ["Forro","Opcional: costure forro interno de tecido para maior durabilidade","–"]
      ]}
    ],
    tips:"Para a bolsa manter a forma, use fio de algodão encorpado ou duplique o fio ao crochear.",
    metrosEst:180
  },
  {
    id:"descanso", videoTitle:"Descanso de Panela em Crochê Quadrado", videoUrl:"https://www.youtube.com/results?search_query=descanso+de+panela+croche+quadrado", n:"Descanso de Panela", emoji:"🍳", lvl:"Iniciante", cat:"Casa",
    stars:1, tempo:60, tags:["cozinha","utensílio","prático"],
    desc:"Quadrado em ponto alto. Prático, rápido e muito útil na cozinha.",
    img:"assets/foto-portacopo.jpg",
    diagramType:"flat_grid",
    mat:["Fio de algodão grosso 100g (100% algodão — não sintético!)","Agulha 4mm","Agulha de tapeçaria"],
    parts:[
      {n:"Quadrado",rows:[
        ["Base","Corrente de 22 (+ 3 correntes para subir = 25 correntes)","–"],
        ["V1","1 pa em cada corrente (pulando as 3 primeiras que sobem)","19"],
        ["V2–V18","3 correntes para subir, vire o trabalho, 1 pa em cada pa","19"],
        ["Borda","1 volta de pb ao redor de todos os lados; nos cantos faça 3 pb no mesmo ponto","–"]
      ]}
    ],
    tips:"Use somente fio 100% algodão! Sintéticos podem derreter com o calor da panela.",
    metrosEst:80
  },
  {
    id:"unicornio", videoTitle:"Unicórnio Amigurumi em Crochê Passo a Passo", videoUrl:"https://www.youtube.com/results?search_query=unicornio+amigurumi+croche+passo+a+passo", n:"Unicórnio Encantado", emoji:"🦄", lvl:"Intermediário", cat:"Amigurumi",
    stars:3, tempo:220, tags:["unicórnio","amigurumi","chifre","fofo","presente"],
    desc:"Unicórnio com chifrezinho dourado em espiral e crina colorida em degradê.",
    img:"assets/foto-ursinho.jpg",
    diagramType:"spiral",
    mat:["Fio de algodão branco 120g","Fio amarelo/dourado para chifre 20g","Fios coloridos (rosa, lilás, menta) para crina","Agulha 2,5mm","Enchimento","Olhos de segurança 8mm"],
    parts:[
      {n:"Cabeça",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","6 aum","12"],
        ["V3","(1 pb, 1 aum) × 6","18"],["V4","(2 pb, 1 aum) × 6","24"],
        ["V5","(3 pb, 1 aum) × 6","30"],["V6–V10","30 pb em cada volta","30"],
        ["Olhos","Posicione os olhos entre V7 e V8 com 8 pontos de separação","–"],
        ["V11","(3 pb, 1 dim) × 6","24"],["V12","(2 pb, 1 dim) × 6","18"],
        ["Encher","Coloque fibra siliconada firme","–"],
        ["V13","(1 pb, 1 dim) × 6","12"],["V14","dim × 6, arremate","6"]
      ]},
      {n:"Chifre em Espiral (dourado)",rows:[
        ["V1","4 pb no anel mágico","4"],["V2","(1 pb, 1 aum) × 2","6"],
        ["V3","6 pb","6"],["V4","(2 pb, 1 aum) × 2","8"],
        ["V5","8 pb","8"],["V6","(3 pb, 1 aum) × 2","10"],
        ["Fim","Encha levemente e deixe fio longo para costurar no topo da cabeça","–"]
      ]},
      {n:"Orelhas (2×)",rows:[
        ["V1","6 pb no anel mágico","6"],["V2","(1 pb, 1 aum) × 3","9"],
        ["V3–V4","9 pb em cada volta","9"],["Fim","Achate e costure ao lado do chifre","–"]
      ]},
      {n:"Corpo e Patas",rows:[
        ["Corpo","Faça esfera base de 24 pontos (igual corpo do Ursinho)","24"],
        ["Patas (4x)","V1: 6 pb no anel; V2-V6: 6 pb. Encha levemente e costure","6"]
      ]},
      {n:"Crina e Cauda Colorida",rows:[
        ["Mechas","Faça correntes de 20 a 30 em fios coloridos e prenda com nó de franja atrás da cabeça e chifre","–"],
        ["Acabamento","Aparar com tesoura no comprimento desejado","–"]
      ]}
    ],
    tips:"Para um chifre mais brilhante, use fio com lurex dourado ou prateado.",
    metrosEst:130
  },
  {
    id:"bolsa_mandala", n:"Bolsa Mandala com Alça de Bambu", emoji:"👜", lvl:"Avançado", cat:"Acessórios",
    stars:4, tempo:360, tags:["bolsa","mandala","gráfico","bambu","acessórios","verão"],
    desc:"Bolsa circular com mandala em leques de pontos altos e relevo, acabamento sofisticado e alça de bambu. Acompanha gráfico japonês completo!",
    img:"assets/bolsa-resultado.png",
    diagramImg:"assets/bolsa-grafico.png",
    videoTitle:"Bolsa de Crochê Redonda Mandala com Alça de Bambu",
    videoUrl:"https://www.youtube.com/results?search_query=bolsa+de+croche+redonda+mandala+com+alca+de+bambu",
    diagramType:"flat_circle",
    mat:["Fio ráfia, barbante 4 ou cordão de algodão 300g","Agulha 3,5mm a 4,0mm","1 par de alças redondas de bambu ou madeira","Agulha de tapeçaria para arremates"],
    parts:[
      {n:"Mandala Frontal e Traseira (faça 2 círculos iguais)",rows:[
        ["Centro","Anel mágico, 3 corr (conta como 1 pa), 15 pa no anel, fechar com pbx na 3ª corr inicial","16"],
        ["V2","3 corr, 1 pa no mesmo ponto, 2 pa em cada pa da volta (16 aumentos em pa)","32"],
        ["V3","Leques de pontos altos: *1 pa, 2 corr, 1 pa no mesmo ponto, pular 1 ponto* repetir por toda a volta","–"],
        ["V4–V7","Trabalhe os leques de pontos altos em relevo pegando pela frente para criar a pétala em relevo da mandala","–"],
        ["V8–V12","Aumente os arcos de correntinhas entre as pétalas formando o contorno estrelado conforme o gráfico","–"],
        ["V13–V15","Voltas de nivelamento circular em ponto baixo e meio ponto alto ao redor das pontas da mandala","–"]
      ]},
      {n:"Lateral e Fole",rows:[
        ["Faixa lateral","Faça corrente de 8, trabalhe carreiras de ida e volta em pb até alcançar a extensão de 3/4 do círculo","8"],
        ["União","Una a faixa lateral aos 2 círculos em ponto baixíssimo pelo avesso, deixando o 1/4 superior aberto para a boca da bolsa","–"]
      ]},
      {n:"Fixação das Alças de Bambu",rows:[
        ["Borda superior","Faça 3 voltas de pb ao redor da abertura superior da bolsa","–"],
        ["Alça","Posicione a alça de bambu na borda e faça a volta final de pb abraçando diretamente a alça de bambu junto com os pontos da bolsa","–"],
        ["Arremate","Esconda todas as pontas com agulha de tapeçaria","–"]
      ]}
    ],
    tips:"Dê zoom no gráfico para acompanhar carreira por carreira dos leques em relevo da mandala. O fio de ráfia dá um acabamento rústico e leve para o verão!",
    metrosEst:280
  }
];

// =============================================
// GLOSSÁRIO DE PONTOS (20 termos)
// =============================================
var GLOS = [
  {abbr:"anel mágico",name:"Anel Mágico",en_us:"Magic Ring / MR",en_uk:"Magic Ring",desc:"Começo circular fechado. Enrole o fio duas vezes no dedo, entre a agulha, puxe uma laçada e faça os pontos dentro do anel. Puxe a ponta para fechar o centro."},
  {abbr:"pb",name:"Ponto Baixo",en_us:"Single Crochet (sc)",en_uk:"Double Crochet (dc)",desc:"Ponto básico mais usado. Entre a agulha no ponto, puxe o fio (2 laçadas), puxe o fio novamente pelas 2 laçadas."},
  {abbr:"pbx",name:"Ponto Baixíssimo",en_us:"Slip Stitch (sl st)",en_uk:"Slip Stitch (ss)",desc:"O ponto mais baixo. Entre a agulha no ponto e puxe o fio direto pelas 2 laçadas de uma vez. Usado para unir ou se deslocar sem aumentar altura."},
  {abbr:"meio pa",name:"Meio Ponto Alto",en_us:"Half Double Crochet (hdc)",en_uk:"Half Treble (htr)",desc:"Jogue o fio na agulha, entre no ponto, puxe o fio (3 laçadas), puxe o fio pelas 3 laçadas de uma vez."},
  {abbr:"pa",name:"Ponto Alto",en_us:"Double Crochet (dc)",en_uk:"Treble (tr)",desc:"Jogue o fio na agulha, entre no ponto, puxe o fio (3 laçadas), puxe pelas primeiras 2 laçadas, puxe pelas últimas 2 laçadas."},
  {abbr:"pa duplo",name:"Ponto Alto Duplo",en_us:"Treble Crochet (tr)",en_uk:"Double Treble (dtr)",desc:"Jogue o fio 2 vezes na agulha, entre no ponto, puxe fio (4 laçadas), trabalhe 2 laçadas por vez até restar 1."},
  {abbr:"pa triplo",name:"Ponto Alto Triplo",en_us:"Double Treble (dtr)",en_uk:"Triple Treble (ttr)",desc:"Jogue o fio 3 vezes na agulha antes de entrar no ponto. Cria um ponto muito alto."},
  {abbr:"corr",name:"Corrente / Correntinha",en_us:"Chain (ch)",en_uk:"Chain (ch)",desc:"Ponto inicial e de subida. Jogue o fio na agulha e puxe através da laçada. Repita."},
  {abbr:"aum",name:"Aumento",en_us:"Increase (inc)",en_uk:"Increase (inc)",desc:"Faça 2 pb no mesmo ponto. Aumenta 1 ponto na contagem total."},
  {abbr:"dim",name:"Diminuição",en_us:"Decrease / sc2tog",en_uk:"Decrease / dc2tog",desc:"Una 2 pb em 1. Entre no 1º ponto, puxe fio; entre no 2º ponto, puxe fio (3 laçadas); puxe o fio pelas 3 laçadas. Diminui 1 ponto."},
  {abbr:"dim inv",name:"Diminuição Invisível",en_us:"Invisible Decrease",en_uk:"Invisible Decrease",desc:"Passe a agulha pelas laçadas da frente dos próximos 2 pontos ao mesmo tempo, puxe o fio, depois puxe pelas 2 laçadas. Fica quase invisível no trabalho."},
  {abbr:"V",name:"Volta / Carreira",en_us:"Round (Rnd) / Row",en_uk:"Round / Row",desc:"Uma sequência completa de pontos ao redor (em espiral) ou de uma ponta à outra (em fileiras)."},
  {abbr:"pt carang",name:"Ponto Caranguejo",en_us:"Crab Stitch / Reverse sc",en_uk:"Crab Stitch",desc:"Ponto baixo feito de trás para frente (direita para esquerda). Cria uma borda trançada bonita para acabamento."},
  {abbr:"pt pipoca",name:"Ponto Pipoca (Popcorn)",en_us:"Popcorn Stitch",en_uk:"Popcorn Stitch",desc:"Faça 5 pa no mesmo ponto, tire a agulha, reinsira no 1º pa, puxe o último pa através do 1º. Cria um relevo em bolinha."},
  {abbr:"pt relevo f",name:"Ponto de Relevo pela Frente",en_us:"Front Post dc (FPdc)",en_uk:"Front Post tr (FPtr)",desc:"Em vez de entrar no ponto, passe a agulha pela frente do poste (coluna) do pa da fileira anterior. Cria textura em relevo."},
  {abbr:"pt relevo t",name:"Ponto de Relevo por Trás",en_us:"Back Post dc (BPdc)",en_uk:"Back Post tr (BPtr)",desc:"Igual ao de relevo, mas passando a agulha por trás do poste. Alterna com o de frente para criar efeito de costela."},
  {abbr:"pt cevada",name:"Ponto Cevada",en_us:"Moss Stitch / Granite Stitch",en_uk:"Moss Stitch",desc:"Alternância de 1 pb e 1 corrente, pulando 1 ponto. Cria textura delicada e levemente vazada."},
  {abbr:"pt areia",name:"Ponto Areia",en_us:"Sand / Linen Stitch",en_uk:"Woven Stitch",desc:"(1 pb, 1 corr, pular 1) ao longo de toda a fileira. Cria uma textura que parece tecido ou areia."},
  {abbr:"pt estrela",name:"Ponto Estrela",en_us:"Star Stitch",en_uk:"Star Stitch",desc:"Padrão decorativo que forma estrelas de 5 pontas. Requer 5 laçadas parciais no mesmo ponto de destino."},
  {abbr:"base",name:"Corrente de Base / Fundação",en_us:"Foundation Chain",en_uk:"Base Chain",desc:"A sequência inicial de correntes que serve de base para o trabalho em fileiras."}
];

// =============================================
// TUTORIAIS
// =============================================
var TUTORIALS = [
  {
    title:"🤲 Como segurar a agulha e o fio",
    steps:[
      "Segure a agulha como um lápis, entre o polegar e o indicador, apoiando no dedo médio.",
      "Com a outra mão, enrole o fio no dedo indicador para controlar a tensão.",
      "Passe o fio pelo dedo médio e anelar da mão esquerda para guiar.",
      "A tensão ideal: o fio desliza suavemente, nem frouxo nem apertado demais.",
      "Dica: pratique só o movimento da agulha sem fio antes de começar uma receita."
    ]
  },
  {
    title:"⭕ Como fazer o Anel Mágico",
    steps:[
      "Deixe uma ponta de uns 15cm de fio e segure entre polegar e indicador.",
      "Enrole o fio duas vezes ao redor de 2 dedos (indicador e médio), criando um anel.",
      "Entre a agulha no anel por baixo e puxe o fio que vem do novelo.",
      "Faça 1 corrente (ch) para subir — esta NÃO conta como um ponto.",
      "Faça os pontos indicados na receita DENTRO do anel (ex: 6 pb).",
      "Ao terminar a volta, puxe a ponta solta do fio para fechar o centro do anel.",
      "Marque o primeiro ponto com um marcador de ponto para não perder a contagem."
    ]
  },
  {
    title:"⛓️ Como fazer a Corrente",
    steps:[
      "Faça um laço com o fio e coloque na agulha (chamado de 'nó corrediço').",
      "Segure o nó entre polegar e médio da mão esquerda.",
      "Jogue o fio na agulha passando por cima (movement chamado 'yarn over').",
      "Puxe o fio através da laçada que está na agulha.",
      "Você fez 1 corrente! Repita o processo para fazer mais.",
      "A corrente não deve estar nem muito apertada (difícil de entrar a agulha) nem muito folgada."
    ]
  },
  {
    title:"✖️ Como fazer o Ponto Baixo (pb)",
    steps:[
      "Entre a agulha no ponto indicado (ou na corrente da base).",
      "Jogue o fio na agulha e puxe para dentro — agora tem 2 laçadas na agulha.",
      "Jogue o fio na agulha novamente.",
      "Puxe o fio pelas 2 laçadas ao mesmo tempo.",
      "Pronto! Você fez 1 ponto baixo. A agulha fica com 1 laçada, pronta para o próximo ponto.",
      "Repita entrando no próximo ponto."
    ]
  },
  {
    title:"🔢 Como contar pontos",
    steps:[
      "Em trabalhos em espiral (amigurumi), conte os pontos no final de cada volta.",
      "Cada 'V' ou 'X' visível na parte de cima é 1 ponto.",
      "Use um marcador de ponto no 1º ponto de cada volta para saber onde a volta começa.",
      "Coloque o trabalho em superfície plana e passe o dedo em cada ponto enquanto conta.",
      "Se a contagem não bater, desfaça só a última volta e refaça — não todo o trabalho!",
      "Dica: conte em voz alta ou use o Contador do app para não perder o controle."
    ]
  },
  {
    title:"💡 Dicas para Amigurumi",
    steps:[
      "Use agulha 0,5 a 1mm menor que o indicado no fio para fechar melhor os pontos.",
      "Encha o amigurumi quando ainda tem abertura suficiente — não espere fechar muito.",
      "Use enchimento de fibra siliconada (hipoalergênico) em quantidade justa — nem fofo demais nem apertado.",
      "Posicione TUDO com alfinetes antes de costurar definitivamente: cabeça, orelhas, patas.",
      "Use agulha de tapeçaria com ponta arredondada para não furar as laçadas ao costurar.",
      "Para bebês: NUNCA use olhos de plástico. Borde os olhos com fio. Costure tudo reforçado.",
      "A 'diminuição invisível' deixa o fechamento das esferas muito mais bonito que a diminuição normal."
    ]
  }
];

// =============================================
// LINKS E FONTES
// =============================================
var LINKS = [
  {name:"Ravelry",url:"ravelry.com",icon:"🧶",desc:"Maior banco de receitas do mundo. Filtre por 'free' para ver só as gratuitas."},
  {name:"Círculo",url:"circulo.com.br",icon:"🇧🇷",desc:"Fabricante brasileira com receitas em português. Ótima referência nacional."},
  {name:"Amigurumi Today",url:"amigurumitoday.com",icon:"🐻",desc:"Receitas de amigurumi, muitas gratuitas. Ótimo para iniciantes."},
  {name:"Yarnspirations",url:"yarnspirations.com",icon:"🧵",desc:"Receitas gratuitas de grandes marcas de fio."},
  {name:"Sarah Maker",url:"sarahmaker.com",icon:"📝",desc:"Blog com tutoriais detalhados e receitas gratuitas."},
  {name:"Crochê & Cia",url:"crocheecia.com.br",icon:"🌸",desc:"Blog brasileiro com muitas receitas em português."},
  {name:"Pinterest",url:"pinterest.com",icon:"📌",desc:"Busque 'amigurumi crochê' para se inspirar. Milhares de fotos e links."},
  {name:"YouTube",url:"youtube.com",icon:"▶️",desc:"Busque 'anel mágico crochê', 'amigurumi iniciante BR'. Canais: Croche com Dedeh, Professora Simone Eleotério."},
  {name:"Elo7",url:"elo7.com.br",icon:"🛍️",desc:"Marketplace brasileiro para vender suas peças feitas à mão."},
  {name:"Grace and Yarn",url:"graceandyarn.com",icon:"🌿",desc:"Amigurumi simples para iniciantes, com fotos passo a passo."}
];

// =============================================
// REFERÊNCIA DE FIOS
// =============================================
var YARN_REF = [
  {name:"Fio de Algodão Fino (bebê)",agulha:"2–2,5mm",g:50,m:125},
  {name:"Fio de Algodão Médio",agulha:"2,5–3mm",g:100,m:200},
  {name:"Fio Acrílico Médio",agulha:"3–4mm",g:100,m:280},
  {name:"Fio de Lã Médio",agulha:"3,5–4mm",g:100,m:220},
  {name:"Fio Grosso (tapete/bolsa)",agulha:"5–6mm",g:200,m:150},
  {name:"Fio de Malha (trapilho)",agulha:"8–12mm",g:500,m:80}
];
