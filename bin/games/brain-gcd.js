#!/usr/bin/env node

import {
    greeting,
    getGameText,
    getUserName,
    getRandom
} from '../../src/index.js';


greeting();
const userName = getUserName();

console.log('Find the greatest common divisor of given numbers.');

const gcd = (number1, number2) => {
    let a = number1;
    let b = number2;
    while (a !== 0 & b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a
        }
    }
    
    return a+b;
};

const runGameGcd = () => {
    let countRightAnswers = 0;

    while (countRightAnswers < 3) {
        const randomNumber1 = getRandom(1, 100);
        const randomNumber2 = getRandom(1, 100);
        const twoRandomNumbers = `${randomNumber1}, ${randomNumber2}`;
        const expected = gcd(randomNumber1, randomNumber2);
        const result = getGameText(userName, twoRandomNumbers, expected);
        console.log(result);

        if (result === 'Correct!') {
            countRightAnswers += 1;
        } else {
            countRightAnswers = 0;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

runGameGcd();