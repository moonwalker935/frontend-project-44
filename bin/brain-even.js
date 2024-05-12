#!/usr/bin/env node

import {
    greeting,
    getGameText,
    getUserName,
    getUserInput,
    getRandom,
} from '../src/index.js';


greeting();
const userName = getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

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
            countRightAnswers = 0;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

runEvenGame();
