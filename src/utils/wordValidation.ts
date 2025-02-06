// Define a basic set of common English words
const commonWords = [
  "THE", "BE", "TO", "OF", "AND", "IN", "THAT", "HAVE", "IT", "FOR",
  "NOT", "ON", "WITH", "HE", "AS", "YOU", "DO", "AT", "THIS", "BUT",
  "HIS", "BY", "FROM", "THEY", "WE", "SAY", "HER", "SHE", "OR", "AN",
  "WILL", "MY", "ONE", "ALL", "WOULD", "THERE", "THEIR", "WHAT", "SO",
  "UP", "OUT", "IF", "ABOUT", "WHO", "GET", "WHICH", "GO", "ME", "WHEN",
  "MAKE", "CAN", "LIKE", "TIME", "NO", "JUST", "HIM", "KNOW", "TAKE",
  "PEOPLE", "INTO", "YEAR", "YOUR", "GOOD", "SOME", "COULD", "THEM",
  "SEE", "OTHER", "THAN", "THEN", "NOW", "LOOK", "ONLY", "COME", "ITS",
  "OVER", "THINK", "ALSO", "BACK", "AFTER", "USE", "TWO", "HOW", "OUR",
  "WORK", "FIRST", "WELL", "WAY", "EVEN", "NEW", "WANT", "ANY", "THESE",
  "GIVE", "DAY", "MOST", "US", "CAT", "DOG", "RUN", "SIT", "EAT", "PLAY"
];

const englishWords = new Set(commonWords);

export const isValidWord = (word: string): boolean => {
  return word.length >= 3 && englishWords.has(word.toUpperCase());
};