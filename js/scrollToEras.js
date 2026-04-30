document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startJourneyBtn');
  const erasSection = document.getElementById('eras');

  if (!button || !erasSection) return;

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const startPosition = window.scrollY;
    const targetPosition = erasSection.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // duração da animação em ms
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      const ease = percent < 0.5
        ? 4 * percent * percent * percent
        : 1 - Math.pow(-2 * percent + 2, 3) / 2; // easeInOutCubic

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  });
});