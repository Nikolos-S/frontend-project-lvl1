import { name } from './cli.js';

export const generatorRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const testCheck = (rightAnswer, answer) => {
  if (rightAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
export const congrats = () => console.log(`Congratulations, ${name}!`);
