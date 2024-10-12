import readlineSync from 'readline-sync';
import isRight from './comparison.js';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
}

export const countRounds = 3;

export const gameCore = (fn, userName) => {
  for (let i = 1; i <= countRounds; i += 1) {
    const [exp, rightAnswer] = fn();
    const userAnswer = readlineSync.question(`Question: ${exp} `);
    console.log(`Your answer: ${userAnswer}`);
    const isTrue = isRight(userAnswer, rightAnswer);
    if (isTrue === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`)
    }
    console.log('Correct!');
    if (i === countRounds) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
};
