import { gameCore } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const expression = (num1, operator, num2) => {
  const result = `${num1} ${operator} ${num2}`;
  return result;
};

const calculate = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: throw new Error('unknown condition!');
  }
  return result;
};

const getDataGame = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operator = ['+', '*', '-'];
  const minIndexOfOperator = 0;
  const maxIndexOfOperator = operator.length - 1;
  const randomOperator = operator[getRandomNumber(minIndexOfOperator, maxIndexOfOperator)];
  const exp = expression(number1, randomOperator, number2);
  const answer = calculate(number1, number2, randomOperator);
  return [exp, answer.toString()];
};

const runGameCalc = () => gameCore(getDataGame, task);

export default runGameCalc;
