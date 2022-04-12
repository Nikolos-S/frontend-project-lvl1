import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameTask = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, hidden, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(i === hidden ? '..'
      : startNumber + step * i);
  }
  return result;
};
const findMissingNumber = () => {
  const length = generateRandomNumber(5, 11);
  const hiddenElement = generateRandomNumber(5, length - 1);
  const stepProgression = generateRandomNumber(1, 8);
  const firstNumber = generateRandomNumber(1, 50);
  const progression = generateProgression(firstNumber, stepProgression, hiddenElement, length);
  const question = progression.join(' ');
  const correctAnswer = firstNumber + stepProgression * hiddenElement;
  return [question, String(correctAnswer)];
};
const startProgressionGame = () => gameEngine(findMissingNumber, gameTask);
export default startProgressionGame;
