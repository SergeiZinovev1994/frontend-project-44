import readlineSync from 'readline-sync';

const question = (string) => readlineSync.question(`${string} `);
export default question;
