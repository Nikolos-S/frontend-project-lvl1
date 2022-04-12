import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let del = 2; del < number; del += 1) {
    if (number % del === 0) {
      return false;
    }
  }
  return true;
};
const findPrimeNumber = () => {
  const question = generateRandomNumber(1, 12);
  const correctAnswer = getPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startPrimeGame = () => gameEngine(findPrimeNumber, gameTask);
export default startPrimeGame;
