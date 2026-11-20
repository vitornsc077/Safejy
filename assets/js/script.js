'use strict';

(function () {
  var root = document.documentElement;
  var reducedMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var prefersDarkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };
  var lenisInstance = null;

  // ===== 1. Tema Claro / Escuro (respeitando preferência do sistema na 1ª visita) =====
  var language = 'pt';

  function updateThemeLabels() {
    var dark = root.dataset.theme === 'dark';
    var label = language === 'pt'
      ? (dark ? 'Ativar tema claro' : 'Ativar tema escuro')
      : (dark ? 'Switch to light theme' : 'Switch to dark theme');
    var button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('aria-label', label);
      button.title = label;
      button.setAttribute('aria-pressed', String(dark));
    }
    var themeLabel = document.getElementById('theme-label');
    if (themeLabel) {
      themeLabel.textContent = language === 'pt'
        ? (dark ? 'Modo claro' : 'Modo escuro')
        : (dark ? 'Light mode' : 'Dark mode');
    }
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = theme === 'dark' ? '#0D1812' : '#f5f7f6';
    var metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) metaColorScheme.content = theme === 'dark' ? 'dark' : 'only light';
    updateThemeLabels();
  }

  var themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      try { localStorage.setItem('safejy-theme', next); } catch (e) { }
    });
  }

  if (prefersDarkQuery && typeof prefersDarkQuery.addEventListener === 'function') {
    prefersDarkQuery.addEventListener('change', function (event) {
      var saved = null;
      try { saved = localStorage.getItem('safejy-theme'); } catch (e) { }
      if (!saved) setTheme(event.matches ? 'dark' : 'light');
    });
  }

  // ===== 2. Conteúdo, Traduções PT/EN e Acessibilidade =====
  var menu = document.querySelector('.mobile-menu');
  var nav = document.getElementById('navigation');
  var headerEl = document.querySelector('.header');
  var filterBtns = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  var stories = Array.prototype.slice.call(document.querySelectorAll('.story'));
  var layers = Array.prototype.slice.call(document.querySelectorAll('.switch-option'));
  var marks = Array.prototype.slice.call(document.querySelectorAll('.mark'));
  var tip = document.getElementById('map-tooltip');

  var selectedMark = null;
  var activeLayer = 'all';

  function updateMobileMenuLabel() {
    if (!menu || !nav) return;
    var isOpen = nav.classList.contains('open');
    var label = language === 'en'
      ? (isOpen ? 'Close menu' : 'Open menu')
      : (isOpen ? 'Fechar menu' : 'Abrir menu');
    menu.setAttribute('aria-label', label);
    menu.setAttribute('aria-expanded', String(isOpen));
  }

  var english = [
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
    ['.dash-header .dash-status', '● PREVIEW'],
    ['.dash-side .side-item:nth-of-type(1)', '<span class="side-square"></span>Overview'],
    ['.dash-side .side-item:nth-of-type(2)', '<span class="side-square"></span>Sources'],
    ['.dash-side .side-item:nth-of-type(3)', '<span class="side-square"></span>News'],
    ['.dash-side .side-item:nth-of-type(4)', '<span class="side-square"></span>Support'],
    ['.float-tag.one strong', 'Published report'],
    ['.float-tag.one span', 'Check the original source'],
    ['.float-tag.two strong', 'Useful references'],
    ['.float-tag.two span', 'Source information first'],
    ['.hero-note', '*Concept preview. Not a real risk map.'],
    ['.divider-cell:nth-child(1) strong', '01 / Understand'],
    ['.divider-cell:nth-child(1)>div>span', 'Before traveling or accepting a ride.'],
    ['.divider-cell:nth-child(2) strong', '02 / Verify'],
    ['.divider-cell:nth-child(2)>div>span', 'With identified data and sources.'],
    ['.divider-cell:nth-child(3) strong', '03 / Decide'],
    ['.divider-cell:nth-child(3)>div>span', 'With context, not fear.'],
    ['.why .eyebrow', '01 / The challenge'],
    ['.why h2', 'Risk does not<br>announce<br>itself<span class="title-accent">.</span>'],
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
    ['.switch-option[data-layer="all"] .switch-label', '<i aria-hidden="true"></i>All layers'],
    ['.switch-option[data-layer="attention"] .switch-label', '<i aria-hidden="true"></i>Alerts'],
    ['.switch-option[data-layer="support"] .switch-label', '<i aria-hidden="true"></i>Support points'],
    ['.panel-bottom', 'Real routes require current, georeferenced data. The route and support points shown here are illustrative.'],
    ['.map-caption', '◉ INTERACTIVE MAP <span>Illustrative route · no location data</span>'],
    ['.map-disclaimer span:last-child', '<b>Important:</b> This demo illustrates an interface. It does not identify dangerous areas or provide real routes or emergency guidance. Verified news appears below.'],
    ['.news-head .eyebrow', '03 / Real information'],
    ['.news-head h2', 'Real news.<br>Sources you can check<span class="title-accent">.</span>'],
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

  // Tradução completa de aria-label e title para leitores de tela
  var englishAttrs = [
    ['a.logo', 'aria-label', 'Safejy: home'],
    ['#navigation', 'aria-label', 'Main navigation'],
    ['#lang-menu', 'aria-label', 'Select language'],
    ['.hero-bottom .traffic', 'aria-label', 'Traffic light inspiration'],
    ['.hero-art', 'aria-label', 'Illustrative preview of the Safejy interface'],
    ['.divider-info', 'aria-label', 'Project pillars'],
    ['.map-stage > svg', 'aria-label', 'Illustrative stylized map with clickable points'],
    ['.mark[data-spot="info"]', 'aria-label', 'Demo: illustrative support point'],
    ['.mark[data-spot="attention"]', 'aria-label', 'Demo: illustrative alert'],
    ['.mark[data-spot="source"]', 'aria-label', 'Demo: illustrative useful reference'],
    ['.map-control', 'aria-label', 'Illustrative zoom'],
    ['#zoom-in', 'aria-label', 'Zoom in map'],
    ['#zoom-out', 'aria-label', 'Zoom out map'],
    ['.news-filters', 'aria-label', 'Filter news'],
    ['.story:nth-child(1) .story-bottom > a', 'aria-label', 'Read CNN Brasil report in a new tab'],
    ['.story:nth-child(2) .story-bottom > a', 'aria-label', 'Read SSP-SP release in a new tab'],
    ['.story:nth-child(3) .story-bottom > a', 'aria-label', 'Read Agência Brasil article in a new tab'],
    ['.story:nth-child(4) .story-bottom > a', 'aria-label', 'Read Metrópoles report in a new tab']
  ];

  var ptInfo = {
    welcome: { label: 'VISUALIZAÇÃO ILUSTRATIVA', title: 'Explore o percurso', desc: 'Escolha um marcador para conhecer os tipos de informação previstos para o Safejy.' },
    info: { label: 'PONTO DE APOIO · EXEMPLO', title: 'Uma referência útil', desc: 'Na plataforma real, estes pontos poderiam reunir referências públicas verificáveis, com endereço, data e origem. Esta localização é fictícia.' },
    attention: { label: 'ALERTA · EXEMPLO', title: 'Informações que precisam de confirmação', desc: 'Um alerta real precisaria indicar o que aconteceu, quando, onde e a fonte. Este exemplo não representa uma ocorrência.' },
    source: { label: 'FONTE · EXEMPLO', title: 'Origem transparente', desc: 'Cada informação precisa indicar quem publicou e quando foi atualizada. Este marcador é ilustrativo.' },
    all: { label: 'CAMADAS ATIVAS', title: 'Mapa demonstrativo completo', desc: 'O trajeto acompanha as ruas desenhadas. Os pontos e o percurso são fictícios: selecione um marcador para explorar.' },
    support: { label: 'FILTRO ATIVO', title: 'Pontos de apoio', desc: 'Referências úteis de exemplo, sem correspondência com pontos de apoio reais. Selecione um marcador para conhecer o conceito.' },
    attentionLayer: { label: 'FILTRO ATIVO', title: 'Alertas ilustrativos', desc: 'Os alertas mostrados são fictícios. Selecione o marcador vermelho para entender quais dados seriam exibidos.' }
  };

  var enInfo = {
    welcome: { label: 'ILLUSTRATIVE PREVIEW', title: 'Explore the route', desc: 'Select a marker to see the kinds of information Safejy might provide.' },
    info: { label: 'SUPPORT POINT · EXAMPLE', title: 'A useful reference', desc: 'A real platform could include verified public references, with locations, dates and sources. This location is fictional.' },
    attention: { label: 'ALERT · EXAMPLE', title: 'Information requiring verification', desc: 'A real alert should say what happened, where, when and from which source. This is not a real incident.' },
    source: { label: 'SOURCE · EXAMPLE', title: 'Transparent sourcing', desc: 'Every item should identify who published it and when it was updated. This marker is illustrative.' },
    all: { label: 'ACTIVE LAYERS', title: 'Full map preview', desc: 'The route follows the streets shown. All points and the route are fictional. Select a marker to explore.' },
    support: { label: 'ACTIVE FILTER', title: 'Support points', desc: 'Illustrative references, not actual places offering assistance. Select a marker for details.' },
    attentionLayer: { label: 'ACTIVE FILTER', title: 'Illustrative alerts', desc: 'These alerts are fictional. Select the red marker to see what information would be provided.' }
  };

  var originals = new WeakMap();
  for (var i = 0; i < english.length; i++) {
    var nodes = document.querySelectorAll(english[i][0]);
    for (var j = 0; j < nodes.length; j++) {
      if (!originals.has(nodes[j])) originals.set(nodes[j], nodes[j].innerHTML);
    }
  }

  var originalAttrs = [];
  for (var a = 0; a < englishAttrs.length; a++) {
    var attrSelector = englishAttrs[a][0];
    var attrName = englishAttrs[a][1];
    var attrEn = englishAttrs[a][2];
    var attrNodes = document.querySelectorAll(attrSelector);
    for (var b = 0; b < attrNodes.length; b++) {
      originalAttrs.push({
        el: attrNodes[b],
        attr: attrName,
        pt: attrNodes[b].getAttribute(attrName) || '',
        en: attrEn
      });
    }
  }

  function drawTooltip(item, silent) {
    if (!tip) return;
    var d = (language === 'en' ? enInfo : ptInfo)[item];
    if (!d) return;
    if (silent) {
      tip.setAttribute('aria-live', 'off');
    }
    tip.innerHTML = '<span class="micro map-tooltip-label">' + d.label + '</span><strong>' + d.title + '</strong><span>' + d.desc + '</span>';
    if (silent) {
      window.setTimeout(function () {
        if (tip) tip.setAttribute('aria-live', 'polite');
      }, 60);
    }
  }

  function setLanguage(lang, isInitial) {
    language = lang === 'en' ? 'en' : 'pt';
    root.lang = language === 'en' ? 'en' : 'pt-BR';

    if (!isInitial || language === 'en') {
      for (var k = 0; k < english.length; k++) {
        var selector = english[k][0];
        var value = english[k][1];
        var matched = document.querySelectorAll(selector);
        for (var m = 0; m < matched.length; m++) {
          matched[m].innerHTML = language === 'en' ? value : originals.get(matched[m]);
        }
      }
      for (var t = 0; t < originalAttrs.length; t++) {
        var entry = originalAttrs[t];
        entry.el.setAttribute(entry.attr, language === 'en' ? entry.en : entry.pt);
      }
    }

    var langButtons = document.querySelectorAll('[data-lang]');
    for (var lb = 0; lb < langButtons.length; lb++) {
      var btn = langButtons[lb];
      var active = btn.dataset.lang === language;
      btn.setAttribute('aria-checked', String(active));
    }

    var langToggleBtn = document.getElementById('lang-menu-toggle');
    if (langToggleBtn) {
      var langLabel = language === 'en' ? 'Select language' : 'Selecionar idioma';
      langToggleBtn.setAttribute('aria-label', langLabel);
      langToggleBtn.title = langLabel;
    }

    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', language === 'en'
        ? 'Safejy is a concept for making urban information easier to understand. Verified news, public sources and an interactive map preview.'
        : 'Safejy é um conceito de plataforma de informação para quem circula por regiões desconhecidas. Dados, notícias verificadas e contexto para decisões mais conscientes.');
    }

    document.title = language === 'en' ? 'Safejy — Every second counts.' : 'Safejy — Cada segundo conta.';
    updateThemeLabels();
    updateMobileMenuLabel();

    var tooltipKey = selectedMark !== null
      ? selectedMark
      : (activeLayer === 'attention' ? 'attentionLayer' : activeLayer === 'support' ? 'support' : 'welcome');

    // Evita anunciar o mapa em leitores de tela logo ao abrir a página
    if (!isInitial || language === 'en') {
      drawTooltip(tooltipKey, Boolean(isInitial));
    }

    try { localStorage.setItem('safejy-lang', language); } catch (e) { }
  }

  // Menu dropdown de idiomas com navegação por teclado (Setas, Home, End, Esc, Tab)
  var langDropdownEl = document.getElementById('lang-dropdown');
  var langMenuToggleEl = document.getElementById('lang-menu-toggle');
  var langOptions = Array.prototype.slice.call(document.querySelectorAll('#lang-menu .lang-option'));

  function focusLangOption(index) {
    if (!langOptions.length) return;
    var safeIndex = (index + langOptions.length) % langOptions.length;
    langOptions[safeIndex].focus();
  }

  function toggleLanguageMenu(forceState, focusMode) {
    if (!langDropdownEl || !langMenuToggleEl) return;
    var willOpen = typeof forceState === 'boolean' ? forceState : !langDropdownEl.classList.contains('is-open');
    langDropdownEl.classList.toggle('is-open', willOpen);
    langMenuToggleEl.setAttribute('aria-expanded', String(willOpen));
    if (willOpen && focusMode) {
      if (focusMode === 'last') {
        focusLangOption(langOptions.length - 1);
      } else {
        var activeIdx = 0;
        for (var idx = 0; idx < langOptions.length; idx++) {
          if (langOptions[idx].getAttribute('aria-checked') === 'true') {
            activeIdx = idx;
            break;
          }
        }
        focusLangOption(activeIdx);
      }
    }
  }

  if (langMenuToggleEl && langDropdownEl) {
    langMenuToggleEl.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleLanguageMenu();
    });

    langMenuToggleEl.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        toggleLanguageMenu(true, 'first');
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        toggleLanguageMenu(true, 'last');
      }
    });

    langOptions.forEach(function (opt, idx) {
      opt.addEventListener('click', function () {
        setLanguage(opt.dataset.lang, false);
        toggleLanguageMenu(false);
        langMenuToggleEl.focus();
      });

      opt.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          focusLangOption(idx + 1);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          focusLangOption(idx - 1);
        } else if (event.key === 'Home') {
          event.preventDefault();
          focusLangOption(0);
        } else if (event.key === 'End') {
          event.preventDefault();
          focusLangOption(langOptions.length - 1);
        } else if (event.key === 'Escape') {
          event.preventDefault();
          toggleLanguageMenu(false);
          langMenuToggleEl.focus();
        } else if (event.key === 'Tab') {
          toggleLanguageMenu(false);
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (langDropdownEl.classList.contains('is-open') && !langDropdownEl.contains(event.target)) {
        toggleLanguageMenu(false);
      }
    });
  }

  // Menu mobile com fechamento por Esc, clique fora e resize
  function closeMobileMenu(returnFocus) {
    if (!menu || !nav || !nav.classList.contains('open')) return;
    nav.classList.remove('open');
    updateMobileMenuLabel();
    if (returnFocus) menu.focus();
  }

  if (menu && nav) {
    menu.addEventListener('click', function (event) {
      event.stopPropagation();
      nav.classList.toggle('open');
      updateMobileMenuLabel();
    });

    var navLinks = nav.querySelectorAll('a');
    for (var n = 0; n < navLinks.length; n++) {
      navLinks[n].addEventListener('click', function () {
        closeMobileMenu(false);
      });
    }

    document.addEventListener('click', function (event) {
      if (nav.classList.contains('open') && headerEl && !headerEl.contains(event.target)) {
        closeMobileMenu(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && nav.classList.contains('open')) {
        closeMobileMenu(false);
      }
    }, { passive: true });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (langDropdownEl && langDropdownEl.classList.contains('is-open')) {
        toggleLanguageMenu(false);
        if (langMenuToggleEl) langMenuToggleEl.focus();
      }
      if (nav && nav.classList.contains('open')) {
        closeMobileMenu(true);
      }
    }
  });

  // ===== 3. Rolagem compatível, barra de progresso e reveal progressivo =====
  var ticking = false;

  function scrollToTarget(target, focusAfter) {
    if (lenisInstance && !reducedMotion.matches) {
      lenisInstance.scrollTo(target, { offset: -72, duration: 1.2 });
      if (focusAfter && target && typeof target.focus === 'function') {
        target.focus({ preventScroll: true });
      }
      return;
    }

    if (typeof target === 'number') {
      if (reducedMotion.matches) {
        window.scrollTo(0, target);
      } else {
        try {
          window.scrollTo({ top: target, behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, target);
        }
      }
      return;
    }

    if (target && typeof target.getBoundingClientRect === 'function') {
      var headerOffset = headerEl ? headerEl.offsetHeight + 12 : 84;
      var topY = Math.max(0, Math.round(window.pageYOffset + target.getBoundingClientRect().top - headerOffset));
      if (reducedMotion.matches) {
        window.scrollTo(0, topY);
      } else {
        try {
          window.scrollTo({ top: topY, behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, topY);
        }
      }
      if (focusAfter && typeof target.focus === 'function') {
        try {
          target.focus({ preventScroll: true });
        } catch (e) {
          target.focus();
        }
      }
    }
  }

  var hashAnchors = document.querySelectorAll('a[href^="#"]');
  for (var h = 0; h < hashAnchors.length; h++) {
    (function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = anchor.getAttribute('href');
        if (href === '#inicio') {
          e.preventDefault();
          scrollToTarget(0, false);
        } else if (href && href.length > 1) {
          var el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            scrollToTarget(el, anchor.classList.contains('skip'));
          }
        }
      });
    })(hashAnchors[h]);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    var update = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var scrollY = window.pageYOffset || doc.scrollTop || 0;
      var ratio = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      root.style.setProperty('--progress', String(ratio));
      ticking = false;
    };
    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(update);
    } else {
      update();
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  var revealTargets = document.querySelectorAll('.reveal, .map-panel');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    root.classList.add('js-reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -45px 0px' });
    for (var r = 0; r < revealTargets.length; r++) {
      observer.observe(revealTargets[r]);
    }
  } else {
    for (var r2 = 0; r2 < revealTargets.length; r2++) {
      revealTargets[r2].classList.add('in');
    }
  }

  // ===== 4. Filtros de Notícias & Mapa Interativo =====
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.dataset.filter;
      filterBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      stories.forEach(function (card) { card.hidden = filter !== 'all' && card.dataset.type !== filter; });
    });
  });

  marks.forEach(function (mark) {
    var choose = function () {
      selectedMark = mark.dataset.spot;
      drawTooltip(selectedMark, false);
    };
    mark.addEventListener('click', choose);
    mark.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        choose();
      }
    });
  });

  layers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeLayer = btn.dataset.layer;
      selectedMark = null;
      layers.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      marks.forEach(function (m) {
        var dim = activeLayer !== 'all' && m.dataset.category !== activeLayer;
        m.classList.toggle('dim', dim);
        m.setAttribute('tabindex', dim ? '-1' : '0');
        m.setAttribute('aria-hidden', String(dim));
      });
      drawTooltip(activeLayer === 'all' ? 'all' : activeLayer === 'attention' ? 'attentionLayer' : 'support', false);
    });
  });

  var mapSVG = document.querySelector('.map-stage > svg');
  var zoomInBtn = document.getElementById('zoom-in');
  var zoomOutBtn = document.getElementById('zoom-out');
  if (mapSVG && zoomInBtn && zoomOutBtn) {
    var scale = 1;
    var zoom = function (delta) {
      scale = Math.max(1, Math.min(1.5, Math.round((scale + delta) * 10) / 10));
      mapSVG.style.transform = 'scale(' + scale + ')';
      mapSVG.style.transformOrigin = '50% 50%';
      mapSVG.style.transition = reducedMotion.matches ? 'none' : 'transform .28s ease';
    };
    zoomInBtn.addEventListener('click', function () { zoom(0.1); });
    zoomOutBtn.addEventListener('click', function () { zoom(-0.1); });
  }

  // ===== 5. Parallax e rolagem suave opcionais (carregamento não bloqueante) =====
  function initCinematicBackgroundMotion() {
    if (reducedMotion.matches) return;
    if (typeof window.Lenis === 'function') {
      lenisInstance = new window.Lenis({
        duration: 1.25,
        easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.3
      });
      if (typeof window.ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', window.ScrollTrigger.update);
      }
    }

    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      var gsap = window.gsap;
      var ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      if (lenisInstance) {
        gsap.ticker.add(function (time) { lenisInstance.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
      }

      var openingMist = document.querySelector('.hero-opening-mist');
      if (openingMist) {
        gsap.fromTo(openingMist, { opacity: 0.72 }, { opacity: 0.36, duration: 1.6, ease: 'power3.out' });
      }

      gsap.matchMedia().add('(min-width: 768px)', function () {
        gsap.utils.toArray('.cine-scene [data-parallax-speed]').forEach(function (layer) {
          var speed = parseFloat(layer.dataset.parallaxSpeed || '0');
          if (!speed) return;
          var parentScene = layer.closest('.cine-scene');
          gsap.to(layer, {
            yPercent: speed * 100,
            ease: 'none',
            scrollTrigger: { trigger: parentScene, start: 'top bottom', end: 'bottom top', scrub: 0.9 }
          });
        });

        var problemImg = document.querySelector('.problem-zoom-bg img');
        if (problemImg) {
          gsap.fromTo(problemImg, { scale: 1 }, {
            scale: 1.15,
            ease: 'none',
            scrollTrigger: { trigger: '#noticias', start: 'top bottom', end: 'bottom top', scrub: 1 }
          });
        }

        var solutionBg = document.querySelector('.solution-orbit-bg');
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
      var raf = function (time) { lenisInstance.raf(time); window.requestAnimationFrame(raf); };
      window.requestAnimationFrame(raf);
    }
  }

  function loadScriptAsync(src, onDone) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () { if (onDone) onDone(true); };
    s.onerror = function () { if (onDone) onDone(false); };
    document.head.appendChild(s);
  }

  function maybeLoadOptionalEnhancements() {
    if (root.dataset.offline === 'true') return;
    if (reducedMotion.matches) return;
    if (window.innerWidth < 768) return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;

    var lenisLoaded = typeof window.Lenis === 'function';
    var gsapLoaded = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
    if (lenisLoaded && gsapLoaded) {
      initCinematicBackgroundMotion();
      return;
    }

    var pending = 2;
    var doneOne = function () {
      pending -= 1;
      if (pending === 0) initCinematicBackgroundMotion();
    };

    loadScriptAsync('https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js', doneOne);
    loadScriptAsync('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', function (ok) {
      if (ok) {
        loadScriptAsync('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', doneOne);
      } else {
        doneOne();
      }
    });
  }

  // ===== Inicialização imediata (zero dependência externa) =====
  var initialTheme = 'light';
  try {
    var savedTheme = localStorage.getItem('safejy-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      initialTheme = savedTheme;
    } else if (root.dataset.theme === 'dark' || prefersDarkQuery.matches) {
      initialTheme = 'dark';
    }
  } catch (e) {
    if (root.dataset.theme === 'dark' || prefersDarkQuery.matches) initialTheme = 'dark';
  }
  setTheme(initialTheme);

  var savedLang = 'pt';
  try { savedLang = localStorage.getItem('safejy-lang') || 'pt'; } catch (e) { }
  var urlLang = null;
  try {
    if (typeof URLSearchParams === 'function') {
      urlLang = new URLSearchParams(window.location.search).get('lang');
    }
  } catch (e) { }
  setLanguage(urlLang || savedLang, true);

  if (document.readyState === 'complete') {
    maybeLoadOptionalEnhancements();
  } else {
    window.addEventListener('load', maybeLoadOptionalEnhancements, { once: true });
  }
})();
