
  // ─── NAVBAR SCROLL ───
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 60
      ? 'rgba(14,14,14,0.97)' : 'rgba(14,14,14,0.85)';
  });

  // ─── HAMBURGER ───
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  function closeMobile() { mobileNav.classList.remove('open'); }

  // ─── SLIDER ───
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.dot');

  function goToSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  document.getElementById('sliderPrev').addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('sliderNext').addEventListener('click', () => goToSlide(currentSlide + 1));
  dots.forEach(d => d.addEventListener('click', () => goToSlide(+d.dataset.i)));
  setInterval(() => goToSlide(currentSlide + 1), 5000);

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // ─── SVG STROKE FIX for why icons ───
  document.querySelectorAll('.why-icon svg').forEach(svg => {
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','#C8F04A');
    svg.setAttribute('stroke-width','1.8');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('stroke-linejoin','round');
  });
  // Also fix class arrow SVGs
  document.querySelectorAll('.class-arrow svg').forEach(svg => {
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','white');
    svg.setAttribute('stroke-width','2');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('stroke-linejoin','round');
  });
