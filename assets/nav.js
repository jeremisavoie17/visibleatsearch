document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.links');
  const lang = document.querySelector('.lang');

  if (!btn || !links) return;

  // Inject language switch into mobile menu (once)
  if (lang && !links.querySelector('.lang-mobile')) {
    const mobileLang = lang.cloneNode(true);
    mobileLang.classList.remove('lang');
    mobileLang.classList.add('lang-mobile');
    links.appendChild(mobileLang);
  }

  // Toggle menu
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close when clicking a link
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside (mobile only)
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 820) return;

    const inside = links.contains(e.target) || btn.contains(e.target);
    if (!inside) {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
