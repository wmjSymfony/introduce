class Cell {
    constructor(state, x, y) {
        this.state = state;
        this.x = x;
        this.y = y;
    }
    nextState(cells) {
        let lives = this.getLives(cells);
        if (this.state === 0) {
            if (lives === 3) {
                this.state = 1;
            }
        } else {
            if (lives < 2) {
                this.state = 0;
            } else if (lives > 3) {
                this.state = 0;
            }
        }
    }
    getLives(cells) {
        let lives = 0;
        for (let i = -1; i <= 1; i++) {
            if (cells[this.x + i]) {
                for (let j = -1; j <= 1; j++) {
                    if (cells[this.x + i][this.y + j]) {
                        lives += +Boolean(cells[this.x + i][this.y + j].state);
                    }
                }
            }
        }
        lives -= cells[this.x][this.y].state;
        return lives;
    }
}

class LifeGameTable {
    constructor(xlen, ylen) {
        this.xlen = xlen;
        this.ylen = ylen;
    }
    //得到状态全为0的表
    getEmptyView(){
        let table = [];
        for (let i = 0; i < this.xlen; i++) {
            table[i] = [];
            for (let j = 0; j < this.ylen; j++) {
                table[i][j] = new Cell(0, i, j);
            }
        }
        return table;
    }
    //得到随机表
    getRandomView() {
        let table = [];
        for (let i = 0; i < this.xlen; i++) {
            table[i] = [];
            for (let j = 0; j < this.ylen; j++) {
                let num = Math.round(Math.random(1, 0));
                table[i][j] = new Cell(num, i, j);
            }
        }
        return table;
    }
    //由当前状态得到下一步状态
    dynamic(table) {
        let tempTable = [];
        for (let i = 0; i < this.xlen; i++) {
            tempTable[i] = [];
            for (let j = 0; j < this.ylen; j++) {
                const oldCell = table[i][j];
                const cell = new Cell(oldCell.state, i, j); //复制了一份旧的单元格
                tempTable[i][j] = cell; //存老的单元格
                cell.nextState(table);//改变cell的状态
            }
        }
        table = tempTable;
        return table;
    }
}

export { LifeGameTable, Cell }