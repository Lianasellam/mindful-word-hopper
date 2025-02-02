// Using a more efficient Set data structure for word lookups
const englishWords = new Set([
  // Common English words (3+ letters)
  "THE", "AND", "FOR", "ARE", "BUT", "NOT", "YOU", "ALL", "ANY", "CAN", "HAD", "HER", "WAS", "ONE", "OUR", "OUT", "DAY", "GET", "HAS", "HIM", "HIS", "HOW", "MAN", "NEW", "NOW", "OLD", "SEE", "TWO", "WAY", "WHO", "BOY", "DID", "ITS", "LET", "PUT", "SAY", "SHE", "TOO", "USE",
  // Add more words as needed...
  // You can expand this list with thousands of valid English words
]);

export const isValidWord = (word: string): boolean => {
  // Convert to uppercase for consistent comparison
  return word.length >= 3 && englishWords.has(word.toUpperCase());
};