import runGameCore from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const searchDivisor = (num1, num2) => {
  const smallerNumber = num1 >= num2 ? num2 : num1;
  let divisor = 1;
  for (let i = 2; i <= smallerNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const game = () => {
  const number1 = getRandomNumber(1, 15);
  const number2 = getRandomNumber(1, 15);
  const question = `${number1} ${number2}`;
  const divisor = searchDivisor(number1, number2);
  return [question, divisor.toString()];
};

const runGameGCD = () => {
  runGameCore(game, task);
};

export default runGameGCD;
