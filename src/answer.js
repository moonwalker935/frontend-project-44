import readlineSync from 'readline-sync';

export default () => {
    let userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
};