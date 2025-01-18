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
