import readlineSync from "../readline-sync/lib/readline-sync.js";
import { getRndInteger } from "./cli.js";

const getMissedValue = (arr) => {
  const missedValue = readlineSync.question(`Question: ${arr} `);
  return missedValue;
};

export const gameProgression = (userName, count = 0) => {
  const progression = [];
  const countElements = getRndInteger(10, 15);
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
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    gameProgression(userName, count += 1);
  }
};