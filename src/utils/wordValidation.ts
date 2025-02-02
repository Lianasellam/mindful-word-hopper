// Using a more efficient Set data structure for word lookups
const englishWords = new Set([
  // Common English words (3+ letters)
  "THE", "AND", "FOR", "ARE", "BUT", "NOT", "YOU", "ALL", "ANY", "CAN", "HAD", "HER", "WAS", "ONE", "OUR", "OUT", "DAY", "GET", "HAS", "HIM", "HIS", "HOW", "MAN", "NEW", "NOW", "OLD", "SEE", "TWO", "WAY", "WHO", "BOY", "DID", "ITS", "LET", "PUT", "SAY", "SHE", "TOO", "USE",
  // 4-letter words
  "DOOR", "WORD", "PLAY", "GAME", "TIME", "LOVE", "LIFE", "HOME", "WORK", "BOOK", "FOOD", "RAIN", "SNOW", "WIND", "FIRE", "TREE", "BIRD", "FISH", "STAR", "MOON", "SHIP", "BOAT", "ROAD", "PATH", "MIND", "SOUL", "HAND", "FOOT", "HEAD", "FACE", "EYES", "NOSE", "EARS", "HAIR",
  // Common 3-letter words
  "CAT", "DOG", "RAT", "BAT", "HAT", "MAT", "SAT", "EAT", "RUN", "FUN", "SUN", "MAP", "CAP", "LAP", "TAP", "BAG", "TAG", "WAG", "LEG", "PEG", "BED", "RED", "FED", "LED",
  // Common 5-letter words
  "HOUSE", "MOUSE", "WATER", "EARTH", "SPACE", "LIGHT", "NIGHT", "SOUND", "MUSIC", "DANCE", "SMILE", "LAUGH", "HAPPY", "SUNNY", "CLOUD", "STORM", "BEACH", "OCEAN", "RIVER", "PLANT"
]);

export const isValidWord = (word: string): boolean => {
  // Convert to uppercase for consistent comparison
  return word.length >= 3 && englishWords.has(word.toUpperCase());
};