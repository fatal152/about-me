const DOT_COUNT = 180;
const TWINKLE_COUNT = 5;
const stars = [];

function createStars() {
    for (let i = 0; i < DOT_COUNT; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';

        star.style.opacity = 0.4;

        document.body.appendChild(star);
        stars.push(star);
    }
}

function twinkle() {
    for (let i = 0; i < TWINKLE_COUNT; i++) {

        const star = stars[Math.floor(Math.random() * stars.length)];

        const brightness = Math.random() * 0.6 + 0.4;
        const glow = Math.random() * 5 + 15;

        star.style.transition = "opacity 0.5s, box-shadow 0.5s";
        star.style.opacity = brightness;
        star.style.boxShadow = `0 0 ${glow}px ${glow/2}px rgba(255,255,255,0.9)`;

        setTimeout(() => {
            star.style.opacity = 0.4;
            star.style.boxShadow = "0 0 2px rgba(255,255,255,0.4)";
        }, 2000);
    }

}

function createShootingStar(){

    const star = document.createElement("div");
    star.className = "shootingstar";

    const startX = window.innerWidth + Math.random()*200;
    const startY = Math.random() * window.innerHeight * 0.3;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },1600);
}

setInterval(createShootingStar, 3000);
createStars();
setInterval(twinkle, 900);