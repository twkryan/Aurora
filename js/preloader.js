  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    // delay opcional para deixar a animação completa
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 2); // 2,2s = duração da animação + pequeno delay
  });