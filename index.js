function fadeIn(element, duration = 2000, delay = 500) {
    // Set the initial opacity and transition for the element
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration / 1000}s ease-in`;

    // Delay the fade-in effect
    setTimeout(function() {
        element.style.opacity = 1;
    }, delay);
}

// Apply the fade-in effect to the image element after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var heroImage = document.querySelector('.hero-image');
    fadeIn(heroImage, 20000, 500);  // Call fadeIn with a 2-second duration and 500ms delay
});
