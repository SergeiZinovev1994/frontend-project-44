import { gameCore, welcome } from '../index.js';
import getRandomNumber from '../utils.js'

const game = () => {
  const maxNumber = 100;
  const minNumber = 1;
  const randomNum = getRandomNumber(minNumber, maxNumber);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  
  return [randomNum, rightAnswer];
}

const gameEven = () => {
  const user = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameCore(game, user);
};
export default gameEven;
