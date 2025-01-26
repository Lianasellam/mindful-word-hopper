import React from 'react';
import { Input } from "@/components/ui/input";

interface GameGridProps {
  grid: string[][];
  editMode: boolean;
  onLetterChange?: (row: number, col: number, value: string) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ grid, editMode, onLetterChange }) => {
  const handleLetterChange = (row: number, col: number, value: string) => {
    if (onLetterChange && value.length <= 1) {
      onLetterChange(row, col, value.toUpperCase());
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2 p-4 bg-white/50 rounded-xl shadow-lg">
      {grid.map((row, i) =>
        row.map((letter, j) => (
          <div
            key={`${i}-${j}`}
            className={`letter-cube ${editMode ? 'cursor-text' : 'cursor-pointer'}`}
          >
            {editMode ? (
              <Input
                type="text"
                value={letter}
                onChange={(e) => handleLetterChange(i, j, e.target.value)}
                className="w-full h-full text-center uppercase font-bold text-xl bg-transparent border-none focus:ring-2 focus:ring-indigo-400"
                maxLength={1}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {letter}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default GameGrid;