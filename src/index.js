import readlineSync from 'readline-sync';

const brainGame = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let round = 0; round < 3; round += 1) {
    const resultGame = game();
    const question = resultGame[0];
    const rightAnswer = resultGame[1];
    console.log(`Question: ${question}`);
    const answer = (readlineSync.question('Your answer: '));
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainGame;
