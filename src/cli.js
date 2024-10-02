import readlineSync from '../readline-sync/lib/readline-sync.js';

export const question = () => {
  const question = readlineSync.question('May I have your name?');
  return question;
};

export const welcome = (userName) => console.log(`Hello, ${userName}!`);

export const isEven = (number) => {
  const question = readlineSync.question(`Question: ${number}`);
  return question;
};

export const gameOver = (userAnswer, number = 1, userName = 'Jho', count = 0) => {
  let rightAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== rightAnswer) {
    return console.log(`Your answer : ${userAnswer}\n'${userAnswer}' is wrong answer ;/(. Correct answer was '${rightAnswer}'.\nLets try again, ${userName}`);
  } else {
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    number = Math.round(Math.random() * 1000);
    userAnswer = isEven(number);
    gameOver (userAnswer, number, userName, count += 1)
  }
}