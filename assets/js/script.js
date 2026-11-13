'use strict';
// Bundled locally; only the links to external sources require internet.
const english = {
  "skip": "Skip to content",
  "navStart": "01 Start",
  "navProblem": "02 Problem",
  "navHow": "03 Solution",
  "navDiff": "04 Edge",
  "navWho": "05 Audience",
  "navVision": "06 Vision",
  "heroEyebrow": "01 / THE HOOK",
  "heroTitle1": "See the risks.",
  "heroTitle2": "Plan your",
  "heroTitle3": "journey.",
  "heroDescription": "GPS shows the fastest way. SAFEJY shows if your route crosses risk areas before you go.",
  "try": "Try the route simulator",
  "understand": "See the problem",
  "publicUtility": "100% Free · Public Utility",
  "academic": "Academic Project",
  "mapTitle": "Route safety",
  "simulation": "INTERACTIVE SIMULATION",
  "mapConcept": "DYNAMIC MAP",
  "mapAlt": "Interactive map illustrating routes in São Paulo and marked risk zones.",
  "riskZone": "⚠ Central Risk Zone",
  "origin": "A · Start",
  "destination": "B · Destination",
  "legendRisk": "Risk zone",
  "legendRoute": "Assessed route",
  "mapNote": "Illustrative simulation based on official public security reports in São Paulo.",
  "heroBottom": "KNOW YOUR ROUTE BEFORE YOU GO.",
  "problemEyebrow": "02 / PROBLEM & DATA",
  "problemTitle": "Newcomers in São Paulo pick routes in the dark.",
  "problemDescription": "Regular maps only calculate traffic. SAFEJY checks your path against public safety data.",
  "statValue": "18.5<span>%</span>",
  "statDescription": "of all phone robberies and thefts in Brazil in 2024 happened in São Paulo city.",
  "readSource": "View source",
  "news2Title": "Study maps streets and districts with highest concentration.",
  "news2Description": "Even with a 9.05% overall drop in 2025, incidents remain concentrated in specific spots.",
  "readStudy": "View study",
  "news3Badge": "27.4K",
  "news3Title": "phone robberies in the state in four months.",
  "news3Description": "Incidents recorded between January and April 2026 in São Paulo state.",
  "sourceNote": "Official sources with dates and direct links. Reports frame the real problem; the map uses illustrative simulation.",
  "solutionEyebrow": "03 / SOLUTION IN 3 STEPS",
  "solutionTitle": "Information before you go.",
  "solutionDescription": "Simple, visual, and ready before you step outside.",
  "step1Title": "Enter your route",
  "step1Description": "Pick starting point and destination in São Paulo.",
  "step2Title": "See the risk areas",
  "step2Description": "Spot sections with alerts directly on the map.",
  "step3Title": "Choose how to go",
  "step3Description": "Compare the direct route against the suggested detour.",
  "diffEyebrow": "04 / WHY SAFEJY",
  "diffTitle": "We assess routes, never stigmatize places.",
  "diffDescription": "Guidance like a Local Guide: calm, precise, and without alarmism.",
  "diff1Tag": "REAL DATA",
  "pillar1Title": "No sensationalism",
  "pillar1Desc": "Official SSP and FECAP data, free of scaremongering.",
  "diff2Tag": "URBAN ETHICS",
  "pillar2Title": "Route, not neighborhood",
  "pillar2Desc": "We analyze roads and hours without labeling residents.",
  "diff3Tag": "AUTONOMY",
  "pillar3Title": "Real transparency",
  "pillar3Desc": "No route is 100% safe; you decide with clear context.",
  "diff4Tag": "INCLUSION",
  "pillar4Title": "Accessible and bilingual",
  "pillar4Desc": "Portuguese, English, and High Contrast mode for color blindness.",
  "audienceEyebrow": "05 / AUDIENCE & MODEL",
  "audienceTitle": "Built for people new to the city.",
  "audienceDescription": "100% free and public utility, focused on social impact.",
  "audienceStampLabel": "USER PROFILES<br>100% FREE",
  "who1Title": "Tourists and visitors",
  "who1Description": "Airport arrivals (Guarulhos & Congonhas) and sightseeing.",
  "who1Tag": "TOURISM & DISCOVERY",
  "who2Title": "Business travelers",
  "who2Description": "Meetings and expos at venues like Expo SP and Anhembi.",
  "who2Tag": "WORK & EVERYDAY LIFE",
  "who3Title": "Drivers and commuters",
  "who3Description": "Daily trips across unfamiliar neighborhoods.",
  "who3Tag": "MOBILITY & TRAVEL",
  "visionEyebrow": "06 / VISION & NEXT STEPS",
  "visionTitle": "Know the risks.<br><em>Plan your trip.</em>",
  "now": "NOW",
  "nowTitle": "Validate the prototype",
  "nowDescription": "Present to the academic jury and listen to tourists and drivers.",
  "next": "NEXT STEP",
  "nextTitle": "Evolve the app",
  "nextDescription": "Connect open SSP-SP datasets by street and time of day.",
  "backToSim": "Test simulator at top",
  "visionNote": "Academic project · 2026. No route guarantees an absence of risk.",
  "footer": "Information before you go.",
  "academicFooter": "ACADEMIC PROJECT · 2026",
  "brandManual": "Brand guidelines",
  // Interactive Simulator & A11y
  "demoRouteLabel": "DEMO ROUTE",
  "demoRouteValue": "✈️ Congonhas Airport (A) → 🏁 Paulista Ave · MASP (B)",
  "toggleSafeRoute": "View Suggested Safe Detour",
  "toggleDirectRoute": "View Direct Route (Alerts On)",
  "simViewBoth": "Compare Both",
  "simViewSafe": "🛡️ Safe Detour",
  "simViewDirect": "⚠️ Route at Risk",
  "simBadgeRisk": "⚠️ Direct Route (Alert)",
  "simBadgeSafe": "🛡️ SAFEJY Safe Detour",
  "simTipRisk": "Recommendation: Keep windows closed and valuables out of sight.",
  "simTipSafe": "Recommendation: Recommended route to travel with peace of mind.",
  "contrastMode": "High Contrast",
  "legendRouteDirect": "Direct route (with alert)",
  "legendRouteSafe": "Safe detour",
  "routeResultDirect": "Risk Detected along Route",
  "routeResultSafe": "Optimized Safe Detour",
  "riskRecDirect": "Recommendation: Avoid holding devices at stoplights and keep windows closed.",
  "riskRecSafe": "Recommendation: Suggested route for visitors, night travel, and rideshare journeys.",
  "watchIntro": "Brand Video",
  // Waitlist
  "waitlistEyebrow": "APP BETA VERSION",
  "waitlistTitle": "Carry SAFEJY in your pocket.",
  "waitlistSubtitle": "We are building the mobile app with real-time safety alerts for São Paulo. Sign up for exclusive early access before the official release.",
  "emailLabel": "Your email",
  "profileLabel": "Your profile",
  "profileOpt1": "Tourist / Visitor",
  "profileOpt2": "Rideshare Driver / Courier",
  "profileOpt3": "Resident / Student",
  "profileOpt4": "Business Traveler / Corporate",
  "waitlistBtn": "Get Early Access",
  "waitlistSuccess": "🎉 Thank you! Your early access request has been confirmed.",
  "waitlistInvalid": "Please enter a valid email address.",
  "waitlistDisclaimer": "🔒 We respect your privacy. No spam.",
  "articleInPt": "(Source article in Portuguese)",
  "betaBannerEyebrow": "EXCLUSIVE BETA",
  "betaBannerTitle": "Want to test SAFEJY on your phone?",
  "betaBannerDesc": "Sign up for our early access waitlist to get real-time safety alerts in São Paulo.",
  "betaBannerBtn": "Join the Beta",
  "waitlistAlreadyExists": "✓ You're already registered! We will send you an invite soon."
};

const portuguese = {
  "demoRouteLabel": "ROTA DEMONSTRATIVA",
  "demoRouteValue": "✈️ Aeroporto de Congonhas (A) → 🏁 Avenida Paulista · MASP (B)",
  "toggleSafeRoute": "Ver Desvio Seguro Sugerido",
  "toggleDirectRoute": "Ver Rota Direta (com Alertas)",
  "simViewBoth": "Comparar Ambas",
  "simViewSafe": "🛡️ Desvio Seguro",
  "simViewDirect": "⚠️ Rota com Risco",
  "simBadgeRisk": "⚠️ Rota Direta (Alerta)",
  "simBadgeSafe": "🛡️ Desvio Seguro SAFEJY",
  "simTipRisk": "Recomendação: Mantenha vidros fechados e pertences fora de vista.",
  "simTipSafe": "Recomendação: Rota recomendada para circular com tranquilidade.",
  "contrastMode": "Modo Alto Contraste",
  "legendRouteDirect": "Rota direta (com alerta)",
  "legendRouteSafe": "Desvio seguro",
  "routeResultDirect": "Rota com Risco Detectado",
  "routeResultSafe": "Desvio Seguro Sugerido",
  "riskRecDirect": "Recomendação: Mantenha vidros fechados e evite manusear celulares nos semáforos.",
  "riskRecSafe": "Recomendação: Trajeto pelas vias monitoradas, indicado para turistas e trânsito noturno.",
  "watchIntro": "Vídeo da Marca",
  "waitlistEyebrow": "VERSÃO BETA DO APP",
  "waitlistTitle": "Tenha o SAFEJY no seu bolso.",
  "waitlistSubtitle": "Estamos desenvolvendo o aplicativo móvel com alertas em tempo real para São Paulo. Inscreva-se para testar com exclusividade antes do lançamento oficial.",
  "emailLabel": "Seu e-mail",
  "profileLabel": "Seu perfil",
  "profileOpt1": "Turista / Visitante",
  "profileOpt2": "Motorista de App / Entregador",
  "profileOpt3": "Morador / Estudante",
  "profileOpt4": "Empresa / Viagem a Negócios",
  "waitlistBtn": "Quero Acesso Antecipado",
  "waitlistSuccess": "🎉 Inscrição confirmada! Você receberá nosso convite exclusivo para testar a versão Beta do SAFEJY.",
  "waitlistInvalid": "Por favor, informe um endereço de e-mail válido.",
  "waitlistDisclaimer": "🔒 Seus dados não serão compartilhados. Sem spam.",
  "articleInPt": "(Artigo fonte em português)",
  "betaBannerEyebrow": "BETA EXCLUSIVO",
  "betaBannerTitle": "Quer testar o SAFEJY no seu celular?",
  "betaBannerDesc": "Inscreva-se na nossa lista de acesso antecipado para receber alertas em tempo real em São Paulo.",
  "betaBannerBtn": "Garantir Vaga no Beta",
  "waitlistAlreadyExists": "✓ Você já está inscrito! Enviaremos seu convite exclusivo em breve."
};
document.querySelectorAll('[data-i18n]').forEach(el => { portuguese[el.dataset.i18n] = el.innerHTML; });

let language = 'pt';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const headerEl = document.querySelector('.header');

function updateMenuToggleLabel() {
  if (!menuToggle) return;
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  const label = language === 'pt'
    ? (isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação')
    : (isOpen ? 'Close navigation menu' : 'Open navigation menu');
  menuToggle.setAttribute('aria-label', label);
  menuToggle.title = label;
}

function toggleMenu(forceState) {
  if (!mainNav || !menuToggle) return;
  const willOpen = typeof forceState === 'boolean' ? forceState : !mainNav.classList.contains('is-open');
  mainNav.classList.toggle('is-open', willOpen);
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  updateMenuToggleLabel();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => toggleMenu());
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
  document.addEventListener('click', (event) => {
    if (mainNav.classList.contains('is-open') && headerEl && !headerEl.contains(event.target)) {
      toggleMenu(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });
}

function updateThemeLabels() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = language === 'pt'
    ? (dark ? 'Ativar tema claro' : 'Ativar tema escuro')
    : (dark ? 'Switch to light theme' : 'Switch to dark theme');
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.setAttribute('aria-label', label);
    button.title = label;
    button.setAttribute('aria-pressed', String(dark));
  }
  const themeLabel = document.getElementById('theme-label');
  if (themeLabel) {
    themeLabel.textContent = language === 'pt'
      ? (dark ? 'Modo claro' : 'Modo escuro')
      : (dark ? 'Light mode' : 'Dark mode');
  }
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.content = theme === 'dark' ? '#101b15' : '#ffffff';
  }
  updateThemeLabels();
}

function setLanguage(value) {
  language = value;
  try {
    localStorage.setItem('safejy-lang', language);
  } catch (error) {
    /* Storage can be disabled for local files. */
  }

  const dictionary = language === 'en' ? english : portuguese;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

  // Atualizar título específico para cada tela
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const pageTitles = {
    'index.html': { pt: 'SAFEJY — Planeje seu caminho.', en: 'SAFEJY — Plan your journey.' },
    'a-solucao.html': { pt: 'A Solução — SAFEJY', en: 'The Solution — SAFEJY' },
    'por-que-existimos.html': { pt: 'Por que existimos — SAFEJY', en: 'Why We Exist — SAFEJY' },
    'para-quem.html': { pt: 'Para quem — SAFEJY', en: 'Who It’s For — SAFEJY' },
    'intro.html': { pt: 'SAFEJY — Introdução', en: 'SAFEJY — Introduction' }
  };
  const titleConfig = pageTitles[currentPath] || pageTitles['index.html'];
  document.title = language === 'pt' ? titleConfig.pt : titleConfig.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (dictionary[el.dataset.i18n] !== undefined) el.innerHTML = dictionary[el.dataset.i18n];
  });
  document.querySelectorAll('[data-lang]').forEach(button => {
    const active = button.dataset.lang === language;
    button.setAttribute('aria-pressed', String(active));
    if (button.dataset.lang === 'pt') {
      button.setAttribute('aria-label', language === 'pt' ? 'Mudar para português' : 'Switch to Portuguese');
    } else {
      button.setAttribute('aria-label', language === 'pt' ? 'Mudar para inglês' : 'Switch to English');
    }
  });
  document.querySelectorAll('img[data-alt-pt]').forEach(img => {
    img.alt = language === 'pt' ? img.dataset.altPt : img.dataset.altEn;
  });
  if (mainNav) {
    mainNav.setAttribute('aria-label', language === 'pt' ? 'Principal' : 'Main navigation');
  }
  const idLogo = document.querySelector('.identity-logo');
  if (idLogo) {
    idLogo.alt = language === 'pt'
      ? 'Logo SAFEJY: escudo e marcador em tons de verde'
      : 'SAFEJY logo: a shield and location pin in shades of green';
  }
  document.querySelectorAll('.brand').forEach(el => {
    el.setAttribute('aria-label', language === 'pt' ? 'SAFEJY — início' : 'SAFEJY — home');
  });
  updateThemeLabels();
  updateMenuToggleLabel();
  if (typeof updateSimulatorUI === 'function') {
    updateSimulatorUI();
  }
}


function updateActiveNavLink() {
  const navLinks = Array.from(document.querySelectorAll('.header nav a'));
  const sections = Array.from(document.querySelectorAll('.pitch-section[id]'));
  if (!sections.length) return;

  function setCurrentById(id) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (visible && visible.target.id) {
        setCurrentById(visible.target.id);
      }
    }, { rootMargin: '-35% 0px -50% 0px' });
    sections.forEach(sec => observer.observe(sec));
  }

  // Navegação por teclado (PageDown / PageUp) entre os slides da apresentação
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'PageDown' && event.key !== 'PageUp') return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    event.preventDefault();
    const scrollMid = window.scrollY + window.innerHeight * 0.35;
    let currentIdx = sections.findIndex((sec, i) => {
      const next = sections[i + 1];
      return !next || scrollMid < next.offsetTop;
    });
    if (currentIdx < 0) currentIdx = 0;
    const targetIdx = event.key === 'PageDown'
      ? Math.min(sections.length - 1, currentIdx + 1)
      : Math.max(0, currentIdx - 1);
    sections[targetIdx].scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
  });
}

function focusMap() {
  const map = document.getElementById('demo');
  if (map) {
    map.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' });
    map.focus({ preventScroll: true });
  }
}

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try {
      localStorage.setItem('safejy-theme', theme);
    } catch (error) {
      /* Storage can be disabled for local files. */
    }
  });
}

// Navegação suave ao clicar na logo ou links da home
document.querySelectorAll('.brand, a[href="index.html"]').forEach(brand => {
  brand.addEventListener('click', (e) => {
    const rawPath = window.location.pathname.split('/').pop() || 'index';
    const currentClean = rawPath.replace(/\.html$/, '') || 'index';
    if (currentClean === 'index') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
  if (anchor.getAttribute('href') === '#demo') {
    event.preventDefault();
    focusMap();
  }
}));

const viewMapBtn = document.getElementById('view-map');
if (viewMapBtn) {
  viewMapBtn.addEventListener('click', focusMap);
}

// ===== Simulador Demonstrativo SAFEJY =====
const demoRoute = {
  directD: "M 80 340 Q 220 280 270 210 T 490 110",
  safeD: "M 80 340 C 145 410, 390 415, 430 325 S 485 180, 490 110",
  pinA: { x: 80, y: 340, namePt: "A · Congonhas", nameEn: "A · Congonhas" },
  pinB: { x: 490, y: 110, namePt: "B · Av. Paulista", nameEn: "B · Paulista Ave" },
  directDescPt: "Trajeto pela Av. 23 de Maio com trecho central de alta concentração de furtos de celular em semáforos (dados SSP/FECAP).",
  directDescEn: "Route via 23 de Maio Ave crossing central sectors with recorded stoplight phone thefts (SSP/FECAP data).",
  safeDescPt: "Desvio seguro sugerido através de vias expressas monitoradas com iluminação contínua e maior patrulhamento.",
  safeDescEn: "Suggested safe detour via monitored expressways with continuous lighting and active patrolling."
};

let currentSimView = "both"; // "both" | "safe" | "direct"
let isHighContrastActive = false;

function updateSimulatorUI() {
  const route = demoRoute;
  const isEn = language === "en";

  // Atualizar caminhos SVG
  const pathDirect = document.getElementById("svg-route-direct");
  const pathSafe = document.getElementById("svg-route-safe");

  if (pathDirect) {
    pathDirect.setAttribute("d", route.directD);
    if (currentSimView === "safe") {
      pathDirect.style.opacity = "0.15";
      pathDirect.classList.remove("route-danger-glow");
    } else {
      pathDirect.style.opacity = "1";
      pathDirect.classList.add("route-danger-glow");
    }
  }

  if (pathSafe) {
    pathSafe.setAttribute("d", route.safeD);
    if (currentSimView === "direct") {
      pathSafe.classList.add("is-hidden");
      pathSafe.style.display = "none";
    } else {
      pathSafe.classList.remove("is-hidden");
      pathSafe.style.display = "block";
      pathSafe.style.opacity = "1";
    }
  }

  // Atualizar Pins
  const pinA = document.getElementById("svg-pin-a");
  const labelA = document.getElementById("svg-label-a");
  if (pinA) pinA.setAttribute("transform", `translate(${route.pinA.x} ${route.pinA.y})`);
  if (labelA) labelA.textContent = isEn ? route.pinA.nameEn : route.pinA.namePt;

  const pinB = document.getElementById("svg-pin-b");
  const labelB = document.getElementById("svg-label-b");
  if (pinB) pinB.setAttribute("transform", `translate(${route.pinB.x} ${route.pinB.y})`);
  if (labelB) labelB.textContent = isEn ? route.pinB.nameEn : route.pinB.namePt;

  // Atualizar painel de status duplo
  const simDirectDesc = document.getElementById("sim-direct-desc");
  const simSafeDesc = document.getElementById("sim-safe-desc");
  if (simDirectDesc) {
    simDirectDesc.textContent = isEn ? route.directDescEn : route.directDescPt;
  }
  if (simSafeDesc) {
    simSafeDesc.textContent = isEn ? route.safeDescEn : route.safeDescPt;
  }

  const directCard = document.getElementById("sim-direct-card");
  const safeCard = document.getElementById("sim-safe-card");
  if (directCard) {
    directCard.classList.toggle("is-dimmed", currentSimView === "safe");
  }
  if (safeCard) {
    safeCard.classList.toggle("is-dimmed", currentSimView === "direct");
  }

  const simDirectBadge = document.getElementById("sim-direct-badge");
  const simSafeBadge = document.getElementById("sim-safe-badge");
  if (simDirectBadge) {
    simDirectBadge.textContent = isEn ? english.simBadgeRisk : portuguese.simBadgeRisk;
  }
  if (simSafeBadge) {
    simSafeBadge.textContent = isEn ? english.simBadgeSafe : portuguese.simBadgeSafe;
  }

  const simDirectTip = document.getElementById("sim-direct-tip");
  const simSafeTip = document.getElementById("sim-safe-tip");
  if (simDirectTip) {
    simDirectTip.textContent = isEn ? english.simTipRisk : portuguese.simTipRisk;
  }
  if (simSafeTip) {
    simSafeTip.textContent = isEn ? english.simTipSafe : portuguese.simTipSafe;
  }

  // Atualizar botões de visualização
  document.querySelectorAll(".sim-view-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.simView === currentSimView);
  });

  // Atualizar leitor de tela
  const liveRegion = document.getElementById("sim-aria-status");
  if (liveRegion) {
    const textA = isEn ? route.pinA.nameEn : route.pinA.namePt;
    const textB = isEn ? route.pinB.nameEn : route.pinB.namePt;
    liveRegion.textContent = isEn
      ? `Demo updated: route from ${textA} to ${textB}. View: ${currentSimView}.`
      : `Demonstração atualizada: rota de ${textA} até ${textB}. Visualização: ${currentSimView}.`;
  }
}

// Inicializar controles do Simulador
function initSimulator() {
  document.querySelectorAll(".sim-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.simView;
      if (view) {
        currentSimView = view;
        updateSimulatorUI();
      }
    });
  });

  const contrastBtn = document.getElementById("btn-contrast-mode");
  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      isHighContrastActive = !isHighContrastActive;
      document.querySelectorAll(".demo").forEach(d => d.classList.toggle("high-contrast", isHighContrastActive));
      contrastBtn.classList.toggle("is-active", isHighContrastActive);
      contrastBtn.setAttribute("aria-pressed", String(isHighContrastActive));
    });
  }

  updateSimulatorUI();
}

// ===== Inicializador do Formulário de Acesso Antecipado (Waitlist) =====
function initWaitlist() {
  const form = document.getElementById("waitlist-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("waitlist-email");
    const profileSelect = document.getElementById("waitlist-profile");
    const feedback = document.getElementById("waitlist-feedback");
    if (!emailInput || !feedback) return;
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEn = language === "en";
    if (!emailRegex.test(email)) {
      feedback.textContent = isEn ? english.waitlistInvalid : portuguese.waitlistInvalid;
      feedback.className = "waitlist-feedback error";
      emailInput.focus();
      return;
    }
    try {
      const waitlist = JSON.parse(localStorage.getItem("safejy_waitlist") || "[]");
      const alreadyExists = waitlist.some(item => item.email && item.email.toLowerCase() === email.toLowerCase());
      if (alreadyExists) {
        feedback.textContent = isEn ? english.waitlistAlreadyExists : portuguese.waitlistAlreadyExists;
        feedback.className = "waitlist-feedback success";
        emailInput.value = "";
        return;
      }
      waitlist.push({
        email,
        profile: profileSelect ? profileSelect.value : "unknown",
        date: new Date().toISOString()
      });
      localStorage.setItem("safejy_waitlist", JSON.stringify(waitlist));
    } catch (err) { }
    feedback.textContent = isEn ? english.waitlistSuccess : portuguese.waitlistSuccess;
    feedback.className = "waitlist-feedback success";
    emailInput.value = "";
  });
}

// Inicializações no carregamento da página
let initialLang = 'pt';
try {
  const savedLang = localStorage.getItem('safejy-lang');
  if (savedLang === 'en' || savedLang === 'pt') initialLang = savedLang;
} catch (error) { }

let initialTheme = 'light';
try {
  const savedTheme = localStorage.getItem('safejy-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    initialTheme = savedTheme;
  } else if (document.documentElement.dataset.theme === 'dark') {
    initialTheme = 'dark';
  }
} catch (error) { }

updateActiveNavLink();
setLanguage(initialLang);
setTheme(initialTheme);
initSimulator();
initWaitlist();

// ===== Aprimoramentos de UI: Header Scroll, Scroll Reveal & Sincronia Passos ↔ Simulador =====
function initHeaderScrollState() {
  if (!headerEl) return;
  const syncScroll = () => {
    headerEl.classList.toggle('is-scrolled', window.scrollY > 16);
  };
  syncScroll();
  window.addEventListener('scroll', syncScroll, { passive: true });
}

function initScrollReveal() {
  const targets = Array.from(document.querySelectorAll(
    '.section-heading, .article, .steps-vertical article, .demo, .info-card, .audience-list article, .roadmap > div'
  ));
  if (!targets.length) return;

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  targets.forEach((el, index) => {
    el.classList.add('reveal-item');
    el.style.transitionDelay = `${(index % 3) * 65}ms`;
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

function initStepsSimulatorSync() {
  const steps = Array.from(document.querySelectorAll('.steps-vertical article'));
  const viewOrder = ['both', 'direct', 'safe'];

  function syncActiveStep() {
    const activeIndex = viewOrder.indexOf(currentSimView);
    steps.forEach((step, idx) => {
      step.classList.toggle('is-step-active', idx === activeIndex);
    });
  }

  steps.forEach((step, idx) => {
    const targetView = viewOrder[idx];
    if (!targetView) return;
    step.addEventListener('click', () => {
      currentSimView = targetView;
      updateSimulatorUI();
      syncActiveStep();
    });
  });

  document.querySelectorAll('.sim-view-btn').forEach(btn => {
    btn.addEventListener('click', syncActiveStep);
  });

  const directCard = document.getElementById('sim-direct-card');
  const safeCard = document.getElementById('sim-safe-card');

  if (directCard) {
    directCard.addEventListener('click', () => {
      currentSimView = currentSimView === 'direct' ? 'both' : 'direct';
      updateSimulatorUI();
      syncActiveStep();
    });
  }

  if (safeCard) {
    safeCard.addEventListener('click', () => {
      currentSimView = currentSimView === 'safe' ? 'both' : 'safe';
      updateSimulatorUI();
      syncActiveStep();
    });
  }

  syncActiveStep();
}

initHeaderScrollState();
initScrollReveal();
initStepsSimulatorSync();

// ===== Motor de Motion: Progresso de Rota, Spotlight, Tilt 3D, Contadores & Telemetria do Mapa =====
function initScrollProgress() {
  if (reducedMotion.matches) return;
  let rafId = null;
  const update = () => {
    rafId = null;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;
    document.documentElement.style.setProperty('--scroll-progress', `${pct.toFixed(2)}%`);
  };
  const onScroll = () => {
    if (!rafId) rafId = window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}

function initInteractiveMotion() {
  if (reducedMotion.matches) return;
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!supportsHover) return;

  const cards = document.querySelectorAll('.article, .info-card, .audience-list article, .roadmap > div, .hero-media, .map-canvas');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = (x / rect.width) - 0.5;
      const ny = (y / rect.height) - 0.5;
      const rx = ny * -6.5;
      const ry = nx * 6.5;
      card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
      card.style.setProperty('--tilt-x', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${ry.toFixed(2)}deg`);
      card.style.setProperty('--px', (nx * 2).toFixed(3));
      card.style.setProperty('--py', (ny * 2).toFixed(3));
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--px', '0');
      card.style.setProperty('--py', '0');
      card.style.setProperty('--mouse-x', '-999px');
      card.style.setProperty('--mouse-y', '-999px');
    });
  });

  document.querySelectorAll('.button.primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      btn.style.setProperty('--mag-x', `${mx.toFixed(1)}px`);
      btn.style.setProperty('--mag-y', `${my.toFixed(1)}px`);
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--mag-x', '0px');
      btn.style.setProperty('--mag-y', '0px');
    });
  });
}

function initStatCounters() {
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const bigStat = document.querySelector('.big-stat');
  const stampNum = document.querySelector('.audience-stamp > span:first-child');

  function animateValue(el, target, decimals, duration, formatFn, doneFn) {
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      const current = target * eased;
      el.innerHTML = formatFn(current);
      if (t < 1) {
        window.requestAnimationFrame(tick);
      } else if (doneFn) {
        doneFn();
      }
    };
    window.requestAnimationFrame(tick);
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);

      if (entry.target === bigStat) {
        animateValue(bigStat, 18.5, 1, 1350, (val) => {
          const formatted = language === 'en' ? val.toFixed(1) : val.toFixed(1).replace('.', ',');
          return `${formatted}<span>%</span>`;
        }, () => {
          bigStat.innerHTML = language === 'en' ? english.statValue : portuguese.statValue;
        });
      }

      if (entry.target === stampNum) {
        animateValue(stampNum, 3, 0, 900, (val) => {
          return String(Math.max(1, Math.round(val))).padStart(2, '0');
        }, () => {
          stampNum.textContent = '03';
        });
      }
    });
  }, { threshold: 0.45 });

  if (bigStat) obs.observe(bigStat);
  if (stampNum) obs.observe(stampNum);
}

function initLiveMapTelemetry() {
  if (reducedMotion.matches) return;

  const svg = document.getElementById('safejy-city-map');
  const pathSafe = document.getElementById('svg-route-safe');
  const solutionSection = document.getElementById('como-funciona');
  const steps = Array.from(document.querySelectorAll('.steps-vertical article'));
  const viewOrder = ['both', 'direct', 'safe'];

  // Múltiplas partículas vivas percorrendo a rota segura + sonares de risco e pinos
  if (svg && pathSafe && typeof pathSafe.getTotalLength === 'function') {
    const ns = 'http://www.w3.org/2000/svg';
    const riskGroup = document.getElementById('risk-polygon-1');
    const pinA = document.getElementById('svg-pin-a');
    const pinB = document.getElementById('svg-pin-b');

    if (riskGroup) {
      const riskSonar = document.createElementNS(ns, 'circle');
      riskSonar.setAttribute('class', 'map-risk-sonar');
      riskSonar.setAttribute('cx', '302');
      riskSonar.setAttribute('cy', '225');
      riskSonar.setAttribute('r', '26');
      riskGroup.appendChild(riskSonar);
    }

    [pinA, pinB].forEach(pin => {
      if (!pin) return;
      const sonar = document.createElementNS(ns, 'circle');
      sonar.setAttribute('class', 'map-pin-sonar');
      sonar.setAttribute('r', '15');
      pin.insertBefore(sonar, pin.firstChild);
    });

    const pucks = [0, 0.33, 0.66].map((offset, i) => {
      const puck = document.createElementNS(ns, 'g');
      puck.setAttribute('class', 'map-live-puck');
      puck.setAttribute('aria-hidden', 'true');

      const ring = document.createElementNS(ns, 'circle');
      ring.setAttribute('class', 'map-live-puck-ring');
      ring.setAttribute('r', i === 0 ? '15' : '10');

      const core = document.createElementNS(ns, 'circle');
      core.setAttribute('class', 'map-live-puck-core');
      core.setAttribute('r', i === 0 ? '6.5' : '4.5');

      puck.appendChild(ring);
      puck.appendChild(core);
      svg.appendChild(puck);
      return { puck, offset };
    });

    const totalLen = pathSafe.getTotalLength();
    const cycleMs = 4600;
    const startTime = performance.now();

    const animatePucks = (now) => {
      const hidden = currentSimView === 'direct';
      pucks.forEach(({ puck, offset }) => {
        if (hidden) {
          puck.style.opacity = '0';
          return;
        }
        puck.style.opacity = '1';
        const progress = (((now - startTime) / cycleMs) + offset) % 1;
        const pt = pathSafe.getPointAtLength(progress * totalLen);
        puck.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
      });
      window.requestAnimationFrame(animatePucks);
    };
    window.requestAnimationFrame(animatePucks);
  }

  // Redesenho fluido da rota segura ao alternar visualização
  function triggerRouteDraw() {
    if (!pathSafe || currentSimView === 'direct') return;
    pathSafe.classList.remove('is-drawing');
    void pathSafe.getBoundingClientRect();
    pathSafe.classList.add('is-drawing');
  }

  // Ciclo automático elegante enquanto o usuário observa o simulador (pausa em interação manual)
  let autoCycleTimer = null;
  let userTookControl = false;

  function stopAutoCycle() {
    userTookControl = true;
    document.body.classList.remove('sim-autocycle');
    if (autoCycleTimer) {
      window.clearInterval(autoCycleTimer);
      autoCycleTimer = null;
    }
  }

  function advanceDemoView() {
    if (userTookControl) return;
    const nextIdx = (viewOrder.indexOf(currentSimView) + 1) % viewOrder.length;
    currentSimView = viewOrder[nextIdx];
    updateSimulatorUI();
    steps.forEach((step, idx) => step.classList.toggle('is-step-active', idx === nextIdx));
    triggerRouteDraw();
  }

  document.querySelectorAll('.steps-vertical article, .sim-view-btn, #sim-direct-card, #sim-safe-card').forEach(el => {
    el.addEventListener('click', () => {
      stopAutoCycle();
      triggerRouteDraw();
    });
  });

  if (solutionSection && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (userTookControl) return;
        if (entry.isIntersecting) {
          document.body.classList.add('sim-autocycle');
          if (!autoCycleTimer) {
            autoCycleTimer = window.setInterval(advanceDemoView, 4500);
          }
        } else {
          document.body.classList.remove('sim-autocycle');
          if (autoCycleTimer) {
            window.clearInterval(autoCycleTimer);
            autoCycleTimer = null;
          }
        }
      });
    }, { threshold: 0.3 });
    obs.observe(solutionSection);
  }
}

initScrollProgress();
initInteractiveMotion();
initStatCounters();
initLiveMapTelemetry();

// ===== Assinatura Espacial SAFEJY: Canvas Cartográfico Vivo, Cursor Spring & AR HUD no Hero =====
function initAmbientCartographyCanvas() {
  if (reducedMotion.matches) return;
  const canvas = document.createElement('canvas');
  canvas.id = 'safejy-ambient-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let dpr = 1;
  const mouse = { x: -9999, y: -9999, active: false };
  const spacing = 84;
  const pulses = Array.from({ length: 14 }, (_, i) => ({
    x: Math.random() * 1400,
    y: Math.random() * 900,
    vx: (i % 2 === 0 ? 1 : -1) * (0.45 + Math.random() * 0.55),
    vy: (i % 3 === 0 ? 0.35 : -0.35) * (0.45 + Math.random() * 0.55),
    r: 2.2 + (i % 3) * 0.9
  }));

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }, { passive: true });
  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  function draw(now) {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const scrollOffset = (window.scrollY * 0.16) % spacing;
    ctx.clearRect(0, 0, w, h);

    // Grade cartográfica sutil com nós interativos próximos ao cursor
    ctx.lineWidth = 1;
    const baseLine = isDark ? 'rgba(146, 233, 86, 0.055)' : 'rgba(8, 124, 59, 0.048)';
    const baseNode = isDark ? 'rgba(146, 233, 86, 0.14)' : 'rgba(8, 124, 59, 0.12)';

    ctx.strokeStyle = baseLine;
    ctx.beginPath();
    for (let x = 0; x <= w; x += spacing) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = -scrollOffset; y <= h; y += spacing) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();

    for (let x = 0; x <= w; x += spacing) {
      for (let y = -scrollOffset; y <= h; y += spacing) {
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.hypot(dx, dy);
        if (mouse.active && dist < 170) {
          const factor = 1 - dist / 170;
          ctx.fillStyle = isDark
            ? `rgba(146, 233, 86, ${(0.18 + factor * 0.55).toFixed(2)})`
            : `rgba(8, 124, 59, ${(0.15 + factor * 0.48).toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5 + factor * 2.5, 0, Math.PI * 2);
          ctx.fill();

          if (dist < 130) {
            ctx.strokeStyle = isDark
              ? `rgba(146, 233, 86, ${(factor * 0.28).toFixed(2)})`
              : `rgba(8, 124, 59, ${(factor * 0.22).toFixed(2)})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        } else {
          ctx.fillStyle = baseNode;
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }
    }

    // Pulsos móveis de rota urbana
    pulses.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;

      const glow = 0.25 + 0.15 * Math.sin(now * 0.002 + idx);
      ctx.fillStyle = isDark
        ? `rgba(146, 233, 86, ${glow.toFixed(2)})`
        : `rgba(8, 124, 59, ${(glow * 0.85).toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(draw);
}

function initCustomCursor() {
  if (reducedMotion.matches) return;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!finePointer) return;

  const ring = document.createElement('div');
  ring.className = 'safejy-cursor-ring';
  ring.setAttribute('aria-hidden', 'true');

  const dot = document.createElement('div');
  dot.className = 'safejy-cursor-dot';
  dot.setAttribute('aria-hidden', 'true');

  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let targetX = -100;
  let targetY = -100;
  let ringX = -100;
  let ringY = -100;
  let angle = 0;

  window.addEventListener('mousemove', (e) => {
    if (!document.body.classList.contains('has-custom-cursor')) {
      document.body.classList.add('has-custom-cursor');
    }
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

    const interactive = e.target && e.target.closest('a, button, .article, .info-card, .steps-vertical article, .sim-status-card, .audience-list article');
    ring.classList.toggle('is-hovering', Boolean(interactive));
  }, { passive: true });

  window.addEventListener('mousedown', () => ring.classList.add('is-clicking'));
  window.addEventListener('mouseup', () => ring.classList.remove('is-clicking'));
  document.addEventListener('mouseleave', () => document.body.classList.remove('has-custom-cursor'));

  function loop() {
    ringX += (targetX - ringX) * 0.16;
    ringY += (targetY - ringY) * 0.16;
    angle = (angle + (ring.classList.contains('is-hovering') ? 1.1 : 0.35)) % 360;
    ring.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0) rotate(${angle.toFixed(1)}deg)`;
    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
}

function initHeroArHud() {
  const heroMedia = document.querySelector('.hero-media');
  if (!heroMedia || heroMedia.querySelector('.hero-ar-hud')) return;

  const ns = 'http://www.w3.org/2000/svg';
  const hud = document.createElementNS(ns, 'svg');
  hud.setAttribute('class', 'hero-ar-hud');
  hud.setAttribute('viewBox', '0 0 640 480');
  hud.setAttribute('aria-hidden', 'true');

  hud.innerHTML = `
    <defs>
      <linearGradient id="ar-scan-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#92E956" stop-opacity="0"/>
        <stop offset="50%" stop-color="#92E956" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#92E956" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="ar-route-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#92E956" stop-opacity="0.2"/>
        <stop offset="55%" stop-color="#92E956" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.95"/>
      </linearGradient>
    </defs>

    <!-- Feixe de scan topográfico contínuo -->
    <rect class="ar-scan-line" x="0" y="0" width="640" height="28" fill="url(#ar-scan-grad)"/>

    <!-- Cantoneiras de visor cartográfico -->
    <g stroke="rgba(255,255,255,0.72)" stroke-width="2" fill="none" stroke-linecap="round">
      <path d="M22 44 V22 H44"/>
      <path d="M596 22 H618 V44"/>
      <path d="M22 436 V458 H44"/>
      <path d="M596 458 H618 V436"/>
    </g>

    <!-- Bússola orbital giratória no canto superior esquerdo -->
    <g>
      <circle class="ar-compass-outer" cx="54" cy="54" r="20" fill="rgba(11,31,21,0.38)" stroke="#92E956" stroke-width="1.5" stroke-dasharray="6 4"/>
      <circle class="ar-compass-inner" cx="54" cy="54" r="12" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="54" cy="54" r="3" fill="#92E956"/>
    </g>

    <!-- Barras de telemetria satelital no canto inferior esquerdo -->
    <g class="ar-bars" fill="#92E956">
      <rect x="34" y="422" width="4" height="16" rx="2"/>
      <rect x="42" y="416" width="4" height="22" rx="2"/>
      <rect x="50" y="410" width="4" height="28" rx="2"/>
      <rect x="58" y="419" width="4" height="19" rx="2"/>
    </g>

    <!-- Projeção de rota AR segura na calçada -->
    <path d="M120 468 C210 388, 330 375, 488 338" fill="none" stroke="rgba(11,31,21,0.38)" stroke-width="10" stroke-linecap="round"/>
    <path class="ar-route-flow" d="M120 468 C210 388, 330 375, 488 338" fill="none" stroke="url(#ar-route-grad)" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 8"/>

    <!-- Alvo de destino pulsante no eixo da Avenida Paulista -->
    <g transform="translate(492 336)">
      <circle class="ar-pin-ripple" r="14" fill="none" stroke="#92E956" stroke-width="2"/>
      <circle r="7" fill="#92E956" stroke="#0B1F15" stroke-width="2"/>
    </g>
  `;

  heroMedia.appendChild(hud);
}

initAmbientCartographyCanvas();
initCustomCursor();
initHeroArHud();



