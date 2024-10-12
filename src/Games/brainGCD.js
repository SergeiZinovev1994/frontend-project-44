import { gameCore, getRndInteger, welcome } from '../index.js';

const game = () => {
  const minNumber = 1;
  const maxNumber = 15;
  const numberA = getRndInteger(minNumber, maxNumber);
  const numberB = getRndInteger(minNumber, maxNumber);
  const twoNumbers = `${numberA} ${numberB}`;
  const smallerNumber = numberA >= numberB ? numberB : numberA;
  let dividsor = 1;
  for (let i = 2; i <= smallerNumber; i += 1) {
    if (numberA % i === 0 && numberB % i === 0) {
      dividsor = i;
    }
  }
  return [twoNumbers, dividsor];
};
  
const gameGCD = () => {
  const userName = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  gameCore(game, userName);
};

export default gameGCD;
