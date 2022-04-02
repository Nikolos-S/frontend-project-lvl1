import brainGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const num1 = generatorRandom(2, 26);
  const num2 = generatorRandom(2, 26);
  const question = `${num1} ${num2}`;
  let littleNum = num1;
  if (num2 < num1) {
    littleNum = num2;
  }
  let result;
  for (let del = 1; del <= littleNum; del += 1) {
    if (num1 % del === 0 && num2 % del === 0) {
      result = del;
    }
  }
  return [question, String(result)];
};
const startGcdGame = () => brainGame(gcd, task);
export default startGcdGame;
