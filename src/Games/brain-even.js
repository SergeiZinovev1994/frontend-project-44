import readlineSync from "../../readline-sync/lib/readline-sync.js" ;

const isEven = (number) => {
  const question = readlineSync.question(`Question: ${number} `);
  return question;
};

export const gameEven = (userName = 'Jho', count = 0) => {
  const randomNumber= Math.round((Math.random() * 1000));
  const userAnswer = isEven(randomNumber);
  let rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== rightAnswer) {
    return console.log(`Your answer : ${userAnswer}\n'${userAnswer}' is wrong answer ;/(. Correct answer was '${rightAnswer}'.\nLets try again, ${userName}`);
  } else {
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    gameEven (userName, count += 1);
  }
};