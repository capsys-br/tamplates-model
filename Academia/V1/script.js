document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada ao rolar a página
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // A seção será animada quando 20% dela estiver visível
    };

    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Desobserva o elemento após a animação
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Slider de Depoimentos
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    const updateSlider = () => {
        const cardWidth = cards[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o início
        }
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Volta para o final
        }
        updateSlider();
    });

    // Adiciona evento de redimensionamento para recalcular a posição
    window.addEventListener('resize', updateSlider);
});