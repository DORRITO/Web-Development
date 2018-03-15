let location2 = 4;
let location3 = 5;
let location1 = 3;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk === false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");
  
  //checks if guess is valid
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses++;
  }

  //did guess hit?
  if (guess == location1) {
    hits = hits + 1;
  } else if (guess == location2) {
    hits = hits + 1;
  } else if (guess == location3) {
    hits = hits + 1;
  }
}
