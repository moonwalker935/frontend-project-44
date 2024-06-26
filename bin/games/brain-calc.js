#!/usr/bin/env node

import {
  greeting,
  getGameText,
  getUserName,
  getRandom,
} from '../../src/index.js';

greeting();
const userName = getUserName();

console.log('What is the result of the expression?');

const getExpression = () => {
  const firstOperand = getRandom(0, 100);
  const secondOperand = getRandom(0, 100);
  const randomExpression = [(`${firstOperand} + ${secondOperand}`), (`${firstOperand} - ${secondOperand}`), (`${firstOperand} * ${secondOperand}`)];
  const expression = randomExpression[getRandom(0, 3)];
  return expression;
};

const brainCalc = () => {
  let countRightAnswers = 0;

  const maxGameSteps = 3;
  while (countRightAnswers < maxGameSteps) {
    const question = getExpression();
    // eslint-disable-next-line
    const expected = eval(question);
    const result = getGameText(userName, question, expected);
    console.log(result);

    if (result === 'Correct!') {
      countRightAnswers += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

brainCalc();
