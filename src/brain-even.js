import answer from "./answer.js";
import getRandom from "./random.js"
import { isEven } from "./even.js";

export default (userName) => {
    let correctAnswers = 0;
    let result = '';
    let currentValue = 0;
    let userAnswer = '';

    while (correctAnswers <= 2) {
        currentValue = getRandom();
        console.log("Question: " + currentValue);
        userAnswer = answer();

        if (userAnswer === 'yes' && isEven(currentValue)) {
            result = 'Correct!';
            console.log(result);
            correctAnswers += 1;
            
        } else if (userAnswer === 'no' && !isEven(currentValue)) {
            result = 'Correct!';
            console.log(result);
            correctAnswers += 1;
        } else if (userAnswer !== 'yes' && isEven(currentValue)) {
            result = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`;
            console.log(result);
            correctAnswers = 0;
        } else if (userAnswer !== 'no' && !isEven(currentValue)) {
            result = `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`;
            console.log(result);
            correctAnswers = 0;
        }
    }
    console.log(`Congratulations, ${userName}!`);
    return result;
};