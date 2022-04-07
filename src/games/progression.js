import engineGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'What number is missing in the progression?';

const getNumber = (startNumber, step, hidden) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    if (i !== hidden) {
      result.push(startNumber + step * i);
    } else {
      result.push('..');
    }
  }
  return result;
};
const findMissingNumber = () => {
  const hiddenElement = generatorRandom(0, 10);
  const stepProgression = generatorRandom(1, 8);
  const firstNumber = generatorRandom(1, 50);
  const progression = getNumber(firstNumber, stepProgression, hiddenElement);
  const question = progression.join(' ');
  const rightAnswer = firstNumber + stepProgression * hiddenElement;
  return [question, String(rightAnswer)];
};
const startProgressionGame = () => engineGame(findMissingNumber, task);
export default startProgressionGame;
