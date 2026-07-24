const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#global-nav');
const mobileCta = document.querySelector('.mobile-cta');
const contact = document.querySelector('#contact');

if (menuButton && nav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

if (mobileCta && contact) {
  let contactVisible = false;
  const updateMobileCta = () => {
    mobileCta.classList.toggle('visible', window.scrollY > 620 && !contactVisible);
  };

  const observer = new IntersectionObserver((entries) => {
    contactVisible = entries[0].isIntersecting;
    updateMobileCta();
  }, { threshold: 0.05 });

  observer.observe(contact);
  window.addEventListener('scroll', updateMobileCta, { passive: true });
  updateMobileCta();
}
