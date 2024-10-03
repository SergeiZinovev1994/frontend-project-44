import readlineSync from '../readline-sync/lib/readline-sync.js';

export const question = () => {
  const question = readlineSync.question('May I have your name? ');
  return question;
};

export const welcome = (userName) => console.log(`Hello, ${userName}!`);

export const isEven = (number) => {
  const question = readlineSync.question(`Question: ${number} `);
  return question;
};

export const expression = (exp) => {
  const question = readlineSync.question(`Question: ${exp} `);
  return question;
};

export const gameEven = (userAnswer, number = 1, userName = 'Jho', count = 0) => {
  let rightAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== rightAnswer) {
    return console.log(`Your answer : ${userAnswer}\n'${userAnswer}' is wrong answer ;/(. Correct answer was '${rightAnswer}'.\nLets try again, ${userName}`);
  } else {
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    number = Math.round(Math.random() * 1000);
    userAnswer = isEven(number);
    gameEven (userAnswer, number, userName, count += 1)
  }
}

export const gameCalc = (userAnswer, express, valueExpress, userName = 'Jho', count = 0) => {
  const result = +userAnswer || userAnswer;
  if (valueExpress !== result) {
    return console.log(`${result} is wrong answer ;(. Correct answer was ${valueExpress}`);
  } else {
    console.log(`Your answer : ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const getRndInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let a = Math.ceil(Math.random() * 100);
    let b = Math.ceil(Math.random() * 100);
    const operand = ['+', '*', '-'];
    const randomOperand = operand[getRndInteger(0, 2)];
    express = a + randomOperand + b;
    const valueExpress = eval(express);
    userAnswer = expression(express);
    gameCalc(userAnswer, express, valueExpress, userName, count += 1);
  }
}