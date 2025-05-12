const track = document.getElementById('track');
    const cards = document.querySelectorAll('.card');
    const dotsContainer = document.getElementById('dots');
    const visibleCards = 3;
    const totalDots = 5;
    let currentIndex = 0;

    const cardWidth = cards[0].offsetWidth + 20;

    // Create exactly 5 dots
    for (let i = 0; i < totalDots; i++) {
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
      currentIndex = index;
      track.style.transform = `translateX(-${cardWidth * index}px)`;
      updateDots();
    }

    // --- Mouse drag functionality ---
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const container = document.getElementById('carousel');

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = currentIndex * cardWidth;
      container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseleave', () => {
      isDragging = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
      isDragging = false;
      container.style.cursor = 'grab';
      // Snap to nearest slide
      const index = Math.round(parseFloat(track.style.transform.replace('translateX(', '')) / -cardWidth);
      goToSlide(Math.max(0, Math.min(index, totalDots - visibleCards)));
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;
      const newTransform = scrollLeft - walk;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${newTransform}px)`;
    });

    // Init
    goToSlide(0);
    document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });
  // Wait until DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });

