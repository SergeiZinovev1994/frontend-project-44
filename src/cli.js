import readlineSync from '../readline-sync/lib/readline-sync.js';

export const question = () => {
  const question = readlineSync.question('May I have your name? ');
  return question;
};

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const welcome = (userName) => console.log(`Hello, ${userName}!`);
