#!/usr/bin/env node
import { question, welcome } from "../src/cli.js";
console.log('Welcome to the Brain Games!');
export const userName = question();
welcome(userName);