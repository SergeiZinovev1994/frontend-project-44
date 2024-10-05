import { countRounds, quest } from '../index.js';

const gameEven = (userName = 'Jho', count = 0) => {
  const randomNumber = Math.round((Math.random() * 1000));
  const userAnswer = quest(randomNumber);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== rightAnswer) {
    return console.log(`Your answer : ${userAnswer}\n'${userAnswer}' is wrong answer ;/(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  } else {
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    if (count >= countRounds - 1) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return gameEven(userName, count += 1);
  }
};
export default gameEven;
