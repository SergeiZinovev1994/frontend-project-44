import gameCore from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const createProgression = (minCountElements, maxCountElements) => {
  const progression = [];
  const countElements = getRandomNumber(minCountElements, maxCountElements);
  const valueForStep = getRandomNumber(1, 20);
  progression[0] = getRandomNumber(0, 10);
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  return progression;
};

const game = () => {
  const minCountElements = 5;
  const maxCountElements = 10;
  const progression = createProgression(minCountElements, maxCountElements);
  const indexOfRandomElement = getRandomNumber(0, progression.length - 1);
  const answer = progression[indexOfRandomElement];
  progression[indexOfRandomElement] = '..';
  const progressionStringWithGap = progression.join(' ');
  return [progressionStringWithGap, answer.toString()];
};

const runGameProgression = () => {
  gameCore(game, task);
};
export default runGameProgression;
