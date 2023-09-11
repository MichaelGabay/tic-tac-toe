import React, { useState } from 'react'
import { ctraeteBoard, checkWinner, checkDraw } from "./functionality"

const Game = () => {
    const [board, setBoard] = useState(ctraeteBoard(3))
    const [player, setPlayer] = useState("X")
    const [message, setMessage] = useState("")
    const [stopGame, setStopGame] = useState(false)
    const [isPlayig, setIsPlaying] = useState(false)


    const onCellClick = (row, col) => {
        if (board[row][col]) return
        setIsPlaying(true)
        board[row][col] = player
        setBoard([...board])
        setPlayer(player == "X" ? "O" : "X")
        if (checkWinner(board)) {
            setMessage(player + " is winning")
            setStopGame(true)
            setIsPlaying(false)
        }
        else if (checkDraw(board)) {
            setMessage("Draw")
            setStopGame(true)
            setIsPlaying(false)
        }
    }
    const playAgain = () => {
        setBoard(ctraeteBoard(board.length))
        setMessage("")
        setPlayer("X")
        setStopGame(false)
    }
    const updateSize = ({ target: { value } }) => {
        setBoard(ctraeteBoard(+value))
    }
    const cellStyle = {
        border: "1px solid black", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", cursor: "pointer"
    }
    const inputStyle = {
        width: "110px", height: "22px", padding: "8px 8px", fontSize: "20px", marginBottom: "20px", textAlign: "center"
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {
                message && <h2 style={{ textAlign: "center" }}>{message}</h2>
            }
            <input defaultValue={3} max={20} onChange={updateSize} style={inputStyle} disabled={isPlayig} placeholder='board size' type='number' />
            {board.map((row, rowIndex) =>
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, colIndex) =>
                        <button disabled={stopGame} onClick={() => onCellClick(rowIndex, colIndex)} key={colIndex} style={cellStyle} >{cell}</button>
                    )}
                </div>
            )}
            {
                stopGame && <button onClick={playAgain} style={{ marginTop: "12px", cursor: "pointer" }}>play again</button>
            }

        </div>
    )
}
export default Game