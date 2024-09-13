class Game {
    constructor() {

const game = new Game(); {
    window.game = game;
    player: null,
    aiPlayer; null,
    ai; null,
    leaderboard; [];
}
    init(); {
        this.player = new Player('Player');
        this.aiPlayer = new Player('AI');
        this.ai = new AI(this.aiPlayer.board);
        this.leaderboard = Storage.loadLeaderboard();

        UI.createBoard('player-board', this.player.board.size);
        UI.createBoard('ai-board', this.aiPlayer.board.size);

        this.player.placeShipsRandomly();
        this.aiPlayer.placeShipsRandomly();

        UI.bindPlayerBoardEvents(this.player, this.aiPlayer);

        UI.updateLeaderboard(this.leaderboard);
    };
    }
    saveGame() {
        const gameState = {
            playerBoard: this.serializeBoard(this.player.board),
            aiBoard: this.serializeBoard(this.aiPlayer.board),
            leaderboard: this.leaderboard
        };
        Storage.saveGame(gameState);
        alert('Game saved!');
    };

    loadGame() {
        const gameState = Storage.loadGame();
        if (gameState) {
            this.deserializeBoard(this.player.board, gameState.playerBoard);
            this.deserializeBoard(this.aiPlayer.board, gameState.aiBoard);
            this.leaderboard = gameState.leaderboard;
            UI.updateLeaderboard(this.leaderboard);
            alert('Game loaded!');
        } else {
            alert('No saved game found.');
        }
    };

    serializeBoard(board) {
        return {
            size: board.size,
            grid: board.grid.map(row => row.map(cell => {
                if (cell instanceof Ship) {
                    return { length: cell.length, hits: cell.hits, isSunk: cell.isSunk };
                } else {
                    return cell;
                }
            }))
        };
    };

    deserializeBoard(board, data) {
        board.size = data.size;
        board.grid = data.grid.map(row => row.map(cell => {
            if (cell && typeof cell === 'object' && 'length' in cell) {
                const ship = new Ship(cell.length);
                ship.hits = cell.hits;
                ship.isSunk = cell.isSunk;
                return ship;
            } else {
                return cell;
            }
        }));
    }
};