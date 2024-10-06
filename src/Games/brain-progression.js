import readlineSync from 'readline-sync';
import { getRndInteger, countRounds, randomNumber } from '../index.js';

const getMissedValue = (arr) => {
  const missedValue = readlineSync.question(`Question: ${arr} `);
  return missedValue;
};

const gameProgression = (userName, count = 0) => {
  const progression = [];
  const minEl = 5;
  const maxEl = 10;
  const countElements = getRndInteger(minEl, maxEl);
  const maxFirstNumber = 10;
  const maxStepNumber = 20;
  const valueForStep = randomNumber(maxFirstNumber);
  progression[0] = randomNumber(maxStepNumber);
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
