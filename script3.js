document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement; // Target the <html> element

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.className = savedTheme; // Set class to 'light' or 'dark'
    } else { // Default to light
        html.className = 'light';
    }

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Collapsible Day Sections ---
    const dayToggles = document.querySelectorAll('.day-toggle');
    dayToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const dayWorkout = toggle.parentElement;
            const exercisesContainer = dayWorkout.querySelector('.exercises-container');
            const icon = toggle.querySelector('.toggle-icon');

            dayWorkout.classList.toggle('active');

            if (dayWorkout.classList.contains('active')) {
                exercisesContainer.style.maxHeight = exercisesContainer.scrollHeight + 'px';
                icon.classList.add('rotate-45');
            } else {
                exercisesContainer.style.maxHeight = '0';
                icon.classList.remove('rotate-45');
            }
        });
    });

    // --- Toggle Exercise Details ---
    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        const clickableArea = card.querySelector('.cursor-pointer');
        if (!clickableArea) return; // Skip if the card is not clickable

        clickableArea.addEventListener('click', (e) => {
            // Prevents the day section from collapsing when clicking on a card
            e.stopPropagation();
            const details = card.querySelector('.exercise-details');
            details.classList.toggle('hidden');
        });
    });
});