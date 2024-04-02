<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Crossy lol Road</title>
    <style>
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to bottom, #87CEEB 0%, #87CEEB 50%, #8FBC8F 50%, #8FBC8F 100%);
            font-family: 'Arial', sans-serif;
        }
        canvas {
            border: 5px solid #000;
        }
        #score {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 24px;
            color: #FFF;
            text-shadow: 2px 2px #000;
        }
    </style>
</head>
<body>
    <div id="score">Score: 0</div>
    <canvas id="gameCanvas" width="800" height="600"></canvas>

<script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        let score = 0;
        let gameActive = true;

        // Player
        const player = {
            x: canvas.width / 2 - 15,
            y: canvas.height - 60,
            width: 30,
            height: 30,
            color: '#FFD700'
        };

        // Obstacles
        const obstacles = [
            { x: 0, y: 0, width: 80, height: 20, speed: 3, direction: 1 },
            { x: 200, y: 100, width: 80, height: 20, speed: 4, direction: 1 },
            { x: 400, y: 200, width: 80, height: 20, speed: 5, direction: -1 },
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
            if (e.key === 'ArrowUp') player.y -= 20;
            if (e.key === 'ArrowDown') player.y += 20;
            if (e.key === 'ArrowLeft') player.x -= 20;
            if (e.key === 'ArrowRight') player.x += 20;

            // Score when reaching the top
            if (player.y < 0) {
                score++;
                player.y = canvas.height - 60;
            }

            // Keep the player within the canvas
            if (player.x < 0) player.x = 0;
            if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
            if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
        });

        gameLoop();
    </script>
</
