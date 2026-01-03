// Get all images
const images = document.querySelectorAll('img');

// Create modal HTML
const modal = document.createElement('div');
modal.id = 'imageModal';
modal.style.cssText = `
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`;

// Create close button
const closeBtn = document.createElement('button');
closeBtn.innerHTML = '&times;';
closeBtn.style.cssText = `
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
`;
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

const modalImage = document.createElement('img');
modalImage.style.cssText = `
  max-width: 90%;
  max-height: 90%;
`;

modal.appendChild(closeBtn);
modal.appendChild(modalImage);
document.body.appendChild(modal);

// Add click event to all images
images.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    
    // Check if image is inside a rotated container
    const parent = img.parentElement;
    if (parent && parent.classList.contains('transform')) {
      modalImage.style.transform = 'rotate(-90deg)';
    } else {
      modalImage.style.transform = 'none';
    }
    
    modal.style.display = 'flex';
  });
});

// Close modal when clicking outside the image
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

