// IMPORTANT: Set your real business email before publishing the enquiry form.
// The form prepares an email in the visitor's email application; it does NOT submit to a server.
const BUSINESS_EMAIL = '';

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
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!BUSINESS_EMAIL || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS_EMAIL)) {
    status.textContent = 'Enquiries are not connected yet. Please check back soon. (Site owner: set BUSINESS_EMAIL in script.js before launch.)';
    return;
  }
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const business = String(data.get('business') || '').trim();
  const email = String(data.get('email') || '').trim();
  const interest = String(data.get('interest') || '').trim();
  const message = String(data.get('message') || '').trim();
  const subject = `APTMARK enquiry: ${interest}`;
  const body = `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`;
  const mailto = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Your email application should open with your enquiry ready. Please press Send there to complete it.';
  window.location.href = mailto;
});
