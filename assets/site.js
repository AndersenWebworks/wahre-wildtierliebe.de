document.documentElement.classList.add('js');

const dialog = document.querySelector('[data-search-dialog]');
document.querySelectorAll('[data-search-open]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!dialog) return;
    dialog.showModal();
    dialog.querySelector('a')?.focus();
  });
});

const menuButton = document.querySelector('[data-menu-toggle]');
const mobileNav = document.getElementById('mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = mobileNav.hasAttribute('hidden');
  mobileNav.toggleAttribute('hidden', !open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});

document.querySelectorAll('[data-score-tool]').forEach((form) => {
  const config = JSON.parse(form.querySelector('[data-tool-config]').textContent);
  const output = form.querySelector('[data-tool-result]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const score = [...data.values()].reduce((sum, value) => sum + Number(value), 0);
    const result = config.find((item) => score <= item.max) || config[config.length - 1];
    output.innerHTML = `<h2>${result.title}</h2><p>${result.text}</p>`;
    output.hidden = false;
    output.focus();
  });
});

document.querySelectorAll('[data-check-tool]').forEach((form) => {
  const recommendations = JSON.parse(form.querySelector('[data-tool-config]').textContent);
  const output = form.querySelector('[data-tool-result]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const missing = Object.keys(recommendations).find((name) => !form.elements[name]?.checked);
    if (missing) {
      const [title, text] = recommendations[missing];
      output.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    } else {
      output.innerHTML = '<h2>Die Grundlage stimmt</h2><p>Erhalte diese Bedingungen und beobachte, welche Tiere den Ort tatsächlich nutzen. Veränderungen werden am besten einzeln und über mehrere Wochen geprüft.</p>';
    }
    output.hidden = false;
    output.focus();
  });
});

const planTool = document.querySelector('[data-plan-tool]');
const planResult = document.querySelector('[data-plan-result]');
planTool?.querySelectorAll('[data-plan]').forEach((button) => {
  button.addEventListener('click', () => {
    planTool.querySelectorAll('[data-plan]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    const title = button.querySelector('strong').textContent;
    const text = button.querySelector('span').textContent;
    planResult.innerHTML = `<h2>Dein Start für ${title}</h2><p>${text}</p>`;
    planResult.hidden = false;
    planResult.focus();
  });
});

const finder = document.querySelector('[data-finder]');
if (finder) {
  const filters = [...finder.querySelectorAll('[data-finder-filter]')];
  const items = [...finder.querySelectorAll('[data-finder-results] article')];
  const empty = finder.querySelector('[data-finder-empty]');
  const updateFinder = () => {
    let shown = 0;
    items.forEach((item) => {
      const matches = filters.every((filter) => !filter.value || item.dataset[filter.dataset.finderFilter] === filter.value);
      item.hidden = !matches;
      if (matches) shown += 1;
    });
    empty.hidden = shown > 0;
  };
  filters.forEach((filter) => filter.addEventListener('change', updateFinder));
}
