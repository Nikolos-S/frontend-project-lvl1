import readlineSync from 'readline-sync';
import { greetByUsername } from '../src/cli.js';
import { generatorRandom, testCheck, congrats } from '../src/index.js';

greetByUsername();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const primeNumber = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = generatorRandom(1, 12);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let rightAnswer = 'yes';
    if (randomNumber < 2) {
      rightAnswer = 'no';
    }
    for (let del = 2; del < randomNumber; del += 1) {
      if (randomNumber % del === 0) {
        rightAnswer = 'no';
      }
    }
    const isGameOver = testCheck(rightAnswer, answer);
    if (isGameOver === false) {
      return;
    }
  }
  congrats();
};
export default primeNumber;
