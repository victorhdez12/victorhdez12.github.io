(() => {
  // Add motion only after JS is available; content remains visible if scripts do not run.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-ready');
    const revealTargets = document.querySelectorAll('.section-heading, .experience-item, .work-card, .work-divider, .paper-feature, .research-card, .education-item, .fit-card, .case-study, .bz-card, .contact-card');
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
    });
    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealTargets.forEach((element) => observer.observe(element));

    // Hero figures count up once on load.
    document.querySelectorAll('.hero-stats dt').forEach((el) => {
      const match = el.textContent.match(/^(\D*)(\d+)(.*)$/);
      if (!match) return;
      const [, prefix, target, suffix] = match;
      const end = Number(target);
      const start = performance.now();
      const duration = 1100;
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${prefix}${Math.round(end * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  // Highlight the navigation link of the section in view.
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => navObserver.observe(section));
  }
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const dialog = document.getElementById('photo-dialog');
  const photoTrigger = document.getElementById('iac-photo-trigger');
  const closeOne = document.getElementById('close-dialog');
  const closeTwo = document.getElementById('close-dialog-2');

  const year = new Date().getFullYear();
  document.getElementById('year').textContent = String(year);
  document.getElementById('footer-year').textContent = String(year);

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const closeDialog = () => {
    if (dialog && dialog.open) dialog.close();
  };
  if (photoTrigger && dialog) photoTrigger.addEventListener('click', () => dialog.showModal());
  if (closeOne) closeOne.addEventListener('click', closeDialog);
  if (closeTwo) closeTwo.addEventListener('click', closeDialog);
  if (dialog) dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (clickedOutside) closeDialog();
  });
})();
