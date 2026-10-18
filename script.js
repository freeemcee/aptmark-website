const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('interest').value = link.dataset.interest;
}));

const form = document.getElementById('enquiry-form');
const status = document.getElementById('form-status');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  status.textContent = 'Sending your enquiry…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error('Form submission failed');
    form.reset();
    status.textContent = 'Thank you! Your enquiry has been sent. We’ll be in touch soon.';
  } catch (error) {
    status.textContent = 'Sorry, your enquiry could not be sent. Please email aptmark.business@gmail.com instead.';
  } finally {
    button.disabled = false;
  }
});
