document.addEventListener('DOMContentLoaded', () => {
    // Highlight the active navigation link based on current URL
    const path = window.location.pathname;
    const page = path.split("/").pop() || "Home.html"; // Default to Home.html if root

    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if href matches the page name. (Case insensitive matching could be safer)
        if (href && href.toLowerCase() === page.toLowerCase()) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navlinks');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animate hamburger if you have css for .toggle, otherwise just menu shows
            hamburger.classList.toggle('toggle');
        });
    }

    // Expertise Accordion Logic
    const expertiseItems = document.querySelectorAll('.expertise-item');

    expertiseItems.forEach(item => {
        item.addEventListener('click', () => {
            // If this item is already active, close it.
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                const icon = item.querySelector('.icon');
                if (icon) icon.textContent = '+';
            } else {
                // Close all other items
                expertiseItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.icon');
                    if (otherIcon) otherIcon.textContent = '+';
                });

                // Open this item
                item.classList.add('active');
                const icon = item.querySelector('.icon');
                if (icon) icon.textContent = '⊞'; // Or '-' or any other icon
            }
        });
    });
});