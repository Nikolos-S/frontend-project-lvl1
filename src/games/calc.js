import generatorRandom from '../randomNumber.js';
import engineGame from '../index.js';

const task = 'What is the result of the expression?';

const findResultOperation = () => {
  const num1 = generatorRandom(0, 11);
  const num2 = generatorRandom(0, 11);
  const randomOperator = ['+', '-', '*'];
  const operator = randomOperator[generatorRandom(0, (randomOperator.length))];
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
const startCalcGame = () => engineGame(findResultOperation, task);
export default startCalcGame;
