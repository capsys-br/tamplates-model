document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO CABEÇALHO COM SCROLL ---
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo img');

    // Define qual logo usar em cada estado
    const logoLight = 'logo2.png'; // Logo para fundo escuro/transparente
    const logoDark = 'logo1.png';  // Logo para fundo claro/amarelo

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logoImg.src = logoDark;
        } else {
            header.classList.remove('scrolled');
            logoImg.src = logoLight;
        }
    });

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Função para abrir o menu
    const openMenu = () => {
        navList.classList.add('active');
        menuOverlay.classList.add('active');
    };

    // Função para fechar o menu
    const closeMenu = () => {
        navList.classList.remove('active');
        menuOverlay.classList.remove('active');
    };

    // Eventos de clique
    mobileMenuIcon.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // Fecha o menu ao clicar em um dos links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- ANIMAÇÃO AO ROLAR A PÁGINA (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // --- CARROSSEL DE DEPOIMENTOS ---
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slider && slides.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSliderPosition() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        });
        
        setInterval(() => {
            nextBtn.click();
        }, 5000);
    }
    
    // --- ROLAGEM SUAVE PARA LINKS ÂNCORA ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});