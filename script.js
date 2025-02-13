document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer');
    const heroSection = document.querySelector('.hero-section');
    const mountains = document.querySelector('.mountains');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Parallax effect for mountains
        mountains.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        
        // Fade out hero section
        heroSection.style.opacity = 1 - (scrollPosition / windowHeight);

        // Show/hide footer
        if (scrollPosition > windowHeight * 0.5) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });
});
