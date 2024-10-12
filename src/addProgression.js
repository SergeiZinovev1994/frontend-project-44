import getRandomNumber from './utils.js';

export default (minNumEl, maxNumEl, minStep = 1, maxStep = 10, minFirstEl = 0, maxFirstEl = 10) => {
  const progression = [];
  const countElements = getRandomNumber(minNumEl, maxNumEl);
  const valueForStep = getRandomNumber(minStep, maxStep);
  progression[0] = getRandomNumber(minFirstEl, maxFirstEl);
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  return progression;
};
