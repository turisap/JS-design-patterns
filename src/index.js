import guessGame from "./module";

const game = guessGame();

while (true) {
  const randomAge = Math.floor(Math.random() * 50) + 18;
  const guess = game.next(randomAge);
  console.log(guess.value);

  if (guess.done) break;
}
