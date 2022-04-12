import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => (num1 !== 0 ? getGCD(num2 % num1, num1) : num2);

const findLagrestDiv = () => {
  const number1 = generateRandomNumber(2, 26);
  const number2 = generateRandomNumber(2, 26);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};
const startGcdGame = () => gameEngine(findLagrestDiv, gameTask);
export default startGcdGame;
