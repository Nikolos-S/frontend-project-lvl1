import engineGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const littleNum = number1 > number2 ? number2 : number1;
  let result;
  for (let del = 1; del <= littleNum; del += 1) {
    if (number1 % del === 0 && number2 % del === 0) {
      result = del;
    }
  }
  return result;
};
const findLagrestDiv = () => {
  const num1 = generatorRandom(2, 26);
  const num2 = generatorRandom(2, 26);
  const question = `${num1} ${num2}`;
  const rightAnsmer = String(getGCD(num1, num2));
  return [question, rightAnsmer];
};
const startGcdGame = () => engineGame(findLagrestDiv, task);
export default startGcdGame;
