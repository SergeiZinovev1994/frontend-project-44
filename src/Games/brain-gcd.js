import readlineSync from 'readline-sync';
import { countRounds, randomNumber } from '../index.js';

const getDividsor = (a, b) => {
  const dividsor = readlineSync.question(`Question: ${a} ${b} `);
  return dividsor;
};

const gameGCD = (userName, count = 0) => {
  const maxGCDNumber = 15;
  const numberA = randomNumber(maxGCDNumber);
  const numberB = randomNumber(maxGCDNumber);
  const userAnswer = getDividsor(numberA, numberB);
  const resultUserAnswer = +userAnswer || userAnswer;
  const smallerNumber = numberA >= numberB ? numberB : numberA;
  let dividsor = 0;
  for (let i = 0; i <= smallerNumber; i += 1) {
    if (numberA % i === 0 && numberB % i === 0) {
      dividsor = i;
    }
  }
  if (resultUserAnswer !== dividsor) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${dividsor}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Your answer: ${userAnswer}\nCorrect!`);
  if (count >= countRounds - 1) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const newCount = count + 1;
  return gameGCD(userName, newCount);
};
export default gameGCD;
