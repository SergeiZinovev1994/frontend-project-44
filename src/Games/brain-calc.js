import { getRndInteger } from "../cli.js";
import readlineSync from "../../readline-sync/lib/readline-sync.js";

const expression = (exp) => {
  const question = readlineSync.question(`Question: ${exp} `);
  return question;
};

export const gameCalc = (userName = 'Jho', count = 0) => {
  const a = Math.ceil(Math.random() * 10);
  const b = Math.ceil(Math.random() * 10);
  const operand = ['+', '*', '-'];
  const randomOperand = operand[getRndInteger(0, 2)];
  const express = a + randomOperand + b;
  const valueExpress = eval(express);
  const userAnswer = expression(express);
  let result = +userAnswer || userAnswer;
  if (userAnswer === '0') {
    result = 0;
  }
  if (valueExpress !== result) {
    return console.log(`Your answer: ${result}\n'${result}' is wrong answer ;(. Correct answer was '${valueExpress}'`);
  } else {
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    gameCalc(userName, count += 1);
  }
};