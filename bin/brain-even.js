#!/usr/bin/env node

import brainEven from "../src/brain-even.js";
import { greeting } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let userName = 'eldar';

brainEven(userName);


