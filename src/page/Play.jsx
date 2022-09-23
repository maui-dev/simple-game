import React, {useState, useEffect} from 'react';
import Board from './Board';
import decideWinner from './decideWinner';

const Play = () => {
  const [values, setValues] = useState(Array(9).fill(null));  
  const [xIsNext, setxIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([values]);

  useEffect(() => {
    setWinner(decideWinner(values));
  },[values])
  
  const handleClick = (i) => {
    const temphistory = history.slice(0, stepNumber + 1);
    const current = temphistory[temphistory.length - 1];
    const tempvalue = current.slice();
    if (decideWinner(tempvalue) || tempvalue[i]) {
      return;
    }
    tempvalue[i] = (xIsNext? "X" : "O");
    temphistory.push(tempvalue);
    
    setValues([...tempvalue]);
    setxIsNext(!xIsNext);
    setStepNumber(temphistory.length - 1);
    setHistory([...temphistory]);
  }
  const jumpTo = (move,idx) => {
    setValues([...move]);
    const temphistory = history.slice(0, idx+1);
    setHistory([...temphistory]);
  }
  console.log(history)
 
  return(
    <div className="flex flex-col items-center">
      {winner ? 
        <div className="text-3xl mb-5">
          winner is:{winner}
        </div> :
        <div className="text-3xl mb-5">
          Next Player:{xIsNext ? 'X' : 'O'}
        </div>
      }
      <div className="mb-5">
        <Board values={values} handleClick={handleClick}/>
      </div>
      <div className="flex flex-col">
        {
          history.map((move, idx) => {
            return(
              <div key={idx} onClick={() => {jumpTo(move,idx)}}> Go to {idx} </div>
            )
          })
        }
      </div>
      
      
    </div>
  )
}

export default Play;