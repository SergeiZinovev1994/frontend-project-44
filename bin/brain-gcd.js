#!/usr/bin/env node

import userName from './brain-games.js';
import gameGCD from '../src/Games/brain-gcd.js';

console.log('Find the greatest common divisor of given numbers.');

gameGCD(userName);
