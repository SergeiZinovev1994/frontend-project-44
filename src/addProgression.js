import getRandomNumber from './utils.js';

const addProgression = (minCountEl, maxCountEl, minValueStep = 1, maxValueStep = 10, minValueFirstEl = 0, maxValueFirstEl = 10,) => {
  const progression = [];
  const countElements = getRandomNumber(minCountEl, maxCountEl);
  const valueForStep = getRandomNumber(minValueStep, maxValueStep);
  progression[0] = getRandomNumber(minValueFirstEl, maxValueFirstEl);
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  return progression;
};

export default addProgression;
