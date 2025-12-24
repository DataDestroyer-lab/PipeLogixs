/* =========================================
   KNOWLEDGE BASE: THE ULTIMATE REFERENCE
   ========================================= */

// --- PART A: SIDEBAR REFERENCE CONTENT ---
const guideContent = {
    
    // 1. TAPE MEASURE (PRECISION ALIGNED)
    'tape_reading': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="ruler"></ion-icon> THE FRACTION STACK</div>
            
            <div style="background:#F4D03F; color:#000; padding:0; margin:15px 5px; border-radius:4px; border:1px solid #D4AC0D; position:relative; height:110px; font-family:monospace; overflow:hidden;">
                
                <div style="position:absolute; left:0; top:0; width:3px; height:100%; background:#000;"></div>
                <span style="position:absolute; left:5px; top:5px; font-weight:bold; font-size:1.4rem;">0"</span>

                <div style="position:absolute; right:0; top:0; width:3px; height:100%; background:#000;"></div>
                <span style="position:absolute; right:5px; top:5px; font-weight:bold; font-size:1.4rem;">1"</span>

                <div style="position:absolute; left:50%; top:0; width:2px; height:55px; background:#C0392B;"></div>
                <span style="position:absolute; left:50%; top:58px; transform:translateX(-50%); color:#C0392B; font-weight:bold; font-size:1rem;">1/2</span>

                ${ [1, 3].map(n => `
                    <div style="position:absolute; left:${n*25}%; top:0; width:1px; height:45px; background:#000;"></div>
                    <span style="position:absolute; left:${n*25}%; top:48px; transform:translateX(-50%); font-weight:bold; font-size:0.9rem;">${n}/4</span>
                `).join('')}

                ${ [1, 3, 5, 7].map(n => `
                    <div style="position:absolute; left:${n*12.5}%; top:0; width:1px; height:35px; background:#222;"></div>
                    <span style="position:absolute; left:${n*12.5}%; top:38px; transform:translateX(-50%); font-size:0.75rem; color:#222;">${n}/8</span>
                `).join('')}

                ${ [1, 3, 5, 7, 9, 11, 13, 15].map(n => `
                    <div style="position:absolute; left:${n*6.25}%; top:0; width:1px; height:20px; background:#555;"></div>
                    <span style="position:absolute; left:${n*6.25}%; top:22px; transform:translateX(-50%); font-size:0.6rem; color:#555;">${n}/16</span>
                `).join('')}

            </div>

            <table class="ref-table">
                <tr><th>Mark Type</th><th>Length</th><th>Value</th></tr>
                <tr><td><span style="color:#000; font-size:1.2rem;">█</span> Full Line</td><td>Tallest</td><td>1 Inch</td></tr>
                <tr><td><span style="color:#C0392B; font-size:1.2rem;">█</span> Half Line</td><td>2nd Tallest</td><td>1/2"</td></tr>
                <tr><td><span style="color:#000; font-size:1.2rem;">│</span> Quarter</td><td>Medium</td><td>1/4", 3/4"</td></tr>
                <tr><td><span style="color:#222; font-size:1.2rem;">│</span> Eighth</td><td>Short</td><td>1/8", 3/8"...</td></tr>
                <tr><td><span style="color:#555; font-size:1.2rem;">│</span> Sixteenth</td><td>Tiny</td><td>1/16", 3/16"...</td></tr>
            </table>

            <div class="tip-box">
                <strong>Pro Tip:</strong> Read down the stack. The first number you hit is your fraction.
            </div>
        </div>
    `,

    // 2. BENDING MATH (CLASSROOM METHOD)
    'bend_math': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="school"></ion-icon> OFFSET CALCULATIONS</div>
            <div class="tip-box" style="font-style:normal; font-size:0.9rem;">
                <strong>1. Total Height</strong><br>
                <code>Obstacle Height + Clearance</code><br><br>

                <strong>2. Shrink Amount</strong><br>
                <code>Total Height × Shrink Constant (e.g. 1/4)</code><br><br>

                <strong>3. MARK A (End Mark)</strong><br>
                <code>Distance to Obstacle + Shrink Amount</code><br><br>

                <strong>4. Travel Distance</strong><br>
                <code>Total Height × Multiplier (e.g. 2.0)</code><br><br>

                <strong>5. MARK B (Start Mark)</strong><br>
                <code>Mark A - Travel Distance</code>
            </div>
        </div>

        <div class="ref-card">
            <div class="ref-header"><ion-icon name="grid"></ion-icon> MULTIPLIERS & SHRINK</div>
            <table class="ref-table">
                <tr><th>Angle</th><th>Mult</th><th>Shrink/Inch</th></tr>
                <tr><td>10°</td><td>6.0</td><td>1/16"</td></tr>
                <tr><td>15°</td><td>3.86</td><td>1/8"</td></tr>
                <tr><td>22.5°</td><td>2.6</td><td>3/16"</td></tr>
                <tr><td>30°</td><td>2.0</td><td>1/4"</td></tr>
                <tr><td>45°</td><td>1.4</td><td>3/8"</td></tr>
                <tr><td>60°</td><td>1.2</td><td>1/2"</td></tr>
            </table>
        </div>
    `,

    // 3. TRADE TERMS
    'trade_terms': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="book"></ion-icon> FIELD GLOSSARY</div>
            <table class="ref-table">
                <tr><td><strong>Stub-Up</strong></td><td>90° bend up a wall.</td></tr>
                <tr><td><strong>Offset</strong></td><td>Two bends to clear an obstacle.</td></tr>
                <tr><td><strong>Dogleg</strong></td><td>When two bends are twisted/misaligned.</td></tr>
                <tr><td><strong>Kick</strong></td><td>A lift at the end of a 90° to enter a box.</td></tr>
                <tr><td><strong>Gain</strong></td><td>Length "saved" by the curve of a 90°.</td></tr>
                <tr><td><strong>Deduct</strong></td><td>Length "lost" by the bender shoe geometry.</td></tr>
                <tr><td><strong>Shrink</strong></td><td>Total length lost when pulling an offset.</td></tr>
                <tr><td><strong>Travel</strong></td><td>Distance between two offset bends.</td></tr>
                <tr><td><strong>Bone Yard</strong></td><td>Pile of scrap conduit.</td></tr>
                <tr><td><strong>Stick</strong></td><td>A full 10' length of conduit.</td></tr>
            </table>
        </div>
    `,

    // 4. NEC SUPPORT
    'nec_support': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="book"></ion-icon> SUPPORT (NEC 358.30)</div>
            <table class="ref-table">
                <tr><th>Type</th><th>Max Dist</th><th>From Box</th></tr>
                <tr><td>EMT</td><td>10 ft</td><td>3 ft</td></tr>
                <tr><td>Rigid</td><td>10 ft*</td><td>3 ft</td></tr>
                <tr><td>PVC</td><td>3 ft*</td><td>3 ft</td></tr>
                <tr><td>Flex</td><td>4.5 ft</td><td>12 in</td></tr>
            </table>
            <div class="tip-box" style="font-size:0.75rem;">*Rigid/PVC vary by size/temp.</div>
        </div>
    `,

    // 5. CONDUIT SPECS
    'conduit_specs': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="resize"></ion-icon> EMT SPECS</div>
            <table class="ref-table">
                <tr><th>Size</th><th>O.D.</th><th>Weight/100'</th></tr>
                <tr><td>1/2"</td><td>0.706"</td><td>30 lbs</td></tr>
                <tr><td>3/4"</td><td>0.922"</td><td>46 lbs</td></tr>
                <tr><td>1"</td><td>1.163"</td><td>67 lbs</td></tr>
            </table>
        </div>
    `,
    
    // 6. DRILL SIZES
    'drill_sizes': `
        <div class="ref-card">
            <div class="ref-header"><ion-icon name="disc"></ion-icon> HOLE SAW GUIDE</div>
            <table class="ref-table">
                <tr><th>Trade Size</th><th>Hole Saw</th></tr>
                <tr><td>1/2"</td><td>7/8"</td></tr>
                <tr><td>3/4"</td><td>1 1/8"</td></tr>
                <tr><td>1"</td><td>1 3/8"</td></tr>
                <tr><td>1 1/4"</td><td>1 3/4"</td></tr>
            </table>
        </div>
    `
};

// --- PART B: INSTRUCTION LIBRARY (Same as before) ---
const bendInstructions = {
    'stub': `<h3>90° Stub-Up</h3><p>Formula: <strong>Height - Deduct</strong>. Mark pipe, place on Arrow, bend 90°.</p>`,
    'back2back': `<h3>Back-to-Back 90s</h3><p>Bend first 90°. Measure from <strong>Back</strong> of that 90° to mark. Align mark with <strong>Star</strong> point on bender.</p>`,
    'backbend': `<h3>Back Bend</h3><p>Formula: <strong>Target + Gain - Deduct</strong>. Use when measuring from the rear. Align with Notch/Rim.</p>`,
    'kick': `<h3>90° with Kick</h3><p>Bend a 90°. Measure back for kick location. Use Multiplier (e.g. 2.0 for 30°) to find center. Lift leg slightly.</p>`,
    'stub_kick': `<h3>Stub-Up with Kick</h3><p>See "90° with Kick". Perform as one operation.</p>`,
    'rolling_stub': `<h3>Rolling Stub</h3><p>A 90° that rolls to the side. Calculate the hypotenuse of the roll. Mark as standard 90, kick leg out to side.</p>`,
    'offset': `<h3>Standard Offset</h3><p><strong>Rise × Multiplier</strong>. Mark pipe. Bend first mark on Arrow. Rotate 180°. Bend second mark on Arrow.</p>`,
    'shallow_off': `<h3>Shallow Offset</h3><p>Use 10° bends (Multiplier 6.0) for very small obstructions (< 1").</p>`,
    'deep_off': `<h3>Deep Offset</h3><p>Use 45° bends (Multiplier 1.41) for large obstructions to save linear space.</p>`,
    'rolling': `<h3>Rolling Offset</h3><p>Changes elevation and side position. Calc "True Offset" (C² = A² + B²). Use result as your Rise.</p>`,
    'compound_off': `<h3>Compound Offset</h3><p>Same as Rolling Offset. It navigates around an object in 3D space.</p>`,
    'parallel': `<h3>Parallel Offsets</h3><p>Add <strong>(Center-to-Center × Tan(½ Angle))</strong> to the starting mark of each outer pipe to keep them parallel.</p>`,
    'zbend': `<h3>Z-Bend</h3><p>Two offsets in opposite directions. Bend 1, Roll 180°, Bend 2, Roll 180° again.</p>`,
    'off_kick': `<h3>Offset with Kick</h3><p>Perform a standard offset, then add a kick calculation at the end to lift the pipe into a box.</p>`,
    'saddle3': `<h3>3-Point Saddle</h3><p>Mark Center. Mark sides at <strong>(Rise × 2.5)</strong>. Bend Center to 45°. Flip pipe. Bend Sides to 22.5°.</p>`,
    'saddle4': `<h3>4-Point Saddle</h3><p>Two offsets back-to-back. Mark first offset. Measure Obstacle Width + Shrink. Mark second offset.</p>`,
    'sad_off': `<h3>Saddle into Offset</h3><p>Complete saddle first. Measure from end of saddle to start of offset.</p>`,
    'off_sad': `<h3>Offset into Saddle</h3><p>Complete offset first. Calculate saddle center based on new pipe position.</p>`,
    'off_90': `<h3>Offset into 90°</h3><p>Calc offset. The second mark of the offset becomes the reference for the 90 stub. Account for shrink!</p>`,
    '90_off': `<h3>90° with Offset</h3><p>Bend 90° first. Measure from back of 90 to start offset.</p>`,
    'roll_90': `<h3>Rolling 90</h3><p>A 90 that lands in a different plane. Use trigonometry to find the rotation angle.</p>`,
    'comp_bend': `<h3>Compound Bend</h3><p>Multiple bends on one stick. Always work from one end to the other to avoid "trapping" the bender.</p>`,
    'dogleg': `<h3>Fixing a Dogleg</h3><p>Lay pipe on flat floor. Rotate until bad leg is in air. Apply pressure to high spot to flatten.</p>`
};

// --- FUNCTIONS ---
function loadGuide(key) {
    const titles = {
        'nec_support': 'NEC Tables', 
        'bend_math': 'Bending Math',
        'trade_terms': 'Trade Terms',
        'tape_reading': 'Reading a Tape',
        'conduit_specs': 'Pipe Dimensions',
        'drill_sizes': 'Knockout Sizes'
    };
    
    document.getElementById('calc-title').innerText = titles[key];
    document.getElementById('calc-inputs').innerHTML = `<div class="home-grid">${guideContent[key]}</div>`;
    
    // UI Cleanup
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('calc-btn').classList.add('hidden');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('visible');
}

function getBendGuide(type) {
    return bendInstructions[type] || "<p>Instructions unavailable.</p>";
}