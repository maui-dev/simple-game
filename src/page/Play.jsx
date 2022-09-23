import React, {useState, useEffect} from 'react';
import Square from './Square';
import decideWinner from './decideWinner';

const Play = () => {
  const [values, setValues] = useState(Array(9).fill(null));  
  const [xIsNext, setxIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  
  const handleClick = (i) => {
    const temp = values.slice();
    if (decideWinner(values) || values[i]) {
      return;
    }
    temp[i] = (xIsNext? "X" : "O");
    setValues(temp);
    setxIsNext(!xIsNext);
  }

  const squares = [];
  for (let i = 0; i < 9; i++){
    squares.push(<Square value={values[i]} handleClick={() => handleClick(i)}/>)
  }

  useEffect(() => {
    setWinner(decideWinner(values));
  },[values])

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
      <div className="grid grid-cols-3">
        {squares}
      </div>
    </div>
  )
}

export default Play;