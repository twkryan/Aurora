document.addEventListener("DOMContentLoaded", () => {
    const CAROUSEL_ID = 'meu-carrossel';
    const totalSlides = 3; 
    const intervalTime = 3000; 
    
    let currentSlide = 1;
    let carrosselContainer = document.getElementById(CAROUSEL_ID);

    if (!carrosselContainer) {
        return;
    }

    function proximoSlide() {
        currentSlide = (currentSlide % totalSlides) + 1;
        
        const slideElement = document.getElementById(`slide${currentSlide}`);

        if (slideElement) {
            carrosselContainer.scrollTo({
                left: slideElement.offsetLeft, 
                behavior: 'smooth'
            });
        }
    }

    setInterval(proximoSlide, intervalTime);
});