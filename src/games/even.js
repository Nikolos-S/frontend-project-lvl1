import brainGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';
const findEvenNumber = () => {
  const randomNumber = generatorRandom(0, 100);
  const question = randomNumber;
  let result = 'no';
  if (randomNumber % 2 === 0) {
    result = 'yes';
  }
  return [question, result];
};
const startEvenGame = () => brainGame(findEvenNumber, task);

export default startEvenGame;
