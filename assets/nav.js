document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.nav-toggle');
  const links = document.getElementById('navLinks');
  const language = document.querySelector('.lang');
  if (!button || !links) return;
  if (language && !links.querySelector('.lang-mobile')) {
    const mobile = language.cloneNode(true);
    mobile.classList.replace('lang', 'lang-mobile');
    links.appendChild(mobile);
  }
  const dropdowns = [...document.querySelectorAll('.nav-dropdown')];
  const setDropdown = (dropdown, open) => {
    dropdown.classList.toggle('open', open);
    dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', String(open));
  };
  const closeDropdowns = () => dropdowns.forEach(dropdown => setDropdown(dropdown, false));
  const closeMobile = (restoreFocus = false) => {
    links.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    closeDropdowns();
    if (restoreFocus) button.focus();
  };
  button.addEventListener('click', () => {
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    if (!open) closeDropdowns();
  });
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    toggle.addEventListener('click', () => {
      const open = !dropdown.classList.contains('open');
      closeDropdowns();
      setDropdown(dropdown, open);
    });
    dropdown.addEventListener('focusout', event => {
      if (!dropdown.contains(event.relatedTarget)) setDropdown(dropdown, false);
    });
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMobile()));
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav')) closeMobile();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const active = document.activeElement;
    const openDropdown = dropdowns.find(dropdown => dropdown.classList.contains('open'));
    if (openDropdown) {
      setDropdown(openDropdown, false);
      if (openDropdown.contains(active)) openDropdown.querySelector('.nav-dropdown-toggle').focus();
    } else if (links.classList.contains('open')) {
      closeMobile(true);
    }
  });
  matchMedia('(max-width: 820px)').addEventListener('change', () => closeMobile());
});

document.addEventListener('DOMContentLoaded', () => {
  function revealTarget() {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    const group = target.closest('details');
    if (group) {
      group.open = true;
      requestAnimationFrame(() => target.scrollIntoView({block:'start',behavior:'auto'}));
    }
  }
  window.addEventListener('hashchange', revealTarget);
  revealTarget();
});
