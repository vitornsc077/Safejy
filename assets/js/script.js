'use strict';

(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lenisInstance = null;

  // ===== 1. Tema Claro / Escuro (Fundo Safejy) =====
  let language = 'pt';

  function updateThemeLabels() {
    const dark = root.dataset.theme === 'dark';
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
    root.dataset.theme = theme;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = theme === 'dark' ? '#0D1812' : '#f5f7f6';
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) metaColorScheme.content = theme === 'dark' ? 'dark' : 'only light';
    updateThemeLabels();
  }

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      try { localStorage.setItem('safejy-theme', next); } catch (e) { }
    });
  }

  // ===== 2. Conteúdo e Traduções Oficiais (eliassouza71727-spec.github.io/Safejy) =====
  const menu = document.querySelector('.mobile-menu');
  const nav = document.getElementById('navigation');
  const filterBtns = Array.from(document.querySelectorAll('.filter'));
  const stories = Array.from(document.querySelectorAll('.story'));
  const layers = Array.from(document.querySelectorAll('.switch-option'));
  const marks = Array.from(document.querySelectorAll('.mark'));
  const tip = document.getElementById('map-tooltip');

  let selectedMark = null;
  let activeLayer = 'all';

  const english = [
    ['.skip', 'Skip to content'],
    ['#navigation a:nth-child(1)', 'The challenge'],
    ['#navigation a:nth-child(2)', 'The platform'],
    ['#navigation a:nth-child(3)', 'Real news'],
    ['#navigation a:nth-child(4)', 'Our vision'],
    ['.header-cta', 'Explore the concept ↗'],
    ['.hero-line .eyebrow', 'Urban safety · Information with context'],
    ['#main-title', 'Every<br>second<br><em>counts.</em>'],
    ['.hero-sub', 'An unfamiliar city should not mean a lack of information. Safejy connects <strong>people, public data and verified news</strong> to help you understand the places you move through.'],
    ['.hero-actions a:nth-child(1)', 'Discover Safejy <span class="arrow">↗</span>'],
    ['.hero-actions a:nth-child(2)', 'See verified news <span class="arrow">↗</span>'],
    ['.scroll-hint span:last-child', 'Scroll to explore'],
    ['.hero-bottom .micro', 'For people driving, visiting or discovering a place for the first time.'],
    ['.dash-header .micro:nth-of-type(2)', 'safejy / area overview'],
    ['.dash-header .micro:nth-of-type(3)', '● PREVIEW'],
    ['.dash-side .side-item:nth-of-type(1)', '<span class="side-square"></span>Overview'],
    ['.dash-side .side-item:nth-of-type(2)', '<span class="side-square"></span>Sources'],
    ['.dash-side .side-item:nth-of-type(3)', '<span class="side-square"></span>News'],
    ['.dash-side .side-item:nth-of-type(4)', '<span class="side-square"></span>Support'],
    ['.float-tag.one strong', 'Published report'],
    ['.float-tag.one span', 'Check the original source'],
    ['.float-tag.two strong', 'Useful references'],
    ['.float-tag.two span', 'Source information first'],
    ['.mini-card .micro', 'VERIFIED INFORMATION'],
    ['.mini-card small', 'Sources and information together in one place.'],
    ['.hero-note', '*Concept preview. Not a real risk map.'],
    ['.divider-cell:nth-child(1) strong', '01 / Understand'],
    ['.divider-cell:nth-child(1)>div>span', 'Before traveling or accepting a ride.'],
    ['.divider-cell:nth-child(2) strong', '02 / Verify'],
    ['.divider-cell:nth-child(2)>div>span', 'With identified data and sources.'],
    ['.divider-cell:nth-child(3) strong', '03 / Decide'],
    ['.divider-cell:nth-child(3)>div>span', 'With context, not fear.'],
    ['.why .eyebrow', '01 / The challenge'],
    ['.why h2', 'Risk does not<br>announce<br>itself<span style="color:var(--violet)">.</span>'],
    ['.why .section-intro', 'What do you do when you arrive in an unfamiliar neighborhood? Finding out what happened there recently is not always easy — information is often scattered across news outlets, public databases and official websites.'],
    ['.small-flag>span:last-child', 'Information is not fear. It is the freedom to choose.'],
    ['.why-item:nth-child(1) h3', 'For rideshare drivers'],
    ['.why-item:nth-child(1) p', 'A starting point for checking information about unfamiliar places before setting off.'],
    ['.why-item:nth-child(2) h3', 'For local residents'],
    ['.why-item:nth-child(2) p', 'Local news and indicators shown transparently, without labeling entire neighborhoods as dangerous.'],
    ['.why-item:nth-child(3) h3', 'For tourists and visitors'],
    ['.why-item:nth-child(3) p', 'More information for people exploring a city, its routes and neighborhoods.'],
    ['.preview .eyebrow.dark', '02 / The platform'],
    ['.preview-heading .section-title', 'A clearer picture<br>of the city, in one place.'],
    ['.preview-heading>p', 'A clear view of useful information. Below is an <strong>interactive preview</strong> of how map layers could work in the future.'],
    ['.panel-left>.eyebrow', 'SAFEJY / LAB'],
    ['.panel-left h3', 'Explore the<br>map preview.'],
    ['.panel-left>p', 'Choose a layer to see the route and support points. This demo uses <strong>fictional markers</strong>, not real incident data.'],
    ['.switch-option[data-layer="all"] .switch-label', '<i></i>All layers'],
    ['.switch-option[data-layer="attention"] .switch-label', '<i></i>Alerts'],
    ['.switch-option[data-layer="support"] .switch-label', '<i></i>Support points'],
    ['.panel-bottom', 'Real routes require current, georeferenced data. The route and support points shown here are illustrative.'],
    ['.map-caption', '◉ INTERACTIVE MAP <span>Illustrative route · no location data</span>'],
    ['.map-disclaimer span:last-child', '<b>Important:</b> This demo illustrates an interface. It does not identify dangerous areas or provide real routes or emergency guidance. Verified news appears below.'],
    ['.news-head .eyebrow', '03 / Real information'],
    ['.news-head h2', 'Real news.<br>Sources you can check<span style="color:var(--violet)">.</span>'],
    ['.news-head>p', 'Selected news reports and public information about safety and mobility in São Paulo state. Each story includes its source, publication date and a link to the original article.'],
    ['.filter[data-filter="all"]', 'All news'],
    ['.filter[data-filter="mobilidade"]', 'Mobility'],
    ['.filter[data-filter="cidade"]', 'City life'],
    ['.story[data-type="mobilidade"] .story-category', 'Mobility'],
    ['.story[data-type="cidade"] .story-category', 'City life'],
    ['.story:nth-child(1) .story-meta span:first-child', '08 OCT 2026'],
    ['.story:nth-child(2) .story-meta span:first-child', '29 OCT 2026'],
    ['.story:nth-child(3) .story-meta span:first-child', '04 NOV 2026'],
    ['.story:nth-child(4) .story-meta span:first-child', '09 NOV 2026'],
    ['.story:nth-child(1) h3', 'Report compiles crimes reported by rideshare drivers in São Paulo'],
    ['.story:nth-child(1) p', 'The report examines 1,663 police reports registered across the state between January and July 2026, including where and when incidents occurred.'],
    ['.story:nth-child(2) h3', 'Police arrest suspects accused of extorting passengers near Barra Funda'],
    ['.story:nth-child(2) p', 'According to São Paulo’s Public Security Department, the operation investigated suspects posing as rideshare drivers near the transit terminal.'],
    ['.story:nth-child(3) h3', 'Phone robberies in São Paulo state fell 19.3% from January to September'],
    ['.story:nth-child(3) p', 'A report released in November cites 61,189 cases in 2026, compared with 75,859 during the same period a year earlier.'],
    ['.story:nth-child(4) h3', 'Phone-related theft and robbery rose in 17 districts in São Paulo city'],
    ['.story:nth-child(4) p', 'The story notes that despite a citywide decline, 17 of 93 police districts recorded an increase in phone thefts and robberies.'],
    ['.story:nth-child(1) .story-bottom .micro', 'SOURCE: CNN BRASIL'],
    ['.story:nth-child(2) .story-bottom .micro', 'SOURCE: SSP-SP'],
    ['.story:nth-child(3) .story-bottom .micro', 'SOURCE: AGÊNCIA BRASIL'],
    ['.story:nth-child(4) .story-bottom .micro', 'SOURCE: METRÓPOLES'],
    ['.story:nth-child(1) .story-bottom>a', 'Read report <span class="arrow">↗</span>'],
    ['.story:nth-child(2) .story-bottom>a', 'Read article <span class="arrow">↗</span>'],
    ['.story:nth-child(3) .story-bottom>a', 'Read article <span class="arrow">↗</span>'],
    ['.story:nth-child(4) .story-bottom>a', 'Read report <span class="arrow">↗</span>'],
    ['.news-foot', 'Editorial selection reviewed on <strong>November 15, 2026</strong>. This prototype does not update news automatically. Historical statistics are not live safety alerts and cannot, on their own, determine the risk of a street. <a href="https://www.ssp.sp.gov.br/estatistica/pesquisa.aspx" target="_blank" rel="noopener noreferrer">View São Paulo public security statistics ↗</a>'],
    ['.pitch .eyebrow', '04 / Our vision'],
    ['.pitch .section-title', 'The right<br>information,<br><span>at the right<br>time.</span>'],
    ['.pitch-end>span:last-child', 'Safejy · A new way to understand the city.'],
    ['.pitch-side p', 'We are designing a platform concept that brings public data and local news closer to the people who need to better understand their city. For drivers, visitors and residents — with clear information about where each piece of information comes from and when it was published.'],
    ['.pitch-side a.button', 'Back to top <span class="arrow">↑</span>'],
    ['.foot-links a:nth-child(1)', 'The challenge'],
    ['.foot-links a:nth-child(2)', 'Platform'],
    ['.foot-links a:nth-child(3)', 'News'],
    ['.foot-links a:nth-child(4)', 'Vision'],
    ['.foot-small', 'Concept project · 2026<br>Information handled responsibly.'],
    ['.foot-bottom span:nth-child(1)', '© Safejy. Presentation concept.'],
    ['.foot-bottom span:nth-child(2)', 'Not a replacement for emergency services or public safety authorities.']
  ];

  const ptInfo = {
    welcome: { label: 'VISUALIZAÇÃO ILUSTRATIVA', title: 'Explore o percurso', desc: 'Escolha um marcador para conhecer os tipos de informação previstos para o Safejy.' },
    info: { label: 'PONTO DE APOIO · EXEMPLO', title: 'Uma referência útil', desc: 'Na plataforma real, estes pontos poderiam reunir referências públicas verificáveis, com endereço, data e origem. Esta localização é fictícia.' },
    attention: { label: 'ALERTA · EXEMPLO', title: 'Informações que precisam de confirmação', desc: 'Um alerta real precisaria indicar o que aconteceu, quando, onde e a fonte. Este exemplo não representa uma ocorrência.' },
    source: { label: 'FONTE · EXEMPLO', title: 'Origem transparente', desc: 'Cada informação precisa indicar quem publicou e quando foi atualizada. Este marcador é ilustrativo.' },
    all: { label: 'CAMADAS ATIVAS', title: 'Mapa demonstrativo completo', desc: 'O trajeto acompanha as ruas desenhadas. Os pontos e o percurso são fictícios: selecione um marcador para explorar.' },
    support: { label: 'FILTRO ATIVO', title: 'Pontos de apoio', desc: 'Referências úteis de exemplo, sem correspondência com pontos de apoio reais. Selecione um marcador para conhecer o conceito.' },
    attentionLayer: { label: 'FILTRO ATIVO', title: 'Alertas ilustrativos', desc: 'Os alertas mostrados são fictícios. Selecione o marcador vermelho para entender quais dados seriam exibidos.' }
  };

  const enInfo = {
    welcome: { label: 'ILLUSTRATIVE PREVIEW', title: 'Explore the route', desc: 'Select a marker to see the kinds of information Safejy might provide.' },
    info: { label: 'SUPPORT POINT · EXAMPLE', title: 'A useful reference', desc: 'A real platform could include verified public references, with locations, dates and sources. This location is fictional.' },
    attention: { label: 'ALERT · EXAMPLE', title: 'Information requiring verification', desc: 'A real alert should say what happened, where, when and from which source. This is not a real incident.' },
    source: { label: 'SOURCE · EXAMPLE', title: 'Transparent sourcing', desc: 'Every item should identify who published it and when it was updated. This marker is illustrative.' },
    all: { label: 'ACTIVE LAYERS', title: 'Full map preview', desc: 'The route follows the streets shown. All points and the route are fictional. Select a marker to explore.' },
    support: { label: 'ACTIVE FILTER', title: 'Support points', desc: 'Illustrative references, not actual places offering assistance. Select a marker for details.' },
    attentionLayer: { label: 'ACTIVE FILTER', title: 'Illustrative alerts', desc: 'These alerts are fictional. Select the red marker to see what information would be provided.' }
  };

  const originals = new WeakMap();
  for (const [selector] of english) {
    document.querySelectorAll(selector).forEach(el => {
      if (!originals.has(el)) originals.set(el, el.innerHTML);
    });
  }

  function drawTooltip(item) {
    if (!tip) return;
    const d = (language === 'en' ? enInfo : ptInfo)[item];
    if (!d) return;
    tip.innerHTML = `<span class="micro" style="color:var(--violet)">${d.label}</span><strong>${d.title}</strong><span>${d.desc}</span>`;
  }

  function setLanguage(lang) {
    language = lang === 'en' ? 'en' : 'pt';
    root.lang = language === 'en' ? 'en' : 'pt-BR';
    for (const [selector, value] of english) {
      document.querySelectorAll(selector).forEach(el => {
        el.innerHTML = language === 'en' ? value : originals.get(el);
      });
    }
    document.querySelectorAll('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === language)));
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', language === 'en'
        ? 'Safejy is a concept for making urban information easier to understand. Verified news, public sources and an interactive map preview.'
        : 'Safejy é um conceito de plataforma de informação para quem circula por regiões desconhecidas. Dados, notícias verificadas e contexto para decisões mais conscientes.');
    }
    document.title = language === 'en' ? 'Safejy — Every second counts.' : 'Safejy — Cada segundo conta.';
    updateThemeLabels();
    drawTooltip(selectedMark ?? (activeLayer === 'attention' ? 'attentionLayer' : activeLayer === 'support' ? 'support' : 'welcome'));
    try { localStorage.setItem('safejy-lang', language); } catch (e) { }
  }

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }

  // ===== 3. Scroll Progress e Reveal =====
  let ticking = false;
  const ringProgress = document.querySelector('#cinematic-scroll-ring .ring-progress');
  const pctEl = document.getElementById('hud-scroll-pct');
  const ringBtn = document.getElementById('cinematic-scroll-ring');
  const circumference = 125.66;

  function scrollToTarget(target) {
    if (lenisInstance && !reducedMotion.matches) {
      lenisInstance.scrollTo(target, { offset: -72, duration: 1.2 });
      return;
    }
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    } else if (target && typeof target.scrollIntoView === 'function') {
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    }
  }

  if (ringBtn) {
    ringBtn.addEventListener('click', () => scrollToTarget(0));
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#inicio') {
        e.preventDefault();
        scrollToTarget(0);
      } else if (href && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          scrollToTarget(el);
        }
      }
    });
  });

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty('--progress', String(ratio));
      root.style.setProperty('--scroll-progress', `${(ratio * 100).toFixed(2)}%`);
      if (ringProgress) ringProgress.style.strokeDashoffset = (circumference * (1 - ratio)).toFixed(2);
      if (pctEl) pctEl.textContent = String(Math.round(ratio * 100)).padStart(2, '0');
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.07, rootMargin: '0px 0px -45px 0px' });
    document.querySelectorAll('.reveal, .map-panel').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal, .map-panel').forEach(el => el.classList.add('in'));
  }

  // ===== 4. Filtros de Notícias & Mapa Interativo =====
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    stories.forEach(card => { card.hidden = filter !== 'all' && card.dataset.type !== filter; });
  }));

  marks.forEach(mark => {
    const choose = () => { selectedMark = mark.dataset.spot; drawTooltip(selectedMark); };
    mark.addEventListener('click', choose);
    mark.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); }
    });
  });

  layers.forEach(btn => btn.addEventListener('click', () => {
    activeLayer = btn.dataset.layer;
    selectedMark = null;
    layers.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    marks.forEach(m => {
      const dim = activeLayer !== 'all' && m.dataset.category !== activeLayer;
      m.classList.toggle('dim', dim);
      m.setAttribute('tabindex', dim ? '-1' : '0');
      m.setAttribute('aria-hidden', String(dim));
    });
    drawTooltip(activeLayer === 'all' ? 'all' : activeLayer === 'attention' ? 'attentionLayer' : 'support');
  }));

  const mapSVG = document.querySelector('.map-area > svg');
  const zoomInBtn = document.getElementById('zoom-in');
  const zoomOutBtn = document.getElementById('zoom-out');
  if (mapSVG && zoomInBtn && zoomOutBtn) {
    let scale = 1;
    const zoom = (delta) => {
      scale = Math.max(1, Math.min(1.5, Math.round((scale + delta) * 10) / 10));
      mapSVG.style.transform = `scale(${scale})`;
      mapSVG.style.transformOrigin = '50% 50%';
      mapSVG.style.transition = reducedMotion.matches ? 'none' : 'transform .28s ease';
    };
    zoomInBtn.addEventListener('click', () => zoom(0.1));
    zoomOutBtn.addEventListener('click', () => zoom(-0.1));
  }

  // ===== 5. Animações de Fundo Cinematográficas (Canvas, Cursor, Lenis + GSAP Parallax) =====
  function initAmbientCartographyCanvas() {
    if (reducedMotion.matches) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'safejy-ambient-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    const mouse = { x: -9999, y: -9999, active: false };
    const spacing = 84;
    const pulses = Array.from({ length: 20 }, (_, i) => ({
      x: (i * 97) % 1400,
      y: (i * 131) % 900,
      vx: (i % 2 === 0 ? 1 : -1) * (0.42 + (i % 4) * 0.14),
      vy: (i % 3 === 0 ? 0.36 : -0.36) * (0.42 + (i % 5) * 0.11),
      r: 2 + (i % 3) * 0.9
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
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; }, { passive: true });
    window.addEventListener('mouseleave', () => { mouse.active = false; });

    function draw(now) {
      const isDark = root.dataset.theme === 'dark';
      const scrollOffset = (window.scrollY * 0.16) % spacing;
      ctx.clearRect(0, 0, w, h);

      ctx.lineWidth = 1;
      const baseLine = isDark ? 'rgba(146, 233, 86, 0.055)' : 'rgba(8, 124, 59, 0.048)';
      ctx.strokeStyle = baseLine;
      ctx.beginPath();
      for (let x = 0; x <= w; x += spacing) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
      for (let y = -scrollOffset; y <= h; y += spacing) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
      ctx.stroke();

      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        for (let j = i + 1; j < pulses.length; j++) {
          const q = pulses[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 155) {
            const alpha = (1 - dist / 155) * (isDark ? 0.22 : 0.15);
            ctx.strokeStyle = isDark ? `rgba(146, 233, 86, ${alpha.toFixed(3)})` : `rgba(8, 124, 59, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const glow = 0.26 + 0.14 * Math.sin(now * 0.002 + i);
        ctx.fillStyle = isDark ? `rgba(146, 233, 86, ${glow.toFixed(2)})` : `rgba(8, 124, 59, ${glow.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }

  function initCinematicBackgroundMotion() {
    if (reducedMotion.matches) return;
    if (typeof window.Lenis === 'function') {
      lenisInstance = new window.Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.3
      });
      if (typeof window.ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', window.ScrollTrigger.update);
      }
    }

    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      if (lenisInstance) {
        gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      const openingMist = document.querySelector('.hero-opening-mist');
      if (openingMist) {
        gsap.fromTo(openingMist, { opacity: 0.72 }, { opacity: 0.36, duration: 1.6, ease: 'power3.out' });
      }

      gsap.matchMedia().add('(min-width: 768px)', () => {
        gsap.utils.toArray('.cine-scene [data-parallax-speed]').forEach((layer) => {
          const speed = parseFloat(layer.dataset.parallaxSpeed || '0');
          if (!speed) return;
          const parentScene = layer.closest('.cine-scene');
          gsap.to(layer, {
            yPercent: speed * 100,
            ease: 'none',
            scrollTrigger: { trigger: parentScene, start: 'top bottom', end: 'bottom top', scrub: 0.9 }
          });
        });

        const problemImg = document.querySelector('.problem-zoom-bg img');
        if (problemImg) {
          gsap.fromTo(problemImg, { scale: 1 }, {
            scale: 1.15,
            ease: 'none',
            scrollTrigger: { trigger: '#noticias', start: 'top bottom', end: 'bottom top', scrub: 1 }
          });
        }

        const solutionBg = document.querySelector('.solution-orbit-bg');
        if (solutionBg) {
          gsap.fromTo(solutionBg, { rotate: -2, scale: 1.08 }, {
            rotate: 2.2,
            scale: 1.02,
            ease: 'none',
            scrollTrigger: { trigger: '#plataforma', start: 'top bottom', end: 'bottom top', scrub: 1.1 }
          });
        }
      });
    } else if (lenisInstance) {
      const raf = (time) => { lenisInstance.raf(time); window.requestAnimationFrame(raf); };
      window.requestAnimationFrame(raf);
    }
  }

  let initialTheme = 'light';
  try {
    const savedTheme = localStorage.getItem('safejy-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') initialTheme = savedTheme;
    else if (root.dataset.theme === 'dark') initialTheme = 'dark';
  } catch (e) { }
  setTheme(initialTheme);

  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('safejy-lang') || 'pt'; } catch (e) { }
  const urlLang = new URLSearchParams(location.search).get('lang');
  setLanguage(urlLang || savedLang);

  initAmbientCartographyCanvas();
  initCinematicBackgroundMotion();
})();
