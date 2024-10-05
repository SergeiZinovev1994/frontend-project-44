import readlineSync from 'readline-sync';

const question = (string) => {
  const question = readlineSync.question(`${string} `);
  return question;
};
export default question;
