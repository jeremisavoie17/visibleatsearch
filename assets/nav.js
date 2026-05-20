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

  // Toggle mobile menu
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));

    if (!open) {
      links.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });

  // Toggle Services dropdown on mobile
  document.querySelectorAll('.nav-dropdown-toggle').forEach((button) => {
    button.addEventListener('click', (e) => {
      if (window.innerWidth > 820) return;

      e.stopPropagation();
      const dropdown = button.closest('.nav-dropdown');
      if (dropdown) {
        dropdown.classList.toggle('open');
      }
    });
  });

  // Close when clicking a link
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');

      links.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    });
  });

  // Close when clicking outside (mobile only)
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 820) return;

    const inside = links.contains(e.target) || btn.contains(e.target);
    if (!inside) {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');

      links.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');

      links.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
});
