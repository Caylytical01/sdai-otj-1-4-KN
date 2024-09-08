function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.display = 'block';

    const increment = 5 / duration;  // Increment based on duration

    function increase() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            // Continue the animation by calling increase function again
            requestAnimationFrame(increase);
        }
    }

    // Start the fade-in animation
    increase();
}

// Apply the fade-in effect after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector('.hero-image');
    fadeIn(heroImage, 2000);  // Set the fade-in duration to 2 seconds (2000 ms)

    const menu = document.querySelector('.menu');
    fadeIn(menu, 15000);  

    const Devfavorites = document.querySelector('#Devfavorites');
    fadeIn(Devfavorites, 15000);  

    const location = document.querySelector('#location');
    fadeIn(location, 15000);  

    const hours = document.querySelector('#hours');
    fadeIn(hours, 15000);  


});
