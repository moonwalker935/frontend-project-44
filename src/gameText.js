import { getUserInput } from './userInputs.js';


export const getGameText = (userName, questionText, expected) => {
    console.log('Question:', questionText);

    const userInput = getUserInput();
    const numberUserInput = Number(userInput) || false;
    const userAnswer = typeof numberUserInput === 'number'
        ? numberUserInput
        : userInput;

    return userAnswer === expected
        ? 'Correct!'
        : `'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${userName}!`;
};