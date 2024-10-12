import { gameCore, welcome } from '../index.js';
import getRandomNumber from '../utils.js';
import searchDividsor from '../searchDividsor.js';

const game = () => {
  const minNumber = 1;
  const maxNumber = 15;
  const numberA = getRandomNumber(minNumber, maxNumber);
  const numberB = getRandomNumber(minNumber, maxNumber);
  const twoNumbers = `${numberA} ${numberB}`;
  const dividsor = searchDividsor(numberA, numberB);
  return [twoNumbers, dividsor];
};

const gameGCD = () => {
  const userName = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  gameCore(game, userName);
};

export default gameGCD;
