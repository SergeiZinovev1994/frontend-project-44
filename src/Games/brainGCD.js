import { gameCore } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const searchDividsor = (num1, num2) => {
  const smallerNumber = num1 >= num2 ? num2 : num1;
  let dividsor = 1;
  for (let i = 2; i <= smallerNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      dividsor = i;
    }
  }
  return dividsor;
};

const game = () => {
  const numberA = getRandomNumber(1, 15);
  const numberB = getRandomNumber(1, 15);
  const gcdNumbers = `${numberA} ${numberB}`;
  const dividsor = searchDividsor(numberA, numberB);
  return [gcdNumbers, dividsor];
};

const runGameGCD = () => {
  gameCore(game, task);
};

export default runGameGCD;
