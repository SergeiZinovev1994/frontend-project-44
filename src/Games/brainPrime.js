import { gameCore, welcome } from '../index.js';
import getRandomNumber from '../utils.js'

const game = () => {
  const maxNumber = 100;
  const minNumber = 1;
  const randomNum = getRandomNumber(minNumber, maxNumber);
  let isPrime = randomNum === 1 ? 'no' :'yes';
  let i = 2;
  while (i <= randomNum / 2) {
    if (randomNum % i === 0) {
      isPrime = 'no';
      break;
    }
    i += 1;
  }
  return [randomNum, isPrime];
};

const gamePrime = () => {
  const userName = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameCore(game, userName);
}
export default gamePrime;
