import readlineSync from 'readline-sync';
import { greetByUsername } from '../src/cli.js';
import { generatorRandom, testCheck, congrats } from '../src/index.js';

greetByUsername();
console.log('Find the greatest common divisor of given numbers.');
const findCommonDivisor = () => {
  for (let time = 1; time < 4; time += 1) {
    const num1 = generatorRandom(2, 26); // первое число
    const num2 = generatorRandom(2, 26); // второе число
    console.log(`Question: ${num1} ${num2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    let littleNum = num1;
    if (num2 < num1) {
      littleNum = num2;
    }
    let rightAnswer;
    for (let del = 1; del <= littleNum; del += 1) {
      if (num1 % del === 0 && num2 % del === 0) {
        rightAnswer = del;
      }
    }
    const isGameOver = testCheck(rightAnswer, answer);
    if (isGameOver === false) {
      return;
    }
  }
  congrats();
};
export default findCommonDivisor;
