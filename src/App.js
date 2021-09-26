import { useEffect, useState } from 'react';
import './App.css';
import { RightMove, LeftMove, DownMove, UpMove } from './functions/GameMoves';
import { checkWinCondition, checkLostCondition } from './functions/Features';
// import { handleKeyDown } from './functions/GameMoves'
import { newGame } from './functions/Features';


const App = () => {

  let [Board, setBoard] = useState(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    // [[2, 16, 8, 16],
    // [8, 2, 64, 32],
    // [2, 32, 16, 2],
    // [8, 32, 32, 8]]
  )

  let [Score, setScore] = useState(0);

  let [BestScore, setBestScore] = useState(0);

  let [Message, setMessage] = useState(undefined);

  useEffect(() => {
    setBoard(newGame());
    localStorage.setItem("Score", "0");
    localStorage.setItem("BestScore", "0");
    console.log("Reloaded!");
  }, [])


  useEffect(() => {
    if (Message === undefined)
      window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


  useEffect(() => {
    console.table(Board);
    let ScoreFromDB = Number(localStorage.getItem("Score"))
    let BestScoreFromDB = Number(localStorage.getItem("BestScore"))
    if (ScoreFromDB !== undefined) {
      setScore(ScoreFromDB);
      setBestScore(BestScoreFromDB);
    }

    //on change in board, check for:- if won or lost condition
    let Won = checkWinCondition(Board);
    let Lost = checkLostCondition(Board);
    if (Won) {
      setMessage("Congrations!! \n You Win!!")
    }
    if (Lost) {
      setMessage("Game Over!")
    }

  }, [Board])

  useEffect(() => {

    if (Message)
      return alert(Message);
    console.log(Message);

  }, [Message])


  const handleKeyDown = (event) => {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp": setBoard(UpMove(Board));
        break;
      case "ArrowDown": setBoard(DownMove(Board));
        break;
      case "ArrowRight": setBoard(RightMove(Board));
        break;
      case "ArrowLeft": setBoard(LeftMove(Board));
        break;
    }
  }

  return (
    <>

    <div class="Title">
      <div className="cell"><div className="number">1</div></div>
      <div className="cell color-2"><div className="number">2</div></div>
      <div className="cell color-8"><div className="number">8</div></div>
      <div className="Game"><div className="number">GAME</div></div>
      
    </div>
<div class="ScoresContainer">
      <div>
        <div>Score :</div>
        <div>{`${Score}`}</div>
      </div>

      <div>
        <div>Best Score:</div>
        <div>{`${BestScore}`}</div>
        
      </div>
      <button type="button" class="btn btn-danger" onClick={() => { setMessage(undefined); setBoard(newGame); }}> Restart </button>
      </div>

      <table>
        <tbody>
          {
            Board.map((row, i) => <Row key={i} RowKey={row}></Row>)
          }
        </tbody>
      </table>
      
    <div class="instruction">Join and get to the 128 tile!</div>
      
      
    </>
  );
}









const Row = ({ RowKey }) => {
  return (
    <tr>
      {
        RowKey.map((num, i) =>
          <Cell key={i} number={num} />
        )
      }
    </tr>
  )
}

const Cell = ({ number }) => {
  let CellClass = "cell";
  let CellText = (number) ? `${number}` : " ";
  if (number) {
    CellClass += ` color-${number}`;
  }

  return (
    <>
      <td>
        <div className={CellClass}>
          <div className="number">{CellText}</div>
        </div>
      </td>

    </>
  )
}


export default App;
