document.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const title = document.querySelector('.title-section');
    const mountains = document.querySelector('.mountains');
    
    // Fade out title as user scrolls
    title.style.opacity = 1 - (scrollPos / 500);
    
    // Move mountains up slower than scroll rate
    mountains.style.transform = `translateY(${scrollPos * 0.5}px)`;
});
