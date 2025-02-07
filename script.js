// document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateActiveLink() {
        let currentSection = "hero";

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    const images = [
        'img/home.jpg',
        'img/home1.jpeg',
        'img/home2.jpg'
    ];
    
    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImage.src = images[currentIndex];
    }

    setInterval(changeImage, 3000);

    window.onload = function() {
        closeSidebar(event);
    };

    function showSidebar() {
        document.querySelector('.sidebar').style.display = 'flex';
    }

    function closeSidebar(event) {
        event.preventDefault();
        document.querySelector('.sidebar').style.display = 'none';
    }

    function toggleAnswer(faqItem) {
        const answer = faqItem.querySelector('.faq-answer');
        answer.classList.toggle('show');
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        document.querySelectorAll('.hidden').forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('appear');
                section.classList.remove('hidden');
            }
        });

        const whatwedoContent = document.querySelector('.whatwedo-content');
        const image = document.querySelector('.whatwedo-image');
        const text = document.querySelector('.whatwedo-text');

        if (isElementInViewport(whatwedoContent)) {
            image.classList.add('slide-in-left');
            text.classList.add('appear');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
// });
