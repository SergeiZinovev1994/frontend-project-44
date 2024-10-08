import readlineSync from 'readline-sync';
import { getRndInteger, countRounds, welcome } from '../index.js';

const getMissedValue = (arr) => {
  const missedValue = readlineSync.question(`Question: ${arr} `);
  return missedValue;
};

const gameProgression = (userName = 'Jho', count = 0) => {
  if (count === 0) {
    userName = welcome();
    console.log('What number is missing in the progression?');
  }
  const progression = [];
  const minEl = 5;
  const maxEl = 10;
  const countElements = getRndInteger(minEl, maxEl);
  const maxNumber = 20;
  const valueForStep = getRndInteger(0, maxNumber);
  progression[0] = getRndInteger(0, maxNumber);
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  const somethingValue = getRndInteger(0, countElements - 1);
  const rightAnswer = progression[somethingValue];
  progression[somethingValue] = '..';
  const progressionInString = progression.join(' ');
  const userAnswer = getMissedValue(progressionInString);
  const result = +userAnswer || userAnswer;
  if (result !== rightAnswer) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Your answer: ${userAnswer}\nCorrect!`);
  if (count >= countRounds - 1) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const newCount = count + 1;
  return gameProgression(userName, newCount);
};
export default gameProgression;
