document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById('temas-carousel-track');
  const prevButton = document.getElementById('temas-prev-btn');
  const nextButton = document.getElementById('temas-next-btn');
  const dotsContainer = document.getElementById('temas-dots-container');

  if (!track || !prevButton || !nextButton || !dotsContainer) {
    console.warn("Elementos do carrossel 'Temas' não encontrados. O carrossel não será iniciado.");
    return;
  }

  const dots = Array.from(dotsContainer.children); // 6 dots
  
  // Criamos um "media query" no JS
  const mql = window.matchMedia('(min-width: 768px)'); // 768px é o breakpoint 'md' do Tailwind
  let isDesktop = mql.matches;
  let currentPage = 0;
  // Desktop tem 3 páginas (2 slides por página), Mobile tem 6 (1 slide por página)
  let totalPages = isDesktop ? 3 : 6;

  function updateCarousel() {
    // 1. Atualiza a visibilidade dos dots
    dots.forEach((dot, index) => {
      let isDotVisible = true;
      let isDotActive = false;

      if (isDesktop) {
        // Em desktop, esconde os dots ímpares (1, 3, 5)
        if (index % 2 !== 0) isDotVisible = false;
        // O dot ativo é o da página atual (0, 1, 2) * 2
        if (index === currentPage * 2) isDotActive = true;
      } else {
        // Em mobile, o dot ativo é o da página atual (0-5)
        if (index === currentPage) isDotActive = true;
      }

      dot.style.display = isDotVisible ? 'block' : 'none';
      
      if (isDotActive) {
        dot.classList.add('active', 'bg-white');
        dot.classList.remove('bg-gray-600');
      } else {
        dot.classList.remove('active', 'bg-white');
        dot.classList.add('bg-gray-600');
      }
    });

    // 2. Atualiza a posição do track
    // ================== A CORREÇÃO ESTÁ AQUI ==================
    // A lógica de mover é a mesma: 100% da viewport por página.
    // O que muda é o 'totalPages' (3 no desktop, 6 no mobile).
    let percentageToMove = currentPage * 100; 
    
    track.style.transform = `translateX(-${percentageToMove}%)`;
    // ========================================================

    // 3. Atualiza os botões
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
  }

  // --- Event Listeners ---
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  });

  dotsContainer.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    let dotIndex = parseInt(targetDot.dataset.slide, 10); // 0-5

    if (isDesktop) {
      // Em desktop, os dots visíveis são 0, 2, 4.
      // Se clicou no dot[data-slide="2"], queremos a página 1.
      currentPage = dotIndex / 2;
    } else {
      // Em mobile, o dot (0-5) é a página (0-5).
      currentPage = dotIndex;
    }
    updateCarousel();
  });
  
  // --- Listener para redimensionar a tela ---
  mql.addEventListener('change', (e) => {
    isDesktop = e.matches;
    totalPages = isDesktop ? 3 : 6;
    currentPage = 0; // Reseta para a primeira página
    updateCarousel();
  });

  // Carga inicial
  updateCarousel();
});