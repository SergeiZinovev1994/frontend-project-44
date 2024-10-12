import { gameCore, getRndInteger, welcome } from '../index.js';

const game = () => {
  const maxNumber = 99;
  const minNumber = 1;
  const randomNum = getRndInteger(minNumber, maxNumber);
  let rightAnswer = 'yes';
  let i = 2;
  if (randomNum === 1) {
    rightAnswer = 'no';
  }
  while (i <= randomNum / 2) {
    if (randomNum % i === 0) {
      rightAnswer = 'no';
      break;
    }
    i += 1;
  }
  return [randomNum, rightAnswer];
};

const gamePrime = () => {
  const userName = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameCore(game, userName);
}
export default gamePrime;
