class Player {
    constructor(name) {
        this.name = name;
        this.board = new Board(10);
    }

    placeShipsRandomly() {
        const shipLengths = [5, 4, 3, 3, 2];
        shipLengths.forEach(length => {
            let placed = false;
            while (!placed) {
                const x = getRandomInt(0, this.board.size);
                const y = getRandomInt(0, this.board.size);
                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
                const ship = new Ship(length);
                placed = this.board.placeShip(ship, x, y, direction);
            }
        });
    }
}