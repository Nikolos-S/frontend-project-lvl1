import engineGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => (num1 !== 0 ? getGCD(num2 % num1, num1) : num2);

const findLagrestDiv = () => {
  const number1 = generatorRandom(2, 26);
  const number2 = generatorRandom(2, 26);
  const question = `${number1} ${number2}`;
  const rightAnsmer = String(getGCD(number1, number2));
  return [question, rightAnsmer];
};
const startGcdGame = () => engineGame(findLagrestDiv, task);
export default startGcdGame;
