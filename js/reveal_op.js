// Configuración de ScrollReveal
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', {
  delay: 400,
  duration: 1000,
  reset: true,
  opacity: 0,
  easing: 'ease-in-out',
});

// Escucha el evento de scroll para la desaparición de "punchline"
document.addEventListener('scroll', () => {
  const punchline = document.querySelector('.punchline');
  const rectPunchline = punchline.getBoundingClientRect();
  const isPunchlineVisible = (rectPunchline.top >= 0 && rectPunchline.bottom <= window.innerHeight);

  if (!isPunchlineVisible) {
    punchline.style.opacity = 0;
  } else {
    punchline.style.opacity = 1;
  }
});
