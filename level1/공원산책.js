function solution(park, routes) {
    const direction = {
        N: [-1, 0],
        E: [0, 1],
        S: [1, 0],
        W: [0, -1]
    };
    const numRows = park.length
    const numCols = park[0].length
    let currentRow = 0, currentCol = 0;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (park[i][j] === 'S') {
                currentRow = i;
                currentCol = j;
            }
        }
    }
    routes.forEach(order => {
        const [directionKey, steps] = order.split(' ');
        const [dx, dy] = direction[directionKey];
        let row = currentRow, col = currentCol;
        let canMove = true;
        for (let i = 0; i < parseInt(steps); i++) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (!(0 <= newRow && newRow < numRows && 0 <= newCol && newCol < numCols && park[newRow][newCol] !== 'X')) {
                canMove = false;
                break;
            }

            row = newRow;
            col = newCol;
        }
        if (canMove) {
            currentRow = row;
            currentCol = col;
        }
    });
    return [currentRow, currentCol];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
