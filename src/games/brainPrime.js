import runGameCore from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = number !== 1;
  let i = 2;
  while (i <= number / 2) {
    if (number % i === 0) {
      result = false;
      break;
    }
    i += 1;
  }
  return result;
};

const game = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const runGamePrime = () => {
  runGameCore(game, task);
};
export default runGamePrime;
