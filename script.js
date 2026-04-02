// --- Mobile Menu Toggle ---
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate Hamburger (Optional extra polish)
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate-down');
    bars[1].classList.toggle('hide');
    bars[2].classList.toggle('rotate-up');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- Hero Image Slider ---
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 6000; // 6 seconds for a slower, calmer feel

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Start auto slider if slides exist on page
if (slides.length > 0) {
    let slideTimer = setInterval(nextSlide, slideInterval);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer); 
            
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            slideTimer = setInterval(nextSlide, slideInterval); 
        });
    });
}

// --- Smooth Scroll Reveal Animations (iOS Feel) ---
function revealElements() {
    // Select all elements with the 'reveal' class
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // how many pixels of element must be visible before showing

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Listen for scroll events to trigger animations
window.addEventListener("scroll", revealElements);

// Trigger once on load in case elements are already in viewport
window.onload = revealElements;
