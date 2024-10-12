import { welcome, gameCore } from '../index.js';
import getRandomNumber from '../utils.js';

const expression = () => {
  const maxNumber = 10;
  const minNumber = 0;
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  const operand = ['+', '*', '-'];
  const minIndexOfOperand = 0;
  const maxIndexOfOperand = operand.length - 1;
  const randomOperand = operand[getRandomNumber(minIndexOfOperand, maxIndexOfOperand)];
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
    default: throw new Error(`Unknown order state: '${express}'!`);
  }
  return result;
};

const game = () => {
  const exp = expression();
  const rightAnswer = startValueExpress(exp);
  return [exp, rightAnswer];
};

const gameCalc = () => {
  const user = welcome();
  console.log('What is the result of the expression?');
  return gameCore(game, user);
};

export default gameCalc;
