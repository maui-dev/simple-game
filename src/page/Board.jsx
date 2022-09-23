import React from "react";
import Square from "./Square";

const Board = ({values, handleClick}) => {

  let squares = [];
  for (let i = 0; i < 9; i++){
      squares.push(<Square key={i} value={values[i]} handleClick={() => handleClick(i)}/>)}

  return(
    <div className="grid grid-cols-3">
        {squares}
    </div>
  )
}

export default Board;