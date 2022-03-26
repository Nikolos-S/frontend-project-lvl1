import readlineSync from 'readline-sync';
import { name, greetByUsername } from '../src/cli.js';
import generatorRandom from '../src/index.js';

greetByUsername();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
const userResponse = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = generatorRandom(0, 100); // рандомное число
    console.log(`Question: ${randomNumber}`); // вывод рандомного числа на экран
    const answer = readlineSync.question('Your answer: '); // вывод ответа игрока на экран
    if (randomNumber % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    if (randomNumber % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default userResponse;
