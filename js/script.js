// Puedes agregar aquí animaciones JS o efectos de scroll si lo deseas
// Ejemplo: animar aparición de secciones al hacer scroll

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
