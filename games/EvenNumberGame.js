import readlineSync from 'readline-sync';
import { greetByUsername } from '../src/cli.js';
import { generatorRandom, testCheck, congrats } from '../src/index.js';

greetByUsername();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
const userResponse = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = generatorRandom(0, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let rightAnswer = 'no';
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    }
    const isGameOver = testCheck(rightAnswer, answer);
    if (isGameOver === false) {
      return;
    }
  }
  congrats();
};
export default userResponse;
