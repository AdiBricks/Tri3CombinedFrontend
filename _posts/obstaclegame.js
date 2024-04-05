const mazeContainer = document.getElementById('maze');
const messageElement = document.getElementById('message');
const mazeSize = 20;
const obstacleDensity = 0.3; // Adjust density of obstacles (0 to 1)
let playerPosition = { row: 0, col: 0 };

// Generate random maze layout with obstacles
const mazeLayout = Array.from({ length: mazeSize }, () =>
    Array.from({ length: mazeSize }, () =>
        Math.random() < obstacleDensity ? 1 : 0
    )
);

// Place start and end points
mazeLayout[0][0] = 2; // Start
mazeLayout[mazeSize - 1][mazeSize - 1] = 3; // End

function createMaze() {
    for (let row = 0; row < mazeSize; row++) {
        for (let col = 0; col < mazeSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;

            switch (mazeLayout[row][col]) {
                case 1:
                    cell.style.backgroundColor = '#000';
                    break;
                case 2:
                    cell.style.backgroundColor = '#00ff00'; // Start
                    playerPosition = { row, col };
                    break;
                case 3:
                    cell.style.backgroundColor = '#ff0000'; // End
                    break;
                default:
                    cell.style.backgroundColor = '#fff'; // Path
                    break;
            }

            mazeContainer.appendChild(cell);
        }
    }
}

function updatePlayerPosition() {
    const playerCell = document.querySelector(`.cell[data-row="${playerPosition.row}"][data-col="${playerPosition.col}"]`);
    playerCell.style.backgroundColor = '#0000ff'; // Player color
}

function checkWin() {
    const endCell = document.querySelector(`.cell[data-row="${mazeSize - 1}"][data-col="${mazeSize - 1}"]`); // End cell position
    if (playerPosition.row === mazeSize - 1 && playerPosition.col === mazeSize - 1) {
        messageElement.textContent = 'Congratulations! You won!';
        endCell.style.backgroundColor = '#00ff00'; // Change end cell color on win
    }
}

function movePlayer(event) {
    const { key } = event;

    const newRow = playerPosition.row + (key === 'ArrowDown' || key === 'S' ? 1 : key === 'ArrowUp' || key === 'W' ? -1 : 0);
    const newCol = playerPosition.col + (key === 'ArrowRight' || key === 'D' ? 1 : key === 'ArrowLeft' || key === 'A' ? -1 : 0);


    if (newRow >= 0 && newRow < mazeSize && newCol >= 0 && newCol < mazeSize) {
        const targetCell = mazeLayout[newRow][newCol];

        if (targetCell !== 1) {
            const playerCell = document.querySelector(`.cell[data-row="${playerPosition.row}"][data-col="${playerPosition.col}"]`);
            playerCell.style.backgroundColor = targetCell === 2 ? '#00ff00' : '#fff'; // Restore start cell or path color

            playerPosition = { row: newRow, col: newCol };

            updatePlayerPosition();
            checkWin();
        }
    }
}

document.addEventListener('keydown', movePlayer);

createMaze();
updatePlayerPosition();
