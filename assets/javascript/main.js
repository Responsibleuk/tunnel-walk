const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.querySelectorAll('.carousel-item'));

let currentItem = 0;
let isAnimating = false;

function showItem(index) {
  if (isAnimating) return;
  isAnimating = true;
  const currentItemElem = items[currentItem];
  const nextItemElem = items[index];
  nextItemElem.style.transform = 'scale(1.5)'; /* zoom-in effect */
  nextItemElem.style.opacity = 1;
  currentItemElem.style.opacity = 0;
  currentItem = index;
  setTimeout(() => {
    nextItemElem.style.transform = 'scale(1)'; /* reset zoom-in effect */
    isAnimating = false;
  }, 1000); /* duration of zoom-in effect */
}

carousel.addEventListener('touchstart', handleTouchStart);
carousel.addEventListener('touchmove', handleTouchMove);

let startX;
let startY;
let dist;
let threshold = 50; /* adjust as needed */

function handleTouchStart(e) {
  startX = e.touches[0].pageX;
  startY = e.touches[0].pageY;
  dist = 0;
}

function handleTouchMove(e) {
  if (!startX || !startY) return;
  const diffX = e.touches[0].pageX - startX;
  const diffY = e.touches[0].pageY - startY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    e.preventDefault();
    dist
