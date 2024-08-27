const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const mouse = {
    x: null,
    y: null,
    radius: 150
};

const particleMaxSize = 20; 
const particleMinSize = 5;  
const particleMinSizeSingle = particleMinSize * 0.3; 
const particleMinSizeConnected = particleMinSize * 0.2;

// Listen for mouse movements
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Listen for touch events
window.addEventListener('touchstart', function(event) {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
});

window.addEventListener('touchmove', function(event) {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.baseSize = size;
        this.color = color;
        this.alpha = 1;
        this.repelling = false;
        this.connected = 0;
        this.isNew = true;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(176, 11, 105, 0.5)';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.min(this.alpha, 0.85);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.shadowBlur = 0;
    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let repelSpeed = 1;

        if (distance < mouse.radius + this.size) {
            this.repelling = true;
            let angle = Math.atan2(dy, dx);
            this.directionX -= Math.cos(angle) * repelSpeed;
            this.directionY -= Math.sin(angle) * repelSpeed;

            this.directionX *= 0.95;
            this.directionY *= 0.95;
        } else if (this.repelling) {
            this.directionX *= 0.98;
            this.directionY *= 0.98;
            if (Math.abs(this.directionX) < 0.1 && Math.abs(this.directionY) < 0.1) {
                this.repelling = false;
                this.directionX = (Math.random() * 5) - 2.5;
                this.directionY = (Math.random() * 5) - 2.5;
            }
        }

        this.checkCollisionWithHTML();

        this.x += this.directionX;
        this.y += this.directionY;

        if (this.x > canvas.width + this.size) {
            this.x = -this.size;
        } else if (this.x < -this.size) {
            this.x = canvas.width + this.size;
        }

        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
        } else if (this.y < -this.size) {
            this.y = canvas.height + this.size;
        }

        this.draw();
    }

    checkCollisionWithHTML() {
        const elements = document.querySelectorAll('.button'); // Select all buttons

        elements.forEach(el => {
            const rect = el.getBoundingClientRect(); // Get bounding box of the element
            if (this.x + this.size > rect.left &&
                this.x - this.size < rect.right &&
                this.y + this.size > rect.top &&
                this.y - this.size < rect.bottom) {
                
                // Collision detected, reflect direction
                if (this.x < rect.left || this.x > rect.right) {
                    this.directionX = -this.directionX;
                }
                if (this.y < rect.top || this.y > rect.bottom) {
                    this.directionY = -this.directionY;
                }
            }
        });
    }
}

function createNewParticle() {
    let size = (Math.random() * (particleMaxSize - particleMinSize)) + particleMinSize;
    let x, y;
    let validPosition = false;

    while (!validPosition) {
        x = (Math.random() * (canvas.width - size * 2)) + size;
        y = (Math.random() * (canvas.height - size * 2)) + size;
        validPosition = checkSpawnPosition(x, y, size);
    }

    let directionX = (Math.random() * 5) - 2.5;
    let directionY = (Math.random() * 5) - 2.5;
    let color = '#B00B69';

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
}

function checkSpawnPosition(x, y, size) {
    const elements = document.querySelectorAll('.button'); // Select all buttons

    for (let el of elements) {
        const rect = el.getBoundingClientRect(); // Get bounding box of the element
        if (x + size > rect.left &&
            x - size < rect.right &&
            y + size > rect.top &&
            y - size < rect.bottom) {
            return false; // Overlaps with an HTML element
        }
    }

    return true; // Valid position (not overlapping any HTML elements)
}

function init() {
    particlesArray.length = 0;

    let particleDensity = 45000; 
    let numberOfParticles = (canvas.width * canvas.height) / particleDensity;
    numberOfParticles = Math.max(numberOfParticles, 5);

    for (let i = 0; i < numberOfParticles; i++) {
        createNewParticle();
    }
}

function connect() {
    const maxDistance = canvas.width / 7;

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            let opacity = Math.max(0, Math.min(1, (maxDistance - distance) / maxDistance));

            if (distance < maxDistance) {
                ctx.strokeStyle = `rgba(176, 11, 105, ${opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
        particle.update();
    });
    connect();
}

init();
animate();

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});
