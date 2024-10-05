import readlineSync from 'readline-sync';
export const quest = (number) => {
  const question = readlineSync.question(`Question: ${number} `);
  return question;
};
export const welcome = (userName) => console.log(`Hello, ${userName}!`);
export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const countRounds = 3;
