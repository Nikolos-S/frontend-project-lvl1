import engineGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let del = 2; del < number; del += 1) {
    if (number % del === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const findPrimeNumber = () => {
  const randomNumber = generatorRandom(1, 12);
  const question = randomNumber;
  const rightAnswer = getPrime(randomNumber);
  return [question, rightAnswer];
};
const startPrimeGame = () => engineGame(findPrimeNumber, task);
export default startPrimeGame;
