#!/usr/bin/env node

import {
  greeting,
  getGameText,
  getUserName,
  getRandom,
} from '../../src/index.js';

greeting();
const userName = getUserName();

console.log('What number is missing in the progression?');

const getProgression = () => {
  const progression = [];
  let elementOfProgression = getRandom(0, 100);
  const step = getRandom(2, 11);

  for (let i = 0; i < getRandom(5, 12); i += 1) {
    progression.push(elementOfProgression);
    elementOfProgression += step;
  }

  const randomIndex = getRandom(0, progression.length);
  const hiddenNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  progression.push(hiddenNumber);

  return progression;
};

const runGameProgression = () => {
  let countRightAnswers = 0;

  const maxGameSteps = 3;
  while (countRightAnswers < maxGameSteps) {
    const progression = getProgression();
    const expected = progression.pop();
    const progressionText = progression.join(' ');
    const result = getGameText(userName, progressionText, expected);
    console.log(result);

    if (result === 'Correct!') {
      countRightAnswers += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

runGameProgression();
