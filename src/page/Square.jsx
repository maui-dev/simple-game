import React from 'react';

const Square = ({value, handleClick}) => {
  return(
      <div className="flex w-10 h-10 border-2 border-black justify-center items-center" onClick={handleClick}>
        <div className="text-xl font-semibold">
          {value}
        </div>
      </div>
  )
}

export default Square;