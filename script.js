document.addEventListener('DOMContentLoaded', function () {
    const parallaxContainer = document.querySelector('.parallax-container');
    const mountains = document.querySelector('.mountains');
    const sky = document.querySelector('.sky');
    const nameTitle = document.querySelector('.name-title');

    parallaxContainer.addEventListener('scroll', function () {
        const scrolled = parallaxContainer.scrollTop;
        const mountainParallax = scrolled * 0.5;
        const skyParallax = scrolled * 0.7;
        const titleParallax = scrolled * 0.3;

        mountains.style.transform = `translateZ(-5px) scale(1.5) translateY(${mountainParallax}px)`;
        sky.style.transform = `translateZ(-10px) scale(2) translateY(${skyParallax}px)`;
        nameTitle.style.transform = `translateY(${titleParallax}px)`;
    });
});
