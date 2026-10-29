// =============================================
// STORAGE
// =============================================
var STORE_KEY = 'croche_v2_';

function ls(k, def) {
  try { var v = localStorage.getItem(STORE_KEY+k); return v===null ? def : JSON.parse(v); }
  catch(e){ return def; }
}
function ss(k, v) {
  try { localStorage.setItem(STORE_KEY+k, JSON.stringify(v)); } catch(e){}
}

function getProgress(rid) {
  return ls('prog_'+rid, {});
}
function setProgress(rid, pi, ri, val) {
  var p = getProgress(rid);
  p[pi+'.'+ri] = val;
  ss('prog_'+rid, p);
}
function resetProgress(rid) { ss('prog_'+rid, {}); }

function calcProg(r) {
  var p = getProgress(r.id), total=0, done=0;
  r.parts.forEach(function(pt, pi){
    pt.rows.forEach(function(_,ri){ total++; if(p[pi+'.'+ri]) done++; });
  });
  return {done:done, total:total, pct: total?Math.round(done/total*100):0};
}

function isFav(rid) { return ls('fav_'+rid, false); }
function toggleFav(rid) { ss('fav_'+rid, !isFav(rid)); }

function getNotes(rid) { return ls('notes_'+rid, ''); }
function setNotes(rid, txt) { ss('notes_'+rid, txt); }

function getCounter() { return ls('counter', {stitch:0, row:0, hist:[]}); }
function saveCounter(c) { ss('counter', c); }

function getTheme() { return ls('theme', 'auto'); }
function setTheme(t) { ss('theme', t); }

// =============================================
// THEME
// =============================================
function applyTheme() {
  var t = getTheme();
  var el = document.documentElement;
  if(t === 'dark') { el.setAttribute('data-theme','dark'); }
  else if(t === 'light') { el.setAttribute('data-theme','light'); }
  else { el.removeAttribute('data-theme'); }
  var tog = document.getElementById('darkToggle');
  if(tog) tog.classList.toggle('on', t==='dark');
}
function toggleDark() {
  var t = getTheme();
  setTheme(t==='dark'?'light':'dark');
  applyTheme();
}

// =============================================
// STATE
// =============================================
var state = {
  page: 'home',
  homeTab: 'all',
  filterLevel: '',
  filterCat: '',
  sortHome: 'default',
  stitchTab: 'gloss',
  moreTab: 'calc',
  openRecipe: null
};

// =============================================
// NAVIGATION
// =============================================
function goPage(page, btn, fromHistory) {
  if (state.openRecipe && page !== 'recipes') {
    state.openRecipe = null;
  }
  state.page = page;
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(function(b){ b.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  else {
    var nb = document.querySelector('.nav-btn[data-page="'+page+'"]');
    if(nb) nb.classList.add('active');
  }
  window.scrollTo(0,0);
  renderPage(page);

  if (!fromHistory) {
    try {
      history.pushState({ page: page }, '', '#' + page);
    } catch(e) {}
  }
}

function renderPage(page) {
  if(page==='home') renderHome();
  else if(page==='recipes') renderRecipes();
  else if(page==='stitches') renderStitches();
  else if(page==='counter') renderCounter();
  else if(page==='more') renderMore();
}

// =============================================
// FILTERS
// =============================================
function setFilter(type, val, btn) {
  if(type==='level') state.filterLevel = val;
  else state.filterCat = val;
  var group = type==='level'?'filterLevel':'filterCat';
  document.querySelectorAll('#'+group+' .filter-chip').forEach(function(c){ c.classList.remove('active'); });
  btn.classList.add('active');
  renderHome();
}

function filterRecs(query, levelF, catF, sortF, tab) {
  var list = RECS.slice();
  if(tab === 'fav') list = list.filter(function(r){ return isFav(r.id); });
  if(tab === 'prog') list = list.filter(function(r){ var p=calcProg(r); return p.done>0 && p.done<p.total; });
  if(query) {
    var q = query.toLowerCase();
    list = list.filter(function(r){
      return r.n.toLowerCase().indexOf(q)>=0 || r.desc.toLowerCase().indexOf(q)>=0 ||
             (r.tags||[]).some(function(t){ return t.indexOf(q)>=0; });
    });
  }
  if(levelF) list = list.filter(function(r){ return r.lvl===levelF; });
  if(catF) list = list.filter(function(r){ return r.cat===catF; });
  var lvlOrder = {Iniciante:1, Intermediário:2, Avançado:3};
  if(sortF==='az') list.sort(function(a,b){ return a.n.localeCompare(b.n); });
  else if(sortF==='level') list.sort(function(a,b){ return (lvlOrder[a.lvl]||9)-(lvlOrder[b.lvl]||9); });
  else if(sortF==='fav') list.sort(function(a,b){ return (isFav(b.id)?1:0)-(isFav(a.id)?1:0); });
  return list;
}

// =============================================
// LEVEL BADGE
// =============================================
function lvlBadge(lvl) {
  var cls = {Iniciante:'badge-green', Intermediário:'badge-orange', Avançado:'badge-red'}[lvl]||'badge-blue';
  var dot = {Iniciante:'🟢', Intermediário:'🟡', Avançado:'🔴'}[lvl]||'⚪';
  return '<span class="badge '+cls+'">'+dot+' '+lvl+'</span>';
}

function starsHTML(n) {
  var s='';
  for(var i=0;i<5;i++) s += i<n ? '⭐' : '☆';
  return '<span class="stars" style="font-size:.8rem">'+s+'</span>';
}

// =============================================
// HOME PAGE
// =============================================
function switchHomeTab(tab) {
  state.homeTab = tab;
  ['all','fav','prog'].forEach(function(t){
    var btn = document.getElementById('tab-'+t+'-home');
    if(!btn) return;
    btn.style.background = (t===tab) ? 'var(--ac)' : 'var(--card)';
    btn.style.color = (t===tab) ? '#fff' : 'var(--tx3)';
    btn.style.border = (t===tab) ? 'none' : '1.5px solid var(--bd)';
  });
  renderHome();
}

function renderHome() {
  var q = (document.getElementById('searchHome')||{value:''}).value;
  var sort = (document.getElementById('sortHome')||{value:'default'}).value;
  var list = filterRecs(q, state.filterLevel, state.filterCat, sort, state.homeTab);
  var cnt = document.getElementById('homeCount');
  if(cnt) cnt.textContent = list.length + ' receita' + (list.length!==1?'s':'');
  var el = document.getElementById('homeList');
  if(!el) return;
  if(!list.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">Nenhuma receita encontrada</div><div class="empty-sub">Tente outros filtros ou termos de busca</div></div>';
    return;
  }
  el.innerHTML = list.map(function(r){ return recipeCardHTML(r); }).join('');
}

function recipeCardHTML(r) {
  var p = calcProg(r);
  var fav = isFav(r.id);
  return '<div class="card recipe-card" onclick="openRecipe(\''+r.id+'\')">'+
    '<div class="recipe-card-inner">'+
    '<div class="recipe-emoji">'+r.emoji+'</div>'+
    '<div class="recipe-info">'+
    '<div class="recipe-name">'+r.n+'</div>'+
    '<div class="recipe-desc">'+r.desc+'</div>'+
    '<div class="recipe-meta">'+lvlBadge(r.lvl)+starsHTML(r.stars)+
    '<span class="tag">'+r.cat+'</span>'+
    '<span class="tag">⏱ '+r.tempo+'min</span>'+
    '</div>'+
    '</div></div>'+
    '<div style="font-size:22px;position:absolute;top:14px;right:14px;cursor:pointer" onclick="event.stopPropagation();favToggle(\''+r.id+'\',this)">'+(fav?'❤️':'🤍')+'</div>'+
    (p.total>0?'<div class="recipe-progress-bar"><div class="recipe-progress-fill" style="width:'+p.pct+'%"></div></div>'+
    '<div style="font-size:.75rem;color:var(--tx3);margin-top:4px">'+p.done+'/'+p.total+' etapas ('+p.pct+'%)</div>':'')+'</div>';
}

function favToggle(rid, el) {
  toggleFav(rid);
  el.textContent = isFav(rid) ? '❤️' : '🤍';
}

// =============================================
// RECIPES PAGE
// =============================================
function renderRecipes() {
  if(state.openRecipe) { showDetail(state.openRecipe); return; }
  var q = (document.getElementById('searchRec')||{value:''}).value;
  var list = filterRecs(q, '', '', 'default', 'all');
  var el = document.getElementById('recipesList');
  if(!el) return;
  el.innerHTML = list.map(function(r){ return recipeCardHTMLR(r); }).join('');
  document.getElementById('recipes-list-view').style.display = 'block';
  document.getElementById('recipes-detail-view').classList.remove('active');
}

function recipeCardHTMLR(r) {
  return '<div class="card recipe-card" onclick="openRecipeFromList(\''+r.id+'\')">'+
    '<div class="recipe-card-inner">'+
    '<div class="recipe-emoji">'+r.emoji+'</div>'+
    '<div class="recipe-info">'+
    '<div class="recipe-name">'+r.n+'</div>'+
    '<div class="recipe-desc">'+r.desc+'</div>'+
    '<div class="recipe-meta">'+lvlBadge(r.lvl)+starsHTML(r.stars)+'<span class="tag">'+r.cat+'</span></div>'+
    '</div></div></div>';
}

function openRecipeFromList(rid, fromHistory) {
  state.openRecipe = rid;
  showDetail(rid);
  document.getElementById('recipes-list-view').style.display = 'none';
  document.getElementById('recipes-detail-view').classList.add('active');
  if (!fromHistory) {
    try {
      history.pushState({ view: 'detail', recipeId: rid }, '', '#recipe-' + rid);
    } catch(e) {}
  }
}

function openRecipe(rid) {
  state.openRecipe = rid;
  goPage('recipes', null, true);
  openRecipeFromList(rid, false);
}

function handleBackAction() {
  if (window.location.hash && window.location.hash.indexOf('#recipe-') === 0) {
    history.back();
  } else {
    closeDetail(true);
  }
}

function closeDetail(fromHistory) {
  state.openRecipe = null;
  document.getElementById('recipes-list-view').style.display = 'block';
  document.getElementById('recipes-detail-view').classList.remove('active');
  renderRecipes();
  if (!fromHistory && window.location.hash && window.location.hash.indexOf('#recipe-') === 0) {
    try { history.back(); } catch(e) {}
  }
}

function showDetail(rid) {
  var r = RECS.filter(function(x){ return x.id===rid; })[0];
  if(!r) return;
  var p = calcProg(r);
  var fav = isFav(rid);
  var diag = getDiagram(r);

  var html = '';
  // Header
  html += '<div class="detail-header">';
  html += '<span class="detail-emoji">'+r.emoji+'</span>';
  html += '<div class="detail-title">'+r.n+'</div>';
  html += '<div class="detail-badges">'+lvlBadge(r.lvl)+'<span class="badge badge-blue">'+r.cat+'</span>'+starsHTML(r.stars)+'</div>';
  html += '<div class="detail-time">⏱ '+r.tempo+' minutos estimados &nbsp;|&nbsp; 🧵 ~'+r.metrosEst+'m de fio</div>';
  html += '<div style="margin-top:10px;display:flex;gap:10px;justify-content:center">';
  html += '<button class="btn btn-outline btn-sm" id="favBtn_'+rid+'" onclick="favToggle2(\''+rid+'\')">'+(fav?'❤️ Favorita':'🤍 Favoritar')+'</button>';
  html += '</div></div>';

  // Progress bar
  html += '<div class="card card-flat" style="margin-bottom:12px">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">';
  html += '<span style="font-size:.85rem;font-weight:600;color:var(--tx2)">Progresso</span>';
  html += '<span style="font-size:.85rem;color:var(--ac);font-weight:700">'+p.pct+'%</span></div>';
  html += '<div class="progress-overall"><div class="progress-overall-fill" id="progFill_'+rid+'" style="width:'+p.pct+'%"></div></div>';
  html += '<div style="font-size:.8rem;color:var(--tx3);margin-top:4px">'+p.done+' de '+p.total+' etapas</div>';
  html += '<button class="btn btn-outline btn-sm" style="margin-top:8px" onclick="resetProg(\''+rid+'\')">🔄 Zerar progresso</button>';
  html += '</div>';

  // === VISUAL SECTION: Photo + Diagram ===
  html += '<div class="section-title">📸 Fotos e Gráfico da Receita</div>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">';
  // Photo (Resultado Final)
  html += '<div class="card card-sm" style="margin-bottom:0;padding:8px;text-align:center">';
  html += '<div style="font-weight:700;font-size:.8rem;color:var(--tx);margin-bottom:6px">📸 Peça Pronta</div>';
  html += '<img src="'+r.img+'" alt="Resultado: '+r.n+'" loading="lazy" onclick="openImageModal(\''+r.img+'\')" '
       + 'style="width:100%;border-radius:8px;object-fit:cover;height:170px;background:var(--bg2);cursor:pointer;border:1px solid var(--bd)" '
       + 'onerror="this.outerHTML=\'<div style=&quot;background:var(--bg2);border-radius:8px;height:170px;display:flex;align-items:center;justify-content:center;font-size:3rem&quot;>'+r.emoji+'</div>\'">';
  html += '<p style="font-size:.72rem;color:var(--ac);font-weight:600;margin-top:6px;cursor:pointer" onclick="openImageModal(\''+r.img+'\')">🔍 Toque p/ ampliar</p>';
  html += '</div>';
  // Diagram (Gráfico / Diagrama de pontos)
  html += '<div class="card card-sm" style="margin-bottom:0;padding:8px;text-align:center">';
  html += '<div style="font-weight:700;font-size:.8rem;color:var(--tx);margin-bottom:6px">📐 Gráfico dos Pontos</div>';
  if (r.diagramImg) {
    html += '<img src="'+r.diagramImg+'" alt="Gráfico: '+r.n+'" loading="lazy" onclick="openImageModal(\''+r.diagramImg+'\')" '
         + 'style="width:100%;border-radius:8px;object-fit:contain;height:170px;background:#fff;cursor:pointer;border:1px solid var(--bd)">';
    html += '<p style="font-size:.72rem;color:var(--ac);font-weight:600;margin-top:6px;cursor:pointer" onclick="openImageModal(\''+r.diagramImg+'\')">🔍 Toque p/ dar zoom</p>';
  } else {
    html += '<div style="border-radius:8px;overflow:hidden;border:1px solid var(--bd);height:170px;display:flex;align-items:center;justify-content:center;background:#fff;cursor:pointer" onclick="openSvgModal(\''+r.id+'\')">'+diag+'</div>';
    html += '<p style="font-size:.72rem;color:var(--ac);font-weight:600;margin-top:6px;cursor:pointer" onclick="openSvgModal(\''+r.id+'\')">🔍 Toque p/ dar zoom</p>';
  }
  html += '</div>';
  html += '</div>';

  // Video aula no YouTube
  if (r.videoUrl) {
    html += '<div class="card" style="background:linear-gradient(135deg, rgba(230,0,0,0.06) 0%, rgba(139,92,196,0.08) 100%);border:1.5px solid #ffccd4;padding:14px;margin-bottom:16px">';
    html += '<div style="display:flex;align-items:center;gap:12px">';
    html += '<div style="width:44px;height:44px;border-radius:12px;background:#e60000;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 3px 10px rgba(230,0,0,0.3)">▶</div>';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-weight:700;font-size:.95rem;color:var(--tx)">Vídeo Passo a Passo no YouTube</div>';
    html += '<div style="font-size:.8rem;color:var(--tx3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+(r.videoTitle || 'Aprenda assistindo a vídeo aula')+'</div>';
    html += '</div></div>';
    html += '<a href="'+r.videoUrl+'" target="_blank" rel="noopener" class="btn" style="background:#e60000;color:#fff;width:100%;margin-top:12px;justify-content:center;text-decoration:none;font-weight:700;padding:11px;box-shadow:0 2px 8px rgba(230,0,0,0.25)">';
    html += '📺 Assistir vídeo aula desta receita</a>';
    html += '</div>';
  }

  // Warning
  if(r.warn) {
    html += '<div class="warn-box">⚠️ '+r.warn+'</div>';
  }

  // Materials
  html += '<div class="section-title">🧵 Materiais</div>';
  html += '<div class="card card-sm"><ul class="mat-list">';
  r.mat.forEach(function(m){ html += '<li>'+m+'</li>'; });
  html += '</ul></div>';

  // Parts & Steps
  r.parts.forEach(function(pt, pi) {
    html += '<div class="section-title">🪡 '+pt.n+'</div>';
    html += '<div class="card card-sm">';
    pt.rows.forEach(function(row, ri) {
      var k = rid+'.'+pi+'.'+ri;
      var prog = getProgress(rid);
      var done = prog[pi+'.'+ri]||false;
      html += '<div class="step-item" id="si_'+k+'">';
      html += '<input type="checkbox" class="step-cb" id="cb_'+k+'"'+(done?' checked':'')
           + ' onchange="stepCheck(\''+rid+'\','+pi+','+ri+',this)">';
      html += '<label for="cb_'+k+'" style="flex:1;cursor:pointer">';
      html += '<span style="font-weight:700;color:var(--ac)">'+row[0]+'</span> ';
      html += '<span class="step-text'+(done?' done':'')+'" id="st_'+k+'">'+row[1]+'</span>';
      html += '</label>';
      if(row[2]!=='–') html += '<span class="step-pts">'+row[2]+' pts</span>';
      html += '</div>';
    });
    html += '</div>';
  });

  // Tips
  if(r.tips) {
    html += '<div class="tip-box">💡 <strong>Dica:</strong> '+r.tips+'</div>';
  }

  // Notes
  html += '<div class="section-title">📝 Minhas notas</div>';
  html += '<div class="card card-sm">';
  html += '<textarea class="notes-area" id="notes_'+rid+'" placeholder="Escreva aqui suas anotações, modificações ou observações desta receita..." oninput="saveNoteLocal(\''+rid+'\')">'+getNotes(rid)+'</textarea>';
  html += '</div>';

  document.getElementById('detailContent').innerHTML = html;
  window.scrollTo(0,0);
}

function stepCheck(rid, pi, ri, cb) {
  setProgress(rid, pi, ri, cb.checked);
  var k = rid+'.'+pi+'.'+ri;
  var st = document.getElementById('st_'+k);
  if(st) { st.className = 'step-text'+(cb.checked?' done':''); }
  // Update progress bar
  var r = RECS.filter(function(x){ return x.id===rid; })[0];
  if(!r) return;
  var p = calcProg(r);
  var fill = document.getElementById('progFill_'+rid);
  if(fill) fill.style.width = p.pct+'%';
}

function resetProg(rid) {
  if(!confirm('Zerar o progresso desta receita?')) return;
  resetProgress(rid);
  showDetail(rid);
}

function favToggle2(rid) {
  toggleFav(rid);
  var btn = document.getElementById('favBtn_'+rid);
  if(btn) btn.innerHTML = isFav(rid) ? '❤️ Favorita' : '🤍 Favoritar';
}

// =============================================
// STITCHES PAGE
// =============================================
function switchStitchTab(tab, btn) {
  state.stitchTab = tab;
  document.querySelectorAll('#page-stitches .tab-btn').forEach(function(b){ b.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  document.getElementById('stitch-gloss').style.display = tab==='gloss'?'block':'none';
  document.getElementById('stitch-tut').style.display = tab==='tut'?'block':'none';
  if(tab==='gloss') renderGloss();
  else renderTutorials();
}

function renderStitches() {
  renderGloss();
}

function renderGloss() {
  var q = ((document.getElementById('searchGloss')||{}).value||'').toLowerCase();
  var list = GLOS.filter(function(g){
    return !q || g.abbr.indexOf(q)>=0 || g.name.toLowerCase().indexOf(q)>=0 || g.desc.toLowerCase().indexOf(q)>=0;
  });
  var el = document.getElementById('glossList');
  if(!el) return;
  if(!list.length) { el.innerHTML='<div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">Nenhum ponto encontrado</div></div>'; return; }
  el.innerHTML = list.map(function(g){
    return '<div class="gloss-item">'+
      '<div class="gloss-abbr">'+g.abbr+'</div>'+
      '<div class="gloss-name">'+g.name+'</div>'+
      '<div class="gloss-en">🇺🇸 '+g.en_us+' &nbsp;·&nbsp; 🇬🇧 '+g.en_uk+'</div>'+
      '<div class="gloss-desc">'+g.desc+'</div>'+
      '</div>';
  }).join('');
}

function renderTutorials() {
  var el = document.getElementById('tutContent');
  if(!el) return;
  el.innerHTML = TUTORIALS.map(function(t){
    var ytQuery = encodeURIComponent(t.title + ' croche passo a passo');
    return '<div class="card card-sm" style="margin-bottom:10px">'+
      '<button class="accordion-btn" onclick="toggleAcc(this)">'+t.title+'<span class="arrow">▼</span></button>'+
      '<div class="accordion-body">'+
      t.steps.map(function(s,i){
        return '<div class="tutorial-step"><div class="tutorial-num">'+(i+1)+'</div><div class="tutorial-text">'+s+'</div></div>';
      }).join('')+
      '<div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--bd)">'+
      '<a href="https://www.youtube.com/results?search_query='+ytQuery+'" target="_blank" rel="noopener" class="btn btn-sm" style="background:#e60000;color:#fff;text-decoration:none;display:inline-flex;align-items:center;gap:6px;font-weight:600">'+
      '▶ Ver vídeo aula desta técnica no YouTube</a>'+
      '</div>'+
      '</div></div>';
  }).join('');
}

function toggleAcc(btn) {
  btn.classList.toggle('open');
  var body = btn.nextElementSibling;
  if(body) body.classList.toggle('open');
}

// =============================================
// COUNTER PAGE
// =============================================
function renderCounter() {
  var c = getCounter();
  var sc = document.getElementById('stitchCount');
  var rc = document.getElementById('rowCount');
  if(sc) sc.textContent = c.stitch;
  if(rc) rc.textContent = c.row;
  renderHistory();
}

function counterAdjust(type, delta) {
  var c = getCounter();
  if(type==='stitch') c.stitch = Math.max(0, c.stitch+delta);
  else c.row = Math.max(0, c.row+delta);
  saveCounter(c);
  renderCounter();
}

function completeRow() {
  var c = getCounter();
  var name = (document.getElementById('counterRecipeName')||{value:''}).value || 'Volta';
  c.hist = c.hist||[];
  c.hist.unshift({label: name + ' V'+(c.row+1), pts: c.stitch, ts: new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})});
  if(c.hist.length > 10) c.hist.pop();
  c.row++;
  c.stitch = 0;
  saveCounter(c);
  renderCounter();
}

function resetCounter() {
  if(!confirm('Zerar tudo (pontos e voltas)?')) return;
  saveCounter({stitch:0,row:0,hist:[]});
  renderCounter();
}

function renderHistory() {
  var c = getCounter();
  var el = document.getElementById('counterHistory');
  if(!el) return;
  if(!c.hist||!c.hist.length) {
    el.innerHTML = '<li style="color:var(--tx3);font-size:.85rem;padding:8px">Nenhuma volta completada ainda.</li>';
    return;
  }
  el.innerHTML = c.hist.slice(0,8).map(function(h){
    return '<li><span>'+h.label+' — <strong>'+h.pts+'</strong> pts</span><span style="color:var(--tx3)">'+h.ts+'</span></li>';
  }).join('');
}

// =============================================
// MORE PAGE
// =============================================
function switchMoreTab(tab, btn) {
  state.moreTab = tab;
  document.querySelectorAll('#page-more .tab-btn').forEach(function(b){ b.classList.remove('active'); });
  if(btn) btn.classList.add('active');
  document.getElementById('more-calc').style.display = tab==='calc'?'block':'none';
  document.getElementById('more-links').style.display = tab==='links'?'block':'none';
  document.getElementById('more-settings').style.display = tab==='settings'?'block':'none';
  if(tab==='links') renderLinks();
  if(tab==='settings') renderStats();
}

function renderMore() {
  renderLinks();
  renderYarnRef();
  renderStats();
}

function renderLinks() {
  var el = document.getElementById('linksList');
  if(!el) return;
  el.innerHTML = LINKS.map(function(l){
    return '<a class="link-card" href="https://'+l.url+'" target="_blank" rel="noopener">'+
      '<span class="link-icon">'+l.icon+'</span>'+
      '<div class="link-text"><div class="link-name">'+l.name+'</div><div class="link-url">'+l.url+'</div></div>'+
      '<div class="link-desc" style="font-size:.78rem;color:var(--tx3);margin-top:4px">'+l.desc+'</div>'+
      '</a>';
  }).join('');
}

function renderYarnRef() {
  var el = document.getElementById('yarnRef');
  if(!el) return;
  el.innerHTML = YARN_REF.map(function(y){
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--bd)">'+
      '<div>'+
      '<div style="font-size:.88rem;font-weight:600;color:var(--tx)">'+y.name+'</div>'+
      '<div style="font-size:.78rem;color:var(--tx3)">Agulha: '+y.agulha+'</div>'+
      '</div>'+
      '<div style="text-align:right">'+
      '<div style="font-size:.85rem;color:var(--ac);font-weight:700">'+y.m+'m</div>'+
      '<div style="font-size:.75rem;color:var(--tx3)">'+y.g+'g</div>'+
      '</div></div>';
  }).join('');
}

function calcMaterial() {
  var w = parseFloat((document.getElementById('calcWeight')||{value:0}).value)||0;
  var m = parseFloat((document.getElementById('calcMeters')||{value:0}).value)||0;
  var proj = parseFloat((document.getElementById('calcProject')||{value:0}).value)||0;
  var res = document.getElementById('calcResult');
  if(!res) return;
  if(!w||!m) { res.innerHTML='<p style="color:var(--danger);font-size:.85rem">Preencha o peso e a metragem do novelo.</p>'; return; }
  var mPerG = (m/w).toFixed(2);
  var html = '<div class="calc-result"><div class="calc-result-num">'+mPerG+'m/g</div><div class="calc-result-label">metros por grama de fio</div></div>';
  if(proj) {
    var novelos = Math.ceil(proj/m);
    var gramas = Math.ceil(proj/mPerG);
    html += '<div class="calc-result" style="margin-top:8px"><div class="calc-result-num">'+novelos+' novelo'+(novelos>1?'s':'')+'</div><div class="calc-result-label">necessário'+(novelos>1?'s':'')+' para '+proj+'m de projeto (≈'+gramas+'g)</div></div>';
  }
  res.innerHTML = html;
}

function renderStats() {
  var el = document.getElementById('statsContent');
  if(!el) return;
  var totalFav = RECS.filter(function(r){ return isFav(r.id); }).length;
  var totalDone = 0, totalSteps = 0;
  var inProg = 0;
  RECS.forEach(function(r){
    var p = calcProg(r);
    totalDone += p.done; totalSteps += p.total;
    if(p.done>0 && p.done<p.total) inProg++;
  });
  el.innerHTML =
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
    '<div style="background:var(--bg2);border-radius:10px;padding:12px;text-align:center">'+
    '<div style="font-size:1.8rem;font-weight:800;color:var(--ac)">'+totalFav+'</div>'+
    '<div style="font-size:.78rem;color:var(--tx3)">Favoritas</div></div>'+
    '<div style="background:var(--bg2);border-radius:10px;padding:12px;text-align:center">'+
    '<div style="font-size:1.8rem;font-weight:800;color:var(--ac)">'+inProg+'</div>'+
    '<div style="font-size:.78rem;color:var(--tx3)">Em andamento</div></div>'+
    '<div style="background:var(--bg2);border-radius:10px;padding:12px;text-align:center">'+
    '<div style="font-size:1.8rem;font-weight:800;color:var(--ac)">'+totalDone+'</div>'+
    '<div style="font-size:.78rem;color:var(--tx3)">Etapas feitas</div></div>'+
    '<div style="background:var(--bg2);border-radius:10px;padding:12px;text-align:center">'+
    '<div style="font-size:1.8rem;font-weight:800;color:var(--ac)">'+RECS.length+'</div>'+
    '<div style="font-size:.78rem;color:var(--tx3)">Receitas totais</div></div>'+
    '</div>';
}

function clearAllData() {
  if(!confirm('Apagar TODOS os dados salvos? (favoritos, progresso, notas, contador)\nEsta ação não pode ser desfeita.')) return;
  try { Object.keys(localStorage).filter(function(k){ return k.indexOf(STORE_KEY)===0; }).forEach(function(k){ localStorage.removeItem(k); }); } catch(e){}
  renderPage(state.page);
  alert('Dados apagados com sucesso.');
}

function saveNoteLocal(rid) {
  var el = document.getElementById('notes_' + rid);
  if (el) setNotes(rid, el.value);
}

function openImageModal(src, isSvgHtml, fromHistory) {
  var m = document.getElementById('imageModal');
  var mi = document.getElementById('modalImage');
  var mc = document.getElementById('modalSvgContainer');
  if (!m) return;
  if (isSvgHtml) {
    if (mi) mi.style.display = 'none';
    if (!mc) {
      mc = document.createElement('div');
      mc.id = 'modalSvgContainer';
      mc.style.cssText = 'width:90vw;max-width:380px;height:90vw;max-height:380px;background:#fff;border-radius:12px;padding:8px;box-shadow:0 8px 30px rgba(0,0,0,0.6)';
      var wrapper = m.querySelector('div');
      if (wrapper) wrapper.insertBefore(mc, wrapper.querySelector('span'));
    }
    mc.style.display = 'block';
    mc.innerHTML = isSvgHtml;
  } else {
    if (mc) mc.style.display = 'none';
    if (mi) {
      mi.style.display = 'block';
      mi.src = src;
    }
  }
  m.style.display = 'flex';
  if (!fromHistory) {
    try {
      history.pushState({ modal: 'zoom' }, '', '#zoom');
    } catch(e) {}
  }
}

function openSvgModal(rid) {
  var r = RECS.filter(function(x){ return x.id===rid; })[0];
  if(r) {
    var diag = getDiagram(r);
    openImageModal(null, diag);
  }
}

function closeImageModal(fromHistory) {
  var m = document.getElementById('imageModal');
  if (m) m.style.display = 'none';
  if (!fromHistory && window.location.hash === '#zoom') {
    try { history.back(); } catch(e) {}
  }
}

// =============================================
// NAVEGAÇÃO NATIVA DO TELEFONE (BOTÃO VOLTAR)
// =============================================
window.addEventListener('popstate', function(event) {
  // 1. Se o zoom de imagem/gráfico estiver aberto, fecha o zoom
  var m = document.getElementById('imageModal');
  if (m && m.style.display === 'flex') {
    closeImageModal(true);
    return;
  }

  // 2. Se estiver vendo os detalhes de uma receita, fecha e volta para a lista
  var detailView = document.getElementById('recipes-detail-view');
  if (detailView && detailView.classList.contains('active')) {
    closeDetail(true);
    return;
  }

  // 3. Se for navegação de abas no histórico
  if (event.state && event.state.page) {
    goPage(event.state.page, null, true);
    return;
  }

  // 4. Fallback pelo hash
  var hash = window.location.hash.replace('#', '');
  if (hash === 'home' || hash === 'recipes' || hash === 'stitches' || hash === 'counter' || hash === 'more') {
    goPage(hash, null, true);
  } else if (!hash) {
    goPage('home', null, true);
  }
});

// =============================================
// INIT
// =============================================
function initApp() {
  applyTheme();
  
  // Trata abertura direta via URL hash
  var hash = window.location.hash;
  if (hash.indexOf('#recipe-') === 0) {
    var rid = hash.replace('#recipe-', '');
    goPage('recipes', null, true);
    openRecipeFromList(rid, true);
  } else if (hash) {
    var p = hash.replace('#', '');
    if (['home','recipes','stitches','counter','more'].indexOf(p) >= 0) {
      goPage(p, null, true);
    } else {
      goPage('home', null, true);
    }
  } else {
    try {
      history.replaceState({ page: 'home' }, '', '#home');
    } catch(e) {}
    renderPage('home');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
