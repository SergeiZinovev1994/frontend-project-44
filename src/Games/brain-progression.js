import readlineSync from "readline-sync";
import { getRndInteger } from "../index.js";
import { countRounds } from "../index.js";

const getMissedValue = (arr) => {
  const missedValue = readlineSync.question(`Question: ${arr} `);
  return missedValue;
};

export const gameProgression = (userName, count = 0) => {
  const progression = [];
  const minEl = 10;
  const maxEl = 15;
  const countElements = getRndInteger(minEl, maxEl);
  const valueForStep = Math.ceil(Math.random() * 10);
  progression[0] = Math.ceil(Math.random() * 10);
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  const somethingValue = getRndInteger(0, countElements - 1);
  const rightAnswer = progression[somethingValue];
  progression[somethingValue] = '..';
  const userAnswer = getMissedValue(progression);
  const result = +userAnswer || userAnswer;
  if (result !== rightAnswer) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`)
  } else {
    console.log(`Your answer: ${userAnswer}\nCorrect!`);
    if (count >= countRounds - 1) {
      return console.log(`Congratulations, ${userName}!`);
    }
    gameProgression(userName, count += 1);
  }
};