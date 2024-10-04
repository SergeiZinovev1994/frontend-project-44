#!/usr/bin/env node

import { isEven, gameEven } from "../src/cli.js";
import { userName } from "./brain-games.js";

console.log('Answer "yes" if the number is even, otherwise answer "no".');

gameEven(userName);