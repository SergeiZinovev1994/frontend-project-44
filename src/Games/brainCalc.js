import {
  gameOver,
  getRndInteger,
  quest,
  welcome,
  victory,
  countRounds,
  gameTry
} from '../index.js';

const expression = () => {
  const maxNumber = 10;
  const a = getRndInteger(0, maxNumber);
  const b = getRndInteger(0, maxNumber);
  const operand = ['+', '*', '-'];
  const minIndexOfOperand = 0;
  const maxIndexOfOperand = operand.length - 1;
  const randomOperand = operand[getRndInteger(minIndexOfOperand, maxIndexOfOperand)];
  const result = `${a} ${randomOperand} ${b}`;
  return result;
};

const startValueExpress = (express) => {
  const signs = express.split(' ');
  const num1 = +signs[0];
  const num2 = +signs[signs.length - 1];
  const operand = signs[1];
  let result = 0;
  switch (operand) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: result = 0;
  }
  return result;
}

const gameCalc = (userName = 'Jho', count = 0) => {
  if (count === 0) {
    userName = welcome();
    console.log('What is the result of the expression?');
  }
  while (count <= (countRounds - 1)) {
    const express = expression();
    const userAnswer = quest(express);
    const rightAnswer = startValueExpress(express);
    let switcher = gameTry(userAnswer, rightAnswer);
    if (!switcher) {
      return gameOver(userName, userAnswer, rightAnswer);
    }
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    count += 1;
    if (count === 3) {
      return victory(userName, userAnswer, rightAnswer);
    }
  }
}
export default gameCalc;
