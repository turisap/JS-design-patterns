import { times } from "ramda";

// import guessGame from "./module";

// const game = guessGame();

// while (true) {
//   const randomAge = Math.floor(Math.random() * 50) + 18;
//   const guess = game.next(randomAge);
//   console.log(guess.value);

//   if (guess.done) break;
// }

// import visitorsProcessor from "./revealingModule";

// let users = times(
//   () => ({
//     id: Math.random(),
//     name: "user"
//   }),
//   10
// );

// const anotherUser = { id: 1, name: "me" };

// users = users.concat([anotherUser, anotherUser, anotherUser, anotherUser]);

// visitorsProcessor.process(users);

// const stats = visitorsProcessor.process([
//   { id: 2, name: "Tai" },
//   { id: 3, name: "Gab" }
// ]);

// console.log(stats);

// import UserStore from "./singleton";

// let store = UserStore.getInstance();
// store.logId();

// store = UserStore.getInstance();
// store.logId();

// store.setItem({ id: 1, name: "kirill" });
// store.setItem({ id: 2, name: "andrey" });
// console.log(store.getItem(1));

// import { EventEmmiter, addEventHandler } from "./observer";

// // subscribing

// addEventHandler(EventEmmiter);

// EventEmmiter.start();

// import { Chatroom, Participant, log } from "./mediator";

// const chat = new Chatroom(123);

// const kirill = new Participant("kirill");
// const john = new Participant("john");
// const kate = new Participant("kate");
// const carl = new Participant("carl");

// chat.register(kirill);
// chat.register(john);
// chat.register(kate);
// chat.register(carl);

// chat.send("hey", kirill, kate);
// chat.send("I am new here", carl);
// chat.send("Hey, me to", john, carl);
// chat.send("Do you guys like beer", kate);
// chat.send("I love it!", john);

// console.log(log.size);

// log.forEach(log => console.log(log));

import AuthenticationController from "./command";

const token = AuthenticationController.execute("getAccessToken", 123);

const assessGranted = AuthenticationController.execute(
  "authenticate",
  "sladjf@f34FDF"
);

console.log(token, assessGranted);
AuthenticationController.execute("logout", 234234);
