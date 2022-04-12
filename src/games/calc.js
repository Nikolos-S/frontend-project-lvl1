import generateRandomNumber from '../randomNumber.js';
import gameEngine from '../index.js';

const gameTask = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const findResultOperation = () => {
  const num1 = generateRandomNumber(0, 11);
  const num2 = generateRandomNumber(0, 11);
  const randomOperator = operands[generateRandomNumber(0, operands.length)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = String(calculateExpression(num1, num2, randomOperator));
  return [question, correctAnswer];
};
const startCalcGame = () => gameEngine(findResultOperation, gameTask);
export default startCalcGame;
