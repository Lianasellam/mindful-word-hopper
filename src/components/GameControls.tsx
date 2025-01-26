import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GameControlsProps {
  onWordSubmit: (word: string) => void;
  score: number;
}

const GameControls: React.FC<GameControlsProps> = ({ onWordSubmit, score }) => {
  const [currentWord, setCurrentWord] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentWord.trim()) {
      onWordSubmit(currentWord.trim().toUpperCase());
      setCurrentWord('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Score: {score}</div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={currentWord}
          onChange={(e) => setCurrentWord(e.target.value)}
          placeholder="Enter word..."
          className="flex-1"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default GameControls;