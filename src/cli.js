import readlineSync from '../readline-sync/lib/readline-sync.js';

export const question = (string) => {
  const question = readlineSync.question(`${string} `);
  return question;
};