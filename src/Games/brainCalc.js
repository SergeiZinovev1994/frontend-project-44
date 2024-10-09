import {
  countRounds,
  getRndInteger,
  quest,
  welcome,
} from '../index.js';

const gameCalc = (userName = 'Jho', count = 0) => {
  if (count === 0) {
    userName = welcome();
    console.log('What is the result of the expression?');
  }
  const maxNumber = 10;
  const a = getRndInteger(0, maxNumber);
  const b = getRndInteger(0, maxNumber);
  const operand = ['+', '*', '-'];
  const randomOperand = operand[getRndInteger(0, 2)];
  const express = `${a} ${randomOperand} ${b}`;
  const startValueExpress = (val1, mathSign, val2) => {
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
  if (startValueExpress(a, randomOperand, b) !== result) {
    return console.log(`Your answer: ${result}\n'${result}' is wrong answer ;(. Correct answer was '${startValueExpress(a, randomOperand, b)}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Your answer : ${userAnswer}\nCorrect!`);
  if (count >= countRounds - 1) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const newCount = count + 1;
  return gameCalc(userName, newCount);
};
export default gameCalc;
