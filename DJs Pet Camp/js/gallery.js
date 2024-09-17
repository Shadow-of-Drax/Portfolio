// gallery.js

// Lightbox functionality
const images = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = image.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});