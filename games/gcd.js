import readlineSync from 'readline-sync';
import { name, greetByUsername } from '../src/cli.js';
import generatorRandom from '../src/index.js';

greetByUsername();
console.log('Find the greatest common divisor of given numbers.');
const findCommonDivisor = () => {
  for (let time = 1; time < 4; time += 1) {
    const num1 = generatorRandom(2, 26); // первое число
    const num2 = generatorRandom(2, 26); // второе число
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const lookingForLess = (number1, number2) => {
      let divisor = number1;
      if (number2 < divisor) {
        divisor = number2;
      }
      return divisor;
    };
    const findDivisors = (number) => {
      const result = [];
      for (let i = 1; i <= lookingForLess(num1, num2); i += 1) {
        if (number % i === 0) {
          result.push(i);
        }
      }
      return result;
    };
    const arrayOfDivisors1 = findDivisors(num1);
    const arrayOfDivisors2 = findDivisors(num2);
    const resultMas = [];
    for (let indexMas1 = 0; indexMas1 < arrayOfDivisors1.length; indexMas1 += 1) {
      for (let indexMas2 = 0; indexMas2 < arrayOfDivisors2.length; indexMas2 += 1) {
        if (arrayOfDivisors1[indexMas1] === arrayOfDivisors2[indexMas2]) {
          resultMas.push(arrayOfDivisors1[indexMas1]);
        }
      }
    }
    const rightAnswer = resultMas[resultMas.length - 1];
    if (rightAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default findCommonDivisor;
