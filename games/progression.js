import readlineSync from 'readline-sync';
import { greetByUsername } from '../src/cli.js';
import { generatorRandom, testCheck, congrats } from '../src/index.js';

greetByUsername();
console.log('What number is missing in the progression?');
const findTheMissing = () => {
  for (let time = 1; time < 4; time += 1) {
    const arr = [];
    const step = generatorRandom(1, 8);
    const startNumber = generatorRandom(1, 50);
    for (let i = startNumber; i < (startNumber + step * 10); i += step) {
      arr.push(i);
    }
    const index = generatorRandom(0, 10);
    arr[index] = '..';
    console.log(`Question: ${arr}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const rightAnswer = startNumber + step * index;
    const isGameOver = testCheck(rightAnswer, answer);
    if (isGameOver === false) {
      return;
    }
  }
  congrats();
};
export default findTheMissing;
