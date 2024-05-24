const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);

const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentIndex = 0;
const slideWidth = items[0].getBoundingClientRect().width;
const intervalTime = 5000; // Intervalo de tempo entre cada slide (em milissegundos)
let slideInterval;

function startSlideInterval() {
  slideInterval = setInterval(() => {
    moveToNextSlide();
  }, intervalTime);
}

function setSlidePosition(index) {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  setSlidePosition(currentIndex);
}

function moveToPrevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  setSlidePosition(currentIndex);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

nextButton.addEventListener('click', function() {
  moveToNextSlide();
  stopSlideInterval();
});

prevButton.addEventListener('click', function() {
  moveToPrevSlide();
  stopSlideInterval();
});

// Inicializar autoplay
startSlideInterval();
