import generatorRandom from '../randomNumber.js';
import brainGame from '../index.js';

const task = 'What is the result of the expression?';

const findResultOperation = () => {
  const num1 = generatorRandom(0, 11);
  const num2 = generatorRandom(0, 11);
  const randomOperator = ['+', '-', '*'];
  const operator = randomOperator[generatorRandom(0, 3)];
  const question = `${num1} ${operator} ${num2}`;
  let result;
  switch (operator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default:
      return 'Nothing';
  }
  return [question, String(result)];
};
const startCalcGame = () => brainGame(findResultOperation, task);
export default startCalcGame;
