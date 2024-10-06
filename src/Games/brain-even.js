import { countRounds, quest, randomNumber } from '../index.js';

const gameEven = (userName = 'Jho', count = 0) => {
  const maxEvenNumber = 100;
  const randomNum = randomNumber(maxEvenNumber);
  const userAnswer = quest(randomNum);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== rightAnswer) {
    return console.log(`Your answer : ${userAnswer}\n'${userAnswer}' is wrong answer ;/(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Your answer : ${userAnswer}\nCorrect!`);
  if (count >= countRounds - 1) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const newCount = count + 1;
  return gameEven(userName, newCount);
};
export default gameEven;
