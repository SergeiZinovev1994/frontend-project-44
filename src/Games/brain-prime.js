import { countRounds, quest } from '../index.js';

const prime = (userName, count = 0) => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const userAnswer = quest(randomNumber);
  let rightAnswer = 'yes';
  let i = 2;
  while (i <= randomNumber / 2) {
    if (randomNumber % i === 0) {
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
