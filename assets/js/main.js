document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const leftPillar = document.getElementById('left-pillar');
    const rightPillar = document.getElementById('right-pillar');
    const mainContent = document.querySelector('section');

    // Hide main content initially
    mainContent.classList.add('content-hidden');

    window.addEventListener('load', function() {
        // Start pillar animation
        leftPillar.style.transform = 'translateX(-100%)';
        rightPillar.style.transform = 'translateX(100%)';

        // After pillar animation, fade out loader and fade in content
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            mainContent.classList.remove('content-hidden');
            mainContent.classList.add('content-visible');
        }, 1200); // This should match the transition duration in the CSS
    });

    // Smooth scroll for all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Get Notified Button
    const notifyBtn = document.getElementById('notify-btn');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function() {
            showThankYouPopup();
        });
    }

    // Add subtle parallax effect on mouse move
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;

        const texture = document.querySelector('.texture-pattern');
        if (texture) {
            texture.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key to close any modals (if added later)
        if (e.key === 'Escape') {
            console.log('Escape pressed');
        }
    });

    // Console branding
    console.log('%c iPillarsi ', 'background: #2C2C2C; color: #F5F1E8; font-size: 18px; padding: 10px 20px; font-family: Cormorant Garamond');
    console.log('%c Premium Real Estate Coming Soon ', 'color: #6B5D52; font-size: 12px; font-family: Montserrat');
});