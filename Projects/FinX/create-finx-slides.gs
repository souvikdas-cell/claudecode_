/**
 * FinX Discovery Widget — UX Concepts (Google Slides Generator)
 * ─────────────────────────────────────────────────────────────
 * HOW TO USE
 * 1. Go to https://script.google.com  → New project
 * 2. Replace all contents with this file
 * 3. Click Run → createFinXPresentation
 * 4. Authorise the script (Google Drive + Slides access)
 * 5. After it runs, open View → Logs to get the Slides URL
 * 6. In Google Slides: File → Page setup → Widescreen (16:9)
 *    (makes shapes fill correctly)
 * ─────────────────────────────────────────────────────────────
 */

function createFinXPresentation() {

  // ── Create presentation ──────────────────────────────────────
  var prs = SlidesApp.create('FinX Discovery Widget — UX Concepts');
  var slides = prs.getSlides();   // has 1 blank slide by default

  // ── EMU helpers (slide is 9144000 × 5143500 EMU = 720 × 405 pt) ──
  function pt(emu) { return emu / 12700; }
  function hx(c)   { return '#' + c; }

  // ── Shape primitives ─────────────────────────────────────────

  function setFill(shape, fill) {
    if (fill) shape.getFill().setSolidFill(hx(fill));
    else      shape.getFill().setTransparent();
  }

  function setBorder(shape, color, bwEmu) {
    if (color) {
      shape.getBorder().getLineFill().setSolidFill(hx(color));
      shape.getBorder().setWeight((bwEmu || 9525) / 12700);
    } else {
      shape.getBorder().setTransparent();
    }
  }

  // Rectangle
  function R(sl, x, y, w, h, fill, border, bwEmu) {
    var s = sl.insertShape(SlidesApp.ShapeType.RECTANGLE, pt(x), pt(y), pt(w), pt(h));
    setFill(s, fill);
    setBorder(s, border, bwEmu);
    return s;
  }

  // Rounded rectangle
  function RR(sl, x, y, w, h, fill, border, bwEmu) {
    var s = sl.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, pt(x), pt(y), pt(w), pt(h));
    setFill(s, fill);
    setBorder(s, border, bwEmu);
    return s;
  }

  // Text box
  function T(sl, x, y, w, h, txt, col, sz, bold, align) {
    var s = sl.insertTextBox(txt, pt(x), pt(y), pt(w), pt(h));
    s.getFill().setTransparent();
    s.getBorder().setTransparent();
    var ts = s.getText().getTextStyle();
    ts.setFontSize(sz / 100);
    ts.setForegroundColor(hx(col));
    if (bold) ts.setBold(true);
    if (align === 'c') {
      s.getText().getParagraphs()[0].getRange().getParagraphStyle()
        .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    } else if (align === 'r') {
      s.getText().getParagraphs()[0].getRange().getParagraphStyle()
        .setParagraphAlignment(SlidesApp.ParagraphAlignment.END);
    }
    return s;
  }

  // Pill (rounded label with text)
  function Pill(sl, x, y, w, h, fill, border, txt, tCol, sz) {
    var s = RR(sl, x, y, w, h, fill, border, 9525);
    s.getText().setText(txt);
    var ts = s.getText().getTextStyle();
    ts.setFontSize(sz / 100);
    ts.setForegroundColor(hx(tCol));
    ts.setBold(true);
    s.getText().getParagraphs()[0].getRange().getParagraphStyle()
      .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    return s;
  }

  // Annotation dot (indigo circle with white number)
  function Dot(sl, x, y, num) {
    var s = sl.insertShape(SlidesApp.ShapeType.ELLIPSE, pt(x), pt(y), pt(228600), pt(228600));
    s.getFill().setSolidFill('#4F46E5');
    s.getBorder().getLineFill().setSolidFill('#FFFFFF');
    s.getBorder().setWeight(1);
    s.getText().setText(String(num));
    var ts = s.getText().getTextStyle();
    ts.setFontSize(6.5);
    ts.setForegroundColor('#FFFFFF');
    ts.setBold(true);
    s.getText().getParagraphs()[0].getRange().getParagraphStyle()
      .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    return s;
  }

  // ── SLIDE 1: Cover ───────────────────────────────────────────
  var sl1 = slides[0];
  sl1.getBackground().setSolidFill('#060E1F');
  R(sl1,  457200, 2400000, 5486400,  38100, '2777F3', null, 0);
  T(sl1,  457200, 1900000, 8229600, 304800, 'INFORMATION ARCHITECTURE  ·  ROUND 2', '818CF8', 1000, false, 'l');
  T(sl1,  457200, 2080000, 8229600, 685800, 'FinX Discovery Widget', 'F1F5F9', 4400, true,  'l');
  T(sl1,  457200, 2780000, 7000000, 400000, 'Six UX Concepts for Design Evaluation', '94A3B8', 2400, false, 'l');
  T(sl1,  457200, 3200000, 8200000, 304800,
    'Strikes by OI  ·  OI Flow Signals  ·  News Catalysts  ·  Spread Opportunities  ·  Sector Signals  ·  AI-Ranked Screener',
    '475569', 1400, false, 'l');
  var pills1 = [
    ['01 Trading Cockpit',  457200], ['02 Strike Matrix', 1828800], ['03 Signal Timeline', 2971800],
    ['04 Decision Board',  4267200], ['05 Score Stack',   5486400], ['06 Market Pulse',    6477600]
  ];
  pills1.forEach(function(p) {
    Pill(sl1, p[1], 3800000, 990000, 266700, '0F1B30', '1E3A5F', p[0], '64748B', 900);
  });
  T(sl1, 457200, 4820000, 8229600, 228600,
    'VP Review Deck  ·  Choice Tech Lab  ·  May 2026', '334155', 1000, false, 'c');

  // ── SLIDE 2: Overview ────────────────────────────────────────
  var sl2 = prs.appendSlide();
  sl2.getBackground().setSolidFill('#060E1F');
  T(sl2,  457200,  304800, 8229600, 457200, 'The Six UX Models', 'F1F5F9', 3200, true,  'l');
  T(sl2,  457200,  762000, 8229600, 304800,
    'Each model answers: How does a trader find their next opportunity? Different mental models, different interaction verbs.',
    '64748B', 1400, false, 'l');
  R(sl2,  457200, 1100000, 8229600,  19050, '1E2D45', null, 0);

  var ovCards = [
    {n:'01', t:'Trading Cockpit',
     d:'Bloomberg-style split terminal. Nav rail switches Signals/Strikes/Sectors/Screener/News without losing state. Intent selector (Bull/Neutral/Bear) filters everything downstream.',
     u:'Browse by category',       c:'2777F3', bg:'0D1B35'},
    {n:'02', t:'Strike Opportunity Matrix',
     d:'Not cards — a data grid. Every strike scannable: OI in Lakhs, Delta-OI since open, VOL/OI, Signal strength. ATM auto-highlighted. Tap any row for OI chart + trade setup.',
     u:'Scan rows, tap to trade',  c:'45B644', bg:'0A1F12'},
    {n:'03', t:'Signal Timeline',
     d:'Chronological feed shows when each signal formed — reads like a market story. Coloured dots per signal type. Plain-language "why" on every card. LIVE pulse marker.',
     u:'Read market narrative',    c:'06B6D4', bg:'061D24'},
    {n:'04', t:'Decision Board',
     d:'Flip the UX — ask the trader\'s view first. Three Kanban columns: Bull/Neutral/Bear. Declare intent, see only aligned signals. Conviction score bar on every card.',
     u:'Declare view, get matches',c:'22C55E', bg:'061A0D'},
    {n:'05', t:'Priority Score Stack',
     d:'Remove all navigation. One AI-ranked list. Composite score = f(OI quality + VOL/OI + price + news). Top card shows sub-score breakdown bars. Weights adjustable.',
     u:'Trust score, act on #1',   c:'8B5CF6', bg:'110D24'},
    {n:'06', t:'Market State Pulse',
     d:'4 live gauges — PCR, VIX, OI Flow, Sector — derive a named market state (e.g. Cautiously Bullish, 74%). Only state-matched signals shown. Alert on regime shifts.',
     u:'Market context drives signals', c:'F59E0B', bg:'1F1505'}
  ];
  var col2 = 0, row2 = 0;
  ovCards.forEach(function(card) {
    var cx = 457200 + col2 * 2895600;
    var cy = 1295400 + row2 * 1905000;
    R(sl2,  cx,       cy, 2743200, 1790000, card.bg, null, 0);
    R(sl2,  cx,       cy,   57150, 1790000, card.c,  null, 0);
    T(sl2,  cx+95250, cy+95250,  2552550, 190500, card.n, card.c,  1000, true,  'l');
    T(sl2,  cx+95250, cy+304800, 2552550, 304800, card.t, 'E2E8F0', 1600, true,  'l');
    T(sl2,  cx+95250, cy+635400, 2552550, 876300, card.d, '94A3B8', 1000, false, 'l');
    Pill(sl2, cx+95250, cy+1619400, 2552550, 133350, '060E1F', card.c, card.u, card.c, 800);
    col2++;
    if (col2 >= 3) { col2 = 0; row2++; }
  });

  // ── CONCEPT SLIDE TEMPLATE ────────────────────────────────────
  function buildConcept(num, title, tagline, idea, phoneBuilder, anns) {
    var sl = prs.appendSlide();
    // Left panel
    R(sl, 0, 0, 4457200, 5143500, 'F8FAFC', null, 0);
    R(sl, 0, 0, 4457200,  228600, '060E1F', null, 0);
    T(sl, 457200,  45000, 1524000, 171450, 'CONCEPT ' + num, '818CF8', 900, true, 'l');
    T(sl, 1981200, 38100, 2400000, 171450, title, '94A3B8', 1000, false, 'l');
    // Phone frame
    RR(sl, 190500, 342900, 2743200, 4571400, 'FFFFFF', 'D0D0D0', 19050);
    R(sl,  190500, 342900, 2743200,  180000, 'E6E6E6', null, 0);
    // Phone interior
    phoneBuilder(sl);
    // Right column
    R(sl, 4571400,       0, 4572600, 5143500, 'F1F5F9', null, 0);
    R(sl, 4571400,       0,   19050, 5143500, 'E2E8F0', null, 0);
    T(sl, 4743000,  304800, 4229100,  457200, title, '1A1A2E', 2800, true,  'l');
    R(sl, 4743000,  762000,  609600,   38100, '2777F3', null, 0);
    T(sl, 4743000,  838200, 4229100,  685800, idea, '334155', 1300, false, 'l');
    T(sl, 4743000, 1620000, 4229100,   57150, 'ANNOTATIONS', '64748B', 900, true, 'l');
    var ay = 1720000;
    anns.forEach(function(line) {
      var parts = line.split('|');
      Dot(sl, 4743000, ay, parts[0].trim());
      T(sl, 5029200, ay + 20000, 3962100, 285750, parts[1].trim(), '475569', 1100, false, 'l');
      ay += 310000;
    });
    // Bottom tagline bar
    R(sl, 4571400, 4838100, 4572600, 305400, '060E1F', null, 0);
    T(sl, 4743000, 4876050, 4229100, 228600, tagline, '64748B', 1000, false, 'l');
    return sl;
  }

  // ── PHONE INTERIORS ───────────────────────────────────────────

  function phoneCockpit(sl) {
    // Market bar
    R(sl,  190500, 522900, 2743200, 304800, '16213E', null, 0);
    T(sl,  247650, 560000, 2629050, 228600, 'NIFTY  24,487 ▼    BNF  52,340 ▲    VIX 14.3    PCR 0.82', 'CBD5E1', 900, false, 'l');
    Dot(sl, 2781300, 560100, 1);
    // Intent selector
    R(sl,  190500, 827700, 2743200, 380000, 'F0F0F0', 'D8D8D8', 9525);
    T(sl,  247650, 847350, 2629050, 133350, "What's your view today?", '888888', 900, false, 'l');
    Pill(sl,  247650, 990000, 790000, 209550, 'DCFCE7', '86EFAC', '▲  Bullish', '166534', 900);
    Pill(sl, 1057500, 990000, 790000, 209550, 'F1F5F9', 'CBD5E1', '◆  Neutral', '475569', 900);
    Pill(sl, 1867350, 990000, 790000, 209550, 'FEE2E2', 'FCA5A5', '▼  Bearish', '991B1B', 900);
    Dot(sl, 2781300, 847350, 2);
    // Nav rail
    R(sl,  190500, 1207700, 571500, 3516200, 'E8E8E8', 'D0D0D0', 9525);
    Dot(sl, 705600, 1226750, 3);
    var navItems = [['Signals 12', true], ['Strikes', false], ['Sectors', false], ['Screener', false], ['News', false]];
    var ny = 1264900;
    navItems.forEach(function(nav) {
      var on = nav[1];
      RR(sl, 209550, ny, 533400, 508000, on?'ECF3FF':'EBEBEB', on?'7BA3DC':'C4C4C4', 9525);
      T(sl,  228600, ny+57150, 495300, 380000, nav[0], on?'1D6FD9':'888888', 800, on, 'c');
      ny += 571500;
    });
    // Panel header
    R(sl,  762000, 1207700, 2133000, 304800, 'FAFAFA', 'E4E4E4', 9525);
    T(sl,  819150, 1245900, 2057400, 133350, 'Active Signals — Bull view', '1A1A2E', 1000, true,  'l');
    T(sl,  819150, 1388250, 2057400, 114300, '12 opportunities · Live',    '999999',  900, false, 'l');
    Dot(sl, 2743200, 1226750, 4);
    // Signal cards
    var sigCards = [
      {t:'NIFTY 24500 CE',  e:'29 May · ATM · Rs 142',  ty:'Long Buildup',  fg:'ECF3FF', bd:'7BA3DC', v:'VOL/OI 0.73x', doi:'+11.4%', dc:'16A34A'},
      {t:'BNF 52000 CE',    e:'29 May · Slight OTM',    ty:'Long Buildup',  fg:'FFFFFF', bd:'C4C4C4', v:'VOL/OI 0.38x', doi:'+8.2%',  dc:'16A34A'},
      {t:'HDFCBANK 1780 PE',e:'29 May · OTM',           ty:'Short Buildup', fg:'FFFFFF', bd:'C4C4C4', v:'VOL/OI 0.44x', doi:'+6.1%',  dc:'DC2626'}
    ];
    var cy3 = 1531050;
    sigCards.forEach(function(c, i) {
      RR(sl, 762000, cy3, 2133000, 685800, c.fg, c.bd, 9525);
      T(sl,  819150, cy3+57150,  1257300, 152400, c.t, '1A1A2E', 1000, true,  'l');
      T(sl,  819150, cy3+209550, 1257300, 114300, c.e, 'AAAAAA',  800, false, 'l');
      Pill(sl, 2057100, cy3+57150, 723900, 152400, 'DCFCE7', '86EFAC', c.ty, c.dc, 800);
      T(sl,   819150, cy3+395000, 571500, 114300, c.v,         '555555', 900, false, 'l');
      T(sl,  1409700, cy3+395000, 571500, 114300, 'dOI ' + c.doi, c.dc, 900, true,  'l');
      if (i === 0) Dot(sl, 2743200, cy3, 5);
      cy3 += 742950;
    });
    T(sl, 762000, 3702750, 2133000, 152400, '+ 9 more signals, scroll down', 'AAAAAA', 900, false, 'c');
    R(sl,  190500, 3914400, 2743200, 380000, 'FAFAFA', 'D0D0D0', 9525);
    Pill(sl,  247650, 3971550, 1295400, 209550, 'DCFCE7', '86EFAC', 'Quick Trade', '166534', 900);
    Pill(sl, 1590000, 3971550, 1295400, 209550, 'F0F0F0', 'C4C4C4', '+ Watchlist', '555555', 900);
  }

  function phoneMatrix(sl) {
    R(sl,  190500, 522900, 2743200, 380000, 'FAFAFA', 'D0D0D0', 9525);
    T(sl,  247650, 541950, 1828800, 171450, 'Strike Heatmap', '1A1A2E', 1100, true, 'l');
    T(sl,  247650, 722850, 1828800, 133350, 'NIFTY · Spot 24,487 · 29 May', '999999', 900, false, 'l');
    Pill(sl, 2438400, 590550, 228600, 171450, 'E4ECF7', '7BA3DC', 'CE', '1D6FD9', 900);
    Pill(sl, 2686800, 590550, 228600, 171450, 'EDEDEE', 'C4C4C4', 'PE', '666666', 900);
    Dot(sl, 2781300, 541950, 1);
    // Column headers
    R(sl, 190500, 902900, 2743200, 228600, 'EAEAEA', null, 0);
    var cols = [{t:'Strike',x:247650},{t:'OI (L)',x:762000},{t:'dOI',x:1143000},{t:'VOL/OI',x:1476900},{t:'Signal',x:1942050}];
    cols.forEach(function(c) { T(sl, c.x, 950100, 500000, 133350, c.t, '888888', 900, true, 'l'); });
    Dot(sl, 2781300, 902900, 2);
    // Rows
    var matRows = [
      {k:'24000 CE', m:'Deep OTM', oi:'18.4', doi:'-2.1%', dc:'DC2626', voi:'0.19x', sig:'',     sb:'F4F4F4', sd:'DDDDDD', st:'888888', atm:false},
      {k:'24200 CE', m:'OTM',      oi:'22.6', doi:'+4.8%', dc:'16A34A', voi:'0.41x', sig:'Low',   sb:'F0FDF4', sd:'86EFAC', st:'16A34A', atm:false},
      {k:'24400 CE', m:'Near ATM', oi:'31.2', doi:'+8.2%', dc:'16A34A', voi:'0.55x', sig:'Med',   sb:'DBEAFE', sd:'7BA3DC', st:'1E40AF', atm:false},
      {k:'24500 CE', m:'<- ATM',   oi:'28.7', doi:'+11.4%',dc:'16A34A', voi:'0.73x', sig:'HIGH',  sb:'2777F3', sd:'2777F3', st:'FFFFFF', atm:true},
      {k:'24600 CE', m:'OTM',      oi:'19.3', doi:'+3.1%', dc:'16A34A', voi:'0.38x', sig:'Low',   sb:'F0FDF4', sd:'86EFAC', st:'16A34A', atm:false},
      {k:'24800 CE', m:'Far OTM',  oi:'12.8', doi:'-1.4%', dc:'DC2626', voi:'0.22x', sig:'',     sb:'F4F4F4', sd:'DDDDDD', st:'888888', atm:false}
    ];
    var ry = 1131500;
    matRows.forEach(function(r, ri) {
      R(sl, 190500, ry, 2743200, 380000, r.atm?'ECF3FF':'FFFFFF', r.atm?'7BA3DC':'E0E0E0', r.atm?19050:9525);
      R(sl, 190500, ry,   38100, 380000, r.atm?'7BA3DC':'CCCCCC', null, 0);
      T(sl, 247650, ry+76200,  457200, 152400, r.k, r.atm?'1D6FD9':'333333', 1000, r.atm, 'l');
      T(sl, 247650, ry+228600, 457200, 114300, r.m, 'BBBBBB', 800, false, 'l');
      T(sl, 762000, ry+114300, 304800, 152400, r.oi, '333333', 1000, false, 'l');
      T(sl, 1143000,ry+114300, 304800, 152400, r.doi, r.dc,  1000, true,  'l');
      T(sl, 1476900,ry+114300, 381000, 152400, r.voi, r.atm?'1D6FD9':'555555', 1000, r.atm, 'l');
      if (r.sig) Pill(sl, 1905000, ry+95250, 476250, 190500, r.sb, r.sd, r.sig, r.st, 900);
      if (ri === 3) Dot(sl, 190500, ry, 4);
      ry += 399100;
    });
    RR(sl, 228600, 3568350, 2667000, 266700, 'ECF3FF', '7BA3DC', 9525);
    T(sl,  285750, 3606450, 2552550, 190500, 'Tap any row: OI profile + trade setup', '1D6FD9', 1000, true, 'c');
    Dot(sl, 2781300, 3531000, 3);
  }

  function phoneTimeline(sl) {
    R(sl,  190500, 522900, 2743200, 380000, 'FAFAFA', 'D0D0D0', 9525);
    T(sl,  247650, 541950, 1828800, 171450, "Today's Market", '1A1A2E', 1100, true, 'l');
    T(sl,  247650, 713400, 1828800, 133350, '6 signals since open · Live', '999999', 900, false, 'l');
    Dot(sl, 2781300, 541950, 1);
    Pill(sl,  247650, 922400, 457200, 190500, 'E4ECF7', '7BA3DC', 'All (6)',  '1D6FD9', 900);
    Pill(sl,  723900, 922400, 400050, 190500, 'DCFCE7', '86EFAC', 'Bull (3)', '166534', 900);
    Pill(sl, 1143000, 922400, 400050, 190500, 'FEE2E2', 'FCA5A5', 'Bear (2)', '991B1B', 900);
    Pill(sl, 1562100, 922400, 457200, 190500, 'F1F5F9', 'CBD5E1', 'Neutral',  '475569', 900);
    Dot(sl, 2781300, 902900, 2);
    R(sl,  342900, 1187100, 19050, 2743200, 'E0E0E0', null, 0);
    Dot(sl,  190500, 1187100, 3);
    var events = [
      {t:'9:17',     sym:'NIFTY 24500 CE',  ty:'Long Buildup',  c:'16A34A',bg:'F0FDF4',bd:'86EFAC',tc:'166534',why:'OI surged +11.4% at open alongside +0.8% price. High conviction entry forming.'},
      {t:'9:34',     sym:'HDFCBANK 1780 PE',ty:'Short Buildup', c:'DC2626',bg:'FFF5F5',bd:'FCA5A5',tc:'991B1B',why:'Large PE OI addition as stock weakens. Resistance at 1800 zone holding.'},
      {t:'10:02',    sym:'IT Sector',        ty:'Sector Signal', c:'0891B2',bg:'F0FEFF',bd:'A5F3FC',tc:'155E75',why:'3 of 5 IT majors seeing CE accumulation. Sector bullish positioning building.'},
      {t:'10:41',    sym:'RELIANCE CE',      ty:'Short Covering',c:'16A34A',bg:'F0FDF4',bd:'BBF7D0',tc:'166534',why:'OI falling as price rises. Shorts exiting positions.'},
      {t:'NOW 11:52',sym:'BNF 52000 CE',    ty:'Spread Oppty',  c:'4F46E5',bg:'F5F3FF',bd:'C4B5FD',tc:'5B21B6',why:'IV skew gap between 52000-52500 CE widens. Bull call spread forming.'}
    ];
    var ey = 1187100, eCH = 514350;
    events.forEach(function(e, i) {
      R(sl,   304800, ey+57150, 95250,    95250, e.c, null, 0);
      T(sl,   190500, ey, 114300, 114300, e.t, '888888', 700, true, 'r');
      RR(sl,  466725, ey, 2390025, eCH, e.bg, e.bd, 9525);
      T(sl,   523875, ey+38100,  1905000, 152400, e.sym, '1A1A2E', 1000, true, 'l');
      Pill(sl,1942050, ey+38100, 876300, 133350, e.bg, e.bd, e.ty, e.tc, 800);
      T(sl,   523875, ey+209550, 2333850, 266700, e.why, '555555', 800, false, 'l');
      if (i === 0) Dot(sl, 2781300, ey, 4);
      ey += 571500;
    });
    T(sl, 190500, 3730500, 2743200, 152400, 'Scroll up for full session history', 'AAAAAA', 900, false, 'c');
    Dot(sl, 2781300, 3730500, 5);
  }

  function phoneDecision(sl) {
    R(sl,  190500, 522900, 2743200, 304800, 'FAFAFA', 'D0D0D0', 9525);
    T(sl,  247650, 541950, 2629050, 133350, "What's your view today?", '888888', 900, true, 'l');
    Dot(sl, 2781300, 541950, 1);
    Pill(sl,  247650, 694500, 761900, 228600, 'DCFCE7', '86EFAC', '▲ Bullish', '166534', 1000);
    Pill(sl, 1028700, 694500, 761900, 228600, 'F1F5F9', 'CBD5E1', 'Neutral',   '475569', 1000);
    Pill(sl, 1809600, 694500, 761900, 228600, 'FEE2E2', 'FCA5A5', '▼ Bearish', '991B1B', 1000);
    R(sl,  190500, 970200, 2743200, 228600, 'FAFAFA', 'D0D0D0', 9525);
    Dot(sl, 2781300, 950250, 2);
    var colHeaders = [
      {t:'BULL  4', x:190500,  bg:'DCFCE7', bd:'86EFAC', tc:'166534'},
      {t:'NEUTRAL 2', x:1104900, bg:'F1F5F9', bd:'CBD5E1', tc:'475569'},
      {t:'BEAR  3', x:1981200, bg:'FEE2E2', bd:'FCA5A5', tc:'991B1B'}
    ];
    colHeaders.forEach(function(c) {
      R(sl, c.x, 970200, 857250, 228600, c.bg, c.bd, 9525);
      T(sl, c.x+57150, 988350, 742950, 190500, c.t, c.tc, 900, true, 'l');
    });
    var bullC = [
      {t:'NIFTY 24500 CE', ty:'Long Buildup',  bg:'DCFCE7',bd:'86EFAC',tc:'166534',v:'VOL/OI 0.73x',pct:82},
      {t:'BNF 52000 CE',   ty:'Long Buildup',  bg:'DCFCE7',bd:'86EFAC',tc:'166534',v:'VOL/OI 0.38x',pct:68},
      {t:'RELIANCE CE',    ty:'Short Covering',bg:'F0FDF4',bd:'BBF7D0',tc:'166534',v:'VOL/OI 0.91x',pct:74}
    ];
    var neuC = [
      {t:'BNF Spread', ty:'Spread Oppty', bg:'F5F3FF',bd:'C4B5FD',tc:'5B21B6',v:'IV skew gap',  pct:55},
      {t:'IT Sector',  ty:'Sector Signal',bg:'F0FEFF',bd:'A5F3FC',tc:'155E75',v:'3/5 IT CE',     pct:48}
    ];
    var bearC = [
      {t:'HDFCBANK PE',    ty:'Short Buildup',  bg:'FEE2E2',bd:'FCA5A5',tc:'991B1B',v:'VOL/OI 0.44x',pct:62},
      {t:'TATASTEEL PE',   ty:'Short Buildup',  bg:'FEE2E2',bd:'FCA5A5',tc:'991B1B',v:'VOL/OI 0.91x',pct:71},
      {t:'NIFTY 24400 PE', ty:'Long Unwinding', bg:'FFF5F5',bd:'FCA5A5',tc:'991B1B',v:'',            pct:44}
    ];
    var colX4 = [247650, 1161900, 2038200], cW4 = 762000;
    [bullC, neuC, bearC].forEach(function(colCards, ci) {
      var cy4 = 1236600;
      colCards.forEach(function(card, i) {
        RR(sl, colX4[ci], cy4, cW4, 571500, card.bg, card.bd, 9525);
        T(sl,  colX4[ci]+38100, cy4+38100,  685800, 152400, card.t,  '1A1A2E', 900, true, 'l');
        Pill(sl, colX4[ci]+38100, cy4+209550, 685800, 133350, card.bg, card.bd, card.ty, card.tc, 800);
        if (card.v) T(sl, colX4[ci]+38100, cy4+361950, 685800, 114300, card.v, '666666', 800, false, 'l');
        R(sl,  colX4[ci]+38100, cy4+495300, 685800, 38100, 'E8E8E8', null, 0);
        R(sl,  colX4[ci]+38100, cy4+495300, Math.round(card.pct/100*685800), 38100, card.bd, null, 0);
        if (ci === 0 && i === 0) { Dot(sl, 190500, cy4, 3); Dot(sl, 2743200, cy4, 4); }
        cy4 += 609600;
      });
    });
    R(sl,  190500, 3876300, 2743200, 247650, 'FAFAFA', 'D0D0D0', 9525);
    Pill(sl, 247650, 3905850, 2629050, 190500, 'DCFCE7', '86EFAC', 'Bullish selected · 4 aligned signals shown', '166534', 900);
    Dot(sl, 2781300, 3876300, 5);
  }

  function phoneScore(sl) {
    R(sl,  190500, 522900, 2743200, 304800, 'FAFAFA', 'D0D0D0', 9525);
    T(sl,  247650, 541950, 2133000, 152400, 'AI Conviction Ranking', '1A1A2E', 1100, true, 'l');
    T(sl,  247650, 694500, 2629050, 114300, 'Score = f(OI, VOL/OI, Price, News)  ·  11:52', '999999', 900, false, 'l');
    Dot(sl, 2781300, 541950, 1);
    // Rank 1 hero
    RR(sl, 190500, 866775, 2743200, 952500, 'ECF3FF', '7BA3DC', 19050);
    var ring1 = sl.insertShape(SlidesApp.ShapeType.ELLIPSE, pt(228600), pt(909600), pt(457200), pt(457200));
    ring1.getFill().setSolidFill('#EBF3FF');
    ring1.getBorder().getLineFill().setSolidFill('#2777F3');
    ring1.getBorder().setWeight(2);
    T(sl,  285750, 1024300,  342900, 228600, '94', '1D6FD9', 2000, true, 'c');
    T(sl,  723900,  904500, 1504950, 190500, '#1 · NIFTY 24500 CE', '1A1A2E', 1000, true, 'l');
    Pill(sl, 2171100, 904500, 723900, 190500, 'DCFCE7', '86EFAC', 'Long Buildup', '166534', 900);
    Dot(sl,  723900, 866775, 3);
    Dot(sl,  190500, 866775, 2);
    var subBars = [{l:'OI Score', p:92},{l:'VOL/OI',p:73},{l:'News',p:88}];
    var by5 = 1095750;
    subBars.forEach(function(b) {
      T(sl,  723900, by5, 285750, 114300, b.l, '888888', 900, false, 'l');
      R(sl, 1028700, by5+19050, 1524000, 76200, 'E8E8E8', null, 0);
      R(sl, 1028700, by5+19050, Math.round(b.p/100*1524000), 76200, '2777F3', null, 0);
      by5 += 133350;
    });
    Pill(sl, 723900, 1676400, 2171100, 133350, 'DCFCE7', '86EFAC', 'Open Trade Setup', '166534', 900);
    // Ranks 2-4
    var ranks5 = [
      {r:'#2', sc:'87', sym:'TATASTEEL CE',  ty:'Short Covering', bg:'F0F4FF', bd:'4338CA', tc:'4338CA', pct:87},
      {r:'#3', sc:'71', sym:'BNF Spread',    ty:'Spread Oppty',   bg:'F5F3FF', bd:'7C3AED', tc:'7C3AED', pct:71},
      {r:'#4', sc:'58', sym:'HDFCBANK PE',   ty:'Short Buildup',  bg:'FFF7ED', bd:'F97316', tc:'C2410C', pct:58}
    ];
    var ry5 = 1847625;
    ranks5.forEach(function(r, i) {
      RR(sl, 190500, ry5, 2743200, 609600, 'FFFFFF', 'D0D0D0', 9525);
      var ring = sl.insertShape(SlidesApp.ShapeType.ELLIPSE, pt(228600), pt(ry5+76200), pt(380700), pt(380700));
      ring.getFill().setSolidFill(hx(r.bg));
      ring.getBorder().getLineFill().setSolidFill(hx(r.bd));
      ring.getBorder().setWeight(1.5);
      T(sl,  247650, ry5+171450, 380700, 190500, r.sc, r.tc, 1400, true, 'c');
      T(sl,  647700, ry5+76200,  1866675, 152400, r.r + ' · ' + r.sym, '1A1A2E', 1000, true, 'l');
      Pill(sl, 647700, ry5+247650, 1295400, 114300, r.bg, r.bd, r.ty, r.tc, 800);
      R(sl,   647700, ry5+475425, 1523625, 57150, 'E8E8E8', null, 0);
      R(sl,   647700, ry5+475425, Math.round(r.pct/100*1523625), 57150, r.bd, null, 0);
      if (i === 0) Dot(sl, 190500, ry5, 4);
      ry5 += 647700;
    });
    T(sl, 190500, 3715200, 2743200, 152400, '7 more opportunities · Scroll down', 'AAAAAA', 900, false, 'c');
    Pill(sl,  247650, 3905850, 1295400, 190500, 'DBEAFE', '7BA3DC', 'Score Explainer', '1D6FD9', 900);
    Pill(sl, 1581150, 3905850, 1295400, 190500, 'F0F0F0', 'C4C4C4', 'Adjust Weights',  '555555', 900);
    Dot(sl, 2781300, 3886200, 5);
  }

  function phonePulse(sl) {
    R(sl,  190500, 522900, 2743200, 228600, 'FAFAFA', 'D0D0D0', 9525);
    T(sl,  247650, 560325, 1828800, 152400, 'Market Intelligence', '1A1A2E', 1100, true, 'l');
    T(sl, 2457450, 560325,  457200, 152400, 'LIVE', '22C55E', 1000, true, 'l');
    Dot(sl, 2781300, 541950, 1);
    R(sl,  190500, 751500, 2743200, 1219200, 'F0F2F5', 'D0D0D0', 9525);
    Dot(sl, 2781300, 770550, 2);
    var gauges6 = [
      {l:'Put-Call Ratio',   v:'0.82', vc:'F59E0B', pct:56, fc:'F59E0B', kind:'bar'},
      {l:'India VIX',        v:'14.3 (low)', vc:'22C55E', pct:19, fc:'22C55E', kind:'bar'},
      {l:'OI Flow Direction',v:'+CE Heavy',  vc:'16A34A', pct:72, fc:'22C55E', kind:'split'},
      {l:'Sector Flow',      v:'IT & Banks', vc:'0891B2', pct:0,  fc:'',       kind:'chips'}
    ];
    var GW6 = 2590800, gy6 = 789600;
    gauges6.forEach(function(g) {
      T(sl, 247650,  gy6, 1295400, 114300, g.l, '444444', 900, true,  'l');
      T(sl, 1704150, gy6,  762000, 114300, g.v, g.vc,     900, true,  'r');
      if (g.kind === 'bar') {
        R(sl, 247650, gy6+133350, GW6, 76200, 'E0E0E0', null, 0);
        R(sl, 247650, gy6+133350, Math.round(g.pct/100*GW6), 76200, g.fc, null, 0);
      } else if (g.kind === 'split') {
        R(sl, 247650, gy6+133350, GW6, 76200, 'E0E0E0', null, 0);
        R(sl, 247650, gy6+133350, Math.round(g.pct/100*GW6), 76200, '22C55E', null, 0);
        R(sl, 247650+Math.round(g.pct/100*GW6), gy6+133350, Math.round((100-g.pct)/100*GW6), 76200, 'FEE2E2', null, 0);
        Dot(sl, 2781300, gy6, 3);
      } else {
        var secs6 = [{l:'IT',c:'DCFCE7',tc:'166534',bd:'86EFAC'},{l:'Banks',c:'DCFCE7',tc:'166534',bd:'86EFAC'},{l:'Auto',c:'F0F0F0',tc:'888888',bd:'D0D0D0'},{l:'Metal',c:'FEE2E2',tc:'991B1B',bd:'FCA5A5'}];
        var sx6 = 247650;
        secs6.forEach(function(s) { Pill(sl, sx6, gy6+133350, 609600, 133350, s.c, s.bd, s.l, s.tc, 900); sx6 += 647700; });
      }
      gy6 += 304800;
    });
    // State banner
    R(sl,  190500, 1970700, 2743200, 457200, 'FAFAFA', 'D0D0D0', 9525);
    Dot(sl, 1219200, 1951650, 4);
    T(sl,  247650, 1989750, 2133000, 133350, 'Derived Market State', '888888', 900, true, 'l');
    T(sl,  247650, 2133000, 2133000, 228600, 'CAUTIOUSLY BULLISH', '166534', 1600, true, 'l');
    T(sl,  247650, 2361600, 2133000, 114300, 'Confidence: 74%', '22C55E', 900, true, 'l');
    T(sl,  247650, 2495250, 2629050, 114300, 'Signals for Cautiously Bullish', '888888', 900, true, 'l');
    Dot(sl, 2781300, 2476200, 5);
    var msigs6 = [
      {t:'NIFTY 24500 CE', ty:'Long Buildup',  bg:'F0FDF4',bd:'86EFAC',tc:'166534',n:'Aligned: CE accumulation + low VIX. VOL/OI 0.73x'},
      {t:'TATASTEEL CE',   ty:'Short Covering', bg:'F0FDF4',bd:'86EFAC',tc:'166534',n:'Metal sector weak but stock diverging. Partial match.'},
      {t:'BNF Spread',     ty:'Spread Oppty',   bg:'F5F3FF',bd:'C4B5FD',tc:'5B21B6',n:'Low priority for current state. Wait for confirmation.'}
    ];
    var mcy6 = 2666750;
    msigs6.forEach(function(m) {
      RR(sl, 190500, mcy6, 2743200, 457200, m.bg, m.bd, 9525);
      R(sl,  190500, mcy6, 38100, 457200, m.bd, null, 0);
      T(sl,  266700, mcy6+57150,  1828800, 152400, m.t, '1A1A2E', 1000, true, 'l');
      Pill(sl,2133000, mcy6+76200, 762000, 133350, m.bg, m.bd, m.ty, m.tc, 800);
      T(sl,  266700, mcy6+228600, 2400300, 190500, m.n, '555555', 800, false, 'l');
      mcy6 += 514350;
    });
    T(sl, 190500, 4209900, 2743200, 114300, '3 of 12 signals matched this state', 'AAAAAA', 900, false, 'c');
    RR(sl, 190500, 4362450, 2743200, 209550, 'FFFBEB', 'FDE68A', 9525);
    T(sl,  304800, 4400550, 2590800, 152400, 'State shifts if PCR drops below 0.7', '92400E', 900, true, 'l');
    Dot(sl, 2781300, 4362450, 6);
  }

  // ── BUILD CONCEPT SLIDES 3–8 ─────────────────────────────────

  buildConcept('01', 'Trading Cockpit',
    'Intent-first terminal · Category nav rail · Session-long UX',
    'Bloomberg-style split terminal. Pinned market bar never disappears. Left nav rail switches Signals, Strikes, Sectors, Screener and News without losing panel state. Intent selector (Bull / Neutral / Bear) filters the signal feed before display. Designed for power traders who keep the widget open all session.',
    phoneCockpit, [
      '1|Pinned market bar — NIFTY/BNF delta, VIX, PCR always visible regardless of active section',
      '2|Intent selector — declare Bull / Neutral / Bear before signals load; filters everything',
      '3|Category nav rail — Signals · Strikes · Sectors · Screener · News; badge = unread count',
      '4|Signal card — blue highlight on active; shows VOL/OI + delta-OI + conviction score',
      '5|Contextual CTA strip — Quick Trade / Watchlist; CTAs change per selected signal type'
    ]);

  buildConcept('02', 'Strike Opportunity Matrix',
    'F&O data grid · Strike-level signal precision · Tap-to-trade',
    'Not cards — a data grid. Every strike scannable at once: OI in Lakhs, delta-OI since open, VOL/OI (Intraday Volume / Open Interest), and Signal strength. ATM row auto-highlighted in blue. Colour-coded signal cells replace narrative. Tap any row for full OI buildup chart + pre-filled trade setup.',
    phoneMatrix, [
      '1|Instrument + expiry header + CE/PE toggle — matrix rebuilds instantly on switch',
      '2|Column headers — Strike · OI in Lakhs · delta-OI since open · VOL/OI · Signal strength',
      '3|Tap any row — bottom drawer opens with full OI buildup chart and trade setup sheet',
      '4|ATM row auto-highlighted in blue — signal intensity shown as Low / Med / HIGH'
    ]);

  buildConcept('03', 'Signal Timeline',
    'Chronological market narrative · Context-rich · LIVE feed',
    'Trades have context — the market moves in sequence, not all at once. A timeline shows when each signal formed, so the trader reads the market\'s story. Coloured dots per signal type. Plain-language "why" sentence on every card. Scroll up for full session history. LIVE pulse marker always visible.',
    phoneTimeline, [
      '1|Session narrative header — date, signal count since open, LIVE indicator',
      '2|Direction filter chips — All / Bull / Bear / Neutral; preserves time order while filtering',
      '3|Vertical timeline track — coloured dots per type: green=bull, red=bear, blue/purple=neutral',
      '4|Live pulse marker — glowing dot + NOW label on most recent signal; auto-scrolls here on open',
      '5|Session scroll — complete audit trail of every signal with timestamp and plain-language context'
    ]);

  buildConcept('04', 'Decision Board',
    'Intent-first Kanban · Bull / Neutral / Bear columns · Conviction bars',
    'Flip the UX: ask the trader\'s view first. Three Kanban columns — Bull, Neutral, Bear — with live signal counts. Declare intent, see only aligned signals. Reduces cognitive load dramatically. Each mini-card shows a conviction score bar. Tap to expand to full trade detail.',
    phoneDecision, [
      '1|View selector — trader declares intent before seeing any signals; pre-filters all noise',
      '2|Column headers with live counts — all 3 directions visible; counts update as signals fire',
      '3|Signal mini-card — symbol + type badge + key metric + conviction bar; tap to expand',
      '4|Conviction score bar — horizontal fill (0-100%) from OI quality + VOL/OI + price confirmation',
      '5|Active view confirmation — strip shows which view is selected and how many signals aligned'
    ]);

  buildConcept('05', 'Priority Score Stack',
    'AI-ranked composite list · Score rings · Weight adjuster',
    'Remove all navigation. One ranked list. Composite AI score = f(OI quality + VOL/OI + price confirmation + news weight + sector alignment). Top card is largest with full sub-score breakdown bars. Score ring colour shifts blue to purple to orange as conviction falls. Power users adjust weights.',
    phoneScore, [
      '1|Composite score header — formula shown as f(OI · VOL/OI · Price · News); transparency builds trust',
      '2|Score ring — 0-100 composite; ring diameter scales with rank: #1 largest, shrinks to #5',
      '3|Sub-score breakdown bars — only on top card: OI score, VOL/OI score, News weight bars',
      '4|Score colour gradient — blue (#1-2), purple (#3), orange (#4) as conviction decreases',
      '5|Adjust weights — shift formula weight toward OI quality, momentum, or news catalyst'
    ]);

  buildConcept('06', 'Market State Pulse',
    'PCR + VIX + OI Flow + Sector → Derived state → Matched signals',
    'Context before action. Four live gauges — PCR, India VIX, OI Flow direction (CE vs PE net addition), and Sector rotation — derive a named market condition (e.g. Cautiously Bullish, 74% confidence). Only signals congruent with the state are surfaced. State-shift alert warns of approaching regime changes.',
    phonePulse, [
      '1|Market Pulse header — live health indicators shown before any individual signals',
      '2|4-gauge panel — PCR, India VIX, OI Flow direction (CE vs PE net), Sector rotation',
      '3|OI Flow split bar — CE% vs PE% net OI addition; CE-heavy = bullish accumulation',
      '4|Derived state label — named condition from all 4 gauges: e.g. Cautiously Bullish 74%',
      '5|State-matched signals — only signals fitting current state shown prominently; rest dimmed',
      '6|State shift alert — warns when PCR/VIX thresholds are near a regime change'
    ]);

  // ── SLIDE 9: Comparison ──────────────────────────────────────
  var sl9 = prs.appendSlide();
  sl9.getBackground().setSolidFill('#060E1F');
  T(sl9, 457200, 228600, 8229600, 457200, 'UX Model Comparison', 'F1F5F9', 3200, true, 'l');
  R(sl9, 457200, 685800, 8229600, 19050, '1E2D45', null, 0);

  var cHdrs = ['Concept', 'Mental Model', 'Interaction', 'Best For', 'Watch Out For'];
  var cWths = [1600000, 1700000, 1600000, 2200000, 1900000];
  var hx9 = 457200;
  cHdrs.forEach(function(h, i) {
    R(sl9, hx9, 723900, cWths[i], 228600, '1E2D45', null, 0);
    T(sl9, hx9+57150, 742950, cWths[i]-114300, 190500, h, '94A3B8', 1000, true, 'l');
    hx9 += cWths[i];
  });

  var tblRows = [
    ['01 Cockpit',     'Terminal · multi-panel',   'Browse → Select → Act',       'Power users · all-day sessions',     'Too complex for casual users'],
    ['02 Matrix',      'Options chain · scan table','Scan row → Tap → Trade',      'F&O traders · strike-level',         'Requires domain knowledge'],
    ['03 Timeline',    'News feed · story arc',     'Read → Understand → Act',     'Context traders · mid-session',      'Old signals buried quickly'],
    ['04 Decision',    'Declare intent first',      'Choose view → Match signals',  'Directional · high conviction',      'Confirmation bias if view locks'],
    ['05 Score Stack', 'AI recommendation engine', 'Trust score → Act on #1',     'Busy users · passive-active',        'Trust in AI scoring must build'],
    ['06 Pulse',       'Market-first thinking',     'Read market → See signals',    'Macro-aware · day traders',          'State logic must be accurate']
  ];
  var rColors = ['0D1B35','081410','061D24','061A0D','110D24','1F1505'];
  var ry9 = 952500;
  tblRows.forEach(function(row, ri) {
    var cx9b = 457200;
    cWths.forEach(function(w, j) {
      R(sl9, cx9b, ry9, w, 342900, rColors[ri], '1E2D45', 9525);
      T(sl9, cx9b+57150, ry9+76200, w-114300, 266700, row[j], j===0?'E2E8F0':'64748B', 1100, j===0, 'l');
      cx9b += w;
    });
    ry9 += 342900;
  });

  RR(sl9, 457200, 3124800, 8229600, 609600, '0F1B30', '1E3A5F', 19050);
  T(sl9,  685800, 3200400, 7773000, 152400, 'KEY DESIGN PRINCIPLES', '818CF8', 900, true, 'l');
  T(sl9,  685800, 3371100, 7773000, 330000,
    'VOL/OI (Intraday Volume / Open Interest) is the correct F&O activity metric — calendar-independent, unlike 5-day avg volume which breaks for far-dated options. ' +
    'Conviction Score = f(OI quality + VOL/OI + price confirmation + news weight). ' +
    'Market State = f(PCR, VIX, OI flow direction, sector rotation).',
    '94A3B8', 1100, false, 'l');

  T(sl9, 457200, 4876050, 8229600, 190500,
    'FinX Discovery Widget  ·  FinX F&O Trading Platform  ·  Choice Tech Lab  ·  May 2026',
    '334155', 1000, false, 'c');

  // ── Done ─────────────────────────────────────────────────────
  var url = prs.getUrl();
  Logger.log('Presentation created successfully!');
  Logger.log('URL: ' + url);
  Logger.log('');
  Logger.log('NEXT STEP: In Google Slides, go to:');
  Logger.log('  File > Page setup > Widescreen (16:9)');
  Logger.log('  This ensures all shapes fill correctly.');

  return url;
}
