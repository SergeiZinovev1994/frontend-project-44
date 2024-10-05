#!/usr/bin/env node

import gameEven from '../src/Games/brain-even.js';
import userName from './brain-games.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

gameEven(userName);
