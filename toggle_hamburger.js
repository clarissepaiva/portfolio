const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');
    const closeBtn = nav.querySelector('.close-btn');
    const navLogo = nav.querySelector('.nav-logo');
  
    function closeMenu() {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    }
  
    // 1) Toggle on hamburger click
    // hamburger.addEventListener('click', () => {
    //   // No stopPropagation needed
    //   hamburger.classList.toggle('active');
    //   nav.classList.toggle('active');
    // });
  
    // 2) Close on close button
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
  
    // 3) Close on logo click (if desired)
    if (navLogo) {
      navLogo.addEventListener('click', closeMenu);
    }
  
    // 4) Close if clicked outside the menu
    document.addEventListener('click', (event) => {
      if (nav.classList.contains('active')) {
        // If click is NOT inside nav AND NOT on the hamburger
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
          closeMenu();
        }
      }
    });
  });