class AI {
    constructor(board) {
        this.board = board;
        this.possibleMoves = this.generateAllPossibleMoves();
        this.huntMode = false;
        this.lastHit = null;
        this.possibleTargets = [];
    }
}

    generateAllPossibleMoves(); {
        const moves = [];
        for (let x = 0; x < this.board.size; x++) {
            for (let y = 0; y < this.board.size; y++) {
                moves.push({ x, y });
            }
        }
        return shuffleArray(moves);
    }

    makeMove(opponentBoard); {
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

    addAdjacentTargets(move, opponentBoard);  {
        const { x, y } = move;
        const adjacentMoves = [
            { x: x + 1, y }, { x: x - 1, y },
            { x, y: y + 1 }, { x, y: y - 1 }
        ];
    
        adjacentMoves.forEach(adjacentCell => {
            const { x: adjX, y: adjY } = adjacentCell;
            if (
                adjX >= 0 && adjX < opponentBoard.size &&
                adjY >= 0 && adjY < opponentBoard.size &&
                !opponentBoard.grid[adjY][adjX].isHit &&
                !this.possibleTargets.some(t => t.x === adjX && t.y === adjY)
            ) {
                this.possibleTargets.push({ x: adjX, y: adjY });
            }
        });
    }

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}