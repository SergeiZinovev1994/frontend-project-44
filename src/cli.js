import readlineSync from '../readline-sync/lib/readline-sync.js';

export const question = () => {
  const question = readlineSync.question('May I have your name? ');
  return question;
};

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

export const getDividsor = (a, b) => {
  const dividsor = readlineSync.question(`Question: ${a} ${b} `);
  return dividsor;
};

const getMissedValue = (arr) => {
  const missedValue = readlineSync.question(`Question: ${arr} `);
  return missedValue;
};

const getNumber = (number) => {
  const num = readlineSync.question(`Question: ${number} `);
  return num;
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
    let a = Math.ceil(Math.random() * 10);
    let b = Math.ceil(Math.random() * 10);
    const operand = ['+', '*', '-'];
    const randomOperand = operand[getRndInteger(0, 2)];
    express = a + randomOperand + b;
    const valueExpress = eval(express);
    userAnswer = expression(express);
    gameCalc(userAnswer, express, valueExpress, userName, count += 1);
  }
}

export const gameGCD = (userName, count = 0) => {
  let numberA = Math.ceil(Math.random() * 10);
  let numberB = Math.ceil(Math.random() * 10);
  const userAnswer = getDividsor(numberA, numberB);
  const resultUserAnswer = +userAnswer || userAnswer;
  const smallerNumber = numberA >= numberB ? numberB : numberA;
  let dividsor = 0;
  for (let i = 0; i <= smallerNumber; i += 1) {
    if (numberA % i === 0 && numberB % i === 0) {
      dividsor = i;
    }
  }
  if (resultUserAnswer !== dividsor) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${dividsor}'.\nLet's try again, ${userName}!`);
  } else {
    console.log(`Your answer: ${userAnswer}\nCorrect!`);
      if (count >= 2) {
        return console.log(`Congratulations, ${userName}!`);
      }
      gameGCD(userName, count += 1);
  }
}

export const gameProgression = (userName, count = 0) => {
  const progression = [];
  const countElements = getRndInteger(10, 15);
  const valueForStep = Math.ceil(Math.random() * 10);
  progression[0] = Math.ceil(Math.random() * 10);
  console.log(countElements);
  for (let i = 1; i < countElements; i += 1) {
    progression[i] = progression[i - 1] + valueForStep;
  }
  const somethingValue = getRndInteger(0, countElements - 1);
  const rightAnswer = progression[somethingValue];
  progression[somethingValue] = '..';
  const userAnswer = getMissedValue(progression);
  const result = +userAnswer || userAnswer;
  if (result !== rightAnswer) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`)
  } else {
    console.log(`Your answer: ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    gameProgression(userName, count += 1);
  }
};

export const prime = (userName, count = 0) => {
  let randomNumber = Math.ceil(Math.random() * 100);
  const userAnswer = getNumber(randomNumber);
  const result = +userAnswer || userAnswer;
  let rightAnswer = 'yes';
  let i = 2;
  while (i <= randomNumber / 2) {
    if (randomNumber % i === 0) {
      rightAnswer = 'no';
      break;
    }
    i += 1;
  }
  if (result !== rightAnswer) {
    return console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  } else {
    console.log(`Your answer: ${userAnswer}\nCorrect!`);
    if (count >= 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
    prime(userName, count += 1);
  }
}