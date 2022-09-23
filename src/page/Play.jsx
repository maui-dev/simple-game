import React, {useState} from 'react';
import Square from './Square';

const Play = () => {
  const [values, setValues] = useState(Array(9).fill(null));  
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (i) => {
    const temp = values.slice();
    temp[i] = (xIsNext? "X" : "O");
    setValues(temp);
    setxIsNext(!xIsNext);
  }

  const squares = [];
  for (let i = 0; i < 9; i++){
    squares.push(<Square value={values[i]} handleClick={() => handleClick(i)}/>)
  }

  return(
    <div className="flex flex-col items-center">
      <div className="text-3xl mb-5">
        Next Player:{xIsNext ? 'X' : 'O'}
      </div>
      <div className="grid grid-cols-3">
        {squares}
      </div>
    </div>
  )
}

export default Play;