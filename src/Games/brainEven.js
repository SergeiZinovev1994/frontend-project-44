import { gameCore } from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const randomNum = getRandomNumber(1, 100);
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [randomNum, answer];
};

const runGameEven = () => {
  gameCore(game, task);
};
export default runGameEven;
