import readlineSync from 'readline-sync';
import { greetByUsername } from '../src/cli.js';
import { generatorRandom, testCheck, congrats } from '../src/index.js';

greetByUsername();
console.log('What is the result of the expression?');
const resultsСomparer = () => {
  for (let i = 1; i < 4; i += 1) {
    const num1 = generatorRandom(0, 11); // первое число
    const num2 = generatorRandom(0, 11); // второе число
    const randomOperator = ['+', '-', '*']; // массив с рандомными операторами
    const operator = randomOperator[generatorRandom(0, 3)]; // рандомный оператор
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const calculator = (op) => {
      let result;
      switch (op) {
        case '+': result = num1 + num2;
          break;
        case '-': result = num1 - num2;
          break;
        case '*': result = num1 * num2;
          break;
        default:
          return 'Nothing';
      }
      return result;
    };
    const rightAnswer = calculator(operator);
    const isGameOver = testCheck(rightAnswer, answer);
    if (isGameOver === false) {
      return;
    }
  }
  congrats();
};
export default resultsСomparer;
