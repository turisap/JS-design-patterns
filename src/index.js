import { times } from "ramda";

// import guessGame from "./module";

// const game = guessGame();

// while (true) {
//   const randomAge = Math.floor(Math.random() * 50) + 18;
//   const guess = game.next(randomAge);
//   console.log(guess.value);

//   if (guess.done) break;
// }

import visitorsProcessor from "./revealingModule";

let users = times(
  () => ({
    id: Math.random(),
    name: "user"
  }),
  10
);

const anotherUser = { id: 1, name: "me" };

users = users.concat([anotherUser, anotherUser, anotherUser, anotherUser]);

visitorsProcessor.process(users);

const stats = visitorsProcessor.process([
  { id: 2, name: "Tai" },
  { id: 3, name: "Gab" }
]);

console.log(stats);
