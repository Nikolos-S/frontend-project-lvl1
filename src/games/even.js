import engineGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const getEven = (number) => number % 2 === 0;

const findEvenNumber = () => {
  const randomNumber = generatorRandom(0, 100);
  const question = randomNumber;
  const rightAnsmer = getEven(randomNumber) ? 'yes' : 'no';
  return [question, rightAnsmer];
};
const startEvenGame = () => engineGame(findEvenNumber, task);

export default startEvenGame;
