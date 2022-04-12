import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const findEvenNumber = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startEvenGame = () => gameEngine(findEvenNumber, gameTask);

export default startEvenGame;
