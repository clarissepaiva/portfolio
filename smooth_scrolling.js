document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute("href").substring(1); // Get the ID without the #
        const targetElement = document.getElementById(targetId);
        console.log(targetElement)
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start" // Align to the top of the section
            });
        }
    });
});