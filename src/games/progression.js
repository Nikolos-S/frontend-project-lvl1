import gameEngine from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const gameTask = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, hidden, lenghtProgression) => {
  const result = [];
  for (let i = 0; i < lenghtProgression; i += 1) {
    if (i !== hidden) {
      result.push(startNumber + step * i);
    } else {
      result.push('..');
    }
  }
  return result;
};
const findMissingNumber = () => {
  const lenght = generateRandomNumber(5, 11);
  const hiddenElement = generateRandomNumber(5, lenght - 1);
  const stepProgression = generateRandomNumber(1, 8);
  const firstNumber = generateRandomNumber(1, 50);
  const progression = generateProgression(firstNumber, stepProgression, hiddenElement, lenght);
  const question = progression.join(' ');
  const correctAnswer = firstNumber + stepProgression * hiddenElement;
  return [question, String(correctAnswer)];
};
const startProgressionGame = () => gameEngine(findMissingNumber, gameTask);
export default startProgressionGame;
