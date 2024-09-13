class AI {
    constructor(board) {
        this.board = board;
        this.possibleMoves = this.generateAllPossibleMoves();
        this.huntMode = false;
        this.lastHit = null;
        this.possibleTargets = [];
    }
    
    // Utility function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    generateAllPossibleMoves() {
        const moves = [];
        for (let x = 0; x < this.board.size; x++) {
            for (let y = 0; y < this.board.size; y++) {
                moves.push({ x, y });
            }
        }
        return shuffleArray(moves);
    }

    makeMove(opponentBoard) {
        let move;
        if (this.huntMode && this.possibleTargets.length > 0) {
            move = this.possibleTargets.pop();
        } else {
            move = this.possibleMoves.pop();
        }

        const result = opponentBoard.receiveAttack(move.x, move.y);
        if (result === 'hit') {
            this.huntMode = true;
            this.lastHit = move;
            this.addAdjacentTargets(move, opponentBoard);
        } else if (result === 'sink') {
            this.huntMode = false;
            this.possibleTargets = [];
        }
        // Update UI accordingly
        UI.updateCell('player-board', move.x, move.y, result);
    }

    addAdjacentTargets(move, opponentBoard) {
        const { x, y } = move;
        const adjacentMoves = [
            { x: x + 1, y }, { x: x - 1, y },
            { x, y + 1 }, { x, y - 1 }
        ];

        adjacentMoves.forEach(m => {
            if (
                m.x >= 0 && m.x < opponentBoard.size &&
                m.y >= 0 && m.y < opponentBoard.size &&
                opponentBoard.grid[m.y][m.x] !== 'miss' &&
                opponentBoard.grid[m.y][m.x] !== 'hit' &&
                !this.possibleTargets.some(t => t.x === m.x && t.y === m.y)
            ) {
                this.possibleTargets.push(m);
            }
        });
    }
}