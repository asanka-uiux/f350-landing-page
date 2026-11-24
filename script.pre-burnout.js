/* ============================================================
   CUSTOM OFFSETS . 2019 F-350 XLT work truck landing page
   Page behaviour, loaded at the end of <body> in index.html.
   Mobile first: phone behaviour is the default path; wider-screen
   layout only kicks in behind min-width checks (see stacked()).
   ============================================================ */
(function(){
  "use strict";

  /* ============================================================
     THE BUILD, DAY BY DAY
     Seven cards cover eleven days: 1 and 2 were one teardown, and 4
     through 7 were one unbroken run at the headliner and the engine.
     days[] drives the clock pips, the badge and the days-left
     readout, so re-splitting a card fixes all three at once.
     show:true swaps the last card into the FP 6.0 finale, which gets
     its own row labels and a photo strip underneath.
     ============================================================ */
  var LAST_BOX = 8;
  var ROW_LABELS = ["What we put on", "Why you want it", "Skip it if"];

  /* Every price here is Custom Offsets retail. Where we could not match the
     part to a product on our own site the card falls back to the category and
     the price comes off the build sheet, which is flagged in the notes. */
  var BOXES = [
    {
      id:"susp", n:1, short:"Suspension",
      img:"images/part-suspension.jpg", pos:"50% 66%",
      alt:"A Falcon 2.1 shock and a ReadyLift radius arm on the front coil spring",
      hA:"Lift & ", hB:"Steering", flag:"ReadyLift . Kryptonite", tag:"4 inch lift",
      desc:"Four inches of coil spring lift and a complete steering linkage, front to frame.",
      specs:["4 in coil spring lift","Falcon 2.1 shocks, all four","New radius arms included","Death grip steering linkage"],
      cat:"The category", name:"Lift & Steering",
      brand:"ReadyLift . Kryptonite",
      sum:"$4,135.94", count:"2 parts", catk:"Suspension",
      went:"A ReadyLift 4 inch coil spring kit with Falcon 2.1 shocks and new radius arms, $2,399.95, and a Kryptonite Death Grip steering kit, $1,735.99.",
      why:"A work truck sits nose down and steers vague. The lift is what buys room for the tire, and the Death Grip kit with dual stabilizer takes the slop out of the factory steering.",
      fought:"You tow at the limit every day and want the factory ride height, or your truck is already lifted and only the steering needs help. The steering kit is worth buying on its own."
    },
    {
      id:"wt", n:2, short:"Wheels & Tires",
      img:"images/part-wheels.jpg", pos:"50% 48%",
      alt:"Method MR709 HD wheel and 37 inch Toyo Open Country R/T Trail on the truck",
      hA:"Wheel & Tire ", hB:"Package", flag:"Wheel and tire package", tag:"Package pricing",
      desc:"A matched wheel and tire package, mounted and balanced before it ships.",
      specs:["Mounted and balanced","Sold as a matched set","Load rating checked","Fitment set before it ships"],
      cat:"The category", name:"Wheel & Tire Package",
      brand:"Package pricing",
      sum:"$3,745.80", count:"1 package", catk:"Wheels & Tires",
      went:"A Method MR709 HD and Toyo Open Country R/T Trail package, mounted and balanced, $3,745.80.",
      why:"Nothing else on this list changes how a truck looks from fifty feet away. It also changes how it drives, how it stops and how it behaves at the pump, which is why fitment matters more here than anywhere else on the truck.",
      fought:"You run a trailer at max weight and need the load rating you already have. Go up in wheel and down in sidewall and you will feel it on a heavy pull."
    },
    {
      id:"bump", n:3, short:"Bumpers",
      img:"images/part-bumper.jpg", pos:"50% 58%",
      alt:"Body Armor 4x4 front winch bumper with the winch and shackles in place",
      hA:"Bumpers & ", hB:"Recovery", flag:"Body Armor 4x4 . Rough Country", tag:"Steel, not plastic",
      desc:"Steel bumpers front and rear with a 13,000 lb winch in the nose.",
      specs:["Steel front, winch ready","13,000 lb synthetic winch","Steel rear with receiver","Replaces plastic bumpers"],
      cat:"The category", name:"Bumpers & Recovery",
      brand:"Body Armor 4x4 . Rough Country",
      sum:"$3,300.35", count:"3 parts", catk:"Bumpers",
      went:"A Body Armor 4x4 Eco Series front winch bumper, $1,476.45, an Ambush rear bumper, $923.95, and a Rough Country 13,000 lb winch on synthetic rope, $899.95.",
      why:"The factory bumper on a work truck is plastic and thin steel, and it is the first thing to fold. A welded plate steel bumper with a winch in it turns the front of the truck into another tool instead of a liability.",
      fought:"The truck never leaves pavement and never pulls anybody out of anything. Steel bumpers add real weight on the front axle and you will feel that in the ride."
    },
    {
      id:"light", n:4, short:"Lighting",
      img:"images/part-headlights.jpg", pos:"52% 50%",
      alt:"New headlight housings and the bumper mounted fog lights, lit",
      hA:"", hB:"Lighting", flag:"Light bar . Fogs . Headlights", tag:"Five light sources",
      desc:"Bumper lighting across the front, plus new headlight housings.",
      specs:["Bumper mounted light bar","Inner and outer fog pairs","New headlight housings","Nothing on the roofline"],
      cat:"The category", name:"Lighting",
      brand:"Bumper bar . Fogs . Housings",
      sum:"$3,534.80", count:"5 parts", catk:"Lighting",
      went:"A front bumper light bar, $799.95, outer fog lights, $599.95, a pair of inner fog lights at $599.95 each, and new headlights, $935.00.",
      why:"Factory lighting on a 2019 work truck is barely adequate. New headlight housings fix how the truck looks but more importantly how you see. The auxiliary lighting is what you actually use when the pavement ends or the weather turns.",
      fought:"You only drive this truck in daylight, on roads you know. Lighting is the easiest job on this list to buy one piece at a time."
    },
    {
      id:"body", n:5, short:"Bed Cover",
      img:"images/part-bedcover.jpg", pos:"50% 50%",
      alt:"BAK Revolver X4ts rolled flat with the RealTruck Elevate rack over it",
      hA:"Bed ", hB:"Cover", flag:"BAK Tonneau Cover", tag:"No-drill install",
      desc:"Hard rolling tonneau cover with aluminum slats, and a rack over the top of it.",
      specs:["Hard aluminum slats, rolls up","Auto-latches, opens either side","Elevate rack on the T-slot rails","Ladders ride over a locked bed"],
      cat:"The category", name:"Bed Cover",
      brand:"BAK Industries",
      sum:"$2,779.98", count:"2 parts", catk:"Bed",
      went:"A BAK Revolver X4ts hard roll-up bed cover on T-slot rails, $1,779.99, and a RealTruck Elevate truck rack over it, $999.99.",
      why:"A cover turns an open bed into secure, dry storage, which is the single thing most work truck owners say they would buy first if they did it again. A hard roll-up gets you there without giving up the bed, and the rack over the top means the long stuff still has somewhere to go.",
      fought:"You haul tall or oversized loads every week and never need the bed closed. The rack is what keeps this from being an either/or, but it is another thousand dollars on top of the cover."
    },
    {
      id:"tow", n:6, short:"Towing & Steps",
      img:"images/part-towing.jpg", pos:"50% 62%",
      alt:"The Ambush rear bumper with the GEN-Y hitch step in the receiver",
      hA:"Towing & ", hB:"Steps", flag:"GEN-Y", tag:"Tow level after the lift",
      desc:"A Boss torsion-flex drop hitch, a Phantom XL hitch step and running boards down both sides.",
      specs:["Boss torsion-flex drop hitch","Phantom XL step in the receiver","Running boards, both sides","Brings the ball back down"],
      cat:"The category", name:"Towing & Steps",
      brand:"GEN-Y",
      sum:"$1,959.85", count:"3 parts", catk:"Towing",
      went:"A GEN-Y Boss Torsion-Flex 21K drop hitch, $979.95, a Phantom XL hitch step, $279.95, and a set of running boards, $699.95.",
      why:"A lifted truck puts the receiver well above the trailer coupler, and towing level is not optional once you are over about ten thousand pounds. The steps are the other half of the lift: the taller the truck, the more the first step up matters to whoever rides in it.",
      fought:"You never pull a trailer and nobody but you gets in the truck. Even then the hitch step earns its money the first time you need to reach into the bed."
    },
    {
      id:"int", n:7, short:"Interior",
      img:"images/part-interior.jpg", pos:"50% 52%",
      alt:"WeatherTech rear liner and Carhartt seat covers in the back of the crew cab",
      hA:"Liners & ", hB:"Seat Covers", flag:"WeatherTech . Seat covers", tag:"Buy this one first",
      desc:"WeatherTech liners front and rear, and made-to-order seat covers cut for the XLT cab.",
      specs:["WeatherTech liners, front","WeatherTech liners, rear","Made to order seat covers","Cut for the XLT seats"],
      cat:"The category", name:"Liners & Seat Covers",
      brand:"WeatherTech . Seat covers",
      sum:"$1,170.15", count:"3 parts", catk:"Interior",
      went:"A WeatherTech HP front liner, $155.95, a rear liner, $126.95, and a made-to-order set of seat covers, $887.25.",
      why:"This is the job that holds resale value. A work truck interior takes the worst of the abuse, and liners and covers are the difference between a cab that cleans up and one that never does.",
      fought:"Nothing. This is the one we would tell anybody to buy first, and it is the one most people put off the longest."
    },
    {
      id:"perf", n:8, short:"Performance", last:true,
      img:"images/part-brakes.jpg", pos:"54% 50%",
      alt:"A PowerStop Extreme pad against a new rotor",
      hA:"Brakes & ", hB:"Diff Covers", flag:"PowerStop . aFe Power", tag:"Stopping comes first",
      desc:"Pads and rotors at all four corners, and finned covers on both differentials.",
      specs:["Pads and rotors, all four","Finned rear diff cover","Dana 60 front cover","More fluid, more cooling"],
      cat:"The category", name:"Brakes & Diff Covers",
      brand:"aFe Power . PowerStop",
      sum:"$1,699.21", count:"3 parts", catk:"Performance",
      went:"A PowerStop Z36 Truck and Tow brake kit for all four corners, $975.21, an aFe Power Pro Series rear differential cover, $370.00, and a Dana 60 front cover, $354.00.",
      why:"Stopping comes before going on a truck this heavy. Put a taller, heavier tire under an F-350 and the brakes are working harder before anything else gets better, so they are the biggest line on the whole list by a wide margin. The diff covers are the quiet half: more fluid, more surface area, and gear oil that stays in range on a long grade with a trailer behind you.",
      fought:"Nothing here, honestly. Brakes are maintenance on a truck that tows, and the diff covers pay for themselves the first time you load it to the sticker and climb something."
    }
  ];

  var el = function(id){ return document.getElementById(id); };

  /* ============ SPRING ============
     Damped harmonic oscillator stepped by rAF at fixed sub-steps, so a
     dropped frame can't destabilise it. to() changes only the target, so
     position and velocity carry over and a click mid-move bends the
     motion in flight instead of restarting it from zero. */
  function Spring(x, cfg){ this.x = x; this.v = 0; this.target = x; this.cfg = cfg; this.done = true; }
  Spring.prototype.to = function(t, cfg){
    if (cfg) this.cfg = cfg;
    if (this.done && Math.abs(this.target - t) < 1e-9) return;
    this.target = t; this.done = false;
  };
  Spring.prototype.snap = function(t){ this.target = t; this.x = t; this.v = 0; this.done = true; };
  Spring.prototype.step = function(dt){
    if (this.done) return false;
    var k = this.cfg.s, c = this.cfg.d;
    var n = Math.max(1, Math.ceil(dt * 300)), h = dt / n;
    for (var i = 0; i < n; i++){
      this.v += (-k * (this.x - this.target) - c * this.v) * h;
      this.x += this.v * h;
    }
    if (Math.abs(this.v) < 0.004 && Math.abs(this.x - this.target) < 0.0008){
      this.x = this.target; this.v = 0; this.done = true;
    }
    return true;
  };

  /* pop overshoots a touch, the panel opens and closes without bounce */
  var CFG = { pop:{s:340,d:25}, open:{s:170,d:26}, shut:{s:220,d:30} };
  var REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ THE DAY STAGE ============ */
  var hero   = el('dayhero'),  sideL = el('sideL'), sideR = el('sideR');
  var panel  = el('dayPanel'), panelIn = panel.firstElementChild;
  var detail = el('detail');
  var q = function(role){ return document.querySelector('[data-role="' + role + '"]'); };

  var SEL = 0, OPEN = false, natural = 0;
  var popSp  = new Spring(1, CFG.pop);    // hero scale, dips and springs back on a change
  var openSp = new Spring(0, CFG.open);   // panel height, 0 shut to 1 open
  var swapSp = new Spring(1, CFG.open);   // panel contents sliding in on a day change

  function tk(s){
    return String(s).replace(/TK_[A-Z_0-9]+/g, function(m){ return '<span class="tk">' + m + '</span>'; });
  }
  function numCls(n){ return n.length > 2 ? ' --wide' : ''; }

  /* How many small dates fit either side of the hero at this width. Measured
     rather than guessed from a breakpoint, so the clamps can change freely. */
  var SIDE_MAX = 2;   // dates shown either side of the hero
  // Mobile first, same breakpoint as styles.css: phones (<=560px) stack the run,
  // 561px and up lay it out on the rail.
  var stacked = function(){ return !window.matchMedia('(min-width:561px)').matches; };

  // Measure a real tile rather than re-deriving the CSS clamp in JS. The
  // probe is laid out once per render, which only happens on a day change
  // or a resize.
  /* The hero animates its width, so offsetWidth mid-flight reports the old
     size and the sides get counted against the wrong number. Measure a
     probe with the transition off and we get the width it is heading for. */
  function heroWidth(){
    var probe = document.createElement('div');
    probe.className = 'dayhero';
    probe.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;transition:none;pointer-events:none';
    el('daystage').appendChild(probe);
    var w = probe.offsetWidth;
    el('daystage').removeChild(probe);
    return w || hero.offsetWidth;
  }

  /* Same again for the small tabs, which cross-fade between the closed
     plate and the open square. Probe, never read a tile in flight. */
  function tileWidth(){
    var t = document.createElement('div');
    t.className = 'daytile';
    t.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;transition:none;animation:none;transform:none';
    sideR.appendChild(t);
    var w = t.offsetWidth;
    sideR.removeChild(t);
    return w || 92;
  }

  function sideCount(){
    var stage = el('daystage');
    var avail = stage.clientWidth;
    var gap   = parseFloat(getComputedStyle(stage).columnGap) || 0;
    var tgap  = parseFloat(getComputedStyle(sideL).columnGap) || 8;
    var tileW = tileWidth();
    // stacked: each side gets its own full-width row under or over the hero
    // offsetWidth, not the bounding rect: the hero and tiles carry scale
    // transforms and the rect would report the scaled size
    // the tab is the same size open or shut, so one count serves both
    var cap = stacked() ? SIDE_MAX + 2 : SIDE_MAX + 1;
    var room = stacked() ? avail : (avail - heroWidth() - gap * 2) / 2;
    return Math.max(0, Math.min(cap, Math.floor((room + tgap) / (tileW + tgap))));
  }

  function tile(i, dist, dir){
    var d = BOXES[i];
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'daytile' + (d.last ? ' daytile--last' : '');
    b.style.setProperty('--d', dist);
    b.style.setProperty('--dx', (dir * 16) + 'px');
    b.setAttribute('aria-label', d.name + ', ' + d.catk);
    b.innerHTML =
      '<span class="daytile__face"><span class="daytile__in">' +
        '<span class="daytile__head"></span>' +
        '<span class="daytile__strip"></span>' +
        '<span class="daytile__body"><span class="daytile__n">' + d.short + '</span></span>' +
      '</span></span>';
    b.addEventListener('click', function(){ pick(i); });
    b.addEventListener('keydown', navKeys(i));
    return b;
  }

  function navKeys(i){
    return function(e){
      var n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = Math.min(BOXES.length - 1, i + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   n = Math.max(0, i - 1);
      if (e.key === 'Home') n = 0;
      if (e.key === 'End')  n = BOXES.length - 1;
      if (n === null || n === i) return;
      e.preventDefault();
      pick(n);
      hero.focus();
    };
  }

  function renderSides(){
    var n = sideCount();
    sideL.innerHTML = ''; sideR.innerHTML = '';
    for (var i = Math.max(0, SEL - n); i < SEL; i++) sideL.appendChild(tile(i, SEL - i, -1));
    for (var j = SEL + 1; j <= Math.min(BOXES.length - 1, SEL + n); j++) sideR.appendChild(tile(j, j - SEL, 1));
    // reserve the same width on both sides so the hero stays dead centre
    // even on the first or last tab, when one side has nothing in it
    var w = 0;
    if (n && !stacked()){
      var tw = tileWidth();
      var gap = parseFloat(getComputedStyle(sideL).columnGap) || 0;
      w = n * tw + (n - 1) * gap;
    }
    el('daystage').style.setProperty('--sidew', w + 'px');
  }

  function fillHero(){
    var d = BOXES[SEL];
    hero.className = 'dayhero';
    hero.setAttribute('aria-label', d.name + ', ' + d.catk + '. ' + (OPEN ? 'Close' : 'Open') + '.');
    // the flag across the top carries the brands, open or shut
    q('heroHead').textContent = d.flag;
  }

  function fillPanel(){
    var d = BOXES[SEL];
    q('phb').textContent = d.name;
    // Real photo when the day has one, placeholder stripe when it doesn't
    var dimg = q('dayimg');
    if (d.img){
      if (dimg.getAttribute('src') !== d.img) dimg.setAttribute('src', d.img);
      dimg.style.objectPosition = d.pos || '50% 50%';
      dimg.alt = d.alt || '';
      dimg.hidden = false;
      q('ph').hidden = true;
    } else {
      dimg.hidden = true;
      q('ph').hidden = false;
    }
    // the broadcast banner, which lives inside the open tab
    q('hA').textContent    = d.hA;
    q('hB').textContent    = d.hB;
    q('specs').innerHTML   = d.specs.map(function(t, i){
      return '<div class="spec" style="--i:' + i + '"><span class="spec__x" aria-hidden="true">' +
             '<svg viewBox="0 0 24 24"><polyline points="4 12.5 9.5 18 20 6.5"></polyline></svg>' +
             '</span><span class="spec__t">' + t + '</span></div>';
    }).join('');
    var labels = d.labels || ROW_LABELS;
    ['kWhy','kFought'].forEach(function(role, n){ q(role).textContent = labels[n + 1]; });
    q('why').innerHTML    = tk(d.why);
    q('fought').innerHTML = tk(d.fought);
  }

  function measure(animate){
    var prev = natural;
    natural = panelIn.offsetHeight;
    if (animate && OPEN && prev && natural && Math.abs(prev - natural) > 1){
      openSp.x = prev / natural; openSp.v = 0; openSp.done = false;
      openSp.to(1, CFG.open);
    }
  }

  function render(){
    hero.style.transform = 'scale(' + popSp.x + ')';
    var o = openSp.x, oc = o < 0 ? 0 : o > 1 ? 1 : o;
    panel.style.height = (o * natural) + 'px';
    panel.style.visibility = oc < 0.01 ? 'hidden' : 'visible';
    var sw = swapSp.x, sc = sw < 0 ? 0 : sw > 1 ? 1 : sw;
    panelIn.style.opacity = (oc * sc);
    panelIn.style.transform = 'translate3d(0,' + ((1 - sc) * 22 + (1 - oc) * 14) + 'px,0)';
  }

  var raf = 0, lastT = 0;
  function tick(now){
    var dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
    var busy = popSp.step(dt) | openSp.step(dt) | swapSp.step(dt);
    render();
    raf = busy ? requestAnimationFrame(tick) : 0;
  }
  function run(){
    if (REDUCE){ popSp.snap(popSp.target); openSp.snap(openSp.target); swapSp.snap(swapSp.target); render(); return; }
    if (!raf){ lastT = performance.now(); raf = requestAnimationFrame(tick); }
  }

  function setOpen(on){
    OPEN = on;
    hero.setAttribute('aria-expanded', on ? 'true' : 'false');
    q('heroCta').textContent = on ? 'Close this category' : 'Open this category';
    panel.toggleAttribute('inert', !on);
    // the picked tab widens into the banner and the rest fall back to slivers
    el('daystage').classList.toggle('daystage--open', on);
    fillHero();
    renderSides();
    if (on) measure(false);
    openSp.to(on ? 1 : 0, on ? CFG.open : CFG.shut);
    run();
  }

  // pick a day: it takes the middle, the sides re-form around it, and the
  // panel opens on it. Picking while open just swaps the contents.
  function pick(i){
    if (i === SEL && OPEN) return;
    var changed = i !== SEL;
    SEL = i;
    if (changed){
      fillHero();
      renderSides();
      popSp.x = 0.9; popSp.v = 0; popSp.done = false;   // dip, then spring back
      popSp.to(1, CFG.pop);
    }
    fillPanel();
    measure(true);
    if (changed && OPEN){ swapSp.snap(0); swapSp.to(1, CFG.open); }
    if (!OPEN) { swapSp.snap(1); setOpen(true); } else run();
  }

  hero.addEventListener('click', function(){ measure(false); setOpen(!OPEN); });
  hero.addEventListener('keydown', function(e){
    var n = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = Math.min(BOXES.length - 1, SEL + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   n = Math.max(0, SEL - 1);
    if (n === null || n === SEL) return;
    e.preventDefault();
    pick(n);
  });

  var rt;
  window.addEventListener('resize', function(){
    clearTimeout(rt);
    rt = setTimeout(function(){
      renderSides();
      measure(false);
      if (OPEN) openSp.snap(1);
      render();
    }, 100);
  });

  // boot: the hero shows day one, shut, waiting to be opened
  fillHero();
  renderSides();
  fillPanel();
  panel.toggleAttribute('inert', true);
  measure(false);
  render();

  /* ============ FINANCING MODAL ============ */
  var finModal = el('finModal'), finOpen = el('finOpen'), lastFocus = null;
  function openFin(){
    lastFocus = document.activeElement;
    finModal.classList.add('on');
    finModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var x = finModal.querySelector('.modal__x');
    if (x) x.focus();
  }
  function closeFin(){
    finModal.classList.remove('on');
    finModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  if (finOpen) finOpen.addEventListener('click', openFin);
  [].slice.call(finModal.querySelectorAll('[data-close]')).forEach(function(n){
    n.addEventListener('click', closeFin);
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && finModal.classList.contains('on')) closeFin();
  });

  /* ============ PARTS CATEGORY TABS ============ */
  var ptabs = [].slice.call(document.querySelectorAll('.ptab'));
  var pcards = [].slice.call(document.querySelectorAll('.pcard'));
  function matches(cat, c){
    var k = c.dataset.cat;
    if (cat === 'all') return true;
    if (cat === 'wt') return k === 'wt' || k === 'wheel' || k === 'tire';
    return k === cat;
  }
  var PER_PAGE = 6;
  var pgCat = 'all', pgPage = 0, pgPool = [];
  var pager = el('pager'), pgDots = el('pgDots');

  function drawPage(){
    var total = Math.max(1, Math.ceil(pgPool.length / PER_PAGE));
    if (pgPage > total - 1) pgPage = total - 1;
    if (pgPage < 0) pgPage = 0;
    var start = pgPage * PER_PAGE, end = start + PER_PAGE;

    pcards.forEach(function(c){ c.style.display = 'none'; });
    pgPool.slice(start, end).forEach(function(c){ c.style.display = ''; c.classList.add('in'); });

    var single = total < 2;
    pager.hidden = single;
    el('pgPrev').hidden = single;
    el('pgNext').hidden = single;
    el('pgNow').textContent = pgPage + 1;
    el('pgTotal').textContent = total;
    el('pgCount').textContent = '. ' + pgPool.length + (pgPool.length === 1 ? ' part' : ' parts');
    el('pgPrev').disabled = pgPage === 0;
    el('pgNext').disabled = pgPage >= total - 1;

    var dots = '';
    for (var i = 0; i < total; i++) {
      dots += '<button type="button" data-p="' + i + '" aria-current="' + (i === pgPage ? 'true' : 'false') +
              '" aria-label="Go to page ' + (i + 1) + '"></button>';
    }
    pgDots.innerHTML = dots;
  }

  function setCat(cat){
    pgCat = cat; pgPage = 0;
    pgPool = pcards.filter(function(c){ return matches(cat, c); });
    drawPage();
  }

  ptabs.forEach(function(t){
    t.addEventListener('click', function(){
      ptabs.forEach(function(x){ x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
      setCat(t.dataset.cat);
    });
  });
  function keepGridInView(){
    var g = el('pgrid').getBoundingClientRect();
    if (g.top < 80) window.scrollTo({ top: el('pgrid').offsetTop - 90, behavior: 'smooth' });
  }
  el('pgPrev').addEventListener('click', function(){ pgPage--; drawPage(); keepGridInView(); });
  el('pgNext').addEventListener('click', function(){ pgPage++; drawPage(); keepGridInView(); });
  pgDots.addEventListener('click', function(e){
    var b = e.target.closest('button[data-p]');
    if (b) { pgPage = parseInt(b.dataset.p, 10); drawPage(); keepGridInView(); }
  });
  setCat('all');

  /* ============ FAQ ACCORDION ============ */
  var qbtns = [].slice.call(document.querySelectorAll('.q__btn'));
  qbtns.forEach(function(btn){
    var body = btn.nextElementSibling;
    btn.addEventListener('click', function(){
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      body.style.maxHeight = open ? '0px' : body.scrollHeight + 'px';
    });
  });
  window.addEventListener('resize', function(){
    qbtns.forEach(function(btn){
      if (btn.getAttribute('aria-expanded') === 'true') btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
    });
  });

  /* ============ NAV AND JUMP SCROLLSPY + PROGRESS ============ */
  var navLinks = [].slice.call(document.querySelectorAll('.nav__links a'));
  var jumpLinks = [].slice.call(document.querySelectorAll('.jump__in a'));
  var secs = navLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); });
  var bar = el('progress');
  function onScroll(){
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    var mark = y + 140, best = -1;
    secs.forEach(function(sec, n){ if (sec && sec.offsetTop <= mark) best = n; });
    navLinks.forEach(function(a, n){ a.classList.toggle('on', n === best); });
    jumpLinks.forEach(function(a, n){ a.classList.toggle('on', n === best); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ============ REVEAL ============ */
  var rv = [].slice.call(document.querySelectorAll('.rv'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -70px 0px', threshold: 0.05 });
    rv.forEach(function(n){ io.observe(n); });
  } else {
    rv.forEach(function(n){ n.classList.add('in'); });
  }
})();
