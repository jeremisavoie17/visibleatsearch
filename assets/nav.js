document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.links');
  const lang = document.querySelector('.lang');
  if(!btn || !links) return;

  // Inject language switch into mobile menu (once)
  if(lang && !links.querySelector('.lang-mobile')){
    const mobileLang = lang.cloneNode(true);
    mobileLang.classList.add('lang-mobile');
    links.appendChild(mobileLang);
  }

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // ferme si on clique un lien (sauf si c'est le switch langue desktop injecte)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // ferme si on clique en dehors
  document.addEventListener('click', (e) => {
    const inside = links.contains(e.target) || btn.contains(e.target);
    if(!inside){
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // ferme avec Escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
