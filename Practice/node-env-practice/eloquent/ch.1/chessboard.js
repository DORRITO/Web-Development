const size = 8;
let board = "";

for (let i = 1; i < size; i++) {
  for (let j = 1; j < size; j++) {
    (j + i) % 2 === 0 ? (board += " ") : (board += "#");
  }
  board += "\n";
}

console.log(board);
