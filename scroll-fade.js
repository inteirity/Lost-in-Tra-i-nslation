// Scroll fade effect - content fades as you scroll past it
function handleScrollFade() {
  const elements = document.querySelectorAll('.scroll-fade-content > *');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const elementTop = rect.top + scrollPosition;
    const elementBottom = elementTop + rect.height;
    
    // Calculate opacity based on position
    if (rect.top < 0) {
      // Element is scrolling past the top
      const fadeAmount = Math.abs(rect.top) / windowHeight;
      el.style.opacity = Math.max(0, 1 - fadeAmount * 2);
    } else if (rect.bottom > windowHeight) {
      // Element is below viewport
      const fadeAmount = (rect.top - windowHeight) / windowHeight;
      el.style.opacity = Math.max(0.3, 1 - fadeAmount);
    } else {
      // Element is in viewport
      el.style.opacity = 1;
    }
  });
}

// Add scroll listener
window.addEventListener('scroll', handleScrollFade);
// Run on load
handleScrollFade();
