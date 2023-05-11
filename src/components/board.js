import { Fragment, useState } from "react";
import styles from "./board.module.css";
import Square from "./square";
export default function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (calculateWinners(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquare(squares);
    setIsX(!isX);
  };
  const winner = calculateWinners(squares);

  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player : " + (isX ? "X" : "O");
  }

  const startAgain = () => {
    setIsX(true);
    setSquare(Array(9).fill(null));
  };
  return (
    <Fragment>
      <div className={styles.board}>
        <div className={styles.row}>
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className={styles.row}>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className={styles.row}>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>

      <div className={styles.result}>
        <div className={styles.status}>{status}</div>

        <button className={styles.button} onClick={startAgain}>
          Start Again
        </button>
      </div>
    </Fragment>
  );
}

function calculateWinners(squares) {
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPattern.length; i++) {
    const [a, b, c] = winningPattern[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
