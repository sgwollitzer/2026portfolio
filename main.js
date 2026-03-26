particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#7A9E7E" },
    shape: { type: "circle" },
    opacity: { value: 0.50 },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#F7ECE1",
      opacity: 0.2,
      width: 1
    },
    move: { enable: true, speed: 1.8 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.1, 
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });