#!/usr/bin/env node

import { greeting } from "../src/cli.js";
import getRandom from "../src/random.js"
import gameLogic from "../src/index.js";

const userName = greeting();

console.log('What is the result of the expression?');

const getExpression = () => {
    let firstOperand = getRandom(0, 100);
    let secondOperand = getRandom(0, 100);
    const randomExpression = [(`${firstOperand} + ${secondOperand}`), (`${firstOperand} - ${secondOperand}`), (`${firstOperand} * ${secondOperand}`)];
    const expression = randomExpression[getRandom(0, 3)];
    return expression;
};

const brainCalc = () => {
    let correct = 0;
    let question = 0;
    let answer = 0;
    let result = 0;
    while (correct < 3) {
        question = getExpression();
        answer = eval(question)
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

brainCalc();
