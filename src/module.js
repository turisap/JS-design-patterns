const guessGame = (function() {
  const _age = Math.floor(Math.random() * 50) + 18;
  let attemptCount = 0;
  let guess = 0;

  const guessMyAge = function*() {
    while (attemptCount <= 5) {
      attemptCount++;

      if (guess === _age)
        return `You are right! the person is ${_age} years old`;

      guess = yield `The person is not that ${guess > _age ? "old" : "young"}!`;
    }

    return `Game over, the person's age is ${_age}`;
  };

  return guessMyAge;
})();

export default guessGame;
