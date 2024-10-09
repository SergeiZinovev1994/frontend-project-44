import { countRounds, quest, welcome, getRndInteger } from '../index.js';

const gameEven = (userName = 'Jho', count = 0) => {
  if (count === 0) {
    userName = welcome();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  const maxNumber = 100;
  const randomNum = getRndInteger(0, maxNumber);
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
