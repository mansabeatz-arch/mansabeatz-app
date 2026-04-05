// Mansabeatz App - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mansabeatz App loaded successfully!');
    
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Example function
function greet(name) {
    console.log('Hello, ' + name + '!');
}