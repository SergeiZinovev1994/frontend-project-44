import readlineSync from 'readline-sync';

export const question = (string) => {
  const question = readlineSync.question(`${string} `);
  return question;
};