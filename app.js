/* ========================================================================
   EL GUAMIL — App de pedidos y comandas
   ======================================================================== */

/* ============ DATOS DEL MENÚ ============ */
const CATEGORIES = [
  {id:'tacos', label:'Tacos por Orden (5 pz)', icon:'🌮', group:'comida'},
  {id:'individuales', label:'Tacos por Pieza', icon:'🫓', group:'comida'},
  {id:'papas', label:'Papas Rellenas', icon:'🥔', group:'comida'},
  {id:'especialidades', label:'Especialidades', icon:'🍽️', group:'comida'},
  {id:'gringas', label:'Pastor Blanco y Gringas', icon:'🧀', group:'comida'},
  {id:'kilo', label:'Por Kilo', icon:'⚖️', group:'comida'},
  {id:'complementos', label:'Complementos', icon:'➕', group:'comida'},
  {id:'bebidas', label:'Bebidas', icon:'🥤', group:'bebidas'},
];

const ITEMS = {
  tacos:[
    {id:'t-pastor', name:'Orden de 5 Tacos de Pastor', price:65, tortillaOption:true},
    {id:'t-chuleta', name:'Orden de 5 Tacos de Chuleta', price:70, tortillaOption:true},
    {id:'t-chorizo', name:'Orden de 5 Tacos de Chorizo', price:70, tortillaOption:true},
    {id:'t-suadero', name:'Orden de 5 Tacos de Suadero', price:70, tortillaOption:true},
    {id:'t-costilla', name:'Orden de 5 Tacos de Costilla', price:75, tortillaOption:true},
    {id:'t-bistec', name:'Orden de 5 Tacos de Bistec', price:75, tortillaOption:true},
    {id:'t-campechana', name:'Orden de 5 Tacos Campechana', price:75, desc:'Combinación de suadero y chorizo.', tortillaOption:true},
    {id:'t-surtida-builder', name:'Arma tu Taco Surtido', price:75, desc:'Elige el sabor de cada uno de tus 5 tacos.', tortillaOption:true,
      builder:true, builderCount:5, builderOptions:['Pastor','Chuleta','Chorizo','Suadero','Costilla','Bistec','Tripa','Campechana']},
    {id:'t-tripa', name:'Orden de 5 Tacos de Tripa', price:75, tortillaOption:true},
  ],
  individuales:[
    {id:'i-maiz-normal', name:'Taco de Maíz Sencillo', price:15,
      flavors:['Pastor','Chorizo','Suadero','Bistec','Chuleta','Tripa','Costilla','Campechana']},
    {id:'i-maiz', name:'Taco de Maíz con Queso', price:20,
      flavors:['Pastor','Chorizo','Suadero','Bistec','Chuleta','Tripa','Costilla','Campechana']},
    {id:'i-harina-sq', name:'Harina sin Queso', price:25,
      flavors:['Pastor','Chorizo','Suadero','Bistec','Chuleta','Tripa','Costilla','Campechana']},
    {id:'i-harina-cq', name:'Harina con Queso', price:30,
      flavors:['Pastor','Chorizo','Suadero','Bistec','Chuleta','Tripa','Costilla','Campechana']},
  ],
  papas:[
    {id:'p-guera', name:"Papa Güera ⭐", price:150, desc:'Pastor blanco y delicioso queso fundido.'},
    {id:'p-natural', name:'Papa Natural', price:100, desc:'Mantequilla, crema y queso.'},
    {id:'p-especial', name:'Papa Especial', price:150, desc:'Pastor, chuleta, bistec y queso.'},
    {id:'p-llene', name:"Papa Pa' Que Me Llene", price:145, desc:'Pastor, chuleta, morrón, cebolla, piña, jitomate y queso.'},
    {id:'p-vegetariana', name:'Papa Vegetariana', price:140, desc:'Champiñón, morrón, cebolla, nopales, ensalada, piña y queso.'},
    {id:'p-chingona', name:'Papa Chingona', price:150, desc:'Costilla, bistec y queso.'},
    {id:'p-loca', name:'Papa Loca', price:145, desc:'Pastor, piña, jamón y queso.'},
  ],
  especialidades:[
    {id:'e-vez', name:'Que Me Vez', desc:'Pastor, chuleta y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
    {id:'e-terca', name:'Mula Terca', desc:'Chuleta, chorizo, jamón, jalapeño y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
    {id:'e-suey', name:'Shot Suey', desc:'Pastor, chuleta, chile morrón, cebolla y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
    {id:'e-hawaiana', name:'Hawaiana', desc:'Pastor, jamón, piña y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
    {id:'e-porky', name:'Porky', desc:'Chuleta, jamón, cebolla y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
    {id:'e-solo', name:'Solo Yo', desc:'Bistec, champiñón, ensalada mexicana y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
    {id:'e-alambre', name:'Alambre', desc:'Chuleta, chile morrón, cebolla y queso.', variants:[{label:'Medio platillo',price:100},{label:'Platillo completo',price:130}]},
  ],
  gringas:[
    {id:'g-pblanco', name:'Orden Pastor Blanco (5 tzs)', price:75, tortillaOption:true},
    {id:'g-harina-pb', name:'1 Pz Harina c/Queso Pastor Blanco', price:30},
    {id:'g-clasica', name:'Gringa Clásica (Pastor)', price:80},
    {id:'g-especial', name:'Gringa Especial', price:85, flavors:['Chuleta','Bistec','Costilla']},
    {id:'g-queso', name:'Queso Fundido Especial', price:95, flavors:['Natural','Champiñón','Chorizo','Bistec']},
  ],
  kilo:[
    {id:'k-pastor', name:'Pastor Clásico', variants:[{label:'1/4 Kg',price:130},{label:'1/2 Kg',price:220},{label:'1 Kg',price:400}]},
    {id:'k-bistec', name:'Bistec o Chuleta', variants:[{label:'1/4 Kg',price:150},{label:'1/2 Kg',price:300},{label:'1 Kg',price:600}]},
    {id:'k-pblanco', name:'Pastor Blanco', variants:[{label:'1/4 Kg',price:140},{label:'1/2 Kg',price:245},{label:'1 Kg',price:450}]},
  ],
  complementos:[
    {id:'c-huesitos', name:'Huesitos', price:35},
    {id:'c-nopal', name:'Orden de Nopal', price:40},
    {id:'c-cebolla', name:'Cebolla Asada', price:25},
    {id:'c-queso', name:'Queso Extra (1 Kg)', price:100},
    {id:'c-rabano', name:'Rábano / Limón / Piña extra', price:10},
    {id:'c-salsa', name:'Salsa / Ensalada extra', price:5},
  ],
  bebidas:[
    {id:'b-refresco', name:'Refresco de Vidrio', price:35},
    {id:'b-agua', name:'Agua Natural', price:25},
    {id:'b-cerveza', name:'Cerveza', price:35, flavors:['Corona','Victoria']},
    {id:'b-aguafresca', name:'Agua Horchata / Jamaica', flavors:['Horchata','Jamaica'], variants:[{label:'1/2 Litro',price:25},{label:'1 Litro',price:50}]},
  ],
};

const EXCLUSIONS = ['Sin cebolla','Sin cilantro','Sin salsa','Extra salsa','Extra queso','Bien dorado','Para llevar (empaque)'];
const NUM_TABLES = 10;

/* ============ ESTADO PERSISTENTE ============ */
const STORAGE_KEY = 'guamil_pos_state_v1';
const SETTINGS_KEY = 'guamil_pos_settings_v1';

function freshOrder(){
  return { cart:[], noteGeneral:'', openedAt:null, status:'libre' };
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){ console.warn('No se pudo cargar estado guardado', e); }
  const tables = {};
  for(let i=1;i<=NUM_TABLES;i++) tables[i] = freshOrder();
  return { tables, takeout: [], nextTakeoutId: 1 };
}

function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e){ console.warn('No se pudo guardar estado', e); }
}

function loadSettings(){
  try{
    const raw = localStorage.getItem(SETTINGS_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return {
    kitchen:{ service:'0000ffe0-0000-1000-8000-00805f9b34fb', char:'0000ffe1-0000-1000-8000-00805f9b34fb', name:null },
    cashier:{ service:'0000ffe0-0000-1000-8000-00805f9b34fb', char:'0000ffe1-0000-1000-8000-00805f9b34fb', name:null }
  };
}
function saveSettings(){
  try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }catch(e){}
}

let state = loadState();
let settings = loadSettings();

/* ============ IMPRESIÓN — BLUETOOTH ESC/POS + RESPALDO EN NAVEGADOR ============ */
const PRINTER_PRESETS = [
  {label:'Genérica BLE 58mm (FFE0 / FFE1) — la más común', service:'0000ffe0-0000-1000-8000-00805f9b34fb', char:'0000ffe1-0000-1000-8000-00805f9b34fb'},
  {label:'Genérica BLE (49535343...)', service:'49535343-fe7d-4ae5-8fa9-9fafd205e455', char:'49535343-8841-43f4-a8d4-ecbe34729bb3'},
  {label:'Personalizado (escribir UUID abajo)', service:'', char:''},
];

class BTPrinter{
  constructor(role){
    this.role = role; // 'kitchen' | 'cashier'
    this.device = null;
    this.characteristic = null;
  }
  isConnected(){ return !!(this.device && this.device.gatt && this.device.gatt.connected); }

  async connect(serviceUUID, charUUID){
    if(!navigator.bluetooth){
      throw new Error('Este navegador no soporta Web Bluetooth. Usa Chrome en Android.');
    }
    let device = null;

    // Intento de reconexión rápida a un dispositivo ya autorizado antes (sin mostrar el selector)
    if(navigator.bluetooth.getDevices){
      try{
        const known = await navigator.bluetooth.getDevices();
        const savedId = settings[this.role] && settings[this.role].deviceId;
        if(savedId) device = known.find(d=>d.id===savedId) || null;
      }catch(e){ /* silencioso: seguimos con el selector normal */ }
    }

    if(!device){
      device = await navigator.bluetooth.requestDevice({
        acceptAllDevices:true,
        optionalServices:[serviceUUID]
      });
    }

    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(serviceUUID);
    const characteristic = await service.getCharacteristic(charUUID);
    device.addEventListener('gattserverdisconnected', ()=>{
      this.characteristic = null;
      showToast('⚠️ Se desconectó la impresora de ' + (this.role==='kitchen'?'cocina':'caja'));
      renderConfigScreen();
    });
    this.device = device;
    this.characteristic = characteristic;
    settings[this.role].name = device.name || 'Impresora sin nombre';
    settings[this.role].deviceId = device.id;
    saveSettings();
  }

  disconnect(){
    if(this.device && this.device.gatt && this.device.gatt.connected) this.device.gatt.disconnect();
    this.device = null; this.characteristic = null;
  }

  async printBytes(bytes){
    if(!this.characteristic) throw new Error('No conectada');
    const chunkSize = 100;
    const fast = !!(this.characteristic.properties && this.characteristic.properties.writeWithoutResponse);
    for(let i=0;i<bytes.length;i+=chunkSize){
      const chunk = new Uint8Array(bytes.slice(i,i+chunkSize));
      if(fast){
        await this.characteristic.writeValueWithoutResponse(chunk);
        await new Promise(r=>setTimeout(r,4));
      } else {
        await this.characteristic.writeValue(chunk);
        await new Promise(r=>setTimeout(r,12));
      }
    }
  }
}

const kitchenPrinter = new BTPrinter('kitchen');
const cashierPrinter = new BTPrinter('cashier');

/* Quita acentos: muchas impresoras térmicas genéricas no imprimen bien UTF-8 */
function stripAccents(str){
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/ñ/gi, m => m === 'ñ' ? 'n' : 'N');
}

const ESC = {
  INIT:[0x1B,0x40],
  ALIGN_CENTER:[0x1B,0x61,0x01],
  ALIGN_LEFT:[0x1B,0x61,0x00],
  BOLD_ON:[0x1B,0x45,0x01],
  BOLD_OFF:[0x1B,0x45,0x00],
  DOUBLE_ON:[0x1D,0x21,0x11],
  DOUBLE_OFF:[0x1D,0x21,0x00],
  LF:[0x0A],
  CUT:[0x1D,0x56,0x01],
};

function textToBytes(str){
  return Array.from(stripAccents(str)).map(c=>c.charCodeAt(0) < 256 ? c.charCodeAt(0) : 0x3F);
}
function line(str=''){ return [...textToBytes(str), 0x0A]; }
function sepLine(){ return line('--------------------------------'); }

function wrapText(str, width){
  const words = str.split(' ');
  const lines = []; let cur = '';
  words.forEach(w=>{
    if((cur+' '+w).trim().length > width){ lines.push(cur.trim()); cur = w; }
    else cur = (cur+' '+w).trim();
  });
  if(cur) lines.push(cur);
  return lines;
}

function buildTicketBytes({title, subtitle, items, showPrices, total, note, footer}){
  let bytes = [...ESC.INIT, ...ESC.ALIGN_CENTER, ...ESC.BOLD_ON, ...ESC.DOUBLE_ON];
  bytes.push(...line('EL GUAMIL'));
  bytes.push(...ESC.DOUBLE_OFF, ...ESC.BOLD_OFF);
  bytes.push(...line(title));
  if(subtitle) bytes.push(...line(subtitle));
  bytes.push(...ESC.ALIGN_LEFT, ...sepLine());
  items.forEach(it=>{
    const head = it.qtyLabel + ' ' + it.name + (showPrices ? '  $'+it.lineTotal : '');
    wrapText(head, 32).forEach(l=> bytes.push(...line(l)));
    (it.specs||[]).forEach(s=>{
      wrapText('  > '+s, 32).forEach(l=> bytes.push(...line(l)));
    });
  });
  bytes.push(...sepLine());
  if(showPrices){
    bytes.push(...ESC.BOLD_ON);
    bytes.push(...line('TOTAL:'.padEnd(20)+' $'+total));
    bytes.push(...ESC.BOLD_OFF);
  }
  if(note){
    bytes.push(...sepLine());
    wrapText('Nota: '+note, 32).forEach(l=> bytes.push(...line(l)));
  }
  bytes.push(...sepLine());
  const now = new Date();
  bytes.push(...line('Hora: '+now.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'})));
  if(footer){ bytes.push(...ESC.ALIGN_CENTER); bytes.push(...line(footer)); }
  bytes.push(...ESC.LF, ...ESC.LF, ...ESC.LF);
  bytes.push(...ESC.CUT);
  return bytes;
}

function cartToTicketItems(cart, onlyNew){
  return cart
    .map(c=>{
      const qty = onlyNew ? (c.qty - (c.sentQty||0)) : c.qty;
      return {c, qty};
    })
    .filter(x=>x.qty>0)
    .map(({c,qty})=>{
      const specs = [];
      if(c.tortilla) specs.push('Tortilla: '+c.tortilla);
      if(c.builderBreakdown && c.builderBreakdown.length) specs.push(...c.builderBreakdown);
      if(c.exclusions && c.exclusions.length) specs.push(c.exclusions.join(', '));
      if(c.note) specs.push('Nota: '+c.note);
      return { qtyLabel: qty+'x', name:c.label, lineTotal: qty*c.unitPrice, specs };
    });
}

function printPreviewFallback(bytesTitle, plainLines){
  const area = document.getElementById('printArea');
  area.innerHTML = plainLines.map(l=>`<div>${escapeHtml(l)}</div>`).join('');
  window.print();
}

function bytesLinesForPreview({title, subtitle, items, showPrices, total, note, footer}){
  const lines = ['EL GUAMIL', title];
  if(subtitle) lines.push(subtitle);
  lines.push('--------------------------------');
  items.forEach(it=>{
    lines.push(it.qtyLabel+' '+it.name + (showPrices?'  $'+it.lineTotal:''));
    (it.specs||[]).forEach(s=> lines.push('  > '+s));
  });
  lines.push('--------------------------------');
  if(showPrices) lines.push('TOTAL: $'+total);
  if(note) lines.push('Nota: '+note);
  lines.push('--------------------------------');
  lines.push('Hora: '+new Date().toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'}));
  if(footer) lines.push(footer);
  return lines;
}

async function sendTicket(role, payload){
  const printer = role==='kitchen' ? kitchenPrinter : cashierPrinter;
  const bytes = buildTicketBytes(payload);
  if(printer.isConnected()){
    try{
      await printer.printBytes(bytes);
      showToast('🖨️ Ticket enviado a ' + (role==='kitchen'?'cocina':'caja'));
      return true;
    }catch(e){
      console.warn(e);
      showToast('⚠️ Falló el envío por Bluetooth, abriendo impresión del navegador');
    }
  }
  printPreviewFallback(payload.title, bytesLinesForPreview(payload));
  return false;
}

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ============ UTILIDADES DE PEDIDO ============ */
function computeCartTotal(cart){ return cart.reduce((a,c)=>a + c.qty*c.unitPrice, 0); }
function computeCartCount(cart){ return cart.reduce((a,c)=>a + c.qty, 0); }
function computePendingKitchenCount(cart){
  return cart.reduce((a,c)=> a + Math.max(0, c.qty - (c.sentQty||0)), 0);
}

function getContextFromHash(){
  const h = location.hash.replace('#','') || '/salon';
  const parts = h.split('/').filter(Boolean);
  if(parts[0] === 'mesa' && parts[1]){
    const id = parseInt(parts[1]);
    return { type:'mesa', id, order: state.tables[id] };
  }
  if(parts[0] === 'parallevar' && parts[1] && parts[1] !== 'nuevo'){
    const id = parseInt(parts[1]);
    return { type:'takeout', id, order: state.takeout.find(t=>t.id===id) };
  }
  if(parts[0] === 'config') return { type:'config' };
  return { type:'salon' };
}

function orderTitle(ctx){
  if(ctx.type==='mesa') return 'Mesa ' + ctx.id;
  if(ctx.type==='takeout') return 'Para llevar' + (ctx.order.customerName ? ' — '+ctx.order.customerName : ' #'+ctx.id);
  return '';
}

/* ============ NAVEGACIÓN ============ */
function navigate(hash){ location.hash = hash; }
window.addEventListener('hashchange', renderApp);

function renderApp(){
  const ctx = getContextFromHash();
  const root = document.getElementById('app-root');
  root.innerHTML = '';
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('drawer').classList.remove('show');
  document.getElementById('ticketFab').classList.remove('show');

  if(ctx.type === 'salon') renderSalon(root);
  else if(ctx.type === 'config') renderConfigScreen(root);
  else if((ctx.type==='mesa' || ctx.type==='takeout') && ctx.order) renderOrderScreen(root, ctx);
  else { navigate('/salon'); }
}

/* ============ PANTALLA: SALÓN ============ */
function renderSalon(root){
  const topbar = buildTopbar({ title:'El Guamil', sub:'Salón · '+NUM_TABLES+' mesas', showBack:false, showConfig:true });
  root.appendChild(topbar);

  const hero = document.createElement('div');
  hero.className = 'salon-hero';
  hero.innerHTML = `
    <h2>🌮 El Guamil</h2>
    <p>Tacos &amp; Papas Rellenas — comandas del día</p>
  `;
  root.appendChild(hero);

  const c = document.createElement('div');
  c.className = 'container';

  const grid = document.createElement('div');
  grid.className = 'salon-grid';
  for(let i=1;i<=NUM_TABLES;i++){
    const order = state.tables[i];
    const card = document.createElement('button');
    card.className = 'table-card ' + order.status;
    const total = computeCartTotal(order.cart);
    const count = computeCartCount(order.cart);
    card.innerHTML = `
      <div class="status-dot"></div>
      <div class="table-medallion"><span class="num">${i}</span></div>
      <div class="label">Mesa</div>
      <div class="meta">${count>0 ? count+' productos' : 'Libre'}</div>
      ${total>0 ? `<div class="total">$${total}</div>` : ''}
    `;
    card.onclick = ()=> navigate('/mesa/'+i);
    grid.appendChild(card);
  }
  c.appendChild(grid);

  const banner = document.createElement('div');
  banner.className = 'takeout-banner';
  banner.innerHTML = `
    <div class="txt"><h3>🥡 Pedidos para llevar</h3><p>Crea un pedido nuevo con nombre y especificaciones</p></div>
    <button id="newTakeoutBtn">+ Nuevo</button>
  `;
  c.appendChild(banner);
  banner.querySelector('#newTakeoutBtn').onclick = ()=>{
    const id = state.nextTakeoutId++;
    state.takeout.push({ id, customerName:'', phone:'', cart:[], noteGeneral:'', status:'abierta', createdAt:Date.now() });
    saveState();
    navigate('/parallevar/'+id);
  };

  const activeTakeout = state.takeout.filter(t=>t.status!=='entregada');
  if(activeTakeout.length){
    const lbl = document.createElement('div');
    lbl.className = 'section-label';
    lbl.textContent = 'Pedidos para llevar activos';
    c.appendChild(lbl);
    const list = document.createElement('div');
    list.className = 'takeout-list';
    activeTakeout.forEach(t=>{
      const row = document.createElement('div');
      row.className = 'takeout-row';
      const total = computeCartTotal(t.cart);
      row.innerHTML = `
        <div class="info">
          <b>${t.customerName || 'Cliente #'+t.id}</b>
          <div>${t.phone || 'sin teléfono'} · ${computeCartCount(t.cart)} productos</div>
        </div>
        <div style="text-align:right;">
          <div class="amount">$${total}</div>
          <span class="status-pill ${t.status}">${t.status}</span>
        </div>
      `;
      row.style.cursor = 'pointer';
      row.onclick = ()=> navigate('/parallevar/'+t.id);
      list.appendChild(row);
    });
    c.appendChild(list);
  }

  root.appendChild(c);
  root.appendChild(buildFooter());
}

/* ============ TOPBAR REUTILIZABLE ============ */
function buildTopbar({title, sub, showBack, showConfig}){
  const bar = document.createElement('div');
  bar.className = 'topbar';
  bar.innerHTML = `
    ${showBack ? '<button class="back-btn" id="backBtn">← Salón</button>' : '<img class="logo-mini" src="icons/icon-192.png" alt="El Guamil">'}
    <div style="flex:1;">
      <h1 style="margin:0;">${title}</h1>
      ${sub ? `<div class="sub">${sub}</div>` : ''}
    </div>
    ${showConfig ? '<button class="icon-btn" id="cfgBtn" title="Impresoras">🖨️</button>' : ''}
  `;
  if(showBack) bar.querySelector('#backBtn').onclick = ()=> navigate('/salon');
  if(showConfig) bar.querySelector('#cfgBtn').onclick = ()=> navigate('/config');
  return bar;
}

function buildFooter(){
  const f = document.createElement('footer');
  f.className = 'app-footer';
  f.innerHTML = '🌶️ El Guamil — Tacos & Papas Rellenas · App interna de pedidos';
  return f;
}

/* ============ PANTALLA: PEDIDO (mesa o para llevar) ============ */
let currentGroup = 'comida';
let currentCat = 'tacos';
let itemSelection = {}; // por item.id: {flavorIndex, variantIndex, qty, tortilla, exclusions:[], note, specOpen}

function resetItemSelection(){ itemSelection = {}; }

function getSel(item){
  if(!itemSelection[item.id]){
    itemSelection[item.id] = {
      flavorIndex:0, variantIndex:0, qty:1,
      tortilla: item.tortillaOption ? 'Maíz' : null,
      exclusions:[], note:'', specOpen:false,
      builderFlavors: item.builder ? new Array(item.builderCount).fill(0) : null
    };
  }
  return itemSelection[item.id];
}
function currentPrice(item){
  const s = getSel(item);
  if(item.variants) return item.variants[s.variantIndex].price;
  return item.price;
}

function renderOrderScreen(root, ctx){
  resetItemSelection();
  currentGroup = 'comida';
  currentCat = 'tacos';

  const topbar = buildTopbar({ title: orderTitle(ctx), sub: ctx.type==='mesa' ? 'Comanda de mesa' : 'Pedido para llevar', showBack:true, showConfig:false });
  root.appendChild(topbar);

  const c = document.createElement('div');
  c.className = 'container order-layout';

  // Barra de metadatos
  const metaBar = document.createElement('div');
  metaBar.className = 'order-meta-bar';
  if(ctx.type === 'takeout'){
    metaBar.innerHTML = `
      <input type="text" id="custName" placeholder="Nombre del cliente" value="${escapeAttr(ctx.order.customerName)}">
      <input type="tel" id="custPhone" placeholder="Teléfono (opcional)" value="${escapeAttr(ctx.order.phone)}">
    `;
    metaBar.querySelector('#custName').oninput = (e)=>{ ctx.order.customerName = e.target.value; saveState(); };
    metaBar.querySelector('#custPhone').oninput = (e)=>{ ctx.order.phone = e.target.value; saveState(); };
  } else {
    metaBar.innerHTML = `<span style="font-size:.85rem;opacity:.8;">🪑 Atendiendo Mesa ${ctx.id} — ${computeCartCount(ctx.order.cart)} productos en curso</span>`;
  }
  c.appendChild(metaBar);

  // Toggle Comida / Bebidas
  const toggle = document.createElement('div');
  toggle.className = 'group-toggle';
  toggle.innerHTML = `
    <div class="group-toggle-inner">
      <button class="group-btn active" data-group="comida">🌮 Comida</button>
      <button class="group-btn" data-group="bebidas">🥤 Bebidas</button>
    </div>
  `;
  c.appendChild(toggle);

  const chipRow = document.createElement('div');
  chipRow.className = 'chip-row';
  c.appendChild(chipRow);

  const catHeading = document.createElement('div');
  catHeading.className = 'cat-heading';
  c.appendChild(catHeading);

  const itemGrid = document.createElement('div');
  itemGrid.className = 'item-grid';
  c.appendChild(itemGrid);

  root.appendChild(c);
  root.appendChild(buildFooter());

  function renderChips(){
    chipRow.innerHTML = '';
    CATEGORIES.filter(cat=>cat.group===currentGroup).forEach(cat=>{
      const btn = document.createElement('button');
      btn.className = 'chip' + (cat.id===currentCat ? ' active' : '');
      btn.textContent = cat.icon + ' ' + cat.label;
      btn.onclick = ()=>{ currentCat = cat.id; renderChips(); renderItems(); };
      chipRow.appendChild(btn);
    });
  }

  function renderItems(){
    itemGrid.innerHTML = '';
    const cat = CATEGORIES.find(cat=>cat.id===currentCat);
    catHeading.innerHTML = `<span class="cat-icon">${cat.icon}</span><h3>${cat.label}</h3><span class="cat-count">${ITEMS[currentCat].length} productos</span>`;
    ITEMS[currentCat].forEach((item,idx)=>{
      const card = buildItemCard(item, ctx);
      card.style.animationDelay = (idx*0.04)+'s';
      itemGrid.appendChild(card);
    });
  }

  toggle.querySelectorAll('.group-btn').forEach(btn=>{
    btn.onclick = ()=>{
      currentGroup = btn.dataset.group;
      toggle.querySelectorAll('.group-btn').forEach(b=>b.classList.toggle('active', b===btn));
      currentCat = CATEGORIES.find(cat=>cat.group===currentGroup).id;
      renderChips(); renderItems();
    };
  });

  renderChips();
  renderItems();

  // Ticket flotante + drawer
  setupTicketUI(ctx);
}

function escapeAttr(s){ return (s||'').replace(/"/g,'&quot;'); }

function buildItemCard(item, ctx){
  const s = getSel(item);
  const card = document.createElement('div');
  card.className = 'item-card';
  card.id = 'card-' + item.id;

  const top = document.createElement('div');
  top.className = 'item-top';
  top.innerHTML = `<div class="item-name">${item.name}</div><div class="item-price" id="price-${item.id}">$${currentPrice(item)}</div>`;
  card.appendChild(top);

  if(item.desc){
    const d = document.createElement('div');
    d.className = 'item-desc';
    d.textContent = item.desc;
    card.appendChild(d);
  }

  if(item.flavors){
    const wrap = document.createElement('div');
    wrap.innerHTML = `<div class="field-label">Elige sabor / carne</div>`;
    const sel = document.createElement('select');
    sel.className = 'spec-select';
    item.flavors.forEach((f,i)=>{
      const opt = document.createElement('option');
      opt.value = i; opt.textContent = f;
      sel.appendChild(opt);
    });
    sel.value = s.flavorIndex;
    sel.onchange = ()=>{ s.flavorIndex = parseInt(sel.value); };
    wrap.appendChild(sel);
    card.appendChild(wrap);
  }

  if(item.variants){
    const wrap = document.createElement('div');
    wrap.innerHTML = `<div class="field-label">Tamaño / presentación</div>`;
    const row = document.createElement('div');
    row.className = 'variant-row';
    item.variants.forEach((v,i)=>{
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'variant-pill' + (i===s.variantIndex ? ' selected' : '');
      pill.textContent = v.label + ' · $' + v.price;
      pill.onclick = ()=>{
        s.variantIndex = i;
        row.querySelectorAll('.variant-pill').forEach((p,pi)=>p.classList.toggle('selected', pi===i));
        document.getElementById('price-'+item.id).textContent = '$' + currentPrice(item);
      };
      row.appendChild(pill);
    });
    wrap.appendChild(row);
    card.appendChild(wrap);
  }

  let builderSelects = null;
  if(item.builder){
    const bwrap = document.createElement('div');
    bwrap.innerHTML = `<div class="field-label">Elige tus ${item.builderCount} tacos</div>`;
    const bGrid = document.createElement('div');
    bGrid.className = 'builder-grid';
    for(let i=0;i<item.builderCount;i++){
      const row = document.createElement('div');
      row.className = 'builder-row';
      const lbl = document.createElement('span');
      lbl.className = 'builder-num';
      lbl.textContent = 'Taco ' + (i+1);
      const sel = document.createElement('select');
      sel.className = 'spec-select builder-select';
      item.builderOptions.forEach((f,fi)=>{
        const opt = document.createElement('option');
        opt.value = fi; opt.textContent = f;
        sel.appendChild(opt);
      });
      sel.value = s.builderFlavors[i];
      sel.onchange = ()=>{ s.builderFlavors[i] = parseInt(sel.value); };
      row.appendChild(lbl); row.appendChild(sel);
      bGrid.appendChild(row);
    }
    bwrap.appendChild(bGrid);
    card.appendChild(bwrap);
    builderSelects = bGrid;
  }

  // Botón especificaciones (tortilla / exclusiones / nota)
  const isDrink = CATEGORIES.find(cat=>cat.id===currentCat).group === 'bebidas';

  const specToggle = document.createElement('button');
  specToggle.type = 'button';
  specToggle.className = 'spec-toggle';
  specToggle.textContent = isDrink ? '📝 Especificaciones (notas)' : '🌶️ Especificaciones (sin cebolla, tortilla, notas…)';
  card.appendChild(specToggle);

  const specPanel = document.createElement('div');
  specPanel.className = 'spec-panel';

  if(item.tortillaOption){
    const twrap = document.createElement('div');
    twrap.innerHTML = `<div class="field-label">Tortilla</div>`;
    const trow = document.createElement('div');
    trow.className = 'tortilla-row';
    ['Maíz','Harina'].forEach(t=>{
      const pill = document.createElement('button');
      pill.type='button';
      pill.className = 'tortilla-pill' + (s.tortilla===t ? ' selected' : '');
      pill.textContent = t;
      pill.onclick = ()=>{
        s.tortilla = t;
        trow.querySelectorAll('.tortilla-pill').forEach(p=>p.classList.toggle('selected', p===pill));
      };
      trow.appendChild(pill);
    });
    twrap.appendChild(trow);
    specPanel.appendChild(twrap);
  }

  let erow = null;
  if(!isDrink){
    const ewrap = document.createElement('div');
    ewrap.innerHTML = `<div class="field-label">Sin / extra</div>`;
    erow = document.createElement('div');
    erow.className = 'excl-row';
    EXCLUSIONS.forEach(ex=>{
      const pill = document.createElement('button');
      pill.type='button';
      pill.className = 'excl-pill' + (s.exclusions.includes(ex) ? ' selected' : '');
      pill.textContent = ex;
      pill.onclick = ()=>{
        const idx = s.exclusions.indexOf(ex);
        if(idx>-1) s.exclusions.splice(idx,1); else s.exclusions.push(ex);
        pill.classList.toggle('selected');
      };
      erow.appendChild(pill);
    });
    ewrap.appendChild(erow);
    specPanel.appendChild(ewrap);
  }

  const nwrap = document.createElement('div');
  nwrap.innerHTML = `<div class="field-label">Otra especificación</div>`;
  const noteInput = document.createElement('input');
  noteInput.type = 'text';
  noteInput.className = 'note-input';
  noteInput.placeholder = isDrink ? 'Ej. bien fría, sin hielo...' : 'Ej. bien picoso, sin queso...';
  noteInput.value = s.note;
  noteInput.oninput = ()=>{ s.note = noteInput.value; };
  nwrap.appendChild(noteInput);
  specPanel.appendChild(nwrap);

  card.appendChild(specPanel);

  specToggle.onclick = ()=>{
    s.specOpen = !s.specOpen;
    specPanel.classList.toggle('open', s.specOpen);
  };
  if(s.specOpen) specPanel.classList.add('open');

  // Cantidad + agregar
  const bottom = document.createElement('div');
  bottom.className = 'item-bottom';
  const stepper = document.createElement('div');
  stepper.className = 'qty-stepper';
  const minus = document.createElement('button'); minus.textContent = '−';
  const qtySpan = document.createElement('span'); qtySpan.textContent = s.qty;
  const plus = document.createElement('button'); plus.textContent = '+';
  minus.onclick = ()=>{ if(s.qty>1){ s.qty--; qtySpan.textContent = s.qty; } };
  plus.onclick = ()=>{ if(s.qty<20){ s.qty++; qtySpan.textContent = s.qty; } };
  stepper.appendChild(minus); stepper.appendChild(qtySpan); stepper.appendChild(plus);

  const addBtn = document.createElement('button');
  addBtn.className = 'add-btn';
  addBtn.innerHTML = '🛒 Agregar';
  addBtn.onclick = ()=>{
    addToCart(item, ctx.order);
    s.qty = 1; qtySpan.textContent = 1;
    s.note = ''; noteInput.value=''; s.exclusions = [];
    if(erow) erow.querySelectorAll('.excl-pill').forEach(p=>p.classList.remove('selected'));
    if(item.builder && builderSelects){
      s.builderFlavors = new Array(item.builderCount).fill(0);
      builderSelects.querySelectorAll('select').forEach(sel=> sel.value = 0);
    }
    flashCard(item.id);
    updateTicketUI(ctx);
  };

  bottom.appendChild(stepper);
  bottom.appendChild(addBtn);
  card.appendChild(bottom);

  return card;
}

function flashCard(id){
  const card = document.getElementById('card-'+id);
  if(!card) return;
  card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash');
}

function summarizeFlavors(indices, options){
  const counts = {};
  indices.forEach(i=>{ const f = options[i]; counts[f] = (counts[f]||0) + 1; });
  return Object.entries(counts).map(([f,n])=> n+'x '+f);
}

/* ============ CARRITO (por mesa o para llevar) ============ */
function addToCart(item, order){
  const s = getSel(item);
  const flavor = item.flavors ? item.flavors[s.flavorIndex] : null;
  const variant = item.variants ? item.variants[s.variantIndex] : null;
  const unitPrice = variant ? variant.price : item.price;
  const exclusionsKey = [...s.exclusions].sort().join(',');

  let builderBreakdown = null;
  let builderKeyPart = '';
  if(item.builder){
    builderBreakdown = summarizeFlavors(s.builderFlavors, item.builderOptions);
    builderKeyPart = s.builderFlavors.join(',');
  }

  const baseKey = [item.id, flavor||'', variant?variant.label:'', s.tortilla||'', exclusionsKey, builderKeyPart].join('|');
  const key = s.note ? baseKey + '|note:' + Date.now() + Math.random() : baseKey;

  let label = item.name;
  const specsInline = [];
  if(flavor) specsInline.push(flavor);
  if(variant) specsInline.push(variant.label);
  if(specsInline.length) label += ' (' + specsInline.join(' · ') + ')';

  if(!s.note){
    const existing = order.cart.find(c=>c.key===key);
    if(existing){ existing.qty += s.qty; saveState(); showToast('✓ ' + item.name + ' agregado'); if(order.status==='libre') order.status='ocupada'; return; }
  }
  order.cart.push({
    key, label, unitPrice, qty:s.qty, sentQty:0,
    tortilla: s.tortilla, exclusions:[...s.exclusions], note: s.note,
    builderBreakdown
  });
  if(order.status==='libre') order.status='ocupada';
  if(!order.openedAt) order.openedAt = Date.now();
  saveState();
  showToast('✓ ' + item.name + ' agregado');
}

function changeQty(order, key, delta){
  const c = order.cart.find(x=>x.key===key);
  if(!c) return;
  c.qty += delta;
  if(c.qty<=0){ order.cart = order.cart.filter(x=>x.key!==key); }
  else { c.sentQty = Math.min(c.sentQty||0, c.qty); }
  saveState();
}
function removeItem(order, key){
  order.cart = order.cart.filter(x=>x.key!==key);
  saveState();
}

/* ============ TICKET FLOTANTE / DRAWER ============ */
function setupTicketUI(ctx){
  const fab = document.getElementById('ticketFab');
  const overlay = document.getElementById('overlay');
  const drawer = document.getElementById('drawer');

  fab.onclick = ()=> openDrawer(ctx);
  overlay.onclick = ()=> closeDrawer();
  document.getElementById('drawerClose').onclick = ()=> closeDrawer();

  updateTicketUI(ctx);
}

function openDrawer(ctx){
  document.getElementById('drawer').classList.add('show');
  document.getElementById('overlay').classList.add('show');
  renderDrawerBody(ctx);
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

function updateTicketUI(ctx){
  const order = ctx.order;
  const totalQty = computeCartCount(order.cart);
  const totalMoney = computeCartTotal(order.cart);
  const fab = document.getElementById('ticketFab');
  fab.classList.toggle('show', totalQty>0);
  document.getElementById('ticketCount').textContent = totalQty;
  document.getElementById('drawerTotal').textContent = '$' + totalMoney;
  fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump');
  renderDrawerBody(ctx);
}

function renderDrawerBody(ctx){
  const order = ctx.order;
  const body = document.getElementById('drawerBody');
  const header = document.getElementById('drawerSubtitle');
  header.textContent = orderTitle(ctx).toUpperCase() + ' · TICKET DE COCINA';
  body.innerHTML = '';

  if(order.cart.length===0){
    body.innerHTML = '<div class="empty-cart"><div class="emoji">🌮</div>Sin productos todavía.<br>Agrega algo del menú.</div>';
  } else {
    order.cart.forEach(c=>{
      const isNew = c.qty > (c.sentQty||0);
      const row = document.createElement('div');
      row.className = 'cart-row';
      const tags = [];
      if(c.tortilla) tags.push('Tortilla '+c.tortilla);
      if(c.builderBreakdown && c.builderBreakdown.length) tags.push(...c.builderBreakdown);
      if(c.exclusions && c.exclusions.length) tags.push(...c.exclusions);
      if(c.note) tags.push('Nota: '+c.note);
      row.innerHTML = `
        <div class="cart-row-top"><span>${c.label}${isNew?'<span class="new-badge">NUEVO</span>':''}</span><span>$${c.qty*c.unitPrice}</span></div>
        <div class="cart-row-sub">$${c.unitPrice} c/u</div>
        ${tags.length ? `<div class="cart-row-tags">${tags.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div>` : ''}
        <div class="cart-row-actions">
          <div class="cart-qty">
            <button data-act="minus">−</button>
            <span>${c.qty}</span>
            <button data-act="plus">+</button>
          </div>
          <button class="cart-remove" data-act="remove">Quitar</button>
        </div>
      `;
      row.querySelector('[data-act=minus]').onclick = ()=>{ changeQty(order,c.key,-1); updateTicketUI(ctx); };
      row.querySelector('[data-act=plus]').onclick = ()=>{ changeQty(order,c.key,1); updateTicketUI(ctx); };
      row.querySelector('[data-act=remove]').onclick = ()=>{ removeItem(order,c.key); updateTicketUI(ctx); };
      body.appendChild(row);
    });
  }

  const notesField = document.getElementById('notesField');
  notesField.value = order.noteGeneral || '';
  notesField.oninput = ()=>{ order.noteGeneral = notesField.value; saveState(); };

  const pending = computePendingKitchenCount(order.cart);
  const kBtn = document.getElementById('btnKitchen');
  kBtn.textContent = pending>0 ? `🍳 Enviar a cocina (${pending} nuevos)` : '🍳 Enviar a cocina';
  kBtn.disabled = order.cart.length===0;
  kBtn.onclick = async ()=>{
    const items = cartToTicketItems(order.cart, true);
    if(items.length===0){ showToast('No hay productos nuevos para cocina'); return; }
    await sendTicket('kitchen', {
      title: orderTitle(ctx).toUpperCase(),
      subtitle: 'COMANDA DE COCINA',
      items, showPrices:false, note: order.noteGeneral
    });
    order.cart.forEach(c=> c.sentQty = c.qty);
    saveState();
    renderDrawerBody(ctx);
  };

  const cBtn = document.getElementById('btnCashier');
  cBtn.disabled = order.cart.length===0;
  cBtn.onclick = async ()=>{
    const items = cartToTicketItems(order.cart, false);
    const total = computeCartTotal(order.cart);
    await sendTicket('cashier', {
      title: orderTitle(ctx).toUpperCase(),
      subtitle: 'CUENTA',
      items, showPrices:true, total, note: order.noteGeneral,
      footer:'¡Gracias por su visita!'
    });
    order.status = 'cuenta';
    saveState();
    renderSalonMaybe();
  };

  const closeBtn = document.getElementById('btnCloseTable');
  closeBtn.textContent = ctx.type==='mesa' ? '✅ Cobrado — liberar mesa' : '✅ Marcar entregado';
  closeBtn.disabled = order.cart.length===0;
  closeBtn.onclick = ()=>{
    if(!confirm(ctx.type==='mesa' ? '¿Liberar la mesa y limpiar su cuenta?' : '¿Marcar este pedido como entregado?')) return;
    if(ctx.type==='mesa'){
      state.tables[ctx.id] = freshOrder();
    } else {
      order.status = 'entregada';
    }
    saveState();
    closeDrawer();
    navigate('/salon');
  };

  document.getElementById('btnClear').onclick = ()=>{
    if(order.cart.length===0) return;
    if(!confirm('¿Vaciar todos los productos de esta orden?')) return;
    order.cart = [];
    saveState();
    updateTicketUI(ctx);
  };
}

function renderSalonMaybe(){
  // Si estamos viendo el drawer sobre una pantalla de pedido, no navegamos, solo refrescamos salón en memoria.
}

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2000);
}

/* ============ PANTALLA: CONFIGURACIÓN / IMPRESORAS ============ */
function renderConfigScreen(root){
  const topbar = buildTopbar({ title:'Impresoras Bluetooth', sub:'Cocina y caja', showBack:true, showConfig:false });
  root.appendChild(topbar);

  const c = document.createElement('div');
  c.className = 'container';

  const warn = document.createElement('div');
  warn.className = 'warn-box';
  warn.innerHTML = `
    ⚠️ <b>Requisitos para que el Bluetooth funcione:</b><br>
    • Debes abrir esta app con <b>Chrome en Android</b> (no funciona en iPhone/Safari).<br>
    • La página debe estar servida por <b>HTTPS</b> (o abierta como app instalada) — abrirla como archivo local no permite Bluetooth.<br>
    • Enciende y empareja primero la impresora en los ajustes de Bluetooth del celular si te lo pide el fabricante.<br>
    • Si tu impresora no imprime nada con el preset genérico, prueba el otro preset o pide a Claude que ajuste los UUID con el nombre exacto del modelo.
  `;
  c.appendChild(warn);

  c.appendChild(buildPrinterCard('kitchen', 'Impresora de Cocina', kitchenPrinter));
  c.appendChild(buildPrinterCard('cashier', 'Impresora de Caja', cashierPrinter));

  root.appendChild(c);
  root.appendChild(buildFooter());
}

function buildPrinterCard(role, title, printerObj){
  const card = document.createElement('div');
  card.className = 'printer-card';
  const cfg = settings[role];
  const connected = printerObj.isConnected();

  card.innerHTML = `
    <h3>${role==='kitchen'?'🍳':'💳'} ${title}</h3>
    <div class="status ${connected?'connected':'disconnected'}">
      ${connected ? '● Conectada: ' + (cfg.name||'dispositivo') : '○ No conectada'}
    </div>
    <div class="field-row">
      <label>Preset de impresora</label>
      <select data-role="${role}" class="preset-select"></select>
    </div>
    <div class="field-row">
      <label>Service UUID</label>
      <input type="text" class="service-input" value="${cfg.service||''}">
    </div>
    <div class="field-row">
      <label>Characteristic UUID</label>
      <input type="text" class="char-input" value="${cfg.char||''}">
    </div>
    <div class="btn-row">
      <button class="btn-sm primary btn-connect">🔗 Conectar</button>
      <button class="btn-sm secondary btn-test">🧾 Imprimir prueba</button>
      ${connected ? '<button class="btn-sm danger btn-disconnect">Desconectar</button>' : ''}
    </div>
    <p class="hint">Preset recomendado para impresoras térmicas BLE genéricas de 58mm (chinas, sin marca): "Genérica BLE 58mm (FFE0/FFE1)". Si no imprime, prueba el segundo preset.</p>
  `;

  const presetSelect = card.querySelector('.preset-select');
  PRINTER_PRESETS.forEach((p,i)=>{
    const opt = document.createElement('option');
    opt.value = i; opt.textContent = p.label;
    presetSelect.appendChild(opt);
  });
  const matchIndex = PRINTER_PRESETS.findIndex(p=>p.service===cfg.service && p.char===cfg.char);
  presetSelect.value = matchIndex>-1 ? matchIndex : PRINTER_PRESETS.length-1;

  const serviceInput = card.querySelector('.service-input');
  const charInput = card.querySelector('.char-input');

  presetSelect.onchange = ()=>{
    const preset = PRINTER_PRESETS[parseInt(presetSelect.value)];
    if(preset.service){ serviceInput.value = preset.service; charInput.value = preset.char; }
  };
  serviceInput.oninput = ()=>{ settings[role].service = serviceInput.value.trim(); saveSettings(); };
  charInput.oninput = ()=>{ settings[role].char = charInput.value.trim(); saveSettings(); };

  card.querySelector('.btn-connect').onclick = async ()=>{
    try{
      showToast('🔵 Conectando…');
      await printerObj.connect(serviceInput.value.trim(), charInput.value.trim());
      showToast('✅ Impresora conectada');
      navigate('/config'); renderConfigScreen(document.getElementById('app-root'));
    }catch(e){
      console.error(e);
      showToast('❌ No se pudo conectar: ' + e.message);
    }
  };

  card.querySelector('.btn-test').onclick = async ()=>{
    await sendTicket(role, {
      title:'TICKET DE PRUEBA',
      subtitle: role==='kitchen'?'IMPRESORA DE COCINA':'IMPRESORA DE CAJA',
      items:[{qtyLabel:'1x', name:'Producto de prueba', lineTotal:10, specs:['Sin cebolla','Tortilla: Maíz']}],
      showPrices: role==='cashier', total:10, footer:'Prueba OK ✅'
    });
  };

  const discBtn = card.querySelector('.btn-disconnect');
  if(discBtn) discBtn.onclick = ()=>{
    printerObj.disconnect();
    showToast('Impresora desconectada');
    renderConfigScreen(document.getElementById('app-root'));
  };

  return card;
}

/* ============ INICIO ============ */
function boot(){
  if(!location.hash) location.hash = '#/salon';
  renderApp();
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  }
}
boot();
