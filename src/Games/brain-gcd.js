import readlineSync from "../../readline-sync/lib/readline-sync.js";

const getDividsor = (a, b) => {
  const dividsor = readlineSync.question(`Question: ${a} ${b} `);
  return dividsor;
};

export const gameGCD = (userName, count = 0) => {
  let numberA = Math.ceil(Math.random() * 10);
  let numberB = Math.ceil(Math.random() * 10);
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
  } else {
    console.log(`Your answer: ${userAnswer}\nCorrect!`);
      if (count >= 2) {
        return console.log(`Congratulations, ${userName}!`);
      }
      gameGCD(userName, count += 1);
  }
};