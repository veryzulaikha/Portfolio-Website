document.addEventListener("DOMContentLoaded", function () {
    // Mapping menu items to corresponding section IDs
    const navLinks = {
        "Home": "section1",       // First section
        "About": "section3",      // Third section
        "Services": "section2",   // Second section
        "Portfolio": "section4",  // Fourth section
        "Contact Me": "section6"  // Sixth section
    };

    // Select all links inside the navbar
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const sectionId = navLinks[this.innerText]; // Get the corresponding section ID

            if (sectionId) {
                const targetSection = document.getElementById(sectionId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
