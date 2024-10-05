#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
export default userName;
welcome(userName);
