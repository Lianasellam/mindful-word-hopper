import React from 'react';

interface GameGridProps {
  grid: string[][];
}

const GameGrid: React.FC<GameGridProps> = ({ grid }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 bg-white/50 rounded-xl shadow-lg">
      {grid.map((row, i) =>
        row.map((letter, j) => (
          <div key={`${i}-${j}`} className="letter-cube">
            {letter}
          </div>
        ))
      )}
    </div>
  );
};

export default GameGrid;