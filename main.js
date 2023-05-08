let currentIndex = 0;
let canScroll = false;

const slides = document.querySelectorAll(".slide");
const scrollIcon = document.getElementById("scroll-icon");

function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  slides[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  if (!canScroll) return;

  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
  canScroll = false;
  setTimeout(() => {
    canScroll = true;
    scrollIcon.classList.remove("hide");
  }, 5000);
}

showSlide(0);
setTimeout(() => {
  canScroll = true;
  scrollIcon.classList.remove("hide");
}, 5000);

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    nextSlide();
  }
});
