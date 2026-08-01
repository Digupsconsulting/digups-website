const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const organisation = document.getElementById('organisation').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Financial Health Review request from ${name}`);
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Organisation: ${organisation || 'Not provided'}

Biggest financial or business decision:
${message}`
  );

  window.location.href = `mailto:info@digupsbp.com?subject=${subject}&body=${body}`;
});
