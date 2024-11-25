let letterPool = {};
  letterPool['A'] = 9;
  letterPool['B'] = 2;
  letterPool['C'] = 2;
  letterPool['D'] = 4;
  letterPool['E'] = 12;
  letterPool['F'] = 2;
  letterPool['G'] = 3;
  letterPool['H'] = 2;
  letterPool['I'] = 9;
  letterPool['J'] = 1;
  letterPool['K'] = 1;
  letterPool['L'] = 4;
  letterPool['M'] = 2;
  letterPool['N'] = 6;
  letterPool['O'] = 8;
  letterPool['P'] = 2;
  letterPool['Q'] = 1;
  letterPool['R'] = 6;
  letterPool['S'] = 4;
  letterPool['T'] = 6;
  letterPool['U'] = 4;
  letterPool['V'] = 2;
  letterPool['W'] = 2;
  letterPool['X'] = 1;
  letterPool['Y'] = 2;
  letterPool['Z'] = 1;

// console.log(letterPool);
let SCORE_CHART = {}
  SCORE_CHART['A'] = 1
  SCORE_CHART['B'] = 3;
  SCORE_CHART['C'] = 3;
  SCORE_CHART['D'] = 2;
  SCORE_CHART['E'] = 1;
  SCORE_CHART['F'] = 4;
  SCORE_CHART['G'] = 2;
  SCORE_CHART['H'] = 4;
  SCORE_CHART['I'] = 1;
  SCORE_CHART['J'] = 8;
  SCORE_CHART['K'] = 5;
  SCORE_CHART['L'] = 1;
  SCORE_CHART['M'] = 3;
  SCORE_CHART['N'] = 1;
  SCORE_CHART['O'] = 1;
  SCORE_CHART['P'] = 3;
  SCORE_CHART['Q'] = 10;
  SCORE_CHART['R'] = 1;
  SCORE_CHART['S'] = 1;
  SCORE_CHART['T'] = 1;
  SCORE_CHART['U'] = 1;
  SCORE_CHART['V'] = 4;
  SCORE_CHART['W'] = 4;
  SCORE_CHART['X'] = 8;
  SCORE_CHART['Y'] = 4;
  SCORE_CHART['Z'] = 10;

// export const buildTilePile = () => {
//   let poolLetterTiles = []

//   for (const [letter, frequency] of Object.entries(letterPool)) {
//     for (let i = 0; i < frequency; i++) {
//       poolLetterTiles.push(letter)
//     };
//   };
//   return poolLetterTiles;
// };

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = []
  let poolLetterTiles = []

  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      poolLetterTiles.push(letter)
    };
  };
  while (letterList.length < 10) {
    let letterPosition = Math.floor(Math.random() * poolLetterTiles.length);
    let letter = poolLetterTiles[letterPosition];
    letterList.push(letter);
    poolLetterTiles.splice(letterPosition, 1);
  }
  return letterList;
};

// do {
//   let letterPosition = Math.floor(Math.random() * poolLetterTiles.length);
//   let lastPos = poolLetterTiles.length -1;
//   [poolLetterTiles[lastPos], poolLetterTiles[letterPosition]] = [poolLetterTiles[letterPosition], poolLetterTiles[lastPos]]
//   poolLetterTiles.pop()
// }
// while (letterList.length < 10)
// return letterList;


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

