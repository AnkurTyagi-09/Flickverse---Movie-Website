// Sidebar Toggle
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    body.classList.toggle('sidebar-open');
});

// Slider Navigation
const slider = document.querySelector('.movie-slider');
const prev = document.querySelector('.prev-slide');
const next = document.querySelector('.next-slide');

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300; // Scrolls left by 300px
});

next.addEventListener('click', () => {
    slider.scrollLeft += 300; // Scrolls right by 300px
});

// Language Selector
const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    alert(`Language switched to: ${selectedLang}`); // Mock action
});

