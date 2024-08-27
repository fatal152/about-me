document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.My-Stuff-buttons .button');

    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('show');
        }, index * 250);  // Delay each button by 300ms
    });
});
