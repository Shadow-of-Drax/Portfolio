const Storage = {
    saveGame(gameState) {
        localStorage.setItem('battleshipGameState', JSON.stringify(gameState));
    },

    loadGame() {
        const savedState = localStorage.getItem('battleshipGameState');
        return savedState ? JSON.parse(savedState) : null;
    },

    saveLeaderboard(leaderboard) {
        localStorage.setItem('battleshipLeaderboard', JSON.stringify(leaderboard));
    },

    loadLeaderboard() {
        const savedLeaderboard = localStorage.getItem('battleshipLeaderboard');
        return savedLeaderboard ? JSON.parse(savedLeaderboard) : [];
    }
};