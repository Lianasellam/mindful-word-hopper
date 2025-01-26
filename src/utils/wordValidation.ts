import checkWord from 'check-word';

const words = checkWord('en'); // Initialize with English dictionary

export const isValidWord = (word: string): boolean => {
  return words.check(word.toLowerCase());
};