import { countRounds, quest, getRndInteger, welcome } from '../index.js';

const prime = (userName = 'Jho', count = 0) => {
  if (count === 0) {
    userName = welcome();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  const maxNumber = 99;
  const randomNum = getRndInteger(0, maxNumber);
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
