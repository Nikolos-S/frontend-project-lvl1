import readlineSync from 'readline-sync';

const brainGame = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let round = 0; round < 3; round += 1) {
    const [question, result] = game();
    console.log(`Question: ${question}`);
    const answer = (readlineSync.question('Your answer: '));
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainGame;
