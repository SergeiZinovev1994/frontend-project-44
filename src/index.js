import readlineSync from 'readline-sync';

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

export const gameCore = (fn, userName) => {
  for (let i = 1; i <= countRounds; i += 1) {
    const [exp, rightAnswer] = fn();
    const userAnswer = readlineSync.question(`Question: ${exp}: `);
    console.log(`Your answer: ${userAnswer}`);
    const isTrue = gameTry(userAnswer, rightAnswer);
    if (isTrue === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`)
    }
    console.log('Correct!');
    if (i === countRounds) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
}