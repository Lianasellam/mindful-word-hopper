import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";

interface GameGridProps {
  grid: string[][];
  editMode: boolean;
  onLetterChange?: (row: number, col: number, value: string) => void;
  onWordSubmit?: (word: string) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ grid, editMode, onLetterChange, onWordSubmit }) => {
  const [selectedCells, setSelectedCells] = useState<Array<[number, number]>>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleLetterChange = (row: number, col: number, value: string) => {
    if (onLetterChange && value.length <= 1) {
      onLetterChange(row, col, value.toUpperCase());
    }
  };

  const isAdjacent = (cell1: [number, number], cell2: [number, number]): boolean => {
    const [row1, col1] = cell1;
    const [row2, col2] = cell2;
    const rowDiff = Math.abs(row1 - row2);
    const colDiff = Math.abs(col1 - col2);
    return rowDiff <= 1 && colDiff <= 1 && !(rowDiff === 0 && colDiff === 0);
  };

  const getWordFromSelection = (): string => {
    return selectedCells.map(([row, col]) => grid[row][col]).join('');
  };

  const handleCellInteraction = (row: number, col: number, isStart: boolean) => {
    if (editMode) return;
    
    if (isStart) {
      setIsSelecting(true);
      setSelectedCells([[row, col]]);
    } else if (isSelecting) {
      const lastCell = selectedCells[selectedCells.length - 1];
      if (isAdjacent(lastCell, [row, col]) && !selectedCells.some(cell => cell[0] === row && cell[1] === col)) {
        setSelectedCells([...selectedCells, [row, col]]);
      }
    }
  };

  const handleSelectionEnd = () => {
    if (isSelecting && selectedCells.length >= 3) {
      const word = getWordFromSelection();
      onWordSubmit?.(word);
    }
    setIsSelecting(false);
    setSelectedCells([]);
  };

  useEffect(() => {
    const handleMouseUp = () => handleSelectionEnd();
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isSelecting, selectedCells]);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-4 gap-2 p-4 bg-white/50 rounded-xl shadow-lg"
      onMouseLeave={handleSelectionEnd}
      onTouchEnd={handleSelectionEnd}
    >
      {grid.map((row, i) =>
        row.map((letter, j) => {
          const isSelected = selectedCells.some(([row, col]) => row === i && col === j);
          return (
            <div
              key={`${i}-${j}`}
              className={`letter-cube ${editMode ? 'cursor-text' : 'cursor-pointer'} 
                ${isSelected ? 'bg-indigo-200 scale-95' : ''}`}
              onMouseDown={() => handleCellInteraction(i, j, true)}
              onMouseEnter={() => handleCellInteraction(i, j, false)}
              onTouchStart={(e) => {
                e.preventDefault();
                handleCellInteraction(i, j, true);
              }}
              onTouchMove={(e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const element = document.elementFromPoint(touch.clientX, touch.clientY);
                const cellElement = element?.closest('.letter-cube');
                if (cellElement) {
                  const row = parseInt(cellElement.getAttribute('data-row') || '0');
                  const col = parseInt(cellElement.getAttribute('data-col') || '0');
                  handleCellInteraction(row, col, false);
                }
              }}
              data-row={i}
              data-col={j}
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
          );
        })
      )}
    </div>
  );
};

export default GameGrid;