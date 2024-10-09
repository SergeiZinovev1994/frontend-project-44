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
