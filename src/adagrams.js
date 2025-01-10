let LETTER_POOL = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
};

let SCORE_CHART = {
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10
};

//----Helper Function----//
export const buildTilePile = () => {
  let poolLetterTiles = [];

  for (const [letter, frequency] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < frequency; i++) {
      poolLetterTiles.push(letter);
    }
  }
  return poolLetterTiles;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = [];
  let poolLetterTiles = buildTilePile();

  while (letterList.length < 10) {
    const letterPosition = Math.floor(Math.random() * poolLetterTiles.length);
    
    [poolLetterTiles[letterPosition], poolLetterTiles[poolLetterTiles.length - 1]] =
      [poolLetterTiles[poolLetterTiles.length - 1], poolLetterTiles[letterPosition]];

      const letter = poolLetterTiles.pop();
      letterList.push(letter);
  }
  return letterList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const clonedArray = [...lettersInHand];
  input = input.toUpperCase();

  for (const letter of input) {
    if (!clonedArray.includes(letter)) {
      return false;
    } 
  const index = clonedArray.indexOf(letter); 
  clonedArray.splice(index, 1); //removes the letter from the array 
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  word = word.toUpperCase();

  for (const letter of word){
    const letterPointValue = SCORE_CHART[letter];
    score += letterPointValue;
  }
  if (word.length >= 7){
    score += 8 ;
  }
  return score 
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0;
  let highestScoreWord = '';

  for (const word of words) {
    const currentScore = scoreWord(word);

    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScoreWord = word;
    } else if (currentScore === highestScore) {
      if (highestScoreWord.length === word.length && highestScoreWord.length === 10){
        continue;
      } if (highestScoreWord.length < 10 && word.length === 10) {
        highestScoreWord = word;
        } else if (word.length < highestScoreWord.length && highestScoreWord.length < 10) {
          highestScoreWord = word;
        }
      }
    }
  return { word: highestScoreWord, score: highestScore };
  };

  