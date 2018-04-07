// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
  rev = '';
  for (let i of n.toString()){
    rev = i + rev;
  }
  console.log(rev)
  return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;
