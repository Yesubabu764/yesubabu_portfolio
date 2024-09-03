document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    const links = document.querySelectorAll(".navbar a, .contact");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for the fixed header
                behavior: "smooth"
            });
        }
    }

    // Highlight active nav link
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; // Adjust for the fixed header
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});