import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import GameGrid from '../components/GameGrid';
import GameControls from '../components/GameControls';
import FoundWords from '../components/FoundWords';
import { generateRandomGrid } from '../utils/gameUtils';

const Index = () => {
  const [grid, setGrid] = useState(generateRandomGrid());
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const { toast } = useToast();

  const handleWordSubmit = (word: string) => {
    if (word.length < 3) {
      toast({
        title: "Word too short",
        description: "Words must be at least 3 letters long",
        variant: "destructive",
      });
      return;
    }

    if (foundWords.includes(word)) {
      toast({
        title: "Word already found",
        description: "Try a different word!",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, we'd validate if the word can be formed from the grid
    // and check against a dictionary. For now, we'll accept all words.
    setFoundWords(prev => [...prev, word]);
    setScore(prev => prev + word.length);
    
    toast({
      title: "Word accepted!",
      description: `+${word.length} points`,
    });
  };

  const handleLetterChange = (row: number, col: number, value: string) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const randomizeGrid = () => {
    setGrid(generateRandomGrid());
    setEditMode(false);
  };

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Word Game</h1>
      
      <div className="flex justify-center gap-4 mb-4">
        <Button onClick={toggleEditMode} variant={editMode ? "secondary" : "outline"}>
          {editMode ? "Done Editing" : "Edit Letters"}
        </Button>
        <Button onClick={randomizeGrid} variant="outline">
          Randomize Grid
        </Button>
      </div>

      <GameGrid 
        grid={grid} 
        editMode={editMode}
        onLetterChange={handleLetterChange}
      />
      
      <div className="mt-6">
        <GameControls
          onWordSubmit={handleWordSubmit}
          score={score}
        />
      </div>

      <FoundWords words={foundWords} />
    </div>
  );
};

export default Index;