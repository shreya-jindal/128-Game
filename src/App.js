import { useEffect, useState } from 'react';
import './App.css';
import { RightMove, LeftMove, DownMove, UpMove } from './functions/GameMoves';
import { checkWinCondition, checkLostCondition } from './functions/Features';
import { newGame } from './functions/Features';
import { Row } from './RowComponent';


const App = () => {

  let [Board, setBoard] = useState(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  )

  let [Score, setScore] = useState(0);

  let [BestScore, setBestScore] = useState(0);

  let [Message, setMessage] = useState(undefined);

  useEffect(() => {
    setBoard(newGame());
    localStorage.setItem("Score", "0");
    localStorage.setItem("BestScore", "0");
  }, [])


  useEffect(() => {
    if (Message === undefined)
      window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


  useEffect(() => {
    //get scores from local storage
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
      setMessage("  Oops! \nGame Over!")
    }

  }, [Board])


  //function to handle key operations
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
      default:
    }
  }


  return (
    <>

      <div className="Title">
        <div className="cell"><div className="number">1</div></div>
        <div className="cell color-2"><div className="number">2</div></div>
        <div className="cell color-8"><div className="number">8</div></div>
        <div className="Game"><div className="number">GAME</div></div>
      </div>

      <div className="ScoresContainer">
        <div>
          <div>Score :</div>
          <div>{`${Score}`}</div>
        </div>

        <div>
          <div>Best Score:</div>
          <div>{`${BestScore}`}</div>
        </div>

        <button type="button" onClick={() => { setMessage(undefined); setBoard(newGame); }}> Restart </button>
      </div>

      <div className="message-position">
        <table>
          <tbody>
            {
              Board.map((row, i) => <Row key={i} RowKey={row}></Row>)
            }
          </tbody>
        </table>

        {(Message !== undefined) ? <div className="message"><pre>{Message}</pre></div> : ""}
      </div>

      <div className="instruction">Join via Arrow Keys and get to the 128 tile!</div>

    </>
  );
}


export default App;
