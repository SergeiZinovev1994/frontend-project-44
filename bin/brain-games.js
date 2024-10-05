#!/usr/bin/env node
import { welcome } from "../src/index.js";
import readlineSync from "../node_modules/readline-sync/lib/readline-sync.js";

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question(`May I have your name? `);
welcome(userName);