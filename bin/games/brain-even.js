#!/usr/bin/env node

import {
    greeting,
    getGameText,
    getUserName,
    getRandom
} from '../../src/index.js';


greeting();
const userName = getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = number => number % 2 === 0 ? 'yes' : 'no';

const runEvenGame = () => {
    let countRightAnswers = 0;

    while (countRightAnswers < 3) {
        const randomNumber = getRandom(0, 10);
        const expected = isEven(randomNumber);
        const result = getGameText(userName, randomNumber, expected);
        console.log(result);

        if (result === 'Correct!') {
            countRightAnswers += 1;
        } else {
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

runEvenGame();
