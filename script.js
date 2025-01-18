document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    // Function to update the active link
    function updateActiveLink() {
        let currentSection = "hero";

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update navbar links
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    // Listen for scroll events
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    const images = [
        'img/home.jpg',
        'img/home1.jpg',
        'img/home2.jpg'
    ];
    
    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImage.src = images[currentIndex];
    }

    setInterval(changeImage, 3000);

});
window.onload = function() {
    closeSidebar(event);
};
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function closeSidebar(event){
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
function toggleAnswer(faqItem) {
    faqItem.classList.toggle('active');
    const answer = faqItem.querySelector('.faq-answer');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}
// Function to check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

    // Function to handle scroll events
    function handleScroll() {
        const sectionsToAnimate = document.querySelectorAll('.hidden'); // Select all hidden elements
        sectionsToAnimate.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('appear'); // Add the appear class
                section.classList.remove('hidden'); // Remove hidden class
            }
        });
    }

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
