const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.card');
    const dotsContainer = document.querySelector('.dots');

    const visibleCards = 3;
    let currentIndex = 0;
    const maxIndex = cards.length - visibleCards;

    // Create dots
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    function updateDots() {
      dotsContainer.querySelectorAll('span').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function goToSlide(index) {
      const cardWidth = cards[0].offsetWidth + 20; // width + gap
      currentIndex = index;
      track.style.transform = `translateX(-${cardWidth * index}px)`;
      updateDots();
    }

    // Initial render
    goToSlide(0);
