#!/usr/bin/env node

import { userName } from "./brain-games.js";
import { gameGCD } from "../src/cli.js";

gameGCD(userName);