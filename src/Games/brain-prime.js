import { countRounds, quest, randomNumber } from '../index.js';

const prime = (userName, count = 0) => {
  const randomNum = randomNumber(100);
  const userAnswer = quest(randomNum);
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
  if (userAnswer !== rightAnswer) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Your answer: ${userAnswer}\nCorrect!`);
  if (count >= countRounds - 1) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const newCount = count + 1;
  return prime(userName, newCount);
};
export default prime;
