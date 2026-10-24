(() => {
  // Add motion only after JS is available; content remains visible if scripts do not run.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-ready');
    const revealTargets = document.querySelectorAll('.section-heading, .experience-item, .work-card, .paper-feature, .research-card, .education-item, .beyond-card, .contact-card, .principle');
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
