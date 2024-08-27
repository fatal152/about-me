

document.addEventListener('DOMContentLoaded', function() {
    const moreMenuButton = document.getElementById('More-menu');
    const moreButtonsContainer = document.getElementById('more-buttons-container');
    const mystuff = document.getElementById('check-me-out');

    

    mystuff.onclick = function() {
        window.location.href = '/my-stuff.html';
    };

    moreMenuButton.addEventListener('click', function() {
        if (moreButtonsContainer.classList.contains('visible')) {
            moreButtonsContainer.classList.remove('visible');
        } else {
            moreButtonsContainer.classList.add('visible');
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!moreMenuButton.contains(event.target) && !moreButtonsContainer.contains(event.target)) {
            moreButtonsContainer.classList.remove('visible');
        }
    });
});
