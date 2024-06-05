import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName;
};

export const getUserInput = () => readlineSync.question('Your answer: ');