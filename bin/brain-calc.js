#! user/bin env node

import { userName } from "./brain-games.js";
import { expression, gameCalc } from "../src/cli.js";

console.log(`What is the result of the expression?`);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = Math.ceil(Math.random() * 10);
let b = Math.ceil(Math.random() * 10);
const operand = ['+', '*', '-'];
const randomOperand = operand[getRndInteger(0, 2)];
const express = a + randomOperand + b;

const valueExpress = eval(express);

const userAnswer = expression(express);

gameCalc(userAnswer, express, valueExpress, userName);