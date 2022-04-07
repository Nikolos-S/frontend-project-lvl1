import engineGame from '../index.js';
import generatorRandom from '../randomNumber.js';

const task = 'What number is missing in the progression?';
const findMissingNumber = () => {
  const arr = [];
  const step = generatorRandom(1, 8);
  const startNumber = generatorRandom(1, 50);
  for (let i = startNumber; i < (startNumber + step * 10); i += step) {
    arr.push(i);
  }
  const index = generatorRandom(0, 10);
  arr[index] = '..';
  const question = `${arr.join(' ')}`;
  const result = startNumber + step * index;
  return [question, String(result)];
};
const startProgressionGame = () => engineGame(findMissingNumber, task);
export default startProgressionGame;
