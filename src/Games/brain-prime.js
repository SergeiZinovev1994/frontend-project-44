import readlineSync from "readline-sync";
import { countRounds } from "../index.js";

const getNumber = (number) => {
  const num = readlineSync.question(`Question: ${number} `);
  return num;
};

export const prime = (userName, count = 0) => {
  let randomNumber = Math.ceil(Math.random() * 100);
  const userAnswer = getNumber(randomNumber);
  const result = +userAnswer || userAnswer;
  let rightAnswer = 'yes';
  let i = 2;
  while (i <= randomNumber / 2) {
    if (randomNumber % i === 0) {
      rightAnswer = 'no';
      break;
    }
    i += 1;
  }
  if (result !== rightAnswer) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  } else {
    console.log(`Your answer: ${userAnswer}\nCorrect!`);
    if (count >= countRounds - 1) {
      return console.log(`Congratulations, ${userName}!`);
    }
    prime(userName, count += 1);
  }
};