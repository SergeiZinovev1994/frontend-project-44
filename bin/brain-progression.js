#!/usr/bin/env node
import  userName from './brain-games.js';
import gameProgression from '../src/Games/brain-progression.js';

console.log('What number is missing in the progression?');

gameProgression(userName);
