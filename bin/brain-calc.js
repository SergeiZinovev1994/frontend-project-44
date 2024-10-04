#!/usr/bin/env node

import { userName } from "./brain-games.js";
import { gameCalc } from "../src/Games/brain-calc.js";

console.log(`What is the result of the expression?`);

gameCalc(userName);