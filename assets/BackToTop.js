// backToTop.js
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}); 
