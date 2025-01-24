// Back to Top Button Script
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show the button after scrolling 300px
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
    });
});