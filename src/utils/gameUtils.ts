// Boggle-like letter distribution
const LETTER_DISTRIBUTION = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9,
  J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
  S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};

export const generateRandomGrid = (): string[][] => {
  const letters = Object.entries(LETTER_DISTRIBUTION).flatMap(([letter, count]) =>
    Array(count).fill(letter)
  );
  
  const grid: string[][] = Array(4).fill(null).map(() => Array(4).fill(''));
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      grid[i][j] = letters[randomIndex];
      letters.splice(randomIndex, 1);
    }
  }
  
  return grid;
};

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};