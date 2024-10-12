import { welcome, gameCore } from '../index.js';
import getRandomNumber from '../utils.js';
import addProgression from '../addProgression.js';

const game = () => {
  const minCountEl = 5;
  const maxCountEl = 10;
  const minStep = 1;
  const maxStep = 20;
  const progression = addProgression(minCountEl, maxCountEl, minStep, maxStep);
  const somethingIndex = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[somethingIndex];
  progression[somethingIndex] = '..';
  return [progression, rightAnswer];
};

const gameProgression = () => {
  const userName = welcome();
  console.log('What number is missing in the progression?');
  gameCore(game, userName);
}
export default gameProgression;
