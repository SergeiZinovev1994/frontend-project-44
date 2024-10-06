import { countRounds, getRndInteger, quest } from '../index.js';

const gameCalc = (userName = 'Jho', count = 0) => {
  const a = Math.ceil(Math.random() * 10);
  const b = Math.ceil(Math.random() * 10);
  const operand = ['+', '*', '-'];
  const randomOperand = operand[getRndInteger(0, 2)];
  const express = `${a} ${randomOperand} ${b}`;
  const valueExpress = (val1, mathSign, val2) => {
    let result = 0;
    switch (mathSign) {
      case '+': result = val1 + val2;
        break;
      case '-': result = val1 - val2;
        break;
      case '*': result = val1 * val2;
        break;
      default: result = 0;
    }
    return result;
  };
  const userAnswer = quest(express);
  let result = +userAnswer || userAnswer;
  if (userAnswer === '0') {
    result = 0;
  }
  if (valueExpress(a, randomOperand, b) !== result) {
    return console.log(`Your answer: ${result}\n'${result}' is wrong answer ;(. Correct answer was '${valueExpress(a, randomOperand, b)}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Your answer : ${userAnswer}\nCorrect!`);
  if (count >= countRounds - 1) {
    return console.log(`Congratulations, ${userName}!`);
  }
  gameCalc(userName, count += 1);
};
export default gameCalc;
