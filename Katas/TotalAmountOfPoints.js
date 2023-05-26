// Given an array of games, return an integer based on the games:

const points = games => {
  let result = 0;

  for (let game of games) {
    if (game[0] > game[2]) {
      result += 3;
    } else if (game[0] === game[2]) {
      result++;
    } else {
      result;
    }
  }

  return result;

}

// Refactored:

const pointsV2 = games => games.reduce((result, [x, , y]) => result + (x > y ? 3 : x === y), 0);