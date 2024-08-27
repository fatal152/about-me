document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.intro-text-only');
    const bioText = document.querySelector('.bio-text-only');
    const checkMeOutButton = document.getElementById('check-me-out');
    const developerText = introText.querySelector('span');
    const moremenu = document.getElementById("More-menu")

    // Ensure initial styles are applied before any transition
    moremenu.style.opacity = '0';
    moremenu.style.transform = 'translateY(20px) scale(0.5)';
    introText.style.opacity = '0';
    introText.style.transform = 'scale(0.5)';
    bioText.style.opacity = '0';
    bioText.style.transform = 'translateY(-20px) scale(0.5)';
    checkMeOutButton.style.opacity = '0';
    checkMeOutButton.style.transform = 'translateY(20px) scale(0.5)';

    // Animate h1 text (small to big)
    setTimeout(() => {
        introText.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        introText.style.opacity = '1';
        introText.style.transform = 'scale(1)';
    }, 100);

    setTimeout(() => {
        moremenu.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        moremenu.style.opacity = '1';
        moremenu.style.transform = 'scale(1)';
    }, 100);

    // Animate p tag (drop down small to big)
    setTimeout(() => {
        bioText.style.transition = 'opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s';
        bioText.style.opacity = '1';
        bioText.style.transform = 'translateY(0) scale(1)';
    }, 200);

    // Animate button (pop up small to big)
    setTimeout(() => {
        checkMeOutButton.style.transition = 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s';
        checkMeOutButton.style.opacity = '1';
        checkMeOutButton.style.transform = 'translateY(0) scale(1)';
    }, 300);

    // Modified underline animation for 'developer'
    developerText.style.position = 'relative';
    developerText.style.overflow = 'hidden';

    const underline = document.createElement('div');
    underline.style.position = 'absolute';
    underline.style.bottom = '0';
    underline.style.left = '0%';
    underline.style.width = '0';
    underline.style.height = '10px';
    underline.style.borderRadius = '20px';
    underline.style.backgroundColor = '#B00B69';
    underline.style.boxShadow = '0 0 10px rgba(176, 11, 105, 0.5)';
    underline.style.transition = 'left 0.5s ease-out, width 0.5s ease-out';

    developerText.appendChild(underline);

    setTimeout(() => {
        underline.style.left = '0';
        underline.style.width = '100%';
    }, 700);
});
