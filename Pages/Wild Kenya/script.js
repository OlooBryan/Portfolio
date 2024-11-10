document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel .list .item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;
    const scaleDownDuration = 500; // Time for the scale-down effect in ms

    function showSlide(index) {
        // Hide all items
        items.forEach(item => item.style.display = "none");

        // Show the current item
        items[index].style.display = "block";
    }

    function scaleDownEffect(item, callback) {
        // Apply scale-down animation to the item
        item.style.transition = `transform ${scaleDownDuration}ms ease`;
        item.style.transform = "scale(0.5)";

        // After scale-down completes, execute callback (e.g., switch slide)
        setTimeout(() => {
            item.style.transform = ""; // Reset scale for the next use
            callback();
        }, scaleDownDuration);
    }

    function nextSlide() {
        const currentItem = items[currentIndex];

        scaleDownEffect(currentItem, () => {
            currentIndex = (currentIndex + 1) % items.length; // Move to the next slide
            showSlide(currentIndex);
        });
    }

    function prevSlide() {
        const currentItem = items[currentIndex];

        scaleDownEffect(currentItem, () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length; // Move to the previous slide
            showSlide(currentIndex);
        });
    }

    // Event listeners for prev and next buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Initial display setup
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next");
    let autoSlideInterval;

    function nextSlide() {
        nextButton.click();  // Simulates the "Next" button click
    }

    // Start auto-slide every 10 seconds
    autoSlideInterval = setInterval(nextSlide, 10000);

    // Optional: Pause auto-slide on hover and resume on mouse leave
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseleave', () => autoSlideInterval = setInterval(nextSlide, 10000));
});
