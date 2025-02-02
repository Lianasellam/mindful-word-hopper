import twl06Words from 'words.json'; // Adjust the path to match where you put the file

const englishWords = new Set(
  twl06Words.map((word) => word.toUpperCase()) // ensure consistent casing
);

export const isValidWord = (word: string): boolean => {
  return word.length >= 3 && englishWords.has(word.toUpperCase());
};

