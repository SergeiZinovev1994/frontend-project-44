import readlineSync from 'readline-sync';

export const quest = (number) => {
  const question = readlineSync.question(`Question: ${number} `);
  return question;
};

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
}

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const countRounds = 3;

export const gameTry = (userAnswer, rightValue) => {
  let processedAnswer = +userAnswer || userAnswer;
  if (userAnswer === '0') {
    processedAnswer = 0;
  }
  return processedAnswer !== rightValue ? false : true;
}

export const gameOver = (userName, answer, exactResult) => console.log(`Your answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${exactResult}'.\nLet's try again, ${userName}!`);

export const victory = (userName, answer, exactResult) => console.log(`Congratulations, ${userName}!`);
