/* =========================================
   1. DATABASE: COMPLETE BENDER LIBRARY
   ========================================= */
const benderLibrary = [
    // ================= GREENLEE (GREEN) =================
    { id: 'gl_50', cat: 'hand', brand: 'Greenlee', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#2E7D32' },
    { id: 'gl_75', cat: 'hand', brand: 'Greenlee', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#2E7D32' },
    { id: 'gl_100', cat: 'hand', brand: 'Greenlee', model: '1" Hand Bender', size: '1" EMT', ded: 8, gain: 4.0, color: '#2E7D32' },
    { id: 'gl_r50', cat: 'hand', brand: 'Greenlee', model: '1/2" Rigid Hand', size: '1/2" Rigid', ded: 6, gain: 3.2, color: '#2E7D32' },
    
    { id: 'gl_555', cat: 'electric', brand: 'Greenlee', model: '555 Electric', size: 'Multi-Shoe', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_854', cat: 'electric', brand: 'Greenlee', model: '854DX Electric', size: 'Multi-Shoe', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_881', cat: 'electric', brand: 'Greenlee', model: '881 Hydraulic', size: 'Hydraulic', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_777', cat: 'electric', brand: 'Greenlee', model: '777 Hydraulic', size: 'Hydraulic', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_chic', cat: 'electric', brand: 'Greenlee', model: 'Chicago Bender', size: 'Mechanical', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_one', cat: 'electric', brand: 'Greenlee', model: 'One Shot 882', size: 'Hydraulic', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_prog', cat: 'electric', brand: 'Greenlee', model: 'Programmable', size: 'Auto', ded: 0, gain: 0, color: '#2E7D32' },
    { id: 'gl_cnc', cat: 'electric', brand: 'Greenlee', model: 'CNC Bender', size: 'Auto', ded: 0, gain: 0, color: '#2E7D32' },

    // ================= IDEAL (BLUE) =================
    { id: 'id_50', cat: 'hand', brand: 'Ideal', model: '1/2" Hand Bender', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#0277BD' },
    { id: 'id_75', cat: 'hand', brand: 'Ideal', model: '3/4" Hand Bender', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#0277BD' },
    { id: 'id_100', cat: 'hand', brand: 'Ideal', model: '1" Hand Bender', size: '1" EMT', ded: 8, gain: 4.0, color: '#0277BD' },
    { id: 'id_r50', cat: 'hand', brand: 'Ideal', model: '1/2" Rigid Hand', size: '1/2" Rigid', ded: 6, gain: 3.2, color: '#0277BD' },

    // ================= GARDNER BENDER (RED) =================
    { id: 'gb_50', cat: 'hand', brand: 'Gardner Bender', model: '1/2" Big Ben', size: '1/2" EMT', ded: 5, gain: 2.65, color: '#D32F2F' },
    { id: 'gb_75', cat: 'hand', brand: 'Gardner Bender', model: '3/4" Big Ben', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#D32F2F' },
    { id: 'gb_100', cat: 'hand', brand: 'Gardner Bender', model: '1" Big Ben', size: '1" EMT', ded: 8, gain: 4.0, color: '#D32F2F' },
    { id: 'gb_r50', cat: 'hand', brand: 'Gardner Bender', model: '1/2" Rigid Hand', size: '1/2" Rigid', ded: 6, gain: 3.2, color: '#D32F2F' },
    { id: 'gb_one', cat: 'electric', brand: 'Gardner Bender', model: 'One Shot', size: 'Electric', ded: 0, gain: 0, color: '#D32F2F' },

    // ================= MILWAUKEE (DARK RED) =================
    { id: 'mw_50', cat: 'hand', brand: 'Milwaukee', model: '1/2" Alum', size: '1/2" EMT', ded: 5, gain: 2.6, color: '#B71C1C' },
    { id: 'mw_75', cat: 'hand', brand: 'Milwaukee', model: '3/4" Alum', size: '3/4" EMT', ded: 6, gain: 3.2, color: '#B71C1C' },

    // ================= KLEIN TOOLS (ORANGE) =================
    { id: 'kl_50', cat: 'hand', brand: 'Klein', model: '1/2" Benfield', size: '1/2" EMT', ded: 5, gain: 2.63, color: '#FF6D00' },
    { id: 'kl_75', cat: 'hand', brand: 'Klein', model: '3/4" Benfield', size: '3/4" EMT', ded: 6, gain: 3.25, color: '#FF6D00' }
];

/* --- CONSTANTS & ANGLES --- */
const bendTable = {
    5:  { m: 11.4, s: 0.044 },
    10: { m: 5.76, s: 0.063 },
    15: { m: 3.86, s: 0.125 },
    22.5: { m: 2.61, s: 0.188 },
    30: { m: 2.0, s: 0.25 },
    45: { m: 1.414, s: 0.375 },
    60: { m: 1.15, s: 0.5 }
};

let state = { 
    currentBender: benderLibrary[0], 
    activeCalc: null, 
    filter: 'all',
    format: 'feet' 
};

/* =========================================
   2. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('qc_bender_id');
    if (saved) {
        const found = benderLibrary.find(b => b.id === saved);
        if (found) state.currentBender = found;
    }
    const savedFmt = localStorage.getItem('qc_format');
    if (savedFmt) state.format = savedFmt;

    updateHeaderDisplay();
    renderBenderListUI();
});

/* =========================================
   3. NAVIGATION
   ========================================= */
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('visible');
}

function loadCalc(type) {
    state.activeCalc = type;
    const titles = {
        'stub': 'Stub Up', 'back2back': 'Back-to-Back 90s', 'backbend': 'Back Bend', 'kick': 'Kick', 
        'stub_kick': 'Stub-Up with Kick', 'rolling_stub': 'Rolling Stub', 'offset': 'Standard Offset',
        'shallow_off': 'Shallow Offset', 'deep_off': 'Deep Offset', 'rolling': 'Rolling Offset',
        'compound_off': 'Compound Offset', 'parallel': 'Parallel Offset', 'zbend': 'Z-Bend',
        'off_kick': 'Offset with Kick', 'saddle3': '3-Point Saddle', 'saddle4': '4-Point Saddle',
        'sad_off': 'Saddle into Offset', 'off_sad': 'Offset into Saddle', 'off_90': 'Offset into 90',
        '90_off': '90 with Offset', 'roll_90': 'Rolling 90', 'comp_bend': 'Compound Bend', 'dogleg': 'Dogleg Fixer'
    };
    
    document.getElementById('calc-title').innerText = titles[type] || 'Calculator';
    document.getElementById('calc-btn').classList.remove('hidden');
    renderInputs(type);
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('visible');
}

/* =========================================
   4. INPUT BUILDER
   ========================================= */
function renderInputs(type) {
    const div = document.getElementById('calc-inputs');
    let h = '';
    
    const ang = `
        <label>Bend Angle</label>
        <select id="i_ang">
            <option value="5">5° (Tiny Kick)</option>
            <option value="10">10° (Precision)</option>
            <option value="15">15° (Small Kick)</option>
            <option value="22.5">22.5° (Saddle)</option>
            <option value="30" selected>30° (Standard)</option>
            <option value="45">45° (Box Offset)</option>
            <option value="60">60° (Tight)</option>
        </select>`;

    const ph = "e.g. 12 3/4 or 1' 4\"";

    if(type==='stub') h = `<label>Stub Height</label><input type="text" id="i1" placeholder="${ph}" inputmode="text">`;
    else if(type==='back2back') h = `<label>Length (Outside-to-Outside)</label><input type="text" id="i1" placeholder="${ph}">`;
    else if(type==='backbend') h = `<label>Back Length</label><input type="text" id="i1" placeholder="${ph}">`;
    else if(type==='kick'||type==='stub_kick') h = `<label>Stub Height</label><input type="text" id="i1" placeholder="${ph}"><label>Kick Height</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(type==='rolling_stub') h = `<label>Rise Height</label><input type="text" id="i1" placeholder="${ph}"><label>Roll Distance</label><input type="text" id="i2" placeholder="${ph}">`;
    else if(['offset','shallow_off','deep_off','zbend'].includes(type)) h = `<label>Rise (Obstacle Height)</label><input type="text" id="i1" placeholder="${ph}"><label>Distance to Obstacle</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(['rolling','compound_off'].includes(type)) h = `<label>Rise (Up)</label><input type="text" id="i1" placeholder="${ph}"><label>Roll (Over)</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(type==='parallel') h = `<label>Offset 1 Rise</label><input type="text" id="i1" placeholder="${ph}"><label>Center-to-Center Spacing</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(type==='off_kick') h = `<label>Offset Rise</label><input type="text" id="i1" placeholder="${ph}"><label>Kick Rise</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(type==='saddle3') h = `<label>Obstacle Height</label><input type="text" id="i1" placeholder="${ph}"><label>Distance to Center</label><input type="text" id="i2" placeholder="${ph}">`;
    else if(type==='saddle4') h = `<label>Obstacle Height</label><input type="text" id="i1" placeholder="${ph}"><label>Obstacle Width</label><input type="text" id="i2" placeholder="${ph}"><label>Distance to Start</label><input type="text" id="i3" placeholder="${ph}">${ang}`;
    else if(type==='sad_off' || type==='off_sad') h = `<label>Offset Rise</label><input type="text" id="i1" placeholder="${ph}"><label>Saddle Height</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(type==='off_90' || type==='90_off') h = `<label>Stub Height</label><input type="text" id="i1" placeholder="${ph}"><label>Offset Rise</label><input type="text" id="i2" placeholder="${ph}">${ang}`;
    else if(type==='roll_90' || type==='comp_bend') h = `<label>Rise</label><input type="text" id="i1" placeholder="${ph}"><label>Roll</label><input type="text" id="i2" placeholder="${ph}"><label>Length to Turn</label><input type="text" id="i3" placeholder="${ph}">`;
    else if(type==='dogleg') h = `<div style="padding:20px;text-align:center;color:#888">Place pipe on flat floor. Rotate until flat. Mark top center.</div>`;

    div.innerHTML = h;
}

/* =========================================
   5. SMART INPUT PARSER
   ========================================= */
function parseSmartInput(val) {
    if (!val) return 0;
    val = val.toString().toLowerCase().trim();
    if (val.includes('cm') || val.includes('mm')) return parseFloat(val);
    if (val.includes("'")) {
        const parts = val.split("'");
        const feet = parseFloat(parts[0]) || 0;
        let inchStr = parts[1] || "0";
        inchStr = inchStr.replace('"', '').trim();
        return (feet * 12) + parseFractionString(inchStr);
    }
    return parseFractionString(val);
}

function parseFractionString(str) {
    str = str.replace('"', '').replace('-', ' ').trim();
    const parts = str.split(' ');
    if (parts.length === 2) {
        const whole = parseFloat(parts[0]);
        const frac = evalFraction(parts[1]);
        return whole + frac;
    } else if (parts.length === 1) {
        if (parts[0].includes('/')) return evalFraction(parts[0]);
        return parseFloat(parts[0]) || 0;
    }
    return 0;
}

function evalFraction(frac) {
    if (!frac.includes('/')) return 0;
    const p = frac.split('/');
    return parseFloat(p[0]) / parseFloat(p[1]);
}

/* =========================================
   6. MATH ENGINE
   ========================================= */
function runCalculation() {
    const t = state.activeCalc;
    const i1 = parseSmartInput(document.getElementById('i1')?.value);
    const i2 = parseSmartInput(document.getElementById('i2')?.value);
    const i3 = parseSmartInput(document.getElementById('i3')?.value);
    const ang = parseFloat(document.getElementById('i_ang')?.value||30);
    const b = state.currentBender;
    const dat = bendTable[ang] || bendTable[30];

    let marks = [], shrink=0, cut=0, txt='';

    // --- LOGIC ---
    if(t === 'stub') {
        const m = i1 - b.ded;
        marks = [{l:'HOOK',p:m}];
        txt = row('Mark 1', m);
        cut = i1 + b.gain;
    } 
    else if(t === 'back2back') {
        marks = [{l:'STAR',p:i1}];
        txt = row('Star Mark', i1);
    }
    else if(t === 'backbend') {
        const m = i1 - b.ded + b.gain; 
        marks = [{l:'NOTCH',p:m}];
        txt = row('Notch Mark', m);
    }
    else if(['offset','shallow_off','deep_off','zbend'].includes(t)) {
        shrink = i1 * dat.s;
        const travel = i1 * dat.m;
        const m1 = i2 + shrink; 
        const m2 = m1 - travel;
        marks = [{l:'START',p:m2},{l:'END',p:m1}];
        txt = row('Shrink', shrink) + row('Mark 1 (Far)', m1) + row('Mark 2 (Near)', m2);
        cut = m1 + 6;
    }
    else if(['rolling','compound_off'].includes(t)) {
        const trueOff = Math.sqrt(i1*i1 + i2*i2);
        shrink = trueOff * dat.s;
        const travel = trueOff * dat.m;
        marks = [{l:'START',p:5},{l:'END',p:5+travel}];
        txt = row('True Offset', trueOff) + row('Distance', travel) + row('Shrink', shrink);
        cut = travel + 10;
    }
    else if(t === 'parallel') {
        const adj = i2 * Math.tan((ang/2) * (Math.PI/180));
        txt = row('Start Adjust', adj) + `<div class="sub-note">Add to start mark of outer pipe</div>`;
    }
    else if(t === 'saddle3') {
        shrink = i1 * (3/16) * 2;
        const center = i2 + (i1 * 3/16);
        const dist = i1 * 2.5;
        marks = [{l:'SIDE',p:center-dist},{l:'CENTER',p:center},{l:'SIDE',p:center+dist}];
        txt = row('Center', center) + row('Sides', dist);
        cut = center + dist + 6;
    }
    else if(t === 'saddle4') {
        shrink = i1 * dat.s;
        const travel = i1 * dat.m;
        const sR = (i3 + shrink) - travel;
        const sF = i3 + shrink;
        const eF = sF + i2;
        const eD = eF + travel;
        marks = [{l:'M1',p:sR},{l:'M2',p:sF},{l:'M3',p:eF},{l:'M4',p:eD}];
        txt = row('M1', sR) + row('M2', sF) + row('M3', eF) + row('M4', eD);
        cut = eD + 6;
    }
    else if(t === 'kick' || t === 'stub_kick' || t === 'off_kick') {
        const stubM = i1 - b.ded;
        const kickTravel = i2 * dat.m;
        marks = [{l:'90',p:stubM},{l:'KICK',p:stubM-6-kickTravel}];
        txt = row('90 Mark', stubM) + row('Kick Dist', kickTravel);
    }
    else if(t === 'off_90' || t === '90_off') {
        shrink = i2 * dat.s;
        const travel = i2 * dat.m;
        const stubM = i1 - b.ded + shrink;
        marks = [{l:'OFF 1',p:10},{l:'OFF 2',p:10+travel},{l:'90',p:10+stubM}];
        txt = row('Offset Dist', travel) + row('90 Mark', 10+stubM);
    }

    displayResults(marks, shrink, cut, txt);
}

/* =========================================
   7. OUTPUT HELPERS
   ========================================= */
function displayResults(marks, shrink, cut, textHtml) {
    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('text-results').innerHTML = textHtml;
    document.getElementById('stat-shrink').innerHTML = toFraction(shrink);
    document.getElementById('stat-length').innerHTML = cut > 0 ? toFraction(cut) : "--";
    renderTape(marks);
}

function renderTape(marks) {
    const cvs = document.getElementById('tape-canvas');
    cvs.innerHTML = '';
    if(!marks.length) return;
    marks.sort((a,b)=>a.p-b.p);
    const max = marks[marks.length-1].p;
    cvs.style.width = `${(max * 20) + 150}px`;
    marks.forEach(m => {
        const l = m.p * 20;
        cvs.innerHTML += `
            <div class="tape-mark" style="left:${l+20}px"></div>
            <div class="tape-label" style="left:${l+20}px">${toFraction(m.p)}</div>
            <div class="tape-tag" style="left:${l+20}px">${m.l}</div>
        `;
    });
}

function row(l, v, s) { 
    return `
        <div class="result-row">
            <div>
                <span style="display:block;color:var(--primary);font-size:0.75rem;font-weight:bold">${l}</span>
                ${s?`<span style="font-size:0.7rem;color:#666">${s}</span>`:''}
            </div>
            <span>${toFraction(v)}</span>
        </div>`; 
}

function clearInputs() { 
    document.querySelectorAll('input').forEach(i=>i.value=''); 
    document.getElementById('result-box').classList.add('hidden'); 
}

/* =========================================
   8. SETTINGS & FORMATTING
   ========================================= */
function openSettings() {
    document.getElementById('modal-settings').classList.remove('hidden');
    updateSettingsUI();
}
function closeSettings() {
    document.getElementById('modal-settings').classList.add('hidden');
    if(!document.getElementById('result-box').classList.contains('hidden')) runCalculation();
}
function setFormat(fmt) {
    state.format = fmt;
    localStorage.setItem('qc_format', fmt);
    updateSettingsUI();
}
function updateSettingsUI() {
    document.querySelectorAll('.radio-circle').forEach(e => e.classList.remove('active'));
    if(state.format === 'feet') document.getElementById('rad-feet').classList.add('active');
    if(state.format === 'inch') document.getElementById('rad-inch').classList.add('active');
    if(state.format === 'metric') document.getElementById('rad-metric').classList.add('active');
}
function toFraction(val) {
    if (typeof val !== 'number') return val;
    if (state.format === 'metric') return `${(val * 2.54).toFixed(1)} cm`;

    let rounded = Math.round(val * 16) / 16;
    let feet = Math.floor(rounded / 12);
    let inches = rounded % 12;
    let wholeInch = Math.floor(inches);
    let frac = inches - wholeInch;
    let n = Math.round(frac * 16);
    let fracStr = "";
    if (n > 0) {
        let d = 16;
        while (n%2===0 && d%2===0) { n/=2; d/=2; }
        fracStr = `<sup>${n}</sup>&frasl;<sub>${d}</sub>`;
    }
    let inchStr = "";
    if (wholeInch === 0 && fracStr === "") inchStr = '0"';
    else if (wholeInch === 0) inchStr = `${fracStr}"`;
    else inchStr = `${wholeInch} ${fracStr}"`;

    if (state.format === 'inch') {
        let tIn = Math.floor(val);
        let tFr = val - tIn;
        let tn = Math.round(tFr * 16);
        let tStr = "";
        if(tn > 0) {
            let d = 16;
            while(tn%2===0 && d%2===0){tn/=2;d/=2}
            tStr = `<sup>${tn}</sup>&frasl;<sub>${d}</sub>`;
        }
        if(tIn===0 && tStr!=="") return `${tStr}"`;
        return `${tIn} ${tStr}"`;
    }
    return feet > 0 ? `${feet}' ${inchStr}` : inchStr;
}

/* =========================================
   9. BENDER UI LOGIC
   ========================================= */
function openBenderLibrary() { 
    document.getElementById('modal-benders').classList.remove('hidden');
    document.querySelector('.bender-filter-bar').innerHTML = `
        <button class="filter-btn active" onclick="filterBenders('all')">ALL</button>
        <button class="filter-btn" onclick="filterBenders('hand')">HAND</button>
        <button class="filter-btn" onclick="filterBenders('electric')">ELECTRIC</button>
    `;
    filterBenders('all');
}
function closeBenderLibrary() { 
    document.getElementById('modal-benders').classList.add('hidden'); 
}
function filterBenders(cat) {
    state.filter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btns = document.querySelectorAll('.filter-btn');
    if(cat==='all') btns[0].classList.add('active');
    if(cat==='hand') btns[1].classList.add('active');
    if(cat==='electric') btns[2].classList.add('active');
    renderBenderListUI();
}
function renderBenderListUI() {
    const list = document.getElementById('bender-list');
    const filtered = state.filter === 'all' ? benderLibrary : benderLibrary.filter(b => b.cat === state.filter);
    list.innerHTML = filtered.map(b => `
        <div class="bender-item ${state.currentBender.id === b.id ? 'active' : ''}" onclick="selectBender('${b.id}')">
            <div>
                <div class="b-brand" style="color:${b.color}">${b.brand} ${b.model}</div>
                <div class="b-specs">${b.size} • Ded: ${b.ded}"</div>
            </div>
            ${state.currentBender.id === b.id ? '<ion-icon name="checkmark-circle" style="color:var(--primary)"></ion-icon>' : ''}
        </div>
    `).join('');
}
function selectBender(id) {
    state.currentBender = benderLibrary.find(b => b.id === id);
    localStorage.setItem('qc_bender_id', id);
    updateHeaderDisplay();
    closeBenderLibrary();
}
function updateHeaderDisplay() {
    const b = state.currentBender;
    document.getElementById('header-tool-name').innerText = `${b.brand} ${b.model.replace('Hand Bender','').trim()}`;
    document.querySelector('.tool-dot').style.background = b.color;
}