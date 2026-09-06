const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}