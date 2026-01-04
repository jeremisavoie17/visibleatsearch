document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.links');
  const lang = document.querySelector('.lang');
  if(!btn || !links) return;

  // Inject language switch into mobile menu (once)
  if(lang){
    const mobileLang = lang.cloneNode(true);
    mobileLang.classList.add('lang-mobile');
    links.appendChild(mobileLang);
  }

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    const inside = links.contains(e.target) || btn.contains(e.target);
    if(!inside){
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
