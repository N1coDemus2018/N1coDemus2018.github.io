// scripts.js

// Function to enable smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links with a hash
    const smoothScrollLinks = document.querySelectorAll('nav a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Display a welcome alert when the page loads
    alert('Welcome to my website! Feel free to explore the services, portfolio, and testimonials sections.');
});