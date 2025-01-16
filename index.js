// const slides = document.querySelectorAll(".sliders img");
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector(".showData"); // Changed to querySelector

// let slideIndex = 0;
// let intervalId = null;

// Initialize the slider
// initializeSlider();

// function initializeSlider() {
//     if (slides.length > 0) { // Check if there are slides
//         slides.forEach(slide => {
//             slide.style.display = "none"; // Hide all slides
//         });
//         slides[slideIndex].style.display = "block"; // Show first slide
//     }
// }

// function showSlide(index) {
//     if (index >= slides.length) {
//         slideIndex = 0;
//     } else if (index < 0) {
//         slideIndex = slides.length - 1;
//     } else {
//         slideIndex = index;
//     }

//     slides.forEach(slide => {
//         slide.style.display = "none";
//     });
//     slides[slideIndex].style.display = "block";
// }

// function prevSlide() {
//     showSlide(slideIndex - 1);
// }

// function nextSlide() {
//     showSlide(slideIndex + 1);
// }

// Menu toggle functionality
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log('Menu clicked'); // For debugging
});

// Optional: Auto-slide functionality
// function startSlideShow() {
//     intervalId = setInterval(() => {
//         nextSlide();
//     }, 3000); // Change slide every 3 seconds
// }

// Uncomment the line below if you want the slideshow to start automatically
// startSlideShow();