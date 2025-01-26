import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import GameGrid from '../components/GameGrid';
import GameControls from '../components/GameControls';
import FoundWords from '../components/FoundWords';
import { generateRandomGrid } from '../utils/gameUtils';

const GAME_DURATION = 180; // 3 minutes in seconds

const Index = () => {
  const [grid, setGrid] = useState(generateRandomGrid());
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const { toast } = useToast();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else {
      toast({
        title: "Game Over!",
        description: `Final Score: ${score}`,
      });
    }
  }, [timeLeft, score]);

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

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Word Game</h1>
      
      <GameGrid grid={grid} />
      
      <div className="mt-6">
        <GameControls
          onWordSubmit={handleWordSubmit}
          timeLeft={timeLeft}
          score={score}
        />
      </div>

      <FoundWords words={foundWords} />
    </div>
  );
};

export default Index;