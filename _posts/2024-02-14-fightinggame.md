<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jungle Emoji Tetris</title>
<style>
    body {
        font-family: 'Comic Sans MS', cursive, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url('jungle-background.jpg');
        background-size: cover;
        margin: 0;
    }
    #gameBoard {
        position: relative;
        width: 300px;
        height: 400px;
        border: 5px solid #3c763d;
        background-color: rgba(0,0,0,0.2);
        overflow: hidden;
        cursor: url('images/precision3-512 (1).webp'), auto;
    }
    #score, #timer {
        color: #fff;
        text-shadow: 2px 2px 4px #000;
        position: absolute;
        font-size: 16px;
    }
    #score {
        top: 10px;
        left: 10px;
    }
    #timer {
        top: 10px;
        right: 10px;
    }
    .block {
        width: 60px;
        height: 60px;
        font-size: 48px;
        line-height: 60px;
        text-align: center;
        position: absolute;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>
</head>
<body>
<div id="gameBoard">
    <div id="score">Score: 0</div>
    <div id="timer">Time: 1:00</div>
</div>

<script>
    const gameBoard = document.getElementById('gameBoard');
    const timerDisplay = document.getElementById('timer');
    let blocks = [];
    let score = 0;
    let startTime = Date.now();
    let endTime = startTime + 60000; // 1 minute in milliseconds

    function createBlock() {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = Math.floor(Math.random() * 5) * 60 + 'px';
        block.style.top = '0';
        block.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Determine if the block is a special Cheetah block
        if (Math.random() < 0.1) { // 10% chance for a Cheetah block
            block.innerText = '🐆';
            block.isCheetah = true;
        } else {
            block.innerText = randomEmoji();
            block.isCheetah = false;
        }
        
        block.creationTime = Date.now();
        gameBoard.appendChild(block);
        blocks.push(block);

        block.addEventListener('click', () => {
            if (block.isCheetah) {
                score *= 2; // Double the score for Cheetah block
            } else {
                score++;
            }
            block.remove();
            blocks.splice(blocks.indexOf(block), 1);
            updateScore();
        });
    }

    function moveBlocks() {
        blocks.forEach(block => {
            const top = parseInt(block.style.top || '0');
            const left = parseInt(block.style.left || '0');
            let movementIncrement = block.isCheetah ? 300 : 60;

            if (left <= 0 || left >= 240 || block.isCheetah) {
                block.direction *= -1;
            }
            block.style.left = (left + block.direction * movementIncrement) + 'px';

            if (top + 60 < gameBoard.clientHeight) {
                block.style.top = (top + movementIncrement) + 'px';
            } else {
                block.remove();
                blocks.splice(blocks.indexOf(block), 1);
            }

            if (Date.now() - block.creationTime > 20000) {
                block.remove();
                blocks.splice(blocks.indexOf(block), 1);
            }
        });

        let remainingTime = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        timerDisplay.textContent = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (remainingTime === 0) {
            endGame();
        }
    }

    function endGame() {
        clearInterval(gameLoop);
        alert('Time\'s up! Your final score is: ' + score);
    }

    function updateScore() {
        document.getElementById('score').innerText = 'Score: ' + score;
    }

    function randomEmoji() {
        const emojis = ['🐒', '🐅', '🦜', '🦥', '🐘', '🦧'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    blocks.forEach(block => {
        block.direction = Math.random() < 0.5 ? -1 : 1;
    });

    const gameLoop = setInterval(() => {
        createBlock();
        moveBlocks();
    }, 500);

</script>
</body>
</html>
