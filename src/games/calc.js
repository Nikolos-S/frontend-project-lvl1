import generatorRandom from '../randomNumber.js';
import engineGame from '../index.js';

const task = 'What is the result of the expression?';
const randomOperator = ['+', '-', '*'];

const getResult = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+': result = number1 + number2;
      break;
    case '-': result = number1 - number2;
      break;
    case '*': result = number1 * number2;
      break;
    default:
  }
  return result;
};

const findResultOperation = () => {
  const num1 = generatorRandom(0, 11);
  const num2 = generatorRandom(0, 11);
  const operatorRandom = randomOperator[generatorRandom(0, (randomOperator.length))];
  const question = `${num1} ${operatorRandom} ${num2}`;
  const rightAnsmer = String(getResult(num1, num2, operatorRandom));
  return [question, rightAnsmer];
};
const startCalcGame = () => engineGame(findResultOperation, task);
export default startCalcGame;
