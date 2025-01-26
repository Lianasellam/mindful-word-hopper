import React from 'react';

interface FoundWordsProps {
  words: string[];
}

const FoundWords: React.FC<FoundWordsProps> = ({ words }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Found Words:</h3>
      <div className="flex flex-wrap">
        {words.map((word, index) => (
          <div key={index} className="found-word">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundWords;