const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
const form = document.querySelector('.contact-form');

toggle?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

links?.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.textContent = 'Talebiniz alındı';
  button.disabled = true;
});
