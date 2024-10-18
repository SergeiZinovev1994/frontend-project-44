import runGameCore from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown parameter states: '${num1}' '${operator}' '${num2}'!`);
  }
};

const getDataGame = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operator = ['+', '*', '-'];
  const minIndexOfOperator = 0;
  const maxIndexOfOperator = operator.length - 1;
  const randomOperator = operator[getRandomNumber(minIndexOfOperator, maxIndexOfOperator)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = calculate(number1, number2, randomOperator);
  return [question, answer.toString()];
};

const runGameCalc = () => runGameCore(getDataGame, task);

export default runGameCalc;
