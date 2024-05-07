import answerInput from "./answer.js";

export default (userName, question, answer) => {
    let result = '';
    
    console.log("Question: " + question);

    let userAnswer = answerInput();
    userAnswer = Number(userAnswer) || userAnswer;

    if (userAnswer === answer) {
        result = 'Correct!';       
    } else {
        result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}\n`;
    }
    return result;
};