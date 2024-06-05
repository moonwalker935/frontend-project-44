#!/usr/bin/env node

import {
  greeting,
  getGameText,
  getUserName,
  getRandom
} from '../../src/index.js';

greeting();
const userName = getUserName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const runGamePrime = () => {
  let countRightAnswers = 0;

  while (countRightAnswers < 3) {
    const number = getRandom(0, 100);
    const expected = isPrime(number) === true 
      ? "yes" 
      : "no";
    const result = getGameText(userName, number, expected);
    console.log(result);

    if (result === 'Correct!') {
      countRightAnswers += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

runGamePrime();