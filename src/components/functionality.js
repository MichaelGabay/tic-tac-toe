function ctraeteBoard(size) {
    const board = Array(size)
    for (let i = 0; i < size; i++) {
        board[i] = [...Array(size)]
    }
    return board
}

function checkHorizontal(board) {
    for (let row of board) {
        const rowSet = new Set(row);
        if (rowSet.size == 1 && !rowSet.has(undefined)) {
            return true
        }
    }
    return false
}
function checklVertical(board) {
    const newBoard = [];
    for (let i = 0; i < board.length; i++) {
        const newRow = [];
        for (let j = 0; j < board.length; j++) {
            newRow.push(board[j][i])
        }
        newBoard.push(newRow)
    }
    return checkHorizontal(newBoard)
}



function checkDiagonal(board) {
    const diagonalsRows = [[], []]
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            diagonalsRows[0].push(board[i][i])
            diagonalsRows[1].push(board[i][board.length - 1 - i])
        }
    }
    return checkHorizontal(diagonalsRows)
}

function checkWinner(board) {
    if (checklVertical(board) || checkHorizontal(board) || checkDiagonal(board)) {
        return true
    }
    return false
}

function checkDraw(board) {
    for (let row of board) {
        if (!row.every(cell => cell != undefined)) return false
    }
    return true;
}


export { ctraeteBoard, checkWinner, checkDraw }