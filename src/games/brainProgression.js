import runGameCore from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const createProgression = (countElements, valueForStep, initialElement) => {
  const progression = [];
  progression[0] = initialElement;
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  return progression;
};

const game = () => {
  const countElements = getRandomNumber(5, 15);
  const valueForStep = getRandomNumber(1, 20);
  const initialElement = getRandomNumber(0, 10);
  const progression = createProgression(countElements, valueForStep, initialElement);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer.toString()];
};

const runGameProgression = () => {
  runGameCore(game, task);
};
export default runGameProgression;
