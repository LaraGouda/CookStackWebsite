
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .slide-up, .slide-up-delay, .fade-on-scroll')
  .forEach(el => observer.observe(el));


const badge = document.querySelector('.floating-badge');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerRect = footer.getBoundingClientRect();
  if (footerRect.top < window.innerHeight - 80) {
    badge.style.bottom = `${window.innerHeight - footerRect.top + 20}px`;
  } else {
    badge.style.bottom = '20px';
  }
});
