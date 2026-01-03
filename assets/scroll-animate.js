// Scroll animation using Intersection Observer - slide from sides
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.scroll-animate-left, .scroll-animate-right');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      } else {
        entry.target.classList.remove('animate-visible');
      }
    });
  }, observerOptions);
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
});
