const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let score = 0;
let gameActive = true;

// Player
const player = {
    x: canvas.width / 2 - 0.015 * canvas.width,
    y: canvas.height - 0.1 * canvas.height,
    width: 0.03 * canvas.width,
    height: 0.05 * canvas.height,
    color: '#FFD700'
};

// Obstacles
const obstacles = [
    { x: 0, y: 0, width: 0.1 * canvas.width, height: 0.033 * canvas.height, speed: 0.015 * canvas.width, direction: 1 },
    { x: 0.25 * canvas.width, y: 0.25 * canvas.height, width: 0.1 * canvas.width, height: 0.033 * canvas.height, speed: 0.02 * canvas.width, direction: 1 },
    { x: 0.5 * canvas.width, y: 0.5 * canvas.height, width: 0.1 * canvas.width, height: 0.033 * canvas.height, speed: 0.025 * canvas.width, direction: -1 },
    // Add more obstacles if you want
];

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = 'red';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.x += obstacle.speed * obstacle.direction;
        // Change direction if hit canvas edge
        if (obstacle.x <= 0 || obstacle.x + obstacle.width >= canvas.width) {
            obstacle.direction *= -1;
        }
    });
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = 'Score: ' + score;
}

function checkCollision() {
    const playerLeft = player.x;
    const playerRight = player.x + player.width;
    const playerTop = player.y;
    const playerBottom = player.y + player.height;

    for (let obstacle of obstacles) {
        if (playerRight > obstacle.x && 
            playerLeft < obstacle.x + obstacle.width &&
            playerBottom > obstacle.y && 
            playerTop < obstacle.y + obstacle.height) {
            gameActive = false;
            alert('Game Over! Score: ' + score);
            document.location.reload();
        }
    }
}

function gameLoop() {
    if (!gameActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacles();
    checkCollision();
    updateScore();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') player.y -= 0.05 * canvas.height;
    if (e.key === 'ArrowDown') player.y += 0.05 * canvas.height;
    if (e.key === 'ArrowLeft') player.x -= 0.05 * canvas.width;
    if (e.key === 'ArrowRight') player.x += 0.05 * canvas.width;

    // Score when reaching the top
    if (player.y < 0) {
        score++;
        player.y = canvas.height - 0.1 * canvas.height;
    }

    // Keep the player within the canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
});

gameLoop();
