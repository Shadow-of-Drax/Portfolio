class Board {
    constructor(size) {
        this.size = size;
        this.grid = this.createGrid(size);
        this.ships = [];
    }

    createGrid(size) {
        return Array(size).fill(null).map(() => Array(size).fill(null));
    }

    placeShip(ship, x, y, direction) {
        if (this.canPlaceShip(ship, x, y, direction)) {
            for (let i = 0; i < ship.length; i++) {
                const posX = x + (direction === 'horizontal' ? i : 0);
                const posY = y + (direction === 'vertical' ? i : 0);
                this.grid[posY][posX] = ship;
            }
            this.ships.push(ship);
            return true;
        }
        return false;
    }

    canPlaceShip(ship, x, y, direction) {
        for (let i = 0; i < ship.length; i++) {
            const posX = x + (direction === 'horizontal' ? i : 0);
            const posY = y + (direction === 'vertical' ? i : 0);

            if (posX >= this.size || posY >= this.size || this.grid[posY][posX]) {
                return false;
            }
        }
        return true;
    }

    receiveAttack(x, y) {
        const cell = this.grid[y][x];
        if (cell === 'miss' || cell === 'hit') {
            return 'already_attacked';
        } else if (cell instanceof Ship) {
            cell.hit();
            this.grid[y][x] = 'hit';
            if (cell.isSunk) {
                return 'sink';
            }
            return 'hit';
        } else {
            this.grid[y][x] = 'miss';
            return 'miss';
        }
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk);
    }
}