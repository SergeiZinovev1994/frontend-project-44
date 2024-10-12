import { gameCore, welcome, getRndInteger } from '../index.js';

const game = () => {
  const maxNumber = 100;
  const randomNum = getRndInteger(0, maxNumber);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [randomNum, rightAnswer];
}

const gameEven = () => {
  const user = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameCore(game, user);
};
export default gameEven;
