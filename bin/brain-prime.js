#!/usr/bin/env node

import { userName } from "./brain-games.js";
import { prime } from "../src/cli.js";

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

prime(userName);