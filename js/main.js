(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ------------------------------------------------------------------------
     Idioma. El español vive en el HTML; aquí solo está el inglés.
     ------------------------------------------------------------------------ */

  var EN = {
    'meta.description': 'Kyle Navarro, web developer with a background in B2B sales. Websites and tools that get the customer to quote, order or write.',
    'meta.title': 'Kyle Navarro · Web developer',
    'skip': 'Skip to content',
    'controls.label': 'Preferences',
    'lang.label': 'Language',
    'theme.toDark': 'Switch to dark mode',
    'theme.toLight': 'Switch to light mode',
    'hero.photoAlt': 'Kyle Navarro smiling, wearing a grey t-shirt and a backpack',
    'hero.role': 'Web developer',
    'hero.pitch': 'Restless programmer with a background in B2B sales. I build websites that get customers to write, request a quote or place an order.',
    'hero.email': 'Email me',
    'hero.mailto': 'mailto:kyle.y.navarro.j@gmail.com?subject=Hi%20Kyle%2C%20I%20saw%20your%20portfolio',
    'hero.cv': 'Download CV',
    'hero.githubLabel': 'Kyle Navarro on GitHub',
    'hero.linkedinLabel': 'Kyle Navarro on LinkedIn',
    'nav.label': 'Sections',
    'nav.about': 'About',
    'nav.tech': 'Tech',
    'nav.work': 'Work',
    'nav.edu': 'Education',
    'nav.blog': 'Blog',
    'about.title': 'About',
    'about.p1': 'I’m a restless programmer. Before writing code I sold to companies, and that left me with something I use every day: understanding how a B2B customer decides, what they need to see to trust you and what makes them take the next step.',
    'about.p2': 'Today I build websites and tools for real businesses: catalogs that end in a WhatsApp quote, ordering stores and corporate sites. I work with AI-assisted development to go from idea to something live fast, without letting go of judgment over what ships.',
    'tech.title': 'Tech',
    'tech.ts': 'Strict typing in larger apps, like FlashBuy.',
    'tech.node': 'Servers and APIs, like the one behind AgentPrice.',
    'tech.tw': 'Consistent interfaces that are quick to iterate on.',
    'tech.cc': 'My daily working environment, right from the terminal.',
    'tech.aiName': 'AI-assisted development',
    'tech.ai': 'Planning, building and reviewing with AI, with human judgment on every delivery.',
    'tech.also': 'I also use',
    'work.title': 'Work',
    'work.lead': 'Live projects for real businesses.',
    'work.tagsLabel': 'Technologies',
    'work.wip': 'In development',
    'work.noLink': 'No public link yet',
    'work.visit': 'Visit project',
    'work.flashbuy': 'WhatsApp ordering SaaS for restaurants, cafés and bakeries. Each business gets its own catalog, back office and public page; orders arrive ready in its WhatsApp.',
    'work.chantilly': 'Website for a bakery in Bucaramanga: the customer builds the order and WhatsApp opens with the message ready. Includes a back office for orders, products and sales.',
    'work.texproseg': 'Corporate site and catalog for personal protective equipment, workwear and signage. It leads buyers to a WhatsApp quote or the PDF catalog.',
    'work.lauramunoz': 'Bilingual personal site for a purchasing analyst, with a downloadable CV in Spanish and English. Opens in English based on the visitor’s country.',
    'work.surtitornillos': 'Corporate landing page for an industrial and hardware supplier in Barrancabermeja: product lines, brands and direct contact.',
    'work.olimpicas': 'One-page corporate site for a uniform and workwear manufacturer: what it makes, what it supplies and how to get a quote. No frameworks.',
    'work.agentprice': 'A quoting chat a business adds to its website with one line of code. An AI searches its price list (Google Sheets) and returns the quote as PNG, PDF or Excel.',
    'work.alt.flashbuy': 'Screenshot of the FlashBuy home page',
    'work.alt.chantilly': 'Screenshot of the Chantilly home page',
    'work.alt.texproseg': 'Screenshot of the Texproseg 360 home page',
    'work.alt.lauramunoz': 'Screenshot of the Laura Muñoz home page',
    'work.alt.surtitornillos': 'Screenshot of the Surtitornillos home page',
    'work.alt.olimpicas': 'Screenshot of the Olímpicas Sport home page',
    'work.altAgent': 'Illustration of a floating robot',
    'edu.title': 'Education',
    'edu.eng': 'Production Engineer',
    'edu.engNote': 'Professional degree. Processes, continuous improvement and an orderly way of solving problems that I now apply to software.',
    'edu.self': 'Web development, self-taught',
    'edu.selfNote': 'I learned to code online, with schools like Platzi and Academia Hola Mundo, and by building real projects.',
    'blog.title': 'Blog',
    'blog.lead': 'Notes on what I learn while building.',
    'blog.empty': 'No posts yet. I’ll be writing here soon.',
    'footer.cta': 'Have a project in mind?',
    'footer.note': 'Built with HTML, CSS and JavaScript. Set in Hack.'
  };

  var ES = {};
  var textNodes = document.querySelectorAll('[data-i18n]');
  var attrNodes = document.querySelectorAll('[data-i18n-attr]');

  // Guarda el español original del HTML para poder volver a él.
  textNodes.forEach(function (el) {
    ES[el.dataset.i18n] = el.textContent;
  });
  attrNodes.forEach(function (el) {
    el.dataset.i18nAttr.split(';').forEach(function (pair) {
      var parts = pair.split(':');
      var attr = parts[0], key = parts.slice(1).join(':');
      if (!(key in ES)) ES[key] = el.getAttribute(attr);
    });
  });
  ES['meta.title'] = document.title;
  ES['theme.toDark'] = 'Cambiar a modo oscuro';
  ES['theme.toLight'] = 'Cambiar a modo claro';

  var lang = 'es';

  function t(key) {
    var dict = lang === 'en' ? EN : ES;
    return key in dict ? dict[key] : ES[key];
  }

  function applyLang(next) {
    lang = next === 'en' ? 'en' : 'es';
    root.lang = lang;
    textNodes.forEach(function (el) {
      var value = t(el.dataset.i18n);
      if (value != null) el.textContent = value;
    });
    attrNodes.forEach(function (el) {
      el.dataset.i18nAttr.split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var value = t(parts.slice(1).join(':'));
        if (value != null) el.setAttribute(parts[0], value);
      });
    });
    document.title = t('meta.title');
    document.querySelectorAll('.lang__opt').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
    updateThemeLabel();
    renderPosts();
  }

  document.querySelectorAll('.lang__opt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.dataset.lang === lang) return;
      store('kn-lang', btn.dataset.lang);
      applyLang(btn.dataset.lang);
    });
  });

  /* ------------------------------------------------------------------------
     Tema claro / oscuro. El cambio se revela en círculo desde el botón.
     ------------------------------------------------------------------------ */

  var toggle = document.getElementById('theme-toggle');

  function updateThemeLabel() {
    var dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', t(dark ? 'theme.toLight' : 'theme.toDark'));
    toggle.setAttribute('aria-pressed', String(dark));
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    store('kn-theme', theme);
    updateThemeLabel();
  }

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition || reduceMotion.matches) {
      setTheme(next);
      return;
    }

    var rect = toggle.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    var transition = document.startViewTransition(function () { setTheme(next); });
    transition.ready.then(function () {
      root.animate(
        { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)'] },
        { duration: 500, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
  });

  // Si el visitante nunca eligió, seguir al sistema.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (read('kn-theme')) return;
    root.dataset.theme = e.matches ? 'dark' : 'light';
    updateThemeLabel();
  });

  /* ------------------------------------------------------------------------
     Blog. Las entradas viven en js/blog-posts.js.
     ------------------------------------------------------------------------ */

  var postsList = document.getElementById('posts');

  function formatDate(iso) {
    var d = new Date(iso + 'T12:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function renderPosts() {
    var posts = (window.BLOG_POSTS || []).slice().sort(function (a, b) {
      return a.date < b.date ? 1 : -1;
    });
    postsList.textContent = '';
    posts.forEach(function (post) {
      var title = (post.title && (post.title[lang] || post.title.es)) || '';
      var excerpt = (post.excerpt && (post.excerpt[lang] || post.excerpt.es)) || '';

      var li = document.createElement('li');
      li.className = 'post';
      var a = document.createElement('a');
      a.href = 'blog/' + post.slug + '.html';
      var time = document.createElement('time');
      time.className = 'post__date';
      time.dateTime = post.date;
      time.textContent = formatDate(post.date);
      var h = document.createElement('h3');
      h.className = 'post__title';
      h.textContent = title;
      a.append(time, h);
      if (excerpt) {
        var p = document.createElement('p');
        p.className = 'post__excerpt';
        p.textContent = excerpt;
        a.append(p);
      }
      li.append(a);
      postsList.append(li);
    });
  }

  /* ------------------------------------------------------------------------
     Proyectos: se revelan una sola vez al entrar en pantalla.
     ------------------------------------------------------------------------ */

  var projects = document.querySelectorAll('.project[data-reveal]');

  function settle(el) {
    el.classList.add('is-visible');
    window.setTimeout(function () { el.classList.add('is-settled'); }, 900);
  }

  // Solo se ocultan las filas que empiezan fuera de la pantalla.
  projects.forEach(function (p) {
    if (p.getBoundingClientRect().top > window.innerHeight) p.classList.add('is-pending');
    else p.classList.add('is-visible', 'is-settled');
  });
  projects = Array.prototype.filter.call(projects, function (p) {
    return p.classList.contains('is-pending');
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (entry, i) {
        entry.target.style.setProperty('--delay', (i * 70) + 'ms');
        settle(entry.target);
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
    projects.forEach(function (p) { revealObserver.observe(p); });
  } else {
    projects.forEach(settle);
  }

  /* ------------------------------------------------------------------------
     Proyectos en pantallas táctiles: un toque abre los detalles debajo de
     la imagen. Solo uno abierto a la vez.
     ------------------------------------------------------------------------ */

  var toggles = document.querySelectorAll('.project__toggle');

  function setOpen(btn, open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.closest('.project').classList.toggle('is-open', open);
  }

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      toggles.forEach(function (other) {
        if (other !== btn) setOpen(other, false);
      });
      setOpen(btn, open);
    });
  });

  /* ------------------------------------------------------------------------
     Índice: marca la sección que se está leyendo.
     ------------------------------------------------------------------------ */

  var tocLinks = document.querySelectorAll('.toc a');
  var sections = Array.prototype.map.call(tocLinks, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });

  function markCurrent() {
    var line = window.innerHeight * 0.35;
    var current = 0;
    sections.forEach(function (section, i) {
      if (section && section.getBoundingClientRect().top <= line) current = i;
    });
    // Al llegar al final, la última sección.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections.length - 1;
    }
    tocLinks.forEach(function (a, i) {
      if (i === current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { markCurrent(); ticking = false; });
  }, { passive: true });
  markCurrent();

  /* ------------------------------------------------------------------------
     Arranque: idioma guardado, si no el del navegador, si no español.
     ------------------------------------------------------------------------ */

  var savedLang = read('kn-lang');
  var startLang = savedLang || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  applyLang(startLang);
})();
