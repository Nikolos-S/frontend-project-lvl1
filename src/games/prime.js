import brainGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const findPrimeNumber = () => {
  const randomNumber = generatorRandom(1, 12);
  const question = randomNumber;
  let result = 'yes';
  if (randomNumber < 2) {
    result = 'no';
  }
  for (let del = 2; del < randomNumber; del += 1) {
    if (randomNumber % del === 0) {
      result = 'no';
    }
  }
  return [question, result];
};
const startPrimeGame = () => brainGame(findPrimeNumber, task);
export default startPrimeGame;
