const mystuff = document.getElementById('check-me-out');

mystuff.onclick = function() {
    // Create the border element
    const borderEffect = document.createElement('div');
    borderEffect.style.position = 'absolute';
    borderEffect.style.top = '0';
    borderEffect.style.left = '0';
    borderEffect.style.width = '100%';
    borderEffect.style.height = '100%';
    borderEffect.style.border = '4px solid #B00B69'; // Border color and thickness
    borderEffect.style.opacity = '1';
    borderEffect.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    borderEffect.style.transform = 'scale(0)';
    borderEffect.style.pointerEvents = 'none'; // Make sure it doesn't block the button

    // Append the border effect to the button's parent
    mystuff.style.position = 'relative';
    mystuff.appendChild(borderEffect);

    // Trigger the animation
    setTimeout(() => {
        borderEffect.style.transform = 'scale(1)';
        borderEffect.style.opacity = '0';
    }, 10);

    // Remove the border after the animation completes
    setTimeout(() => {
        mystuff.removeChild(borderEffect);
    }, 500); // Match this to the duration of the animation
};
