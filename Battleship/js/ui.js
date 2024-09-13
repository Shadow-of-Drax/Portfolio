const UI = {
    createBoard(boardId, size) {
        const boardElement = document.getElementById(boardId);
        boardElement.innerHTML = '';
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                boardElement.appendChild(cell);
            }
        }
    },

    updateCell(boardId, x, y, result) {
        const boardElement = document.getElementById(boardId);
        const cell = boardElement.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
        if (cell) {
            cell.classList.add(result);
        }
    },

    bindPlayerBoardEvents(player, opponent) {
        const boardElement = document.getElementById('ai-board');
        boardElement.addEventListener('click', event => {
            const cell = event.target;
            if (cell.classList.contains('cell')) {
                const x = parseInt(cell.dataset.x);
                const y = parseInt(cell.dataset.y);
                const result = opponent.board.receiveAttack(x, y);
                if (result === 'already_attacked') return;
                UI.updateCell('ai-board', x, y, result);
                if (opponent.board.allShipsSunk()) {
                    alert('You win!');
                    // Update leaderboard, etc.
                } else {
                    // AI makes a move
                    Game.ai.makeMove(player.board);
                    if (player.board.allShipsSunk()) {
                        alert('AI wins!');
                    }
                }
            }
        });
    },

    updateLeaderboard(leaderboard) {
        const leaderboardElement = document.getElementById('leaderboard-list');
        leaderboardElement.innerHTML = '';
        leaderboard.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.name}: ${entry.score}`;
            leaderboardElement.appendChild(li);
        });
    }
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('btn-new-game').addEventListener('click', () => {
            game.init();
        });
    });