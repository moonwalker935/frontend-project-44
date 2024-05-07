#!/usr/bin/env node

import { greeting } from "../src/cli.js";
import getRandom from "../src/random.js"
import gameLogic from "../src/index.js";

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const isEven = (number) => {
    if (number % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
};

const brainEven = () => {
    let correct = 0;
    let question = 0;
    let answer = 0
    let result = 0;
    
    while (correct < 3) {
        question = getRandom(0, 10);
        answer = isEven(question);
        result = gameLogic(userName, question, answer);

        if (result === 'Correct!') {
            correct += 1;
        } else {
            correct = 0;
        }
        console.log(result);
    }
    return console.log(`Congratulations, ${userName}!`);
};

brainEven();
