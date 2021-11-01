const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let Position = [0, 0]; //[(east,west),(north,south)]
  for (const move of moves) {
    switch (move) {
    case "north":
      Position[1] += 1;
      break;
    case "east":
      Position[0] += 1;
      break;
    case "south":
      Position[1] -= 1;
      break;
    case "west":
      Position[0] -= 1;
      break;
    }
  }
  return Position;
};
console.log(finalPosition(moves));